import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const exchangeIds = ['binance', 'okx', 'bitget', 'gate', 'bybit'] as const;

/**
 * 文章放在 src/content/articles/<栏目>/<slug>.mdx
 * 栏目 = polymarket | deposit | exchange | strategy
 * 访问地址 = /<栏目>/<slug>/
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    /** 页面 H1 */
    title: z.string().min(4),
    /** <title> 标签（可选，默认用 title），建议 ≤ 32 个汉字，关键词靠前 */
    seoTitle: z.string().optional(),
    /** meta description，建议 70–120 个汉字 */
    description: z.string().min(30).max(200),
    /** 目标关键词（第一个为主关键词） */
    keywords: z.array(z.string()).default([]),
    /** 文章开头“要点速览”，3–5 条 */
    tldr: z.array(z.string()).default([]),
    /** 文末 FAQ，同时输出 FAQPage 结构化数据 */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** 侧边栏 / 文末主推的交易所 */
    featuredExchanges: z.array(z.enum(exchangeIds)).default(['binance', 'okx', 'bitget']),
    /** 栏目页排序，越小越靠前 */
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
