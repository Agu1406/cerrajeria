/** Valor por defecto al clonar la plantilla: no emitir canonical/og/schema hasta tener dominio real. */
const BASE_URL_PLACEHOLDER = 'https://TU-DOMINIO-AQUI';

export const siteConfig = {
  nombreComercial: 'cerrajerosmadrid',
  telefono: '659 81 05 70',
  telefonoHref: 'tel:+34659810570',
  whatsappUrl: 'https://wa.me/34659810570',
  /** Mensaje que se abre al pulsar WhatsApp. Vacío = sin mensaje prefijado. Se añade automáticamente "Escribo desde: [url de la página]". */
  whatsappMessage: 'Hola, os escribo desde la web. Necesito un cerrajero urgente.',
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
  /** Título de la portada (ideal 50–60 caracteres para SEO). Trends: fuerte “cerrajero Madrid” + servicios clave. */
  titleHome: 'Cerrajero Madrid 24h | Urgente, apertura puertas y cerraduras',
  descriptionHome:
    'Cerrajeros en Madrid 24 horas: urgencias, apertura de puertas y cambio de cerradura (bombín o cilindro). Cerradura rota o llave perdida. Toda la Comunidad de Madrid. Llama ahora.',
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
  googleMapsUrl: 'https://share.google/5mLzrpAUUKo3yviLh',
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
  /** Opcional: crédito al diseñador/desarrollador en el footer y en /diseno-web. Pon null para ocultar el enlace "Diseño web". */
  desarrollador: {
    nombre: 'Agustín',
    url: 'https://www.linkedin.com/in/agustin6041/',
    texto: 'Diseño y desarrollo web',
    telefono: '691 64 36 61',
    email: 'agustin6041@outlook.com',
  } as { nombre: string; url?: string; texto?: string; telefono?: string; email?: string } | null,
};

