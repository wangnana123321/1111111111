#!/usr/bin/env node
/**
 * 构建后检查站内链接：扫描 dist/ 下所有 HTML，确认每个站内 href 都有对应页面。
 * 用法：npm run check:links（npm run build 会自动执行）
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve('dist');

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function resolveTarget(urlPath) {
  const clean = decodeURIComponent(urlPath.split('#')[0].split('?')[0]);
  if (!clean || clean === '/') return exists(path.join(DIST, 'index.html'));
  const target = path.join(DIST, clean);
  if (await exists(path.join(target, 'index.html'))) return true;
  if (await exists(target) && (await stat(target)).isFile()) return true;
  if (await exists(target + '.html')) return true;
  return false;
}

const files = await walk(DIST);
const broken = new Map();
const hrefRe = /\s(?:href|src)="([^"]+)"/g;
let checked = 0;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const page = '/' + path.relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');
  for (const match of html.matchAll(hrefRe)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    if (href.startsWith('/_astro/')) continue;
    checked++;
    if (!(await resolveTarget(href))) {
      if (!broken.has(href)) broken.set(href, new Set());
      broken.get(href).add(page);
    }
  }
}

if (broken.size) {
  console.error(`\n❌ 发现 ${broken.size} 个失效的站内链接：`);
  for (const [href, pages] of broken) {
    console.error(`  ${href}\n      出现在：${[...pages].slice(0, 5).join(', ')}${pages.size > 5 ? ' …' : ''}`);
  }
  process.exit(1);
} else {
  console.log(`✅ 站内链接检查通过（${files.length} 个页面，${checked} 个链接）`);
}
