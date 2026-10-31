/** Textos de plazos y de supresión. Los usan las páginas (vía legal.ts) y api/derechos.js. */
export const retention = {
  contacto:
    '5 años desde el fin del servicio o de la última comunicación (artículo 1964 del Código Civil).',
  facturas:
    '4 años desde el fin del plazo de presentación del impuesto (artículo 66 de la Ley General Tributaria).',
  mercantil: '6 años desde el último asiento (artículo 30 del Código de Comercio).',
  logs: 'El tiempo estrictamente necesario para la seguridad del servicio (artículo 6.1.f del RGPD).',
};

export const flujoSupresion = [
  'El dato deja de usarse en cuanto recibimos la petición. No se sigue usando para atender consultas ni para contactar.',
  'Si no hay base legal para conservarlo, se suprime o se anonimiza de forma irreversible.',
  'Si hay base legal (factura, obligación tributaria o documentación mercantil), se conserva solo lo cubierto por esa base. Se indica a la persona qué se guarda, por qué y hasta cuándo.',
  'Al cumplirse el plazo, se suprime o se anonimiza.',
];
