// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  /** Alineado con canonical en Layout (sin / final) y con Vercel trailingSlash: false. */
  trailingSlash: 'never',
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()]
  }
});