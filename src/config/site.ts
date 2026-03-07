export const siteConfig = {
  nombreComercial: 'cerrajerosmadrid',
  telefono: '659 81 05 70',
  telefonoHref: 'tel:+34659810570',
  whatsappUrl: 'https://wa.me/34659810570',
  /** Mensaje que se abre al pulsar WhatsApp. Vacío = sin mensaje prefijado. */
  whatsappMessage: 'Hola, os escribo desde la web. Necesito un cerrajero urgente.',
  ciudadPrincipal: 'Madrid',
  baseUrl: 'https://loscerrajerosmadrid.es',
  titleHome: 'Cerrajero urgente Madrid 24 horas | Cerrajeros urgentes, apertura de puertas',
  descriptionHome:
    'Cerrajero 24 horas y cerrajeros urgentes en Madrid. Apertura de puertas sin daños, cambio de bombín. Toda la Comunidad. Llama ahora.',
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
    valoracionMedia: 4.5,
    totalResenas: 2,
    /** Reseñas que quieras mostrar (cópialas de tu perfil de Google). Fecha en formato YYYY-MM-DD. */
    reseñas: [
      {
        autor: 'Vanessa Vidal',
        texto: 'La única pega fue que tardaron más de lo que esperaba en llegar.',
        fecha: '2026-03-06',
        valoracion: 4,
      },
      {
        autor: 'ronny bernal',
        texto: 'Excelente atención, muy rápidos y atentos!',
        fecha: '2026-03-06',
        valoracion: 5,
      },
    ],
  } as {
    valoracionMedia: number;
    totalResenas: number;
    reseñas: Array<{ autor: string; texto: string; fecha: string; valoracion: number }>;
  } | null,
  /** Opcional: crédito al diseñador/desarrollador en el footer y en /diseno-web. Pon null para ocultar el enlace "Diseño web". */
  desarrollador: {
    nombre: 'Agustín',
    url: 'https://www.linkedin.com/in/agustin6041/',
    texto: 'Diseño y desarrollo web',
    telefono: '691 64 36 61',
    email: 'agustin6041@outlook.com',
  } as { nombre: string; url?: string; texto?: string; telefono?: string; email?: string } | null,
};

