/** Contenido hiperlocal y de conversión para la landing base en Getafe. */
import { siteConfig } from '../config/site';

const precio = siteConfig.precioAperturaDesde;
export const getafeBarrios = [
  'El Bercial',
  'Las Margaritas',
  'Sector III',
  'Juan de la Cierva',
  'Centro / La Alhóndiga',
  'Perales del Río',
  'Getafe Norte',
  'Los Molinos',
  'Buenavista',
  'San Isidro',
] as const;

export const getafeCodigosPostales = [
  '28901',
  '28902',
  '28903',
  '28904',
  '28905',
  '28906',
  '28907',
  '28909',
] as const;

export const getafeTrustPills = siteConfig.confianzaPills;

export type CasoReal = {
  etiqueta: string;
  titulo: string;
  resumen: string;
  detalle: string;
  precio?: string;
};

/** Casos reales atendidos en Getafe. */
export const getafeCasosReales: CasoReal[] = [
  {
    etiqueta: 'Apertura urgente',
    titulo: 'Llave dentro de comercio en Las Margaritas',
    resumen:
      'Llamada a las 9 AM: el local necesitaba abrirse para ventas y atender clientes, y el personal no tenía acceso.',
    detalle:
      'Apertura sin romper en unos 25 min. El cliente entró sin cambiar cerradura; se reconfiguró la cerradura para un juego de llaves nuevo y se entregaron 3 duplicados más el juego original en el momento.',
    precio: '90 € IVA incl.',
  },
  {
    etiqueta: 'Cambio bombín',
    titulo: 'Cilindro reventado tras intento de robo en Sector III',
    resumen:
      'Bombín dañado, no giraba la llave; había sustancias en el cilindro y restos del intento de apertura.',
    detalle:
      'Sustitución por cilindro antibumping el mismo día. Factura y garantía por escrito. El propietario estaba de vacaciones y una alarma le advirtió del intento de acceso a su vivienda.',
    precio: '120 € IVA incl. (bombín + mano de obra)',
  },
  {
    etiqueta: 'Comunidad',
    titulo: 'Portal con cerradura atascada en Juan de la Cierva',
    resumen:
      'Vecinos no podían entrar al edificio un domingo; tenían que dejar la puerta abierta, exponiendo la comunidad al acceso de no propietarios.',
    detalle:
      'El bombín estaba en buen estado, pero hacía falta mantenimiento: ajuste del marco de la puerta y lubricación. Trabajo resuelto el mismo día.',
    precio: '65 € IVA incl.',
  },
];

export const getafePrecioTiers = [
  {
    nombre: 'Urgencia apertura',
    precio: `desde ${precio}`,
    destacado: true,
    bullets: ['IVA incluido', 'Material del servicio incluido', 'Precio cerrado antes de actuar'],
  },
  {
    nombre: 'Apertura + bombín',
    precio: 'presupuesto en sitio',
    destacado: false,
    bullets: ['Cerradura o cilindro nuevo', 'Garantía por escrito', 'Factura con IVA'],
  },
  {
    nombre: 'Comunidades',
    precio: 'a medida',
    destacado: false,
    bullets: ['Portales y zonas comunes', 'Bizum, tarjeta o efectivo', 'Presupuesto sin compromiso'],
  },
] as const;

export const getafeServiciosDestacados = [
  {
    titulo: 'Apertura de puertas',
    precio: `desde ${precio}`,
    bullets: ['Técnica no destructiva cuando es posible', 'Puertas blindadas y acorazadas', 'Precio confirmado antes de actuar'],
    href: '/servicios/apertura-puertas',
  },
  {
    titulo: 'Cambio de cerradura',
    precio: 'presupuesto en sitio',
    bullets: ['Cerradura completa o solo bombín', 'Presupuesto claro en el lugar', 'Material acordado contigo'],
    href: '/servicios/cambio-cerradura',
  },
  {
    titulo: 'Bombín de seguridad',
    precio: 'presupuesto en sitio',
    bullets: ['Antibumping y antitaladro', 'Asesoramiento según tu puerta', 'Instalación el mismo día si hay stock'],
    href: '/servicios/bombines-seguridad',
  },
  {
    titulo: 'Urgencias 24h',
    precio: `desde ${precio}`,
    bullets: ['24 horas todos los días del año', '10–20 min en Getafe', 'Efectivo, tarjeta y Bizum'],
    href: '/cerrajero-urgente-24h/getafe',
  },
] as const;

/** Comparativa honesta: ventajas de tener base en Getafe vs cerrajeros que vienen de Madrid. */
export const getafeComparativa = [
  { label: 'Tiempo de llegada en Getafe', nosotros: '10–20 min', otros: '20–30 min habitual' },
  { label: 'Precio orientativo por teléfono', nosotros: 'Sí, antes de salir', otros: 'A veces solo al llegar' },
  { label: 'Base en Getafe', nosotros: 'Sí (Calle Progreso 2)', otros: 'Suelen venir de Madrid' },
  { label: 'Factura con IVA', nosotros: 'Sí', otros: 'No siempre' },
  { label: 'Bizum y tarjeta', nosotros: 'Sí', otros: 'Solo efectivo a veces' },
  { label: 'Garantía por escrito', nosotros: 'Sí', otros: 'No siempre' },
  { label: 'Apertura sin romper', nosotros: 'Prioridad siempre', otros: 'Variable' },
] as const;

export const getafeFaqsExtra = [
  {
    q: '¿Atendéis en todos los barrios de Getafe?',
    a: 'Sí: El Bercial, Las Margaritas, Sector III, Juan de la Cierva, Centro, La Alhóndiga, Perales del Río, Getafe Norte, Los Molinos, Buenavista, San Isidro y resto del municipio. Llegamos en 10–20 minutos desde nuestra base en Calle Progreso 2.',
  },
  {
    q: '¿Cuánto cuesta abrir una puerta en Getafe?',
    a: `La apertura sin romper va desde ${precio} con IVA incluido. Te damos precio orientativo por teléfono y lo confirmamos en persona antes de empezar. Si hay que forzar, te lo decimos antes y acordamos el importe.`,
  },
  {
    q: '¿Qué códigos postales de Getafe cubrís?',
    a: 'Trabajamos en 28901, 28902, 28903, 28904, 28905, 28906, 28907 y 28909. Servicio urgente 24 horas en cualquier dirección del municipio.',
  },
  {
    q: '¿Verificáis que soy el titular antes de abrir?',
    a: 'Sí. Por seguridad confirmamos que quien solicita el servicio puede acceder al inmueble. Es protocolo estándar en cerrajería de urgencia.',
  },
  {
    q: '¿Qué formas de pago aceptáis?',
    a: 'Efectivo, tarjeta y Bizum. Emitimos factura con IVA en todos los trabajos y entregamos garantía por escrito.',
  },
] as const;
