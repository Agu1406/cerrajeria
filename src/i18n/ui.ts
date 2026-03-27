import type { Locale } from './config';
import { LOCALES, LOCALE_LABEL, LOCALE_TO_HREFLANG } from './config';
import { pathForRoute, type RouteId } from './routes';

/** Prefijo del mensaje WhatsApp por idioma (Layout añade la URL de la página). */
export const WHATSAPP_PREFILL: Record<Locale, string> = {
  es: 'Hola, os escribo desde la web. Necesito un cerrajero urgente.',
  en: 'Hello, I am contacting you from your website. I need an emergency locksmith in Madrid.',
};

/** Sufijo con URL de página para WhatsApp (un idioma = una plantilla). */
const WHATSAPP_PAGE_SUFFIX: Record<Locale, string> = {
  es: ' Escribo desde: {url}',
  en: " I'm writing from: {url}",
};

export function whatsappPageUrlSuffix(locale: Locale, pageUrl: string): string {
  return WHATSAPP_PAGE_SUFFIX[locale].replace('{url}', pageUrl);
}

type NavStrings = {
  ariaNav: string;
  home: string;
  services: string;
  areas: string;
  blog: string;
  contact: string;
  callNow: string;
  callMobile: string;
  whatsappAria: string;
  openMenu: string;
  closeMenu: string;
  mobileMenuAria: string;
};

const NAV: Record<Locale, NavStrings> = {
  es: {
    ariaNav: 'Principal',
    home: 'Inicio',
    services: 'Servicios',
    areas: 'Barrios',
    blog: 'Blog',
    contact: 'Contacto',
    callNow: 'Llamar ahora',
    callMobile: 'Llamar',
    whatsappAria: 'Escribir por WhatsApp',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mobileMenuAria: 'Menú móvil',
  },
  en: {
    ariaNav: 'Main',
    home: 'Home',
    services: 'Services',
    areas: 'Areas',
    blog: 'Blog',
    contact: 'Contact',
    callNow: 'Call now',
    callMobile: 'Call',
    whatsappAria: 'Message on WhatsApp',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mobileMenuAria: 'Mobile menu',
  },
};

type LayoutChrome = {
  htmlLang: string;
  skipLink: string;
  cookieAria: string;
  cookieText: string;
  cookieMore: string;
  cookieAccept: string;
  ogLocale: string;
  ogLocaleAlternate: string;
};

const LAYOUT: Record<Locale, LayoutChrome> = {
  es: {
    htmlLang: 'es',
    skipLink: 'Saltar al contenido principal',
    cookieAria: 'Aviso de cookies',
    cookieText:
      'Usamos cookies técnicas necesarias para el funcionamiento de la web. Si continúas navegando, aceptas su uso.',
    cookieMore: 'más información sobre cookies',
    cookieAccept: 'Aceptar',
    ogLocale: 'es_ES',
    ogLocaleAlternate: 'en_US',
  },
  en: {
    htmlLang: 'en',
    skipLink: 'Skip to main content',
    cookieAria: 'Cookie notice',
    cookieText:
      'We use essential cookies for the site to work. By continuing, you accept their use.',
    cookieMore: 'More about cookies',
    cookieAccept: 'Accept',
    ogLocale: 'en_US',
    ogLocaleAlternate: 'es_ES',
  },
};

type FooterStrings = {
  tagline: string;
  emergencyLine: string;
  callAria: string;
  legalNavAria: string;
  directions: string;
  sitemap: string;
  legal: string;
  privacy: string;
  cookies: string;
  webDesign: string;
};

const FOOTER: Record<Locale, FooterStrings> = {
  es: {
    tagline: 'Cerrajería 24h en',
    emergencyLine: 'Teléfono urgente:',
    callAria: 'Llamar al',
    legalNavAria: 'Enlaces legales y de interés',
    directions: 'Cómo llegar',
    sitemap: 'Mapa del sitio',
    legal: 'Aviso legal',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    webDesign: 'Diseño web',
  },
  en: {
    tagline: '24h locksmith service in',
    emergencyLine: 'Emergency line:',
    callAria: 'Call',
    legalNavAria: 'Legal and site links',
    directions: 'Directions',
    sitemap: 'Sitemap',
    legal: 'Legal notice',
    privacy: 'Privacy',
    cookies: 'Cookies',
    webDesign: 'Web design',
  },
};

type CallFabStrings = {
  callSiteAria: string;
  whatsappAria: string;
};

const CALL_FAB: Record<Locale, CallFabStrings> = {
  es: {
    callSiteAria: 'Llamar ahora a',
    whatsappAria: 'Escribir por WhatsApp',
  },
  en: {
    callSiteAria: 'Call now',
    whatsappAria: 'Message on WhatsApp',
  },
};

export function getNavStrings(locale: Locale): NavStrings {
  return NAV[locale];
}

export function getLayoutChrome(locale: Locale): LayoutChrome {
  return LAYOUT[locale];
}

export function getFooterStrings(locale: Locale): FooterStrings {
  return FOOTER[locale];
}

export function getCallFabStrings(locale: Locale): CallFabStrings {
  return CALL_FAB[locale];
}

/** Enlaces al resto de idiomas para la misma ruta conceptual (p. ej. home). Omite locales sin URL. */
export function getLanguageSwitchTargets(
  current: Locale,
  routeId: RouteId = 'home'
): Array<{ locale: Locale; href: string; label: string; hreflang: string }> {
  return LOCALES.filter((l) => l !== current)
    .map((locale) => {
      const href = pathForRoute(routeId, locale);
      if (!href) return null;
      return {
        locale,
        href,
        label: LOCALE_LABEL[locale],
        hreflang: LOCALE_TO_HREFLANG[locale],
      };
    })
    .filter((x): x is NonNullable<typeof x> => x != null);
}
