/**
 * Polymarket Gamma API 数据解析（构建时与浏览器端共用，不依赖 Node API）
 * 文档：https://docs.polymarket.com （Gamma Markets API）
 */

export interface HotOutcome {
  label: string;
  /** 0–1 之间的价格 = 市场隐含概率 */
  price: number;
}

export interface HotMarket {
  id: string;
  title: string;
  slug: string;
  url: string;
  image?: string;
  volume24h: number;
  volume: number;
  endDate?: string;
  categoryKey: CategoryKey;
  outcomes: HotOutcome[];
  binary: boolean;
}

export type CategoryKey =
  | 'politics'
  | 'world'
  | 'crypto'
  | 'sports'
  | 'finance'
  | 'tech'
  | 'culture'
  | 'other';

export const MARKET_CATEGORY_LABELS: Record<CategoryKey, string> = {
  politics: '政治选举',
  world: '国际局势',
  crypto: '加密货币',
  sports: '体育',
  finance: '财经',
  tech: '科技',
  culture: '文化娱乐',
  other: '其他',
};

// 按优先级匹配事件标签（slug / label），使用单词边界避免误判（如 ukraine 里的 "ai"）
const TAG_RULES: [CategoryKey, RegExp][] = [
  ['sports', /\b(sports?|nba|nfl|mlb|nhl|soccer|football|epl|premier-league|champions-league|ucl|tennis|ufc|mma|boxing|f1|formula-1|golf|cricket|esports|olympics?|world-cup|fifa|ncaa|basketball|baseball|hockey)\b/i],
  ['crypto', /\b(crypto|cryptocurrency|bitcoin|ethereum|solana|btc|eth|xrp|memecoins?|airdrops?|stablecoins?|crypto-prices)\b/i],
  ['politics', /\b(politics|elections?|us-election|trump|president(ial)?|senate|congress|governor|primar(y|ies)|mayor|parliament|prime-minister|midterms?)\b/i],
  ['world', /\b(geopolitics|world|war|ukraine|russia|israel|iran|china|middle-east|gaza|nato|ceasefire|venezuela|taiwan)\b/i],
  ['finance', /\b(finance|economy|economics|fed|interest-rates?|inflation|stocks?|business|earnings|ipos?|recession|gdp|tariffs?|commodities|gold|oil)\b/i],
  ['tech', /\b(tech|technology|ai|openai|chatgpt|apple|google|elon-musk|musk|tesla|spacex|science|nvidia|space)\b/i],
  ['culture', /\b(culture|pop-culture|movies?|music|awards?|oscars?|grammys?|celebrit(y|ies)|entertainment|tv|youtube|tweets?|mentions?|box-office)\b/i],
];

export const API_EVENTS_URL =
  'https://gamma-api.polymarket.com/events?active=true&closed=false&archived=false&order=volume24hr&ascending=false&limit=60';

function num(value: unknown): number {
  const n = typeof value === 'string' ? parseFloat(value) : typeof value === 'number' ? value : NaN;
  return Number.isFinite(n) ? n : 0;
}

/** outcomes / outcomePrices 在 API 里常是 JSON 字符串，如 "[\"Yes\",\"No\"]" */
function list(value: unknown): unknown[] {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function zhOutcome(label: string): string {
  const l = label.trim().toLowerCase();
  if (l === 'yes') return '是';
  if (l === 'no') return '否';
  if (l === 'up') return '涨';
  if (l === 'down') return '跌';
  if (l === 'over') return '大于';
  if (l === 'under') return '小于';
  return label;
}

function pickCategory(tags: unknown): CategoryKey {
  const labels = list(tags)
    .map((t) => {
      if (t && typeof t === 'object') {
        const o = t as Record<string, unknown>;
        return `${o.slug ?? ''} ${o.label ?? ''}`;
      }
      return String(t ?? '');
    })
    .join(' | ');
  for (const [key, re] of TAG_RULES) if (re.test(labels)) return key;
  return 'other';
}

/** 从 Polymarket 邀请链接里取出查询参数，附加到每个市场链接上 */
export function refQueryFrom(inviteUrl: string): string {
  if (!inviteUrl) return '';
  try {
    const u = new URL(inviteUrl);
    return u.search.length > 1 ? u.search : '';
  } catch {
    return '';
  }
}

export function parseEvents(raw: unknown, refQuery = '', limit = 40): HotMarket[] {
  const events = Array.isArray(raw) ? raw : [];
  const out: HotMarket[] = [];
  for (const item of events) {
    if (!item || typeof item !== 'object') continue;
    const ev = item as Record<string, unknown>;
    if (ev.closed === true || ev.archived === true) continue;
    const slug = String(ev.slug ?? '');
    const title = String(ev.title ?? '');
    if (!slug || !title) continue;

    const markets = list(ev.markets).filter((m) => {
      if (!m || typeof m !== 'object') return false;
      const mm = m as Record<string, unknown>;
      return mm.closed !== true && mm.active !== false;
    }) as Record<string, unknown>[];
    if (markets.length === 0) continue;

    let outcomes: HotOutcome[] = [];
    let binary = false;
    if (markets.length === 1) {
      const m = markets[0];
      const labels = list(m.outcomes).map(String);
      const prices = list(m.outcomePrices).map(num);
      outcomes = labels.map((label, i) => ({ label: zhOutcome(label), price: prices[i] ?? 0 }));
      binary = labels.length === 2;
    } else {
      outcomes = markets
        .map((m) => {
          const prices = list(m.outcomePrices).map(num);
          const label = String(m.groupItemTitle || m.question || '').trim();
          return { label, price: prices[0] ?? 0 };
        })
        .filter((o) => o.label && o.price > 0)
        .sort((a, b) => b.price - a.price);
    }
    outcomes = outcomes.filter((o) => Number.isFinite(o.price)).slice(0, binary ? 2 : 3);
    if (outcomes.length === 0) continue;

    out.push({
      id: String(ev.id ?? slug),
      title,
      slug,
      url: `https://polymarket.com/event/${encodeURIComponent(slug)}${refQuery}`,
      image: typeof ev.icon === 'string' ? ev.icon : typeof ev.image === 'string' ? ev.image : undefined,
      volume24h: num(ev.volume24hr),
      volume: num(ev.volume),
      endDate: typeof ev.endDate === 'string' ? ev.endDate : undefined,
      categoryKey: pickCategory(ev.tags),
      outcomes,
      binary,
    });
    if (out.length >= limit) break;
  }
  return out;
}

export function pct(price: number): string {
  const p = price * 100;
  if (p > 0 && p < 1) return '<1%';
  if (p > 99 && p < 100) return '>99%';
  return `${Math.round(p)}%`;
}
