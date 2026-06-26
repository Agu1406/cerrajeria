/** Zonas con más impresiones en GSC y base operativa en el sur de Madrid. */
export const PRIORITY_BARRIO_SLUGS = [
  'getafe',
  'villaverde',
  'valdemoro',
  'fuenlabrada',
  'parla',
  'leganes',
  'pinto',
  'mostoles',
  'carabanchel',
  'puente-de-vallecas',
] as const;

export type PriorityBarrioSlug = (typeof PRIORITY_BARRIO_SLUGS)[number];

const surBarrioSlugs = new Set<string>(PRIORITY_BARRIO_SLUGS);

/** Landings de barrio indexables en SEO: sur de Madrid (cerrajero 24h, duplicado coche, antiokupas). */
export function isSurBarrioIndexable(slug: string): boolean {
  return surBarrioSlugs.has(slug);
}

type BarrioEntry = { slug: string };

const priorityIndex = new Map(PRIORITY_BARRIO_SLUGS.map((slug, i) => [slug, i]));

/** Ordena barrios: prioritarios primero (sur Madrid), resto alfabético por nombre. */
export function sortBarriosByPriority<T extends BarrioEntry & { data: { nombre: string } }>(
  entries: T[]
): T[] {
  return [...entries].sort((a, b) => {
    const pa = priorityIndex.get(a.slug as PriorityBarrioSlug) ?? 999;
    const pb = priorityIndex.get(b.slug as PriorityBarrioSlug) ?? 999;
    if (pa !== pb) return pa - pb;
    return a.data.nombre.localeCompare(b.data.nombre, 'es');
  });
}
