import type { Locale } from '../config';

export type HomeFaqItem = { question: string; answer: string };

export type HomeWhyCard = { title: string; body: string };

/**
 * Todo el texto/HTML estático de la home por idioma.
 * HTML solo desde estos fichiers (contenido de confianza), nunca desde usuario.
 */
export type HomeCopy = {
  locale: Locale;
  seo: { title: string; description: string };
  breadcrumbHome: string;
  dateLocale: string;
  contactForm: { title: string; subtitle: string };
  faqItems: HomeFaqItem[];

  badgeLine: string;
  heroTitle: string;
  heroIntroHtml: string;
  ctaCall: string;
  ctaSub: string;
  bullets: string[];

  areasTitle: string;
  areasIntroHtml: string;
  barrioLinkSuffix: string;
  areasSeeAll: string;
  areaLinksHreflang: string | null;

  stats: {
    arrivalLabel: string;
    arrivalSub: string;
    availLabel: string;
    availSub: string;
    ratingLabel: string;
    ratingSubFallback: string;
    ratingSubCount: string;
  };

  reviews: {
    title: string;
    noteHtml?: string;
    summaryGoogleTemplate: string;
    seeAllGoogle: string;
    ratingAriaTemplate: string;
  };

  block24h: { title: string; bodyHtml: string };
  heroImageAlt: string;

  why: {
    title: string;
    leadHtml: string;
    cards: [HomeWhyCard, HomeWhyCard, HomeWhyCard];
  };

  faqSectionTitle: string;
  faqInline: [{ q: string; aHtml: string }, { q: string; aHtml: string }, { q: string; aHtml: string }];

  servicesSection: {
    title: string;
    introHtml: string;
    footerHtml: string;
  };

  zonesSection: {
    title: string;
    bodyHtml: string;
    linkText: string;
    linkHref: string;
  };

  /** Si existe, sustituye nombre/descripcion corta de servicios destacados (primeros 6 del catálogo). */
  serviceHighlightOverrides?: Record<string, { nombre: string; descripcionCorta: string }>;
};
