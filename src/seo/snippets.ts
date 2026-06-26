import { siteConfig } from '../config/site';

const PRECIO = siteConfig.precioAperturaDesde;
const TEL = siteConfig.telefono;

/** Título orientado a CTR para landings de cerrajero urgente por zona (<60 caracteres). */
export function buildBarrioUrgenteTitle(nombre: string, slug?: string): string {
  if (slug === 'getafe') {
    return `Cerrajero urgente Getafe 24h | Desde ${PRECIO.replace(' ', '')}`;
  }
  const withPrecio = `Cerrajero ${nombre} 24h · desde ${PRECIO}`;
  if (withPrecio.length <= 60) return withPrecio;
  return `Cerrajero 24h ${nombre} | Urgente · ${PRECIO}`;
}

/** Meta description con precio, tiempo de llegada y teléfono (<160 caracteres). */
export function buildBarrioUrgenteDescription(nombre: string, slug?: string): string {
  if (slug === 'getafe') {
    return `Cerrajero urgente en Getafe 24h. Erickson, base en Getafe, 10-20 min. Desde ${PRECIO.replace(' ', '')} IVA incl. Precio cerrado. ☎ ${TEL}.`;
  }
  return `Cerrajero urgente en ${nombre} 24h. Apertura sin romper desde ${PRECIO} IVA incl. Llegamos en 15-40 min. Llama: ${TEL}.`;
}
