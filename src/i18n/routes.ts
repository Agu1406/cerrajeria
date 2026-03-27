import type { Locale } from './config';
import { DEFAULT_LOCALE, LOCALES, LOCALE_TO_HREFLANG } from './config';

/**
 * Tabla de rutas equivalentes por idioma. Al añadir una página traducida,
 * declara aquí el pathname por locale (vacío en un idioma = esa versión no existe).
 */
export const ROUTES = {
  home: {
    es: '/',
    en: '/en',
  },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteId = keyof typeof ROUTES;

export function pathForRoute(routeId: RouteId, locale: Locale): string {
  return ROUTES[routeId][locale];
}

export function homePathForLocale(locale: Locale): string {
  return pathForRoute('home', locale);
}

/**
 * hreflang + x-default para una ruta definida en ROUTES.
 * Solo incluye locales donde la ruta no esté vacía.
 */
export function getHreflangAlternatesForRoute(
  baseUrl: string,
  routeId: RouteId
): Array<{ hreflang: string; href: string }> {
  const b = baseUrl.replace(/\/$/, '');
  const row = ROUTES[routeId];
  const alternates: Array<{ hreflang: string; href: string }> = [];

  for (const locale of LOCALES) {
    const path = row[locale];
    if (!path) continue;
    const href = `${b}${path === '/' ? '/' : path}`;
    alternates.push({ hreflang: LOCALE_TO_HREFLANG[locale], href });
  }

  const defaultPath = row[DEFAULT_LOCALE];
  if (defaultPath) {
    alternates.push({
      hreflang: 'x-default',
      href: `${b}${defaultPath === '/' ? '/' : defaultPath}`,
    });
  }

  return alternates;
}
