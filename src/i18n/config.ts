/**
 * Idiomas publicados en la web. Para añadir uno: 1) ampliar esta lista y los mapas
 * en routes.ts / ui.ts; 2) añadir copy en i18n/home/copy-xx.ts; 3) crear src/pages/{prefijo}/...
 */
export const LOCALES = ['es', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

/** Etiqueta humana en el conmutador de idioma (header). */
export const LOCALE_LABEL: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

/** Valor hreflang (añade es-ES, fr-FR, etc. si algún día segmentas por región). */
export const LOCALE_TO_HREFLANG: Record<Locale, string> = {
  es: 'es',
  en: 'en',
};
