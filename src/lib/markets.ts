/**
 * 构建时拉取 Polymarket 热门市场（Gamma API）。
 * - 部署平台（Cloudflare Pages / GitHub Actions）构建时可联网，会拿到实时数据；
 * - 拉取失败时返回空数组，页面显示空状态，并在浏览器端再尝试一次。
 * - 定时重新构建（见 .github/workflows/deploy.yml）即可保持数据新鲜。
 */
import { API_EVENTS_URL, parseEvents, type HotMarket } from './markets-parse';

export interface MarketsSnapshot {
  markets: HotMarket[];
  fetchedAt: Date | null;
  error?: string;
}

let pending: Promise<MarketsSnapshot> | null = null;

async function load(): Promise<MarketsSnapshot> {
  // 本地调试：MARKETS_FIXTURE=/path/to/events.json 使用本地 JSON（结构同 Gamma API /events 返回）
  if (process.env.MARKETS_FIXTURE) {
    const { readFile } = await import('node:fs/promises');
    const json = JSON.parse(await readFile(process.env.MARKETS_FIXTURE, 'utf8'));
    return { markets: parseEvents(json), fetchedAt: new Date() };
  }
  if (process.env.SKIP_MARKETS_FETCH === '1') {
    return { markets: [], fetchedAt: null, error: 'skipped' };
  }
  try {
    const res = await fetch(API_EVENTS_URL, {
      headers: { accept: 'application/json', 'user-agent': 'prediction-guide-site/1.0 (+static build)' },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const markets = parseEvents(json);
    console.log(`[markets] 获取 Polymarket 热门市场 ${markets.length} 个`);
    return { markets, fetchedAt: new Date() };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn(`[markets] 拉取 Polymarket 数据失败（${message}），热门市场将显示为空状态。`);
    return { markets: [], fetchedAt: null, error: message };
  }
}

export function getHotMarkets(): Promise<MarketsSnapshot> {
  if (!pending) pending = load();
  return pending;
}
