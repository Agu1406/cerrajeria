import { siteConfig } from '../config/site';
import { PRIORITY_BARRIO_SLUGS, type PriorityBarrioSlug } from '../seo/priority-barrios';

export type SurBarrioZona = {
  slug: PriorityBarrioSlug;
  nombre: string;
  llegada: string;
  barrios: readonly string[];
  enlacesCercanos: readonly { slug: PriorityBarrioSlug; label: string }[];
};

const precio = siteConfig.precioAperturaDesde;

/** Landings sur Madrid reforzadas (excepto Getafe, que tiene su propio bloque). */
export const SUR_BARRIO_ZONAS: Partial<Record<PriorityBarrioSlug, SurBarrioZona>> = {
  villaverde: {
    slug: 'villaverde',
    nombre: 'Villaverde',
    llegada: '15–25 min desde Getafe',
    barrios: ['Villaverde Alto', 'San Cristóbal', 'Butarque', 'Los Rosales', 'Los Ángeles'],
    enlacesCercanos: [
      { slug: 'getafe', label: 'Getafe (base)' },
      { slug: 'valdemoro', label: 'Valdemoro' },
      { slug: 'parla', label: 'Parla' },
      { slug: 'carabanchel', label: 'Carabanchel' },
    ],
  },
  valdemoro: {
    slug: 'valdemoro',
    nombre: 'Valdemoro',
    llegada: '20–35 min desde Getafe',
    barrios: ['Casco histórico', 'El Restón', 'Valderrey', 'Valle de la Oliva', 'La Moraleja'],
    enlacesCercanos: [
      { slug: 'getafe', label: 'Getafe (base)' },
      { slug: 'villaverde', label: 'Villaverde' },
      { slug: 'parla', label: 'Parla' },
      { slug: 'pinto', label: 'Pinto' },
    ],
  },
  leganes: {
    slug: 'leganes',
    nombre: 'Leganés',
    llegada: '15–25 min desde Getafe',
    barrios: ['Centro', 'San Nicasio', 'Butarque', 'La Fortuna', 'Vereda de los Estudiantes'],
    enlacesCercanos: [
      { slug: 'getafe', label: 'Getafe (base)' },
      { slug: 'fuenlabrada', label: 'Fuenlabrada' },
      { slug: 'carabanchel', label: 'Carabanchel' },
      { slug: 'mostoles', label: 'Móstoles' },
    ],
  },
  fuenlabrada: {
    slug: 'fuenlabrada',
    nombre: 'Fuenlabrada',
    llegada: '15–30 min desde Getafe',
    barrios: ['Casco', 'Loranca', 'El Naranjo', 'La Serna', 'Vivero'],
    enlacesCercanos: [
      { slug: 'getafe', label: 'Getafe (base)' },
      { slug: 'leganes', label: 'Leganés' },
      { slug: 'parla', label: 'Parla' },
      { slug: 'villaverde', label: 'Villaverde' },
    ],
  },
  parla: {
    slug: 'parla',
    nombre: 'Parla',
    llegada: '15–30 min desde Getafe',
    barrios: ['Centro', 'Parla Este', 'Parla El Nido', 'Fuentebella'],
    enlacesCercanos: [
      { slug: 'getafe', label: 'Getafe (base)' },
      { slug: 'fuenlabrada', label: 'Fuenlabrada' },
      { slug: 'valdemoro', label: 'Valdemoro' },
      { slug: 'pinto', label: 'Pinto' },
    ],
  },
  pinto: {
    slug: 'pinto',
    nombre: 'Pinto',
    llegada: '20–30 min desde Getafe',
    barrios: ['Centro', 'Tinto de Verano', 'Prado del Espino', 'Perales del Río (límite)'],
    enlacesCercanos: [
      { slug: 'getafe', label: 'Getafe (base)' },
      { slug: 'valdemoro', label: 'Valdemoro' },
      { slug: 'parla', label: 'Parla' },
      { slug: 'villaverde', label: 'Villaverde' },
    ],
  },
  mostoles: {
    slug: 'mostoles',
    nombre: 'Móstoles',
    llegada: '20–35 min desde Getafe',
    barrios: ['Centro', 'Coimbra', 'El Soto', 'Norte', 'Sur'],
    enlacesCercanos: [
      { slug: 'getafe', label: 'Getafe (base)' },
      { slug: 'leganes', label: 'Leganés' },
      { slug: 'fuenlabrada', label: 'Fuenlabrada' },
      { slug: 'villaverde', label: 'Villaverde' },
    ],
  },
  carabanchel: {
    slug: 'carabanchel',
    nombre: 'Carabanchel',
    llegada: '20–30 min desde Getafe',
    barrios: ['Abrantes', 'Puerta Bonita', 'San Isidro', 'Vista Alegre', 'Opañel'],
    enlacesCercanos: [
      { slug: 'getafe', label: 'Getafe (base)' },
      { slug: 'villaverde', label: 'Villaverde' },
      { slug: 'leganes', label: 'Leganés' },
      { slug: 'puente-de-vallecas', label: 'Puente de Vallecas' },
    ],
  },
  'puente-de-vallecas': {
    slug: 'puente-de-vallecas',
    nombre: 'Puente de Vallecas',
    llegada: '25–35 min desde Getafe',
    barrios: ['Puente de Vallecas', 'Numancia', 'Palomeras', 'Portazgo', 'Entrevías'],
    enlacesCercanos: [
      { slug: 'getafe', label: 'Getafe (base)' },
      { slug: 'villaverde', label: 'Villaverde' },
      { slug: 'carabanchel', label: 'Carabanchel' },
      { slug: 'valdemoro', label: 'Valdemoro' },
    ],
  },
};

export function getSurBarrioZona(slug: string): SurBarrioZona | undefined {
  if (!PRIORITY_BARRIO_SLUGS.includes(slug as PriorityBarrioSlug)) return undefined;
  if (slug === 'getafe') return undefined;
  return SUR_BARRIO_ZONAS[slug as PriorityBarrioSlug];
}

export const surPrecioTiers = [
  {
    nombre: 'Urgencia apertura',
    precio: `desde ${precio}`,
    destacado: true,
    bullets: ['IVA incluido', 'Precio cerrado antes de actuar', 'Sin romper si es posible'],
  },
  {
    nombre: 'Apertura + bombín',
    precio: 'presupuesto en sitio',
    destacado: false,
    bullets: ['Material acordado contigo', 'Garantía por escrito', 'Factura con IVA'],
  },
  {
    nombre: 'Comunidades',
    precio: 'a medida',
    destacado: false,
    bullets: ['Portales y zonas comunes', 'Presupuesto sin compromiso', 'Bizum, tarjeta o efectivo'],
  },
] as const;
