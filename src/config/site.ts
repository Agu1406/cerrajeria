/**
 * Fachada de compatibilidad. Fuente de verdad: `src/lib/data.ts` + `src/data/legal.json`.
 * CONTEXT.md describe el negocio; no duplicar precios ni titular aquí.
 */
export { siteData as siteConfig, MEDIA, LEGAL, assertSiteLegal } from '../lib/data';
