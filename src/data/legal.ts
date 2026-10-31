import { siteConfig } from '../config/site';
import { flujoSupresion, retention } from './retention.js';

export { flujoSupresion, retention };

export const legalRoutes = {
  aviso: '/aviso-legal',
  privacidad: '/politica-privacidad',
  cookies: '/politica-cookies',
  terminos: '/terminos',
  reembolsos: '/politica-reembolsos',
  derechos: '/derechos',
} as const;

/** Tipografías autoalojadas y fotos del negocio. No hay CDN de fuentes. */
export const assetLicenses = [
  {
    nombre: 'Source Sans 3',
    licencia: 'SIL Open Font License 1.1',
    uso: 'Texto de interfaz, autoalojada con @fontsource-variable.',
  },
  {
    nombre: 'Source Serif 4',
    licencia: 'SIL Open Font License 1.1',
    uso: 'Titulares, autoalojada con @fontsource-variable.',
  },
  {
    nombre: 'Fotografías',
    licencia: 'Material propio del negocio',
    uso: 'Trabajos realizados y servicios. No son bancos de imágenes.',
  },
] as const;

export const derechosOpciones = [
  { value: 'acceso', label: 'Acceso' },
  { value: 'rectificacion', label: 'Rectificación' },
  { value: 'supresion', label: 'Supresión' },
  { value: 'oposicion', label: 'Oposición' },
  { value: 'limitacion', label: 'Limitación' },
  { value: 'portabilidad', label: 'Portabilidad' },
] as const;

export type DerechoValue = (typeof derechosOpciones)[number]['value'];

export function domicilioLegal(): string {
  const d = siteConfig.direccion;
  if (!d) return '';
  return `${d.calle}, ${d.codigoPostal} ${d.localidad} (${siteConfig.ciudadPrincipal})`;
}
