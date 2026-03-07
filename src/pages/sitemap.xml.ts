import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { servicios } from '../data/servicios';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const baseUrl =
    siteConfig.baseUrl !== 'https://TU-DOMINIO-AQUI'
      ? siteConfig.baseUrl.replace(/\/$/, '')
      : 'https://example.com';

  const barrios = await getCollection('barrios');
  const duplicadoBarrios = await getCollection('duplicado-llaves-coche-barrios');
  const antiokupasBarrios = await getCollection('puertas-antiokupas-barrios');
  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);

  const urls = [
    '/',
    '/servicios',
    ...servicios
      .filter((s) => s.slug !== 'duplicado-llaves-coche' && s.slug !== 'puertas-antiokupas')
      .map((s) => `/servicios/${s.slug}`),
    '/duplicado-llaves-coche',
    '/puertas-antiokupas',
    '/cerrajero-urgente-24h',
    '/blog',
    '/contacto',
    '/aviso-legal',
    '/politica-privacidad',
    '/politica-cookies',
    '/diseno-web',
    ...barrios.map((entry) => `/cerrajero-urgente-24h/${entry.slug}`),
    ...duplicadoBarrios.map((entry) => `/duplicado-llaves-coche/${entry.slug}`),
    ...antiokupasBarrios.map((entry) => `/puertas-antiokupas/${entry.slug}`),
    ...blogPosts.map((entry) => `/blog/${entry.slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>daily</changefreq>
    <priority>${path === '/' ? '1.0' : /^\/(aviso-legal|politica-privacidad|politica-cookies|diseno-web)$/.test(path) ? '0.3' : path.startsWith('/blog/') ? '0.7' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};


