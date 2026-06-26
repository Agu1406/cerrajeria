/** Valor por defecto al clonar la plantilla: no emitir canonical/og/schema hasta tener dominio real. */
const BASE_URL_PLACEHOLDER = 'https://TU-DOMINIO-AQUI';

export const siteConfig = {
  /** Nombre como en Google Business Profile y documentos (schema.org, cabecera, pie). */
  nombreComercial: 'Los Cerrajeros Madrid',
  /** Logotipo bajo /public; URL absoluta en JSON-LD (logo + image del negocio). */
  logoPath: '/images/logotipo-oscuro.png',
  /**
   * Perfiles oficiales del mismo negocio (schema.org sameAs). Ej.: ficha Google Maps/Business.
   * Añade aquí Instagram, Facebook, etc. si existen.
   */
  sameAs: ['https://share.google/kmn3PFdaazgVkGVQ8'] as string[],
  telefono: '659 81 05 70',
  telefonoHref: 'tel:+34659810570',
  whatsappUrl: 'https://wa.me/34659810570',
  /** Correo de contacto (formulario, aviso legal, privacidad). */
  email: 'contacto@loscerrajerosmadrid.es',
  /** NIF/CIF para aviso legal y privacidad. */
  nif: 'Y7574386V',
  ciudadPrincipal: 'Madrid',
  baseUrl: 'https://www.loscerrajerosmadrid.es',
  /** true cuando baseUrl es tu dominio real; false si sigue el placeholder (no se emiten canonical, og, schema). */
  get isProductionSeo(): boolean {
    return this.baseUrl !== BASE_URL_PLACEHOLDER;
  },
  /** Precio mínimo orientativo para snippets SEO (coherente con urgenciaPreciosFaqEs). */
  precioAperturaDesde: '90 €',
  /** Coordenadas de la base operativa (Getafe) para schema.org. */
  geoMidpoint: { latitude: 40.3057, longitude: -3.7327 },
  /** Slug de la landing de la base operativa (cerrajero-urgente-24h/getafe). */
  baseBarrioSlug: 'getafe',
  /** Cerrajero titular: nombre real para confianza y trato directo (home, Getafe, schema). */
  profesional: {
    nombre: 'Erickson',
    titulo: 'Tu cerrajero de confianza en Getafe y el sur de Madrid',
    bio: 'Cerrajero con base en Getafe. Cuando llamas, te atiendo yo: sin centralitas ni intermediarios. Te explico el precio antes de empezar y solo actúo si estás de acuerdo.',
    bioCorta: 'Cuando llamas, te atiende Erickson.',
    /**
     * Foto tipo carnet / retrato frontal. Guardar en public/images/erickson-getafe.webp
     * (800×800 px, WebP, rostro centrado). null = placeholder hasta subir la imagen.
     */
    fotoPath: null as string | null,
  },
  /** Pills de confianza (home, Getafe, sur Madrid). */
  confianzaPills: [
    'Precio cerrado antes de actuar',
    'Apertura sin romper',
    'Base en Getafe',
    'Factura con IVA',
    'Bizum y tarjeta',
    'Garantía por escrito',
    'Trato directo con Erickson',
  ] as const,
  /** Título de la portada (ideal 50–60 caracteres para SEO). */
  titleHome: 'Cerrajero Madrid 24h · desde 90€ | Llama ya',
  descriptionHome:
    'Cerrajero urgente en Madrid y sur (Getafe, Villaverde, Valdemoro…). Apertura sin romper desde 90 € IVA incl. 24h. ☎ 659 81 05 70.',
  /**
   * Dirección para mostrar en contacto y en "Cómo llegar".
   * Si no pones nada, no se muestra el bloque de ubicación.
   */
  direccion: {
    calle: 'Calle Progreso 2, Puerta 2, Oficina 825',
    localidad: 'Getafe',
    codigoPostal: '28906',
  } as { calle: string; localidad: string; codigoPostal: string } | null,
  /**
   * Enlace a tu ficha de Google Maps o Google Business.
   * Si lo dejas vacío, se usará un enlace de búsqueda con la dirección (si tienes direccion).
   */
  googleMapsUrl: 'https://share.google/kmn3PFdaazgVkGVQ8',
  /**
   * Reseñas de Google para mostrar en la web y en el schema (SEO).
   * Copia valoración y número de reseñas de tu perfil de Google. Opcionalmente añade 2–5 reseñas (texto, autor, fecha).
   * Si es null, no se muestra la sección de reseñas ni aggregateRating.
   */
  reseñas: {
    /** Copia el total y la media desde tu ficha de Google Business si difieren. */
    valoracionMedia: 4.8,
    totalResenas: 8,
    /** Reseñas que quieras mostrar (cópialas de tu perfil de Google). Fecha en formato YYYY-MM-DD. */
    reseñas: [
      {
        autor: 'Toño',
        texto: 'Reseña de 5 estrellas en Google.',
        fecha: '2026-03-24',
        valoracion: 5,
      },
      {
        autor: 'Patricia Turcios Lovos',
        texto:
          'Atención excelente, servicio de calidad y precios muy razonables. Solucionaron mi problema en un pispas.',
        fecha: '2026-03-23',
        valoracion: 4,
      },
      {
        autor: 'Carlos Alonso',
        texto: 'Reseña de 5 estrellas en Google.',
        fecha: '2026-03-19',
        valoracion: 5,
      },
      {
        autor: 'Adribf35',
        texto: 'Reseña de 5 estrellas en Google.',
        fecha: '2026-03-19',
        valoracion: 5,
      },
      {
        autor: 'Agustín Antonio Márquez Piña',
        texto: 'Reseña de 5 estrellas en Google.',
        fecha: '2026-03-16',
        valoracion: 5,
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
  /**
   * Google Tag Manager: ID del contenedor (ej. GTM-W244C2BN).
   * Si lo rellenas, se inserta el snippet de GTM en todas las páginas. Luego puedes añadir GA4, Facebook Pixel, etc. desde la interfaz de GTM.
   */
  googleTagManagerId: 'GTM-W244C2BN',
  /**
   * Opcional: ID de medición de Google Analytics (GA4). Ej: G-XXXXXXXXXX.
   * Solo se usa si no hay googleTagManagerId (en GTM puedes configurar GA4 como etiqueta).
   */
  googleAnalyticsId: '' as string,
  /**
   * Precios orientativos para urgencias (apertura). Usado en FAQ de barrios y coherente con la home.
   * Actualizar si cambian las tarifas.
   */
  urgenciaPreciosFaqEs:
    'La apertura sin romper —con llave dentro o fuera, según el caso— va desde 90 € con IVA incluido: cualquier hora y cualquier zona de la Comunidad de Madrid, con el material habitual de ese servicio incluido. Si para abrir hay que forzar o el trabajo no encaja en una apertura estándar, te lo decimos antes de actuar y el presupuesto puede subir; en muchos de esos casos se sitúa hasta unos 200 € con IVA.',
  urgenciaPreciosFaqEn:
    'Non-destructive entry —key inside or outside, depending on the case— starts from €90 including VAT: any time of day, anywhere in the Community of Madrid, with the usual materials for that job included. If we must force entry or the job goes beyond a standard opening, we agree the price before we start; in many of those situations it is often up to around €200 including VAT.',
  /** Opcional: crédito al diseñador/desarrollador en el footer y en /diseno-web. Pon null para ocultar el enlace "Diseño web". */
  desarrollador: {
    nombre: 'Agustín',
    url: 'https://www.linkedin.com/in/agustin6041/',
    texto: 'Diseño y desarrollo web',
    telefono: '691 64 36 61',
    email: 'agustin6041@outlook.com',
  } as { nombre: string; url?: string; texto?: string; telefono?: string; email?: string } | null,
};
