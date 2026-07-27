import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { servicios } from '../data/servicios';
import { getCollection } from 'astro:content';
import { isSurBarrioIndexable } from '../seo/priority-barrios';

type SitemapEntry = {
  path: string;
  lastmod: string;
  priority: string;
  changefreq: string;
};

export const GET: APIRoute = async () => {
  const baseUrl = siteConfig.isProductionSeo
    ? siteConfig.baseUrl.replace(/\/$/, '')
    : 'https://example.com';

  const today = new Date().toISOString().split('T')[0];
  const toDate = (d: Date | undefined) => (d ? d.toISOString().split('T')[0] : today);

  const barrios = await getCollection('barrios');
  const duplicadoBarrios = await getCollection('duplicado-llaves-coche-barrios');
  const antiokupasBarrios = await getCollection('puertas-antiokupas-barrios');
  const blogPosts = await getCollection(
    'blog',
    ({ data, slug }) => !data.draft && slug !== 'medir-visitas-web-google-tag-manager-ga4'
  );

  const staticPaths: SitemapEntry[] = [
    { path: '/', lastmod: today, priority: '1.0', changefreq: 'weekly' },
    { path: '/en', lastmod: today, priority: '0.9', changefreq: 'weekly' },
    { path: '/servicios', lastmod: today, priority: '0.8', changefreq: 'weekly' },
    ...servicios
      .filter((s) => s.slug !== 'duplicado-llaves-coche' && s.slug !== 'puertas-antiokupas')
      .map((s) => ({
        path: `/servicios/${s.slug}`,
        lastmod: today,
        priority: '0.8',
        changefreq: 'weekly',
      })),
    { path: '/duplicado-llaves-coche', lastmod: today, priority: '0.7', changefreq: 'weekly' },
    { path: '/puertas-antiokupas', lastmod: today, priority: '0.7', changefreq: 'weekly' },
    { path: '/cerrajero-urgente-24h', lastmod: today, priority: '0.9', changefreq: 'weekly' },
    { path: '/blog', lastmod: today, priority: '0.7', changefreq: 'weekly' },
    { path: '/contacto', lastmod: today, priority: '0.6', changefreq: 'monthly' },
    { path: '/aviso-legal', lastmod: today, priority: '0.3', changefreq: 'yearly' },
    { path: '/politica-privacidad', lastmod: today, priority: '0.3', changefreq: 'yearly' },
    { path: '/politica-cookies', lastmod: today, priority: '0.3', changefreq: 'yearly' },
  ];

  const barrioPaths: SitemapEntry[] = barrios
    .filter((entry) => isSurBarrioIndexable(entry.slug))
    .map((entry) => ({
      path: `/cerrajero-urgente-24h/${entry.slug}`,
      lastmod: toDate(entry.data.actualizado),
      priority: entry.slug === 'getafe' ? '0.9' : '0.8',
      changefreq: 'weekly',
    }));

  const duplicadoPaths: SitemapEntry[] = duplicadoBarrios
    .filter((entry) => isSurBarrioIndexable(entry.slug))
    .map((entry) => ({
      path: `/duplicado-llaves-coche/${entry.slug}`,
      lastmod: today,
      priority: '0.6',
      changefreq: 'monthly',
    }));

  const antiokupasPaths: SitemapEntry[] = antiokupasBarrios
    .filter((entry) => isSurBarrioIndexable(entry.slug))
    .map((entry) => ({
      path: `/puertas-antiokupas/${entry.slug}`,
      lastmod: today,
      priority: '0.6',
      changefreq: 'monthly',
    }));

  const blogPaths: SitemapEntry[] = blogPosts.map((entry) => ({
    path: `/blog/${entry.slug}`,
    lastmod: toDate(entry.data.pubDate),
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const urls = [...staticPaths, ...barrioPaths, ...duplicadoPaths, ...antiokupasPaths, ...blogPaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${baseUrl}${u.path}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
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
