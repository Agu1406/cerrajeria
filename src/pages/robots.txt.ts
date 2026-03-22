import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = async () => {
  const sitemapBase = siteConfig.isProductionSeo ? siteConfig.baseUrl : 'https://example.com';

  /** Sin directiva `Host:` (solo la usaba Yandex); Bing Webmaster la marca como error y no aporta en Google/Bing. */
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapBase}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

