export type Servicio = {
  slug: string;
  nombre: string;
  categoria: 'aperturas' | 'cerraduras' | 'llaves' | 'ventanas' | 'otras';
  descripcionCorta: string;
};

export const servicios: Servicio[] = [
  {
    slug: 'apertura-puertas',
    nombre: 'Apertura de puertas',
    categoria: 'aperturas',
    descripcionCorta:
      'Apertura de puertas blindadas, acorazadas y de vivienda sin daños siempre que sea posible.',
  },
  {
    slug: 'apertura-vehiculos',
    nombre: 'Apertura de vehículos',
    categoria: 'aperturas',
    descripcionCorta: 'Apertura de coches sin romper cerradura ni cristales.',
  },
  {
    slug: 'cambio-cerradura',
    nombre: 'Cambio de cerradura',
    categoria: 'cerraduras',
    descripcionCorta: 'Sustitución de cerraduras y bombines antiguos por modelos más seguros.',
  },
  {
    slug: 'instalacion-cerradura',
    nombre: 'Instalación de cerradura',
    categoria: 'cerraduras',
    descripcionCorta: 'Instalación de nuevas cerraduras y cerrojos de seguridad en puertas de entrada.',
  },
  {
    slug: 'bombines-seguridad',
    nombre: 'Bombines de alta seguridad',
    categoria: 'cerraduras',
    descripcionCorta: 'Montaje de bombines antibumping, antiganzúa y antitaladro con llaves patentadas.',
  },
  {
    slug: 'duplicado-llaves-domicilio',
    nombre: 'Duplicado de llaves a domicilio',
    categoria: 'llaves',
    descripcionCorta: 'Copia de llaves de vivienda, portal o negocio; nos desplazamos a tu domicilio con la máquina.',
  },
  {
    slug: 'duplicado-llaves-coche',
    nombre: 'Duplicado de llaves de coche',
    categoria: 'llaves',
    descripcionCorta: 'Copia de llaves de coche y mandos; llaves de reserva y sustitución cuando se pierde la original.',
  },
  {
    slug: 'ventanas-oscilobatientes',
    nombre: 'Arreglo de ventanas oscilobatientes',
    categoria: 'ventanas',
    descripcionCorta:
      'Reparación y ajuste de ventanas oscilobatientes que no cierran bien o se han descolgado.',
  },
  {
    slug: 'ventanas-osciloparalelas',
    nombre: 'Arreglo de ventanas osciloparalelas',
    categoria: 'ventanas',
    descripcionCorta: 'Reparación de herrajes y mecanismos en ventanas osciloparalelas de aluminio y PVC.',
  },
  {
    slug: 'ajuste-puertas',
    nombre: 'Ajuste y reparación de puertas',
    categoria: 'otras',
    descripcionCorta: 'Ajuste de puertas que rozan, cambian de posición o no cierran correctamente.',
  },
  {
    slug: 'puertas-antiokupas',
    nombre: 'Puertas antiokupas',
    categoria: 'otras',
    descripcionCorta:
      'Refuerzo e instalación de puertas y cerraduras de seguridad para proteger viviendas y locales vacíos.',
  },
];

