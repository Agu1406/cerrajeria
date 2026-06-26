import type { HomeCopy } from './types';
import { siteConfig } from '../../config/site';

export const homeCopyEs: HomeCopy = {
  locale: 'es',
  seo: {
    title: siteConfig.titleHome,
    description: siteConfig.descriptionHome,
  },
  breadcrumbHome: 'Inicio',
  dateLocale: 'es-ES',
  contactForm: {
    title: 'Consulta o presupuesto (no urgente)',
    subtitle: 'Si no es una emergencia, puedes escribirnos y te respondemos lo antes posible.',
  },
  faqItems: [
    {
      question: '¿Cuánto tardáis en llegar?',
      answer:
        'Depende de la zona, pero normalmente entre 20 y 40 minutos dentro de la Comunidad de Madrid.',
    },
    {
      question: '¿Rompéis siempre la cerradura?',
      answer:
        'No. La prioridad es abrir sin daños; solo se sustituye la cerradura cuando es estrictamente necesario o el cliente lo prefiere.',
    },
    {
      question: '¿Trabajáis noches y festivos?',
      answer: 'Sí, ofrecemos servicio 24/7 todos los días del año.',
    },
    {
      question: '¿Hacéis cambio de cerradura y cambio de bombín o cilindro?',
      answer:
        'Sí. Montamos cerradura entera o solo sustituimos el bombín (cilindro) según lo que necesites. Te damos precio cerrado antes de empezar cuando veamos la puerta.',
    },
    {
      question: '¿Cuánto cuesta abrir una puerta con urgencia?',
      answer: siteConfig.urgenciaPreciosFaqEs,
    },
  ],
  badgeLine: 'Servicio 24 horas · Urgencias',
  heroTitle: 'Cerrajero urgente 24h · Madrid y sur (Getafe, Villaverde…)',
  heroIntroHtml:
    'Somos <strong class="text-slate-100 font-semibold">cerrajeros en Madrid</strong> con base en Getafe. <strong class="text-slate-100 font-semibold">Erickson</strong> te atiende las 24 horas: <strong class="text-slate-100 font-semibold">apertura de puertas</strong> sin daños desde 90 € IVA incl., <strong class="text-slate-100 font-semibold">cambio de cerradura</strong> y asistencia en Villaverde, Valdemoro, Fuenlabrada, Parla y toda la Comunidad. Sin centralitas: llamas y hablas con el cerrajero.',
  ctaCall: 'Llamar ahora',
  ctaSub: 'Atención inmediata · 24 horas · Todos los días del año',
  bullets: [
    '✔ Apertura sin romper desde 90 € IVA incl. (forzar solo si hace falta; muchos casos hasta ~200 € IVA incl.)',
    '✔ Apertura de puertas blindadas y acorazadas',
    '✔ Cambio de cerradura, bombín o cilindro (cerradura rota o llaves perdidas)',
    '✔ Apertura de vehículos sin daños',
    '✔ Arreglo de ventanas oscilobatientes y osciloparalelas',
  ],
  areasTitle: 'Barrios y zonas de cobertura',
  areasIntroHtml:
    'Base operativa en <a href="/cerrajero-urgente-24h/getafe" class="text-emerald-400 underline decoration-emerald-400/60 hover:decoration-emerald-400">Getafe</a>. También sur de Madrid y 21 distritos de la capital.',
  barrioLinkSuffix: 'Ver cerrajero 24h',
  areasSeeAll: 'Ver más zonas',
  areaLinksHreflang: null,
  stats: {
    arrivalLabel: 'Llegada media',
    arrivalSub: 'Dentro de la Comunidad de Madrid, según el tráfico y la zona.',
    availLabel: 'Disponibilidad',
    availSub: 'Trabajamos noches, fines de semana y festivos todo el año.',
    priceLabel: 'Apertura sin romper',
    priceValue: 'Desde 90 €',
    priceSub: 'IVA incl. · Cualquier hora y zona · Material del servicio incluido',
    ratingLabel: 'Clientes satisfechos',
    ratingSubFallback: 'Valoración media basada en reseñas reales de clientes.',
    ratingSubCount: '{count} reseñas en Google',
  },
  reviews: {
    title: 'Lo que dicen nuestros clientes',
    summaryGoogleTemplate: '{rating} · {count} reseñas en Google',
    seeAllGoogle: 'Ver todas en Google →',
    ratingAriaTemplate: 'Valoración: {rating} de 5',
  },
  block24h: {
    title: 'Cerrajero 24 horas: siempre listos para la apertura de puertas',
    bodyHtml:
      'Trabajamos con familias, comunidades de vecinos y negocios de barrio en toda la Comunidad de Madrid. Nuestro objetivo es que vuelvas a entrar en casa cuanto antes, con el menor daño posible y con un precio claro desde el principio.',
  },
  heroImageAlt: 'Cerrajero 24 horas abriendo una puerta blindada en un portal de Madrid',
  why: {
    title: 'Por qué elegir {brand}: cerrajeros urgentes 24 horas',
    leadHtml:
      'Sabemos que cuando buscas un cerrajero no tienes tiempo que perder. Nuestro objetivo es claro: llegar rápido, abrir tu puerta sin daños siempre que sea posible y explicarte el precio antes de empezar el trabajo.',
    cards: [
      {
        title: 'Trato directo con Erickson',
        body: 'Sin call centers: cuando llamas hablas con el cerrajero. Precio orientativo por teléfono y confirmación en persona antes de actuar.',
      },
      {
        title: 'Transparencia en los precios',
        body: 'Apertura sin romper desde 90 € IVA incl.; si hay que forzar, te lo decimos antes y acordamos precio (muchas intervenciones hasta unos 200 € IVA incl.).',
      },
      {
        title: 'Cobertura real en Madrid',
        body: 'Nos movemos por toda la Comunidad de Madrid, con base en Getafe y prioridad en Villaverde, Valdemoro, Fuenlabrada y Parla.',
      },
    ],
  },
  faqSectionTitle: 'Preguntas frecuentes sobre cerrajería urgente en Madrid',
  faqInline: [
    {
      q: '¿Cuánto tardáis en llegar?',
      aHtml:
        'Depende de la zona, pero normalmente entre 20 y 40 minutos dentro de la Comunidad de Madrid.',
    },
    {
      q: '¿Rompéis siempre la cerradura?',
      aHtml:
        'No. La prioridad es abrir sin daños; solo se sustituye la cerradura cuando es estrictamente necesario o el cliente lo prefiere.',
    },
    {
      q: '¿Trabajáis noches y festivos?',
      aHtml: 'Sí, ofrecemos servicio 24/7 todos los días del año.',
    },
    {
      q: '¿Cuánto cuesta una apertura urgente?',
      aHtml: siteConfig.urgenciaPreciosFaqEs,
    },
  ],
  servicesSection: {
    title: 'Servicios destacados de {brand}',
    introHtml:
      'Estos son algunos de los trabajos que realizamos con más frecuencia. Todos los servicios están disponibles en la mayoría de barrios de la Comunidad de Madrid.',
    footerHtml:
      'Puedes ver el listado completo en la página de <a href="/servicios" class="text-emerald-400 underline decoration-emerald-400/60 hover:decoration-emerald-400">servicios de cerrajería</a>.',
  },
  zonesSection: {
    title: 'Zonas de Madrid donde trabajamos',
    bodyHtml:
      'Nuestra base está en <strong>Getafe</strong> (<a href="/cerrajero-urgente-24h/getafe" class="text-emerald-400 underline decoration-emerald-400/60 hover:decoration-emerald-400">cerrajero urgente Getafe 24h</a>). También atendemos Villaverde, Valdemoro, Fuenlabrada, Parla, Leganés y los <strong>21 distritos de Madrid capital</strong>. Cada zona tiene su página con precio orientativo y teléfono de urgencias.',
    linkText: 'Ver listado completo de barrios y distritos →',
    linkHref: '/cerrajero-urgente-24h',
  },
};
