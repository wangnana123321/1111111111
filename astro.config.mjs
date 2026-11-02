// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { writeFile } from 'node:fs/promises';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { SITE, isPlaceholderDomain } from './src/config/site.ts';
import { AFFILIATES } from './src/config/affiliates.ts';
import { resolveGoTarget } from './src/data/exchanges.ts';

/**
 * 读取文章 frontmatter 里的 publishDate / updatedDate，作为 sitemap 的 lastmod
 * @returns {Map<string, string>} 路径 → ISO 日期
 */
function articleLastmod() {
  const map = new Map();
  const base = fileURLToPath(new URL('./src/content/articles/', import.meta.url));
  /** @param {string} dir */
  const walk = (dir) => {
    let entries = [];
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    for (const name of entries) {
      const full = path.join(dir, name);
      if (statSync(full).isDirectory()) walk(full);
      else if (/\.mdx?$/.test(name)) {
        const fm = readFileSync(full, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!fm) continue;
        const pick = (/** @type {string} */ key) =>
          fm[1].match(new RegExp(`^${key}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})`, 'm'))?.[1];
        const date = pick('updatedDate') ?? pick('publishDate');
        if (!date) continue;
        const rel = path.relative(base, full).replace(/\\/g, '/').replace(/\.mdx?$/, '');
        map.set(`/${rel}/`, new Date(`${date}T00:00:00Z`).toISOString());
      }
    }
  };
  walk(base);
  return map;
}
const LASTMOD = articleLastmod();

/**
 * 构建结束后：
 * 1. 生成 Cloudflare Pages 的 _redirects（/go/xxx → 邀请链接，302 服务端跳转）
 * 2. 提示尚未配置的邀请链接和域名
 */
function affiliateRedirects() {
  return {
    name: 'affiliate-redirects',
    hooks: {
      /** @param {{ dir: URL, logger: any }} opts */
      'astro:build:done': async ({ dir, logger }) => {
        const ids = /** @type {(keyof typeof AFFILIATES)[]} */ (Object.keys(AFFILIATES));
        const lines = ids.flatMap((id) => {
          const target = resolveGoTarget(id);
          return [`/go/${id} ${target} 302`, `/go/${id}/ ${target} 302`];
        });
        const outDir = fileURLToPath(dir);
        await writeFile(path.join(outDir, '_redirects'), lines.join('\n') + '\n', 'utf8');

        const missing = ids.filter((id) => !AFFILIATES[id].inviteUrl);
        if (missing.length) {
          logger.warn(
            `以下推广链接尚未配置（暂时跳转官网首页）：${missing.join(', ')}。请编辑 src/config/affiliates.ts`,
          );
        }
        if (isPlaceholderDomain) {
          logger.warn('站点域名仍是占位的 example.com：请修改 src/config/site.ts 的 url，或设置环境变量 SITE_URL');
        }
      },
    },
  };
}

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/go/') && !page.endsWith('/404/'),
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const lastmod = LASTMOD.get(pathname);
        if (lastmod) item.lastmod = lastmod;
        item.changefreq = /** @type {any} */ (pathname === '/' || pathname === '/markets/' ? 'daily' : 'weekly');
        return item;
      },
    }),
    affiliateRedirects(),
  ],
  markdown: {
    smartypants: false,
  },
});
