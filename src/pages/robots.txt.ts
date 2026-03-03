import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = async () => {
  const host =
    siteConfig.baseUrl !== 'https://TU-DOMINIO-AQUI'
      ? new URL(siteConfig.baseUrl).host
      : 'example.com';

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteConfig.baseUrl !== 'https://TU-DOMINIO-AQUI' ? siteConfig.baseUrl : 'https://example.com'}/sitemap.xml`,
    `Host: ${host}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

