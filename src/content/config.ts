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
  }),
});

export const collections = { barrios };

