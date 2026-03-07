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
    /** Opcional: párrafo extra para la página "Duplicado llaves coche" en este barrio. Si no se rellena, se usa llegadaTexto. */
    introDuplicadoLlavesCoche: z.string().optional(),
    /** Opcional: párrafo extra para la página "Puertas antiokupas" en este barrio (si se añade sección por barrio). */
    introPuertasAntiokupas: z.string().optional(),
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

export const collections = { barrios, blog };

