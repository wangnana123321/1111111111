#!/usr/bin/env node
/**
 * 生成分享图 public/og-default.png（1200×630）和 public/apple-touch-icon.png（180×180）。
 * 修改站点名称后可重新运行：node scripts/generate-images.mjs
 * 依赖 Playwright（npx playwright install chromium）。
 */
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

// 用 require 加载，便于通过 NODE_PATH 使用全局安装的 Playwright
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const siteTs = await readFile(new URL('../src/config/site.ts', import.meta.url), 'utf8');
const pick = (key, fallback) => siteTs.match(new RegExp(`${key}:\\s*'([^']+)'`))?.[1] ?? fallback;
const name = pick('name', '预测市场指南');
const tagline = pick('tagline', 'Polymarket 中文新手教程 · 入金攻略 · 交易所返佣');

const mark = `<svg viewBox="0 0 32 32" width="100%" height="100%"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b6cff"/><stop offset="1" stop-color="#1a3fb8"/></linearGradient></defs><rect width="32" height="32" rx="8" fill="url(#g)"/><rect x="7" y="17" width="4.5" height="8" rx="1.5" fill="#fff" opacity=".55"/><rect x="13.75" y="12" width="4.5" height="13" rx="1.5" fill="#fff" opacity=".8"/><rect x="20.5" y="7" width="4.5" height="18" rx="1.5" fill="#f5b30b"/></svg>`;

const font = `'PingFang SC','Noto Sans SC','Microsoft YaHei','WenQuanYi Zen Hei',sans-serif`;

const og = `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;font-family:${font};color:#fff;
background:radial-gradient(900px 500px at 100% 0%,rgba(245,179,11,.25),transparent 60%),radial-gradient(900px 600px at 0% 100%,rgba(59,108,255,.45),transparent 60%),#0b1020;
display:flex;align-items:center;padding:0 80px;gap:60px}
.l{flex:1}.brand{display:flex;align-items:center;gap:18px;font-size:34px;font-weight:800;margin-bottom:36px}
.brand .m{width:64px;height:64px}h1{font-size:56px;line-height:1.25;margin:0 0 24px;font-weight:800}
h1 em{font-style:normal;color:#f5b30b}p{font-size:28px;color:#c5cde0;margin:0}
.card{width:360px;background:#121a30;border:1px solid #2a3557;border-radius:24px;padding:32px;box-shadow:0 20px 60px rgba(0,0,0,.4)}
.q{font-size:24px;font-weight:700;margin-bottom:24px;line-height:1.4}.row{display:flex;justify-content:space-between;font-size:24px;margin:14px 0 8px}
.bar{height:14px;border-radius:99px;background:#232d47;overflow:hidden}.bar i{display:block;height:100%}
</style></head><body><div class="l"><div class="brand"><span class="m">${mark}</span>${name}</div>
<h1>Polymarket <em>中文</em>新手指南</h1><p>${tagline}</p></div>
<div class="card"><div class="q">价格 = 概率<br>猜对每份拿回 $1</div>
<div class="row"><span>是 Yes</span><b style="color:#3ccf7f">65%</b></div><div class="bar"><i style="width:65%;background:#3ccf7f"></i></div>
<div class="row"><span>否 No</span><b style="color:#ff6b61">35%</b></div><div class="bar"><i style="width:35%;background:#ff6b61"></i></div></div>
</body></html>`;

const icon = `<!doctype html><html><head><style>body{margin:0;width:180px;height:180px;background:#1a3fb8}</style></head><body>${mark.replace('rx="8"', 'rx="0"')}</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(og, { waitUntil: 'load' });
await page.screenshot({ path: 'public/og-default.png' });
await page.setViewportSize({ width: 180, height: 180 });
await page.setContent(icon, { waitUntil: 'load' });
await page.screenshot({ path: 'public/apple-touch-icon.png' });
await browser.close();
console.log('✅ 已生成 public/og-default.png 和 public/apple-touch-icon.png');
