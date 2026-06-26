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

export const getafeTrustPills = [
  'Precio cerrado antes de actuar',
  'Apertura sin romper',
  'Base en Getafe',
  'Factura con IVA',
  'Trato directo con Erickson',
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
] as const;
