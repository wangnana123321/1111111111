/**
 * 浏览器端：尝试从 Gamma API 拉取最新数据并重新渲染（失败则保留构建时数据）
 */
import { API_EVENTS_URL, MARKET_CATEGORY_LABELS, parseEvents, pct, type HotMarket } from './markets-parse';

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

function usd(v: number): string {
  if (v >= 1e9) return `$${(v / 1e9).toFixed(2)}B`;
  if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`;
  if (v >= 1e3) return `$${(v / 1e3).toFixed(0)}K`;
  return `$${v.toFixed(0)}`;
}

export function renderMarket(m: HotMarket): string {
  const outcomes = m.outcomes
    .map(
      (o, i) => `<div class="outcome"><span class="label">${esc(o.label)}</span><span class="pct">${pct(o.price)}</span><div class="bar${
        m.binary && i === 0 ? ' yes' : ''
      }"><i style="width:${Math.max(1, Math.min(100, o.price * 100)).toFixed(1)}%"></i></div></div>`,
    )
    .join('');
  const end = m.endDate ? `<span>截止 ${esc(m.endDate.slice(0, 10))}</span>` : '';
  const img = m.image
    ? `<img class="icon" src="${esc(m.image)}" alt="" width="40" height="40" loading="lazy" decoding="async" referrerpolicy="no-referrer">`
    : '';
  const url = esc(m.url);
  return `<article class="card market" data-cat="${m.categoryKey}"><div class="head">${img}<h3 class="title"><a href="${url}" target="_blank" rel="sponsored nofollow noopener" data-cta="market">${esc(
    m.title,
  )}</a></h3></div><div class="outcomes">${outcomes}</div><div class="foot"><span class="chip">${
    MARKET_CATEGORY_LABELS[m.categoryKey]
  }</span><span>24h 成交 ${usd(m.volume24h)}</span>${end}<a href="${url}" target="_blank" rel="sponsored nofollow noopener" data-cta="market">去看看 →</a></div></article>`;
}

export async function fetchLive(refQuery: string, limit: number): Promise<HotMarket[] | null> {
  try {
    const res = await fetch(API_EVENTS_URL, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const list = parseEvents(await res.json(), refQuery, limit);
    return list.length ? list : null;
  } catch {
    return null;
  }
}
