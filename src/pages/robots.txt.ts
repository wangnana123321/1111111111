import { SITE } from '../config/site';

export function GET() {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /go/',
    '',
    `Sitemap: ${SITE.url}/sitemap-index.xml`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
