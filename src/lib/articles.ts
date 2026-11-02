import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORY_MAP, isCategoryId, type CategoryId } from '../data/categories';

export type Article = CollectionEntry<'articles'>;

export function articleCategory(entry: Article): CategoryId {
  const cat = entry.id.split('/')[0];
  if (!isCategoryId(cat)) {
    throw new Error(
      `文章 ${entry.id} 不在有效栏目目录下（应为 polymarket / deposit / exchange / strategy）`,
    );
  }
  return cat;
}

export function articleSlug(entry: Article): string {
  return entry.id.split('/').slice(1).join('/');
}

export function articleUrl(entry: Article): string {
  return `/${articleCategory(entry)}/${articleSlug(entry)}/`;
}

export function articleDate(entry: Article): Date {
  return entry.data.updatedDate ?? entry.data.publishDate;
}

let cache: Article[] | null = null;

/** 所有已发布文章，按栏目内 order、再按更新时间排序 */
export async function getArticles(): Promise<Article[]> {
  if (cache) return cache;
  const all = await getCollection('articles', ({ data }) => !data.draft);
  all.forEach(articleCategory); // 校验目录
  cache = all.sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return articleDate(b).getTime() - articleDate(a).getTime();
  });
  return cache;
}

export async function getArticlesByCategory(cat: CategoryId): Promise<Article[]> {
  return (await getArticles()).filter((a) => articleCategory(a) === cat);
}

export async function getLatestArticles(limit = 6): Promise<Article[]> {
  return [...(await getArticles())]
    .sort((a, b) => articleDate(b).getTime() - articleDate(a).getTime())
    .slice(0, limit);
}

/** 相关文章：同栏目优先，其次关键词重合 */
export async function getRelated(entry: Article, limit = 4): Promise<Article[]> {
  const all = (await getArticles()).filter((a) => a.id !== entry.id);
  const cat = articleCategory(entry);
  const kw = new Set(entry.data.keywords.map((k) => k.toLowerCase()));
  const score = (a: Article) => {
    let s = articleCategory(a) === cat ? 10 : 0;
    for (const k of a.data.keywords) if (kw.has(k.toLowerCase())) s += 3;
    return s - a.data.order / 1000;
  };
  return all.sort((a, b) => score(b) - score(a)).slice(0, limit);
}

export function categoryName(cat: CategoryId): string {
  return CATEGORY_MAP[cat].name;
}

/** 中文阅读时长：按 400 字/分钟估算 */
export function readingMinutes(body: string | undefined): number {
  if (!body) return 1;
  const text = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\{[^}]*\}/g, '');
  const cjk = (text.match(/[一-鿿]/g) || []).length;
  const words = (text.replace(/[一-鿿]/g, ' ').match(/[A-Za-z0-9]+/g) || []).length;
  return Math.max(1, Math.round(cjk / 400 + words / 200));
}
