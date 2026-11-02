import { SITE } from '../config/site';

const abs = (path: string) => new URL(path, SITE.url + '/').href;

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': abs('/#organization'),
    name: SITE.name,
    alternateName: SITE.englishName,
    url: abs('/'),
    logo: abs('/apple-touch-icon.png'),
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs('/#website'),
    name: SITE.name,
    alternateName: SITE.englishName,
    url: abs('/'),
    inLanguage: SITE.lang,
    publisher: { '@id': abs('/#organization') },
  };
}

export function breadcrumbLd(items: { name: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: abs(item.href) } : {}),
    })),
  };
}

export function articleLd(opts: {
  title: string;
  description: string;
  path: string;
  published: Date;
  modified?: Date;
  keywords?: string[];
  section?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(opts.path) },
    url: abs(opts.path),
    datePublished: opts.published.toISOString(),
    dateModified: (opts.modified ?? opts.published).toISOString(),
    inLanguage: SITE.lang,
    image: abs(SITE.ogImage),
    keywords: opts.keywords?.join(', '),
    articleSection: opts.section,
    author: { '@type': 'Organization', name: `${SITE.name}编辑部`, url: abs('/about/') },
    publisher: { '@id': abs('/#organization') },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function webAppLd(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    inLanguage: SITE.lang,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@id': abs('/#organization') },
  };
}

export function collectionLd(opts: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    inLanguage: SITE.lang,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: opts.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: abs(item.path),
      })),
    },
  };
}
