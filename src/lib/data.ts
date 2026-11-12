import { legal as legalJson } from './legal';

const BASE_URL_PLACEHOLDER = 'https://TU-DOMINIO-AQUI';
/** Única cifra de apertura orientativa (CONTEXT.md). */
const PRECIO_APERTURA_DESDE = '90 €';
const PRECIO_APERTURA_DESDE_EN = '€90';


export const LEGAL = {
  titular: legalJson.titular as string,
  nif: legalJson.nif as string,
  email: legalJson.email as string,
};

export const MEDIA = {
  provisional: false as boolean,
  heroPath: '/images/cerrajero-24h-madrid-hero.webp',
  /** Isotipo SVG (paleta DESIGN). Cabecera, favicon y schema. */
  brandMarkPath: '/favicon.svg',
  logoDarkPath: '/favicon.svg',
  logoLightPath: '/favicon.svg',
  photoAlt: {
    hero: 'Cerrajero urgente 24 horas en Madrid',
    apertura: 'Detalle de apertura de cerradura blindada',
    ventana: 'Ajuste de ventana oscilobatiente',
  } as Record<string, string>,
  /** Pares reales antes/después (home). Copy/alts por id en i18n home. */
  workPairs: [
    {
      id: 'carabanchel',
      beforePath: '/images/servicio-urgente-cerrajero-carabanchel-antes.webp',
      afterPath: '/images/servicio-urgente-cerrajero-carabanchel-despues.webp',
    },
    {
      id: 'vallecas',
      beforePath: '/images/sustitucion-robo-inmobiliaria-valllecas-antes.webp',
      afterPath: '/images/sustitucion-robo-inmobiliaria-valllecas-despues-5.webp',
    },
  ] as const,
};

export const siteData = {
  nombreComercial: 'Los Cerrajeros Madrid',
  logoPath: MEDIA.brandMarkPath,
  sameAs: ['https://share.google/kmn3PFdaazgVkGVQ8'] as string[],
  telefono: '659 81 05 70',
  telefonoHref: 'tel:+34659810570',
  whatsappUrl: 'https://wa.me/34659810570',
  email: LEGAL.email,
  nif: LEGAL.nif,
  titular: LEGAL.titular,
  ciudadPrincipal: 'Madrid',
  baseUrl: 'https://www.loscerrajerosmadrid.es',
  get isProductionSeo(): boolean {
    return this.baseUrl !== BASE_URL_PLACEHOLDER;
  },
  precioAperturaDesde: PRECIO_APERTURA_DESDE,
  geoMidpoint: { latitude: 40.3057, longitude: -3.7327 },
  baseBarrioSlug: 'getafe',
  profesional: {
    nombre: 'Erickson',
    titulo: 'Tu cerrajero de confianza en Getafe y el sur de Madrid',
    bio: 'Cerrajero con base en Getafe. Cuando llamas, te atiendo yo: sin centralitas ni intermediarios. Te explico el precio antes de empezar y solo actúo si estás de acuerdo.',
    bioCorta: 'Cuando llamas, te atiende Erickson.',
    fotoPath: null as string | null,
  },
  confianzaPills: [
    'Precio cerrado antes de actuar',
    'Apertura sin romper',
    'Base en Getafe',
    'Factura con IVA',
    'Bizum y tarjeta',
    'Garantía por escrito',
    'Trato directo con Erickson',
  ] as const,
  titleHome: `Cerrajero Madrid 24h · desde ${PRECIO_APERTURA_DESDE.replace(/\s/g, '')} | Llama ya`,
  descriptionHome: `Cerrajero urgente en Madrid y sur (Getafe, Villaverde, Valdemoro…). Apertura sin romper desde ${PRECIO_APERTURA_DESDE} IVA incl. 24h. ☎ 659 81 05 70.`,
  direccion: {
    calle: 'Calle Progreso 2, Puerta 2, Oficina 825',
    localidad: 'Getafe',
    codigoPostal: '28906',
  } as { calle: string; localidad: string; codigoPostal: string } | null,
  googleMapsUrl: 'https://share.google/kmn3PFdaazgVkGVQ8',
  reseñas: {
    valoracionMedia: 4.8,
    totalResenas: 8,
    reseñas: [
      {
        autor: 'Patricia Turcios Lovos',
        texto:
          'Atención excelente, servicio de calidad y precios muy razonables. Solucionaron mi problema en un pispas.',
        fecha: '2026-03-23',
        valoracion: 4,
      },
      {
        autor: 'Bárbara F',
        texto: 'Excelente atención y servicio.. recomendados',
        fecha: '2026-03-12',
        valoracion: 5,
      },
      {
        autor: 'ronny bernal',
        texto: 'Excelente atención, muy rápidos y atentos!',
        fecha: '2026-03-12',
        valoracion: 5,
      },
    ],
  } as {
    valoracionMedia: number;
    totalResenas: number;
    reseñas: Array<{ autor: string; texto: string; fecha: string; valoracion: number }>;
  } | null,
  googleTagManagerId: 'GTM-W244C2BN',
  googleAnalyticsId: '' as string,
  urgenciaPreciosFaqEs: `La apertura sin romper (con llave dentro o fuera, según el caso) va desde ${PRECIO_APERTURA_DESDE} con IVA incluido: cualquier hora y cualquier zona de la Comunidad de Madrid, con el material habitual de ese servicio incluido. Si para abrir hay que forzar o el trabajo no encaja en una apertura estándar, te lo decimos antes de actuar y el presupuesto puede subir; en muchos de esos casos se sitúa hasta unos 200 € con IVA.`,
  urgenciaPreciosFaqEn: `Non-destructive entry (key inside or outside, depending on the case) starts from ${PRECIO_APERTURA_DESDE_EN} including VAT: any time of day, anywhere in the Community of Madrid, with the usual materials for that job included. If we must force entry or the job goes beyond a standard opening, we agree the price before we start; in many of those situations it is often up to around €200 including VAT.`,
  desarrollador: {
    nombre: 'Agustín',
    url: 'https://www.linkedin.com/in/agustin6041/',
    texto: 'Diseño y desarrollo web',
    telefono: '691 64 36 61',
    email: 'agustin6041@outlook.es',
  } as { nombre: string; url?: string; texto?: string; telefono?: string; email?: string } | null,
};

const TITULAR_NO_VALIDO =
  /pendiente|tu[-\s]?nombre|rellenar|nombre\s+apellidos|xxx+|^\s*todo\s*$/i;

function titularDesdeEntorno(): string {
  const meta = (import.meta.env as Record<string, string | undefined>).SITE_TITULAR;
  if (typeof meta === 'string' && meta.trim()) return meta.trim();
  if (typeof process !== 'undefined' && typeof process.env?.SITE_TITULAR === 'string') {
    return process.env.SITE_TITULAR.trim();
  }
  return '';
}

if (!siteData.titular.trim()) {
  siteData.titular = titularDesdeEntorno();
  LEGAL.titular = siteData.titular;
}

export function assertSiteLegal() {
  const titular = siteData.titular.trim();
  const fallos: string[] = [];
  if (
    !titular ||
    TITULAR_NO_VALIDO.test(titular) ||
    titular === siteData.nombreComercial ||
    !/\s/.test(titular)
  ) {
    fallos.push(
      'titular (nombre y apellidos o razón social en LEGAL_JSON, en src/data/legal.local.json o en SITE_TITULAR)'
    );
  }
  if (!siteData.nif.trim()) fallos.push('nif');
  if (!siteData.email.trim()) fallos.push('email');
  if (!siteData.telefono.trim()) fallos.push('telefono');
  if (!siteData.direccion?.calle) fallos.push('direccion');
  if (fallos.length > 0) {
    throw new Error(
      `Dato legal vacío o no válido: ${fallos.join(', ')}. La web no se publica sin esos datos.`
    );
  }
}

assertSiteLegal();
