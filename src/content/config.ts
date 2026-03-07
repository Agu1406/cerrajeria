import { defineCollection, z } from 'astro:content';

const barrios = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    introExtra: z.string(),
    llegadaTexto: z.string(),
    comoTrabajamos: z.string(),
    faqLlegada: z.string(),
    faqPrecio: z.string(),
    faqFestivos: z.string(),
    /** Fecha de última revisión del contenido (SEO frescura). Opcional. */
    actualizado: z.coerce.date().optional(),
  }),
});

/** Una entrada por barrio; contenido exclusivo para la página "Duplicado llaves coche" en esa zona. */
const duplicadoLlavesCocheBarrios = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    intro: z.string(),
    llegadaTexto: z.string(),
    faqPrecio: z.string().optional(),
    /** Fecha de última revisión del contenido (SEO frescura). Opcional. */
    actualizado: z.coerce.date().optional(),
  }),
});

/** Una entrada por barrio; contenido exclusivo para la página "Puertas antiokupas" en esa zona. */
const puertasAntiokupasBarrios = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    intro: z.string(),
    llegadaTexto: z.string(),
    faqPrecio: z.string().optional(),
    /** Fecha de última revisión del contenido (SEO frescura). Opcional. */
    actualizado: z.coerce.date().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    /** Imagen destacada (ruta desde public, ej. /images/blog/mi-post.webp). Opcional. */
    image: z.string().optional(),
    /** Si es true, no se muestra en el listado ni en producción. */
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  barrios,
  blog,
  'duplicado-llaves-coche-barrios': duplicadoLlavesCocheBarrios,
  'puertas-antiokupas-barrios': puertasAntiokupasBarrios,
};

