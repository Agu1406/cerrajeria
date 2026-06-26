import type { HomeCopy } from './types';
import { siteConfig } from '../../config/site';

export const homeCopyEn: HomeCopy = {
  locale: 'en',
  seo: {
    title: 'Emergency locksmith Madrid 24h | Lockouts, doors & locks',
    description:
      'Emergency locksmiths Madrid 24/7: non-destructive entry from €90 VAT incl. (any time, anywhere in the region). If forcing is needed, price agreed first; many jobs up to ~€200 VAT incl.',
  },
  breadcrumbHome: 'Home',
  dateLocale: 'en-GB',
  contactForm: {
    title: 'Enquiry or quote (non-urgent)',
    subtitle: 'If it is not an emergency, send us a message and we will reply as soon as we can.',
  },
  faqItems: [
    {
      question: 'How long do you take to arrive?',
      answer:
        'It depends on the area, but usually between 20 and 40 minutes within the Community of Madrid.',
    },
    {
      question: 'Do you always break the lock?',
      answer:
        'No. We prioritise non-destructive entry. We only replace the lock when strictly necessary or if you ask us to.',
    },
    {
      question: 'Do you work nights and public holidays?',
      answer: 'Yes. We offer a 24/7 service every day of the year.',
    },
    {
      question: 'Can you change the lock and the cylinder?',
      answer:
        'Yes. We can fit a full lock or replace only the cylinder. We give a clear price before starting once we see the door.',
    },
    {
      question: 'How much does an emergency door opening cost?',
      answer: siteConfig.urgenciaPreciosFaqEn,
    },
  ],
  badgeLine: '24-hour service · Emergencies',
  heroTitle: 'Locksmiths in Madrid · 24h emergency service',
  heroIntroHtml:
    'We are <strong class="text-slate-100 font-semibold">emergency locksmiths in Madrid</strong> available around the clock: <strong class="text-slate-100 font-semibold">non-destructive door opening</strong> whenever possible, <strong class="text-slate-100 font-semibold">lock and cylinder replacement</strong>, and fast help across the <strong class="text-slate-100 font-semibold">Community of Madrid</strong>. Call us and a qualified locksmith will be on the way.',
  ctaCall: 'Call now',
  ctaSub: 'Immediate response · 24 hours · Every day of the year',
  bullets: [
    '✔ Non-destructive entry from €90 VAT incl. (forcing only if needed; many jobs up to ~€200 VAT incl.)',
    '✔ Armoured and security door opening',
    '✔ Lock, cylinder or barrel change (broken lock or lost keys)',
    '✔ Vehicle opening without unnecessary damage',
    '✔ Tilt-and-turn and parallel-tilt window repairs',
  ],
  areasTitle: 'Areas we cover',
  areasIntroHtml:
    'We work across the city of Madrid and surrounding municipalities. Below are some of the areas we visit most often. Area pages are in Spanish; you can still call or WhatsApp in English.',
  barrioLinkSuffix: '24h locksmith',
  areasSeeAll: 'Full area list',
  areaLinksHreflang: 'es',
  stats: {
    arrivalLabel: 'Typical arrival',
    arrivalSub: 'Within the Community of Madrid, depending on traffic and distance.',
    availLabel: 'Availability',
    availSub: 'Nights, weekends and public holidays, all year.',
    priceLabel: 'Non-destructive entry',
    priceValue: 'From €90',
    priceSub: 'VAT incl. · Any time & zone · usual materials included',
    ratingLabel: 'Customer rating',
    ratingSubFallback: 'Based on real customer feedback.',
    ratingSubCount: '{count} Google reviews',
  },
  reviews: {
    title: 'What our customers say',
    noteHtml:
      'Reviews below are shown in their original language (Spanish) from Google.',
    summaryGoogleTemplate: '{rating} · {count} Google reviews',
    seeAllGoogle: 'See all on Google →',
    ratingAriaTemplate: 'Rating: {rating} out of 5',
  },
  block24h: {
    title: '24-hour locksmiths: ready when you are locked out',
    bodyHtml:
      'We help residents, communities and local businesses across the Community of Madrid. Our goal is to get you back inside quickly, with as little damage as possible and a clear price from the start.',
  },
  heroImageAlt: '24-hour locksmith opening a security door at a Madrid entrance',
  why: {
    title: 'Why choose {brand}',
    leadHtml:
      'When you need a locksmith, you rarely have time to spare. We focus on arriving fast, opening without damage when it is safe to do so, and explaining the price before we start work.',
    cards: [
      {
        title: 'Clear pricing',
        body: 'Non-destructive entry from €90 VAT incl.; if forcing is needed, we agree the price first (many jobs up to around €200 VAT incl.).',
      },
      {
        title: 'Training and tools',
        body: 'Up-to-date methods and specialist tools to reduce damage and waiting time.',
      },
      {
        title: 'Real coverage in Madrid',
        body: 'We travel across the Community of Madrid, including areas such as Getafe, Las Rozas, Pinto and Leganés.',
      },
    ],
  },
  faqSectionTitle: 'Frequently asked questions',
  faqInline: [
    {
      q: 'How long do you take to arrive?',
      aHtml:
        'Usually between 20 and 40 minutes within the Community of Madrid, depending on the area.',
    },
    {
      q: 'Do you always break the lock?',
      aHtml:
        'No. We try to open without damage and only replace the lock when necessary or if you prefer a new one.',
    },
    {
      q: 'Nights and bank holidays?',
      aHtml: 'Yes — 24/7, every day of the year.',
    },
    {
      q: 'How much does an emergency opening cost?',
      aHtml: siteConfig.urgenciaPreciosFaqEn,
    },
  ],
  servicesSection: {
    title: 'Main services',
    introHtml:
      'These are some of the jobs we carry out most often. Full service descriptions are on our Spanish site; we provide the same work for English-speaking customers.',
    footerHtml:
      '<a href="/servicios" hreflang="es" class="text-emerald-400 underline decoration-emerald-400/60 hover:decoration-emerald-400">Full list of locksmith services (Spanish) →</a>',
  },
  zonesSection: {
    title: 'Areas in Madrid where we work',
    bodyHtml:
      'We cover the <strong>21 districts of Madrid</strong> (Centro, Salamanca, Chamberí, Retiro, Chamartín, Tetuán, Latina, Carabanchel, Usera, Vallecas, Moratalaz, Ciudad Lineal, Hortaleza, Villaverde, Vicálvaro, San Blas-Canillejas, Barajas, and more) and <strong>municipalities</strong> such as Getafe, Leganés, Móstoles, Fuenlabrada, Alcalá de Henares, Las Rozas and Pinto. Each area has a dedicated page with local information.',
    linkText: 'Browse all areas (Spanish) →',
    linkHref: '/cerrajero-urgente-24h',
  },
  serviceHighlightOverrides: {
    'apertura-puertas': {
      nombre: 'Door opening',
      descripcionCorta:
        'Opening armoured, security and residential doors without damage whenever possible.',
    },
    'apertura-vehiculos': {
      nombre: 'Vehicle opening',
      descripcionCorta: 'Opening cars without breaking the lock or windows.',
    },
    'cambio-cerradura': {
      nombre: 'Lock replacement',
      descripcionCorta:
        'Full lock or cylinder replacement: broken lock, lost keys or security upgrade. Clear pricing on site.',
    },
    'instalacion-cerradura': {
      nombre: 'Lock installation',
      descripcionCorta: 'New locks and security bolts fitted on front doors.',
    },
    'bombines-seguridad': {
      nombre: 'High-security cylinders',
      descripcionCorta: 'Anti-bump, anti-pick and anti-drill cylinders with restricted keys.',
    },
    'duplicado-llaves-domicilio': {
      nombre: 'Key cutting at your address',
      descripcionCorta:
        'Copying home, communal or business keys; we travel with professional equipment.',
    },
  },
};
