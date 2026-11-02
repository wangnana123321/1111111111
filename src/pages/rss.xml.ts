import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../config/site';
import { articleDate, articleUrl, getArticles } from '../lib/articles';

export async function GET(context: APIContext) {
  const articles = await getArticles();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: [...articles]
      .sort((a, b) => articleDate(b).getTime() - articleDate(a).getTime())
      .map((a) => ({
        title: a.data.title,
        description: a.data.description,
        pubDate: articleDate(a),
        link: articleUrl(a),
      })),
    customData: `<language>zh-cn</language>`,
  });
}
