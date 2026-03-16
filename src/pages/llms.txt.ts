import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

/**
 * llms.txt: archivo opcional para crawlers de LLMs (auditorías SEO, accesibilidad para IA).
 * Ver https://llmstxt.org/ o convenciones emergentes.
 */
export const GET: APIRoute = async () => {
  const baseUrl = siteConfig.baseUrl.replace(/\/$/, '');
  const body = [
    `# ${siteConfig.nombreComercial}`,
    '',
    `Sitio web oficial. Cerrajero urgente 24 horas en ${siteConfig.ciudadPrincipal} y Comunidad de Madrid.`,
    `Servicios: apertura de puertas, cambio de cerraduras y bombines, duplicado de llaves, puertas antiokupas.`,
    '',
    `URL: ${baseUrl}`,
    `Contacto: ${siteConfig.telefono}`,
    '',
    '> Descripción para uso por asistentes y motores de búsqueda basados en IA.',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
