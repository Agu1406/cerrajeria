import type { Locale } from '../config';
import { homeCopyEs } from './copy-es';
import { homeCopyEn } from './copy-en';
import type { HomeCopy } from './types';
import { servicios } from '../../data/servicios';

const byLocale: Record<Locale, HomeCopy> = {
  es: homeCopyEs,
  en: homeCopyEn,
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return byLocale[locale];
}

/** Nombres Phosphor (`@iconify-json/ph`) por slug de servicio destacado. */
export const FEATURED_SERVICE_ICONS: Record<string, string> = {
  'apertura-puertas': 'door-open',
  'apertura-vehiculos': 'car',
  'cambio-cerradura': 'lock-key',
  'instalacion-cerradura': 'lock',
  'bombines-seguridad': 'shield-check',
  'duplicado-llaves-domicilio': 'key',
};

export type FeaturedServicio = {
  slug: string;
  nombre: string;
  descripcionCorta: string;
  icon: string;
};

export function getHomeFeaturedServicios(copy: HomeCopy): FeaturedServicio[] {
  const overrides = copy.serviceHighlightOverrides;
  return servicios.slice(0, 6).map((s) => {
    const o = overrides?.[s.slug];
    const icon = FEATURED_SERVICE_ICONS[s.slug];
    if (!icon) throw new Error(`Falta icono Phosphor para servicio destacado: ${s.slug}`);
    return {
      slug: s.slug,
      nombre: o?.nombre ?? s.nombre,
      descripcionCorta: o?.descripcionCorta ?? s.descripcionCorta,
      icon,
    };
  });
}
