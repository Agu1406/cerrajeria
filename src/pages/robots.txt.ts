import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = async () => {
  const host = siteConfig.isProductionSeo ? new URL(siteConfig.baseUrl).host : 'example.com';
  const sitemapBase = siteConfig.isProductionSeo ? siteConfig.baseUrl : 'https://example.com';

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapBase}/sitemap.xml`,
    `Host: ${host}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

