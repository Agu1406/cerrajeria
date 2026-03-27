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

export type FeaturedServicio = { slug: string; nombre: string; descripcionCorta: string };

export function getHomeFeaturedServicios(copy: HomeCopy): FeaturedServicio[] {
  const overrides = copy.serviceHighlightOverrides;
  return servicios.slice(0, 6).map((s) => {
    const o = overrides?.[s.slug];
    return {
      slug: s.slug,
      nombre: o?.nombre ?? s.nombre,
      descripcionCorta: o?.descripcionCorta ?? s.descripcionCorta,
    };
  });
}
