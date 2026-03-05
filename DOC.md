<!-- Estilos personales del README, inspirados en tu ejemplo. -->
<style>
    h1, h2, h3 {
        text-align: center;
        border: 5px solid grey;
        padding: 20px
    }

    h4 {
        text-align: center;
        font-size: 16px;
    }
    p {
        text-indent: 20px;
        text-align: justify;
    }

    table {
        border: 1px solid white;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10%;
        margin-top: 10%;
    }
    th, td {
        border: 1px solid white;
        text-align: center;
    }
</style>

# Cerrajería 24h Madrid – Documentación del Proyecto

Este documento recoge **todo el proceso técnico** del proyecto de web para **cerrajería 24 horas en la Comunidad de Madrid**, incluyendo:

- Elección del **stack tecnológico** y justificación.
- **Estructura de carpetas** del proyecto.
- **Instalación y configuración** paso a paso.
- Comandos ejecutados/previstos con formato de bloque `bash`.
- Diseño de la **arquitectura SEO local por barrios**.
- Puntos clave de **SEO local, UX y rendimiento**.

La idea es que esta guía te permita:

- Recordar exactamente cómo se montó el proyecto.
- Poder repetir o adaptar el stack a otros negocios locales.
- Evolucionar la web (añadir barrios, servicios, etc.) sin perderte.

# Índice de contenido

* [**1. Objetivo del proyecto**](#1-objetivo-del-proyecto)
* [**2. Stack tecnológico elegido**](#2-stack-tecnológico-elegido)
    + [**2.1. Resumen rápido del stack**](#21-resumen-rápido-del-stack)
    + [**2.2. Por qué no WordPress / otros**](#22-por-qué-no-wordpress--otros)
* [**3. Estructura de archivos y carpetas**](#3-estructura-de-archivos-y-carpetas)
    + [**3.1. Estructura general del proyecto**](#31-estructura-general-del-proyecto)
    + [**3.2. Páginas y rutas principales**](#32-páginas-y-rutas-principales)
    + [**3.3. Componentes clave**](#33-componentes-clave)
    + [**3.4. Datos (barrios y municipios)**](#34-datos-barrios-y-municipios)
* [**4. Preparación del entorno**](#4-preparación-del-entorno)
    + [**4.1. Instalación de Node.js**](#41-instalación-de-nodejs)
    + [**4.2. Verificación de versiones**](#42-verificación-de-versiones)
* [**5. Creación y configuración del proyecto Astro**](#5-creación-y-configuración-del-proyecto-astro)
    + [**5.1. Inicialización del proyecto con Astro**](#51-inicialización-del-proyecto-con-astro)
    + [**5.2. Instalación de dependencias**](#52-instalación-de-dependencias)
    + [**5.3. Arranque del servidor de desarrollo**](#53-arranque-del-servidor-de-desarrollo)
* [**6. Integración de Tailwind CSS**](#6-integración-de-tailwind-css)
* [**7. Arquitectura SEO por barrios (rutas dinámicas)**](#7-arquitectura-seo-por-barrios-rutas-dinámicas)
    + [**7.1. Diseño de URLs**](#71-diseño-de-urls)
    + [**7.2. Plantilla dinámica de barrio**](#72-plantilla-dinámica-de-barrio)
    + [**7.3. Generación estática de páginas**](#73-generación-estática-de-páginas)
* [**8. Componentes UX críticos (botón de llamada, encabezado, pie)**](#8-componentes-ux-críticos-botón-de-llamada-encabezado-pie)
* [**9. SEO técnico y datos estructurados**](#9-seo-técnico-y-datos-estructurados)
    + [**9.1. Etiquetas `<title>` y `<meta>` básicas**](#91-etiquetas-title-y-meta-básicas)
    + [**9.2. Schema LocalBusiness (JSON-LD)**](#92-schema-localbusiness-json-ld)
* [**10. Despliegue en producción (Vercel / Netlify)**](#10-despliegue-en-producción-vercel--netlify)
* [**11. Checklist rápido para repetir el proyecto**](#11-checklist-rápido-para-repetir-el-proyecto)

| [**Siguiente**](#1-objetivo-del-proyecto) | [**Índice**](#índice-de-contenido) | [**Anterior**](#índice-de-contenido) |
|-------------------------------------------|------------------------------------|--------------------------------------|

# 1. Objetivo del proyecto

El propósito de esta web es **captar clientes de cerrajería 24 horas** en la **Comunidad de Madrid** mediante:

* Fuerte enfoque en **SEO local**.
* **Velocidad extrema** en móviles (gente buscando desde la calle, con prisa).
* **Arquitectura programática**: una página optimizada por cada barrio/zona.

No se prioriza (al menos en una primera fase) la complejidad de aplicación web, sino:

1. **Ser el primero en cargar**.
2. **Ofrecer la información justa** para que el usuario llame.
3. **Cubrir muchas combinaciones de búsqueda**: `cerrajero + barrio`, `cerrajería 24 horas + zona`, etc.

| [**Siguiente**](#2-stack-tecnológico-elegido) | [**Índice**](#índice-de-contenido) | [**Anterior**](#1-objetivo-del-proyecto) |
|-----------------------------------------------|------------------------------------|------------------------------------------|

# 2. Stack tecnológico elegido

## 2.1. Resumen rápido del stack

**Frontend / Generador de sitio**

- **Astro**: framework de generación estática / híbrida muy orientado a rendimiento.
    - Envío de **cero JavaScript por defecto** al cliente.
    - Soporte para **SSG** (Static Site Generation) perfecto para SEO.
    - Ideal para **muchas landing pages de contenido** (barrios, servicios).

**Estilos**

- **Tailwind CSS**:
    - Sistema de utilidades CSS que permite **diseños rápidos y consistentes**.
    - Elimina CSS no usado en producción, mejorando el **peso de la página**.

**Contenido**

- Inicialmente, contenido en **archivos `.astro`** y/o **Markdown**.
- Posible futura integración de un **Headless CMS** (ej. Decap CMS) si se quiere edición visual desde navegador.

**Despliegue**

- **Vercel** o **Netlify**:
    - Hosting estático con CDN global.
    - Deploys automáticos conectados a un repositorio (Git, si se desea en el futuro).

## 2.2. Por qué no WordPress / otros

- **WordPress (LAMP/LEMP)**:
    - Ventaja: panel muy amigable para marketing.
    - Inconveniente: requiere muchas optimizaciones (tema, plugins de caché, etc.) para llegar a **Core Web Vitals** excelentes.
    - Mayor superficie de ataque (seguridad) frente a un sitio estático.

- **Next.js / Nuxt / similares**:
    - Más orientados a aplicaciones web completas.
    - Para un sitio de captación local pura, **Astro es más simple y suele dar mejor rendimiento sin esfuerzo extra**.

Conclusión: **Astro + Tailwind** maximiza el equilibrio entre **simplicidad, velocidad y SEO técnico** para una web de cerrajería local.

| [**Siguiente**](#3-estructura-de-archivos-y-carpetas) | [**Índice**](#índice-de-contenido) | [**Anterior**](#2-stack-tecnológico-elegido) |
|-------------------------------------------------------|------------------------------------|----------------------------------------------|

# 3. Estructura de archivos y carpetas

Esta estructura es la **meta** del proyecto una vez inicializado Astro y añadidas las piezas específicas para cerrajería:

```bash
cerrajeria/
├── public/                     # Recursos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── Layout.astro        # Layout global (cabecera, pie, estilos base)
│   │   ├── CallButton.astro    # Botón flotante de llamada (click-to-call)
│   │   ├── Header.astro        # Encabezado con marca y navegación básica
│   │   └── Footer.astro        # Pie de página con datos de contacto / legal
│   ├── data/
│   │   └── barrios.ts          # Lista de barrios/zonas de Madrid (para SSG)
│   ├── pages/
│   │   ├── index.astro         # Página principal "Cerrajero 24h en Madrid"
│   │   └── barrios/
│   │       └── [barrio].astro  # Plantilla dinámica por barrio
│   └── styles/
│       └── globals.css         # (opcional) estilos globales adicionales
├── astro.config.mjs            # Configuración principal de Astro
├── tailwind.config.mjs         # Configuración de Tailwind CSS
├── postcss.config.cjs          # Configuración de PostCSS (si la genera Astro)
├── package.json                # Dependencias del proyecto y scripts npm
├── tsconfig.json               # Configuración de TypeScript (si se activa)
└── DOC.md                      # Este documento de referencia
```

## 3.1. Estructura general del proyecto

- La raíz del proyecto (`cerrajeria/`) contiene:
    - Configuraciones (`astro.config.mjs`, `tailwind.config.mjs`, `package.json`, etc.).
    - `DOC.md` como documentación principal.
- El código fuente vive en `src/`.

## 3.2. Páginas y rutas principales

- `/` → `src/pages/index.astro`
    - Home general: “Cerrajero 24 horas en Madrid”.
    - Presentación de servicios y llamada a la acción principal (teléfono).
    - Listado sintetizado de barrios con enlaces a cada landing.

- `/barrios/[barrio]` → `src/pages/barrios/[barrio].astro`
    - Plantilla dinámica.
    - Ejemplos de URLs:
        - `/barrios/chamberi`
        - `/barrios/vallecas`
        - `/barrios/carabanchel`

## 3.3. Componentes clave

- `Layout.astro`
    - Envuelve todas las páginas.
    - Define `<html>`, `<head>` y `<body>` comunes.
    - Punto ideal para inyectar:
        - Fuentes globales.
        - `CallButton.astro`.
        - Scripts de analytics (si se añaden).

- `CallButton.astro`
    - Botón fijo en la esquina inferior (sobre todo en móvil).
    - Enlace `tel:+34XXXXXXXXX`.

- `Header.astro` y `Footer.astro`
    - Encabezado: nombre comercial, posiblemente breve menú (Inicio, Barrios, Contacto).
    - Pie: datos legales, NIF, info de contacto, enlaces a políticas cuando existan.

## 3.4. Datos (barrios y municipios)

- `src/data/barrios.ts`
    - Exporta una lista/array de objetos con al menos:
        - `slug`: cadena para la URL (`"chamberi"`, `"lavapies"`, etc.).
        - `nombre`: nombre visible del barrio.
        - (Opcional) `tituloSEO`, `descripcionSEO`, `textoIntro`, etc.
    - Se usa para:
        - Generar rutas estáticas de barrios.
        - Rellenar contenido dinámico dentro de `[barrio].astro`.

| [**Siguiente**](#4-preparación-del-entorno) | [**Índice**](#índice-de-contenido) | [**Anterior**](#3-estructura-de-archivos-y-carpetas) |
|--------------------------------------------|------------------------------------|------------------------------------------------------|

# 4. Preparación del entorno

## 4.1. Instalación de Node.js

1. Descargar Node.js (versión LTS recomendada) desde:

    `https://nodejs.org`

2. Instalar siguiendo el asistente para Windows.

## 4.2. Verificación de versiones

En una terminal (PowerShell o similar), ejecutar:

```bash
node -v
npm -v
```

Si ambos comandos devuelven una versión (por ejemplo `v22.x.x` para Node y `10.x.x` para npm), se considera correcto.

| [**Siguiente**](#5-creación-y-configuración-del-proyecto-astro) | [**Índice**](#índice-de-contenido) | [**Anterior**](#4-preparación-del-entorno) |
|------------------------------------------------------------------|------------------------------------|--------------------------------------------|

# 5. Creación y configuración del proyecto Astro

Todo el proyecto vive en el directorio:

```bash
c:\Users\agust\Documents\Repositorios\cerrajeria
```

## 5.1. Inicialización del proyecto con Astro

Desde la carpeta `cerrajeria`, ejecutar en la terminal:

```bash
cd c:\Users\agust\Documents\Repositorios\cerrajeria
npm create astro@latest .
```

Durante el asistente de `npm create astro@latest .`:

- **Plantilla**: elegir una plantilla sencilla (ej. `Minimal` o `Blog`).
- **TypeScript**: recomendado **habilitarlo**.
- **Strict mode**: opcional, pero recomendable para mejores avisos de errores.

> Nota: Si en el futuro se rehace el proyecto desde cero, se puede borrar el contenido actual de la carpeta (dejando una copia de `DOC.md`) y volver a ejecutar estos pasos.

## 5.2. Instalación de dependencias

Si el asistente no las instala automáticamente, ejecutar:

```bash
npm install
```

## 5.3. Arranque del servidor de desarrollo

Para levantar la web en modo desarrollo:

```bash
npm run dev
```

Por defecto, Astro sirve la web en:

```bash
http://localhost:4321
```

Debería verse la página de bienvenida/base de Astro antes de personalizarla.

| [**Siguiente**](#6-integración-de-tailwind-css) | [**Índice**](#índice-de-contenido) | [**Anterior**](#5-creación-y-configuración-del-proyecto-astro) |
|-------------------------------------------------|------------------------------------|----------------------------------------------------------------|

# 6. Integración de Tailwind CSS

Con el proyecto Astro ya creado, se añade Tailwind CSS ejecutando:

```bash
npx astro add tailwind
```

El asistente de Astro:

- Crea/ajusta:
    - `tailwind.config.mjs`
    - `postcss.config.cjs` (u otro nombre similar, según versión).
    - Archivos de estilos base (por ejemplo `src/styles/global.css`).
- Añade la integración de Tailwind en `astro.config.mjs`.

Tras este paso, es posible usar clases de Tailwind directamente en los archivos `.astro`, por ejemplo:

```html
<h1 class="text-3xl font-bold text-center text-white bg-slate-900">
    Cerrajero 24h en Madrid
</h1>
```

| [**Siguiente**](#7-arquitectura-seo-por-barrios-rutas-dinámicas) | [**Índice**](#índice-de-contenido) | [**Anterior**](#6-integración-de-tailwind-css) |
|------------------------------------------------------------------|------------------------------------|-----------------------------------------------|

# 7. Arquitectura SEO por barrios (rutas dinámicas)

El objetivo es tener **una página optimizada por barrio/zona**, además de la home general.

## 7.1. Diseño de URLs

Estructura base:

- Home global:

    ```text
    /
    ```

- Página de cada barrio:

    ```text
    /barrios/[slug-del-barrio]
    ```

Ejemplos:

- `/barrios/chamberi`
- `/barrios/salamanca`
- `/barrios/carabanchel`
- `/barrios/vallecas`

## 7.2. Plantilla dinámica de barrio

Archivo clave:

```bash
src/pages/barrios/[barrio].astro
```

Este archivo:

- Define la estructura de una **landing de barrio**:
    - Título principal (H1) adaptado al barrio.
    - Bloques de texto orientados a emergencias, tiempos de llegada, etc.
    - Listado de servicios (aperturas de puertas, cambio de bombines, etc.).
- Recibe datos desde:
    - `src/data/barrios.ts`, donde vive la lista de barrios con su slug y otros datos.

## 7.3. Generación estática de páginas

Para que Astro genere **todas las páginas de barrio en build**, se usa la función de `getStaticPaths` (o equivalente según versión de Astro) en `[barrio].astro`:

- Recorre el array de `barrios` de `src/data/barrios.ts`.
- Devuelve una ruta estática por cada barrio.

De esta forma:

- Google y otros buscadores obtienen **HTML estático completo** para cada barrio.
- No se depende de JavaScript en el cliente para mostrar el contenido.

| [**Siguiente**](#8-componentes-ux-críticos-botón-de-llamada-encabezado-pie) | [**Índice**](#índice-de-contenido) | [**Anterior**](#7-arquitectura-seo-por-barrios-rutas-dinámicas) |
|-----------------------------------------------------------------------------|------------------------------------|-----------------------------------------------------------------|

# 8. Componentes UX críticos (botón de llamada, encabezado, pie)

Para minimizar el rebote y maximizar llamadas:

- **Botón de llamada fijo (`CallButton.astro`)**:
    - Posicionado en la esquina inferior derecha en móvil.
    - Color llamativo (por ejemplo, verde o naranja).
    - Enlace `tel:+34XXXXXXXXX` para llamada directa.

- **Encabezado (`Header.astro`)**:
    - Muestra el nombre comercial.
    - Puede incluir un pequeño botón de “Llamar ahora”.

- **Pie de página (`Footer.astro`)**:
    - Información de contacto completa.
    - Horario declarado como “24 horas”.
    - Enlaces futuros a política de privacidad / aviso legal.

La combinación de estos elementos ayuda a:

- Convertir mejor el tráfico que llega de Google.
- Dar sensación de confianza y profesionalidad.

| [**Siguiente**](#9-seo-técnico-y-datos-estructurados) | [**Índice**](#índice-de-contenido) | [**Anterior**](#8-componentes-ux-críticos-botón-de-llamada-encabezado-pie) |
|-------------------------------------------------------|------------------------------------|------------------------------------------------------------------------------|

# 9. SEO técnico y datos estructurados

## 9.1. Etiquetas `<title>` y `<meta>` básicas

Cada página debe incluir:

- `<title>` descriptivo, por ejemplo:
    - Home: `Cerrajero 24 horas en Madrid | Aperturas urgentes`
    - Barrio: `Cerrajero 24h en Chamberí (Madrid) | Aperturas urgentes`

- `<meta name="description">` orientada a:
    - Emergencias (`apertura de puertas`, `sin daños`, `llegada en X minutos`).
    - Zona concreta (`barrio`, `distrito`, `Madrid`).

En Astro, estas etiquetas pueden declararse en el bloque `<head>` de cada página o desde el `Layout.astro` recibiendo props.

## 9.2. Schema LocalBusiness (JSON-LD)

Se debe incluir un bloque de **JSON-LD** con el esquema `LocalBusiness` (o `EmergencyService`, según se decida) para:

- Indicar a Google:
    - Nombre comercial.
    - Dirección / área de servicio.
    - Teléfono.
    - Horario (24 horas).

Este bloque se suele insertar en el `<head>` mediante una etiqueta `<script type="application/ld+json">` con el JSON correspondiente.

| [**Siguiente**](#10-despliegue-en-producción-vercel--netlify) | [**Índice**](#índice-de-contenido) | [**Anterior**](#9-seo-técnico-y-datos-estructurados) |
|----------------------------------------------------------------|------------------------------------|------------------------------------------------------|

# 10. Despliegue en producción (Vercel / Netlify)

## 10.1. Build de producción

Para generar la versión estática lista para subir:

```bash
npm run build
```

Esto crea una carpeta (normalmente `dist/`) con el HTML estático, CSS y assets.

## 10.2. Despliegue en Vercel (flujo general)

1. Crear cuenta en **Vercel**.
2. (Opcional, pero recomendado) Inicializar Git en el proyecto:

    ```bash
    git init
    git add .
    git commit -m "Proyecto base cerrajería 24h Madrid con Astro"
    ```

3. Subir a un repositorio (GitHub, GitLab, etc.).
4. Conectar el repositorio a Vercel:
    - Elegir el framework **Astro** cuando lo detecte.
    - Aceptar configuración por defecto.
5. Vercel ejecutará `npm install` y `npm run build` automáticamente.

## 10.3. Despliegue en Netlify (alternativa)

1. Crear cuenta en **Netlify**.
2. Conectar el repositorio.
3. Configurar build:
    - Comando de build: `npm run build`
    - Directorio de salida: `dist`

| [**Siguiente**](#11-checklist-rápido-para-repetir-el-proyecto) | [**Índice**](#índice-de-contenido) | [**Anterior**](#10-despliegue-en-producción-vercel--netlify) |
|-----------------------------------------------------------------|------------------------------------|----------------------------------------------------------------|

# 11. Checklist rápido para repetir el proyecto

1. **Entorno**
    - Instalar Node.js LTS.
    - Verificar con:

        ```bash
        node -v
        npm -v
        ```

2. **Crear proyecto Astro**

    ```bash
    cd c:\Users\agust\Documents\Repositorios\cerrajeria
    npm create astro@latest .
    npm install
    npm run dev
    ```

3. **Añadir Tailwind CSS**

    ```bash
    npx astro add tailwind
    ```

4. **Definir estructura**
    - Crear componentes: `Layout.astro`, `CallButton.astro`, `Header.astro`, `Footer.astro`.
    - Crear `src/data/barrios.ts` con lista de barrios.
    - Crear `src/pages/index.astro` (home).
    - Crear `src/pages/barrios/[barrio].astro` (landing dinámica por barrio).

5. **SEO básico**
    - Configurar `<title>` y `<meta description>` en cada página.
    - Añadir JSON-LD de `LocalBusiness` en el `<head>`.

6. **UX de conversión**
    - Implementar botón flotante de llamada (`CallButton.astro`).
    - Verificar que se ve perfecto en móvil.

7. **Build y despliegue**

    ```bash
    npm run build
    ```

    - Conectar proyecto a Vercel o Netlify.

Con estos pasos, se obtiene una **base sólida para una web de cerrajería 24h en Madrid optimizada para SEO local**, fácilmente ampliable añadiendo nuevos barrios y contenidos.

---

# Bitácora del desarrollo

Esta sección recoge, en orden cronológico, **lo que realmente se ha hecho en el proyecto**, con comandos exactos y decisiones tomadas. Sirve como diario técnico.

## Sesión 1 – Estado inicial del proyecto

### 1. Verificación del contenido de la carpeta `cerrajeria`

Comando ejecutado:

```bash
cd c:\Users\agust\Documents\Repositorios\cerrajeria
ls
```

Resultado relevante:

- El directorio ya contenía:
    - `.astro/`
    - `.vscode/`
    - `node_modules/`
    - `public/`
    - `src/`
    - `astro.config.mjs`
    - `package.json`
    - `tsconfig.json`
    - `README.md`
    - `DOC.md` (este documento)

Conclusión:

- El proyecto **Astro ya estaba inicializado** antes de esta sesión (no ha sido necesario volver a ejecutar `npm create astro@latest .`).

### 2. Revisión de dependencias y configuración de Astro

Archivos inspeccionados:

- `package.json`
- `astro.config.mjs`

Contenido relevante de `package.json`:

```bash
{
  "name": "cerrajeria",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.2.1",
    "astro": "^5.17.1",
    "tailwindcss": "^4.2.1"
  }
}
```

Contenido relevante de `astro.config.mjs`:

```bash
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```

Conclusiones:

- **Astro ya está configurado** con la versión `^5.17.1`.
- **Tailwind CSS ya está integrado** mediante `@tailwindcss/vite`.
- No es necesario ejecutar `npx astro add tailwind`, porque:
    - `tailwindcss` y `@tailwindcss/vite` ya figuran en `dependencies`.
    - `astro.config.mjs` ya incluye el plugin de Tailwind para Vite.

### 3. Revisión del contenido inicial de `src/pages/index.astro`

Archivo inspeccionado:

```bash
src/pages/index.astro
```

Contenido inicial:

```bash
---

---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro</title>
  </head>
  <body>
    <h1>Astro</h1>
  </body>
</html>
```

Conclusiones:

- La página principal aún muestra el contenido **por defecto de Astro**.
- Próximos pasos:
    - Sustituir esta home por una **landing optimizada**: “Cerrajero 24h en Madrid”.
    - Cambiar el idioma del documento a `lang="es"`.
    - Incluir estructura y textos orientados a SEO local y conversión.

## Sesión 2 – Configuración de datos globales y primeras páginas

### 1. Decisiones de negocio y SEO

Datos facilitados y decisiones tomadas:

- **Nombre comercial temporal**: `cerrajerosmadrid`
- **Número de teléfono urgente**: `659 81 05 70`
- **Primeros barrios/zonas a trabajar**:
    - Getafe
    - Las Rozas
    - Pinto
    - Leganés

Justificación SEO:

- Usar un nombre comercial alineado con las búsquedas (`cerrajeros madrid`) puede ayudar ligeramente en SEO, especialmente si coincide con el dominio.
- Trabajar landings específicas para barrios cercanos a Madrid capital permite atacar búsquedas tipo:
    - `cerrajero 24h getafe`
    - `cerrajeros urgentes las rozas`
    - `cerrajero pinto`
    - `cerrajeros leganes 24 horas`

### 2. Datos globales como configuración (no “dispersos” en el código)

En lugar de escribir nombre comercial y teléfono “a mano” en cada página, se ha creado un **módulo de configuración centralizada**:

- Archivo creado:

```bash
src/config/site.ts
```

Contenido relevante:

```bash
export const siteConfig = {
  nombreComercial: 'cerrajerosmadrid',
  telefono: '659 81 05 70',
  telefonoHref: 'tel:+34659810570',
  ciudadPrincipal: 'Madrid',
  titleHome: 'Cerrajero 24 horas en Madrid | cerrajerosmadrid',
  descriptionHome:
    'Cerrajero 24 horas en Madrid. Apertura de puertas sin daños, cambios de bombín y urgencias rápidas en toda la Comunidad de Madrid. Llama ahora y hablamos en minutos.',
};
```

Motivo técnico:

- **Buenas prácticas de desarrollo**:
    - Los datos que pueden cambiar (nombre, teléfono, ciudad principal) se guardan en un solo lugar.
    - El resto de páginas/ componentes importan `siteConfig`, evitando duplicar literalmente el número o el nombre muchas veces.
- **Facilidad de mantenimiento**:
    - Si en el futuro cambia el nombre comercial o el teléfono, bastará con editar `src/config/site.ts`.

Respuesta a la duda planteada (`¿constantes globales?`):

- En aplicaciones modernas se suele evitar tener “variables globales” repartidas por todo el código.
- Lo que se hace (y hemos hecho aquí) es un **módulo de configuración** que exporta un objeto (`siteConfig`):
    - Es fácil de testear.
    - Es sencillo de importar solo donde haga falta.
    - Es el patrón habitual en proyectos profesionales.

### 3. Lista de barrios iniciales (Getafe, Las Rozas, Pinto, Leganés)

Para seguir una arquitectura programática (SEO por barrios), se ha creado un archivo de datos:

- Archivo creado:

```bash
src/data/barrios.ts
```

Contenido relevante:

```bash
export type Barrio = {
  slug: string;
  nombre: string;
};

export const barrios: Barrio[] = [
  { slug: 'getafe', nombre: 'Getafe' },
  { slug: 'las-rozas', nombre: 'Las Rozas' },
  { slug: 'pinto', nombre: 'Pinto' },
  { slug: 'leganes', nombre: 'Leganés' },
];
```

Uso:

- `slug` se utiliza en las URLs (`/barrios/getafe`, `/barrios/las-rozas`, etc.).
- `nombre` se usa en los textos visibles (títulos, descripciones, etc.).
- Esta lista se reutiliza:
    - En la home, para mostrar los barrios iniciales.
    - En las rutas estáticas de la plantilla dinámica de barrio (`[barrio].astro`).

### 4. Creación de componentes base (Layout, Header, Footer, CallButton)

Con Tailwind ya integrado, se han creado los componentes básicos en `src/components/`:

1. **Layout global**

    - Archivo:

    ```bash
    src/components/Layout.astro
    ```

    - Función:
        - Define el esqueleto HTML (`<html>`, `<head>`, `<body>`).
        - Importa `../styles/global.css` para activar Tailwind.
        - Aplica `<title>` y `<meta description>`:
            - Usa valores por defecto de `siteConfig` para la home.
            - Permite que cada página pase su propio `title` y `description`.
        - Inserta `Header`, `Footer` y `CallButton` en todas las páginas.

2. **Header (encabezado)**

    - Archivo:

    ```bash
    src/components/Header.astro
    ```

    - Muestra:
        - `siteConfig.nombreComercial` como marca.
        - Un botón “Llamar ahora” con `siteConfig.telefono` (visible en escritorio).

3. **Footer (pie de página)**

    - Archivo:

    ```bash
    src/components/Footer.astro
    ```

    - Muestra:
        - Año actual.
        - Nombre comercial.
        - Ciudad principal (`siteConfig.ciudadPrincipal`).
        - Teléfono urgente con enlace `tel:`.

4. **CallButton (botón flotante de llamada en móvil)**

    - Archivo:

    ```bash
    src/components/CallButton.astro
    ```

    - Características:
        - Botón flotante fijo en la esquina inferior derecha (`position: fixed`).
        - Visible solo en móvil (`sm:hidden`).
        - Enlace `tel:+34659810570`.
        - Refuerza la conversión en situaciones de emergencia.

### 5. Sustitución de la home por una landing SEO en español

Archivo modificado:

```bash
src/pages/index.astro
```

Cambios clave:

- Se eliminó el HTML de Astro por defecto y se reemplazó por:
    - Uso del componente `Layout` (estructura común).
    - Importación de `siteConfig` para mostrar nombre y teléfono.
    - Importación de `barrios` para listar los barrios iniciales.
    - Contenido orientado a:
        - **SEO local** (cerrajero 24h en Madrid).
        - **Conversión** (botones de llamada, beneficios claros).

La home ahora:

- Está en **español** y orientada a “Cerrajeros 24h en Madrid”.
- Muestra un bloque de texto explicando servicios y urgencias.
- Incluye un listado de barrios (Getafe, Las Rozas, Pinto, Leganés) con enlaces a sus futuras páginas:
    - `/barrios/getafe`
    - `/barrios/las-rozas`
    - `/barrios/pinto`
    - `/barrios/leganes`

### 6. Creación de la plantilla dinámica de barrio `[barrio].astro`

Archivo creado:

```bash
src/pages/barrios/[barrio].astro
```

Responsabilidades:

- Generar una **landing específica por barrio** usando:
    - Datos del barrio (`slug`, `nombre`) desde `src/data/barrios.ts`.
    - Textos adaptados (por ejemplo, “Cerrajeros 24 horas en Getafe”).
- Definir rutas estáticas mediante `getStaticPaths`:
    - Por cada entrada en `barrios`, se crea una página estática:
        - `/barrios/getafe`
        - `/barrios/las-rozas`
        - `/barrios/pinto`
        - `/barrios/leganes`
- Reutilizar el `Layout`:
    - Pasando un `title` y `description` específicos por barrio para SEO.

Resultado:

- La arquitectura ya está preparada para SEO local:
    - Home general potente.
    - Landings independientes por barrio.
    - Datos globales centralizados (`siteConfig`).
    - Posibilidad de **añadir más barrios** simplemente editando `src/data/barrios.ts`.

## Sesión 3 – Menú, páginas de listado y contacto, y contenido adicional

### 1. Mejora del encabezado con menú de navegación

Archivo modificado:

```bash
src/components/Header.astro
```

Cambios clave:

- Se ha añadido un **menú superior sencillo** visible en escritorio (`sm:flex`):
    - Enlaces:
        - `Inicio` → `/`
        - `Barrios` → `/barrios`
        - `Contacto` → `/contacto`
    - Botón de llamada:
        - `Llamar ahora · 659 81 05 70` usando `siteConfig.telefonoHref`.
- El diseño mantiene:
    - Fondo semitransparente con `backdrop-blur`.
    - Borde inferior para separar claramente el header del contenido.

Motivo:

- Seguir buenas prácticas UX:
    - Navegación clara para usuarios que quieran ver barrios o contactar sin urgencia.
    - Mantener el foco en la llamada en escritorio con un botón visible.

### 2. Página de listado de barrios `/barrios`

Archivo creado:

```bash
src/pages/barrios/index.astro
```

Funcionalidad:

- Página que lista todos los barrios definidos en `src/data/barrios.ts`.
- Cada barrio:
    - Muestra `nombre`.
    - Enlace a su landing: `/barrios/[slug]`.
    - Texto descriptivo corto optimizado para SEO local (ej: “Cerrajero urgente 24h en Getafe”).

SEO:

- `title` específico:
    - `Cerrajeros por barrios en Madrid | cerrajerosmadrid`
- `meta description` orientada a:
    - “Listado de barrios y zonas donde ofrecemos servicio de cerrajería urgente 24 horas en Madrid”.

### 3. Página de contacto `/contacto` con formulario

Archivo creado:

```bash
src/pages/contacto.astro
```

Contenido:

- Bloque principal:
    - Explica que **para emergencias** lo más rápido es llamar.
    - Repite el teléfono de urgencias con enlace `tel:` y horario 24/7.
- Aside con formulario (consultas no urgentes):
    - Campos:
        - `Nombre`
        - `Teléfono`
        - `Mensaje`
    - Botón: “Enviar consulta”.

Notas técnicas:

- De momento el formulario es solo de **presentación** (no hay backend configurado).
- En el futuro se puede conectar a:
    - Un endpoint de Astro.
    - Un servicio externo (Formspree, etc.).

SEO:

- `title` específico para contacto:
    - `Contacto | cerrajerosmadrid – Cerrajeros 24h en Madrid`
- `meta description` enfocada a:
    - “Contacta con cerrajerosmadrid para urgencias de cerrajería 24 horas en Madrid…”.

### 4. Refuerzo de contenido SEO y confianza en la home

Archivo modificado:

```bash
src/pages/index.astro
```

Cambios realizados:

- Se ha ajustado el párrafo de confianza para:
    - Recalcar:
        - rapidez,
        - apertura sin daños cuando sea posible,
        - explicación del precio antes de empezar.
- Se han añadido **tres tarjetas de valor**:
    - “Transparencia en los precios”
    - “Formación y herramientas”
    - “Cobertura real en Madrid” (mencionando Getafe, Las Rozas, Pinto y Leganés).

Además, se ha creado una **mini sección de preguntas frecuentes (FAQ)**:

- Preguntas:
    - “¿Cuánto tardáis en llegar?”
    - “¿Rompéis siempre la cerradura?”
    - “¿Trabajáis noches y festivos?”
- Objetivo:
    - Resolver dudas típicas que los usuarios tienen antes de llamar.
    - Aportar más contexto semántico para SEO sin rellenar con texto vacío.

Resultado:

- La home ahora:
    - Está mejor estructurada para transmitir confianza.
    - Incluye más contenido relevante para SEO sin dejar de ser directa y orientada a conversión.
    - Permite navegar fácilmente a `/barrios` y `/contacto`.

## Sesión 4 – Modelado de servicios y refuerzo SEO en home y barrios

### 1. Modelado de servicios de cerrajería en un módulo de datos

Para evitar escribir descripciones de servicios a mano en cada página, se ha creado un **módulo de datos centralizado**:

- Archivo creado:

```bash
src/data/servicios.ts
```

Estructura:

```bash
export type Servicio = {
  slug: string;
  nombre: string;
  categoria: 'aperturas' | 'cerraduras' | 'ventanas' | 'otras';
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
];
```

Motivos:

- **Buenas prácticas de desarrollo**:
    - Los servicios viven en un único lugar (`src/data/servicios.ts`).
    - Se pueden reutilizar en la home, en la página de servicios y en las landings de barrio.
- **SEO**:
    - Permite repetir de forma coherente descripciones cortas optimizadas (apertura de puertas, cambio de cerradura, arreglos de ventanas oscilobatientes/osciloparalelas, etc.).

### 2. Actualización del header: enlace a “Servicios”

Archivo modificado:

```bash
src/components/Header.astro
```

Cambio:

- Se añadió un enlace adicional en el menú:
    - `Servicios` → `/servicios`

Objetivo:

- Facilitar el acceso directo a un listado completo de trabajos de cerrajería, tanto para usuarios como para motores de búsqueda.

### 3. Creación de la página `/servicios`

Archivo creado:

```bash
src/pages/servicios.astro
```

Contenido:

- Importa:
    - `Layout`
    - `siteConfig`
    - `servicios` (desde `src/data/servicios.ts`).
- Define categorías legibles:
    - “Aperturas y urgencias”
    - “Cerraduras y bombines”
    - “Ventanas y herrajes”
    - “Otros trabajos de cerrajería”
- Para cada categoría:
    - Filtra los servicios por `categoria`.
    - Muestra tarjetas con:
        - `nombre`
        - `descripcionCorta`

SEO:

- `title`:
    - `Servicios de cerrajería 24h en Madrid | cerrajerosmadrid`
- `meta description`:
    - Texto corto que menciona explicitamente:
        - apertura de puertas,
        - cambio e instalación de cerraduras,
        - arreglos de ventanas oscilobatientes, etc.

### 4. Refuerzo de servicios en la home

Archivo modificado:

```bash
src/pages/index.astro
```

Cambios:

- Se importa el módulo de servicios:

    ```bash
    import { servicios } from '../data/servicios';
    ```

- En la lista inicial de bullets se ha ajustado el texto para:
    - Mencionar específicamente:
        - cambio de cerraduras,
        - arreglos de ventanas oscilobatientes y osciloparalelas.

- Se ha añadido una nueva sección:
    - Título: “Servicios destacados de cerrajerosmadrid”.
    - Lista de tarjetas usando `servicios.slice(0, 6)` para mostrar una selección de servicios.
    - Enlace explicito a la página `/servicios`:
        - Texto: “ver el listado completo en la página de servicios de cerrajería”.

Resultado:

- La home ahora:
    - Refleja mejor el rango real de servicios (incluyendo ventanas oscilobatientes/osciloparalelas).
    - Introduce un bloque adicional de contenido SEO-friendly sin perder la orientación a conversión.

### 5. Refuerzo de servicios en las landings de barrio

Archivo modificado:

```bash
src/pages/barrios/[barrio].astro
```

Cambios:

- Importación del módulo de servicios:

    ```bash
    import { servicios } from '../../data/servicios';
    ```

- Ajuste de las tres tarjetas principales:
    - “Urgencias sin daños”
    - “Cambio e instalación de cerraduras” (reforzando mensaje de seguridad en el barrio concreto).
    - “Ventanas y herrajes” (mencionando arreglos de oscilobatientes y osciloparalelas).

- Nueva sección “Servicios habituales de cerrajería en [Barrio]”:
    - Lista (bullet points) de varios servicios tomados de `servicios.slice(0, 5)`.
    - Párrafo final aclarando que, aunque no se vea un servicio concreto, es probable que también se ofrezca.

Objetivo:

- Cada página de barrio:
    - Gana contenido adicional relevante y específico sobre servicios.
    - Mantiene una estructura clara y repetible:
        - Introducción,
        - CTA (botón de llamada),
        - Tres bloques clave de valor,
        - Lista de servicios habituales.

## Sesión 5 – SEO técnico: canonical, JSON-LD, sitemap y robots.txt

### 1. Añadir `baseUrl` en la configuración del sitio

Archivo modificado:

```bash
src/config/site.ts
```

Cambio:

- Se añadió una nueva propiedad:

```bash
baseUrl: 'https://loscerrajerosmadrid.es',
```

Uso previsto:

- Cuando se compre el dominio definitivo (por ejemplo, `https://cerrajerosmadrid.es`), será necesario:
    - En este caso ya se ha establecido el dominio real: `https://loscerrajerosmadrid.es`.
- Esta URL base se utiliza en:
    - `canonical` de cada página.
    - JSON-LD `LocalBusiness`.
    - `sitemap.xml`.
    - `robots.txt`.

### 2. Etiqueta `canonical` y JSON-LD LocalBusiness en el layout

Archivo modificado:

```bash
src/components/Layout.astro
```

Cambios:

1. **Etiqueta `<link rel="canonical">`**:

    - Se añade solo si `siteConfig.baseUrl` ya no es el valor por defecto.
    - Usa `Astro.url.pathname` para obtener la ruta actual.

    Lógica básica:

    ```bash
    {siteConfig.baseUrl !== 'https://TU-DOMINIO-AQUI' && (
      <link rel="canonical" href={`${siteConfig.baseUrl}${Astro.url.pathname}`} />
    )}
    ```

2. **Bloque JSON-LD `LocalBusiness`**:

    - Se inserta un `<script type="application/ld+json">` en el `<head>`.
    - Describe el negocio como un `LocalBusiness` que:
        - Opera en la Comunidad de Madrid.
        - Tiene horario 24/7.
        - Utiliza el teléfono y URL del sitio.
    - Solo se escribe si `baseUrl` se ha actualizado (no se usa el valor por defecto).

    Resumen de los campos principales:

    - `@type`: `LocalBusiness`
    - `name`: `siteConfig.nombreComercial`
    - `url`: `siteConfig.baseUrl`
    - `telephone`: `siteConfig.telefono`
    - `areaServed`: Comunidad de Madrid
    - `openingHoursSpecification`: todos los días, 00:00–23:59

Objetivo:

- Ofrecer a Google y otros buscadores una descripción clara del negocio de cerrajería, mejorando:
    - Aparición en resultados enriquecidos.
    - Comprensión del área de servicio y horario.

### 3. Generación de `robots.txt`

Archivo creado:

```bash
src/pages/robots.txt.ts
```

Características:

- Implementa un handler `GET` (tipo `APIRoute`) que responde con:

```bash
User-agent: *
Allow: /

Sitemap: https://TU-DOMINIO-REAL/sitemap.xml
Host: TU-DOMINIO-REAL
```

- Mientras `baseUrl` siga con el valor por defecto, usa `https://example.com` como placeholder, pero:
    - Una vez se actualice `siteConfig.baseUrl`, el `robots.txt` reflejará automáticamente el dominio correcto.

Objetivo:

- Indicar a los crawlers que el sitio es rastreable (`Allow: /`).
- Señalar dónde está el `sitemap.xml`.

### 4. Generación de `sitemap.xml`

Archivo creado:

```bash
src/pages/sitemap.xml.ts
```

Características:

- También implementa un handler `GET` (tipo `APIRoute`).
- Usa `siteConfig.baseUrl` (o `https://example.com` como fallback) para construir URLs absolutas.
- Incluye las rutas:
    - `/`
    - `/servicios`
    - `/barrios`
    - `/contacto`
    - Todas las páginas de barrio dinámico a partir de `src/data/barrios.ts`:
        - `/barrios/getafe`
        - `/barrios/las-rozas`
        - `/barrios/pinto`
        - `/barrios/leganes`
- Para cada URL se define:
    - `<loc>`: `baseUrl + path`
    - `<changefreq>`: `daily` (se puede ajustar después)
    - `<priority>`:
        - `1.0` para `/`
        - `0.8` para el resto

Objetivo:

- Facilitar a buscadores el descubrimiento completo de todas las páginas importantes del sitio.
- Mantener el sitemap sincronizado con:
    - Las páginas estáticas principales.
    - Los barrios definidos en `src/data/barrios.ts`.

### 5. Resumen del estado SEO técnico tras esta sesión

- **Correcto**:
    - Arquitectura SSG con Astro.
    - Páginas estructuradas y con contenido real (home, servicios, barrios, contacto).
    - Datos globales en `siteConfig`, `barrios` y `servicios`.
    - Menú coherente y botón de llamada flotante en móvil.
    - `canonical` + JSON-LD `LocalBusiness` listos (a la espera del dominio real).
    - `robots.txt` y `sitemap.xml` generados dinámicamente.

- **Pendiente tras compra de dominio**:
    - Verificar en producción (una vez propagado el dominio):
        - Que `/robots.txt` y `/sitemap.xml` sirven el dominio correcto.
        - Que las URLs `canonical` apuntan al dominio final.

## Sesión 6 – Conexión del dominio loscerrajerosmadrid.es con Vercel (pendiente de DNS)

En esta sesión se ha establecido ya el dominio definitivo adquirido:

- Dominio: `loscerrajerosmadrid.es`
- Proveedor: Dinahosting.

### 1. Actualización de `baseUrl` a `https://loscerrajerosmadrid.es`

Archivo modificado:

```bash
src/config/site.ts
```

Cambio realizado:

```bash
baseUrl: 'https://loscerrajerosmadrid.es',
```

Efectos:

- A partir de ahora:
    - Las etiquetas `canonical` generadas en `Layout.astro` usarán `https://loscerrajerosmadrid.es/...`.
    - El JSON-LD `LocalBusiness` usará la URL `https://loscerrajerosmadrid.es`.
    - `/robots.txt` y `/sitemap.xml` se generarán apuntando a `https://loscerrajerosmadrid.es`.

### 2. Pasos pendientes en Dinahosting y Vercel (resumen operativo)

> Nota: estos pasos se realizarán desde los paneles web de Dinahosting y Vercel, no desde el código.

**En Vercel (proyecto `cerrajeria`)**

1. Ir a la sección del proyecto en Vercel.
2. Abrir la pestaña **Domains** o **Settings → Domains**.
3. Añadir el dominio:

    - `loscerrajerosmadrid.es`

4. Vercel mostrará las instrucciones DNS específicas:
    - Normalmente:
        - Si se usan **nameservers de Dinahosting**:
            - Crear registros `A` o `CNAME` apuntando a Vercel (suelen ser uno o varios registros `A` o un `CNAME` tipo `cname.vercel-dns.com`).
        - O cambiar los **nameservers** a los de Vercel si se usa Vercel DNS (opcional).

**En Dinahosting (panel de control del dominio)**

1. Localizar el dominio `loscerrajerosmadrid.es`.
2. Ir a la gestión de **DNS**.
3. Crear/editar los registros según indique Vercel, por ejemplo:
    - Un `A` para el root (`@`) apuntando a una IP de Vercel o
    - Un `CNAME` para `www` apuntando al dominio de Vercel.
4. Guardar los cambios y esperar la propagación DNS (normalmente minutos, a veces hasta 24 horas).

### 3. Qué comprobar después de configurar el dominio

Una vez propagado:

- Visitar:
    - `https://loscerrajerosmadrid.es/`
    - Comprobar que carga la misma web que `https://cerrajeria-eight.vercel.app/`.
- Verificar:
    - Código fuente (`<head>`) para ver:
        - `<link rel="canonical" href="https://loscerrajerosmadrid.es/...">`
        - El bloque JSON-LD con `"url": "https://loscerrajerosmadrid.es"`.
    - Ficheros:
        - `https://loscerrajerosmadrid.es/robots.txt`
        - `https://loscerrajerosmadrid.es/sitemap.xml`

Si todo apunta correctamente al dominio `loscerrajerosmadrid.es`, la configuración de dominio y SEO técnico quedará completada.

## Sesión 7 – Integración de imágenes en la interfaz

En esta sesión se han empezado a usar las primeras imágenes disponibles en `public/images` para mejorar la confianza visual y seguir cuidando la velocidad de carga:

- `public/images/cerrajero-24h-madrid-hero.png`
- `public/images/apertura-puerta-blindada.png`

> Nota: en el futuro se recomienda sustituirlas por versiones optimizadas en formato WebP (`.webp`) con menor peso, manteniendo los mismos nombres o ajustando las rutas en el código.

### 1. Imagen principal (hero) en la home

Archivo modificado:

```bash
src/pages/index.astro
```

Se ha añadido una nueva sección bajo el bloque principal de hero textual:

- Estructura:
    - Columna de texto explicando:
        - Que se trabaja con familias, comunidades y negocios.
        - Objetivo de abrir la puerta rápido, con poco daño y precio claro.
    - Columna con una imagen:

```bash
<img
  src="/images/cerrajero-24h-madrid-hero.png"
  alt="Cerrajero 24 horas abriendo una puerta blindada en un portal de Madrid"
  class="h-full w-full object-cover"
  loading="lazy"
/>
```

Motivos:

- Refuerza visualmente el mensaje de urgencia y profesionalidad.
- `alt` descriptivo y orientado a contexto real (no keyword stuffing).
- `loading="lazy"` ayuda a no bloquear el render inicial en móviles.

### 2. Imagen de apertura de puerta en la página de servicios

Archivo modificado:

```bash
src/pages/servicios.astro
```

Cambio:

- En la categoría `aperturas` se ha añadido una imagen ilustrativa bajo la lista de servicios:

```bash
{categoria.id === 'aperturas' && (
  <div class="mt-2 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
    <img
      src="/images/apertura-puerta-blindada.png"
      alt="Detalle de apertura de cerradura blindada por un cerrajero profesional"
      class="h-full w-full object-cover"
      loading="lazy"
    />
  </div>
)}
```

Objetivo:

- Visualizar mejor el servicio de **apertura de puertas blindadas**.
- Mantener coherencia estética con el resto de la web (bordes redondeados, fondo oscuro, Tailwind).
- Mantener buenas prácticas:
    - `alt` informativo.
    - `loading="lazy"` para no penalizar rendimiento.

Estado actual de imágenes:

- Se han integrado 2 imágenes claves:
    - Una para el hero de la home.
    - Una para la sección de aperturas en `/servicios`.
- Queda abierta la posibilidad de:
    - Añadir imágenes específicas para ventanas oscilobatientes y otros servicios.
    - Sustituir las `.png` actuales por `.webp` más ligeras en el futuro.

## Sesión 8 – Afinado de la home inspirada en diseños de Stitch

Tras revisar los diseños propuestos por Google Stitch, se han incorporado algunas ideas de UI/UX manteniendo la arquitectura y el código actuales en Astro + Tailwind.

### 1. Cinta de “Servicio 24 horas” con indicador de urgencia

Archivo modificado:

```bash
src/pages/index.astro
```

Cambio:

- Se ha sustituido el texto simple inicial por una **píldora visual**:
    - Fondo semitransparente verde.
    - Pequeño punto animado (`animate-ping`) que transmite sensación de servicio activo.

Objetivo:

- Dar más énfasis visual a la disponibilidad 24h sin recargar la cabecera.

### 2. Botón principal de llamada con micro-interacción

En el mismo archivo:

- Se ha ajustado el CTA principal “Llamar ahora” para:
    - Aumentar ligeramente el padding.
    - Añadir efecto `active:scale-95` para una sensación de botón “físico”.

Sin cambiar el contenido ni la estructura SEO, se mejora la percepción de clicabilidad.

### 3. Bloque de “Quick Stats” (tiempo, disponibilidad, satisfacción)

Se ha añadido una nueva sección justo debajo del hero principal:

- Tres tarjetas pequeñas que muestran:
    - **Llegada media**: “20–30 min”
    - **Disponibilidad**: “24/7”
    - **Clientes satisfechos**: “4.9/5” (objetivo basado en reseñas reales futuras)

Características:

- Estilo consistente con el resto de la web (bordes, fondo oscuro, texto pequeño).
- Pensado como versión simple de los “quick stats” del diseño de Stitch.

Objetivo:

- Reforzar confianza y propuesta de valor en un solo vistazo:
    - Tiempo de respuesta.
    - Horario.
    - Calidad del servicio.

Resumen:

- Se han aplicado ideas de los diseños IA (cinta de servicio 24h, quick stats, CTA más marcado) sin introducir dependencias externas ni tocar la configuración de Tailwind, manteniendo la arquitectura limpia y el control total sobre el HTML y el SEO.

## Sesión 9 – Tema claro/oscuro básico, accesibilidad y nueva imagen de ventanas

En esta sesión se han introducido mejoras de UX y accesibilidad, además de integrar la nueva imagen de ventanas proporcionada.

### 1. Sistema inicial de tema (claro/oscuro) y detección de preferencia

Archivo modificado:

```bash
src/components/Layout.astro
```

Cambios:

- Se ha añadido un script en el `<head>` que:
    - Lee la preferencia guardada en `localStorage` (`theme`).
    - Si no hay preferencia guardada:
        - Consulta `prefers-color-scheme` del sistema (oscuro/claro).
        - Usa la **hora local** como pista adicional (día → claro, noche → oscuro).
    - Establece `document.documentElement.dataset.theme` a `'light'` o `'dark'`.
- Este `data-theme` se utiliza como base para futuros estilos específicos de cada modo.

Archivo modificado:

```bash
src/styles/global.css
```

Cambios:

- Se han definido reglas base para el sistema de tema:

```bash
:root[data-theme='dark'] {
  color-scheme: dark;
}

:root[data-theme='light'] {
  color-scheme: light;
}
```

Objetivo:

- Indicar al navegador el esquema de color activo (mejor renderizado de UI, scrollbars, etc.).
- Preparar el terreno para futuros ajustes visuales diferenciados entre claro y oscuro.

### 2. Botón de cambio de tema en el header

Archivo modificado:

```bash
src/components/Header.astro
```

Cambios:

- Añadido un botón de tipo `button` dentro del `<nav>` de escritorio:

    - Diseño:
        - Píldora pequeña `🌓 Cambiar tema`.
        - Bordes y fondo acordes con el diseño actual.
    - Accesibilidad:
        - `aria-label="Cambiar entre modo claro y modo oscuro"`.
    - Función `onclick` inline:
        - Lee el tema actual de `document.documentElement.dataset.theme`.
        - Alterna entre `'dark'` y `'light'`.
        - Guarda la selección en `localStorage` (`theme`), para recordar la preferencia del usuario.

Resultado:

- El usuario puede forzar modo claro/oscuro independientemente del sistema u hora.
- La preferencia se recuerda en visitas posteriores.

### 3. Mejora básica de accesibilidad del foco

Archivo modificado:

```bash
src/styles/global.css
```

Cambios:

- Se ha añadido una regla para que enlaces y botones tengan **focus visible** claro:

```bash
a:focus-visible,
button:focus-visible {
  outline: 2px solid #22c55e;
  outline-offset: 2px;
}
```

Objetivo:

- Mejorar la navegación por teclado y la accesibilidad para personas que no usan ratón.

### 4. Integración de la imagen de ventana oscilobatiente en `/servicios`

Archivo modificado:

```bash
src/pages/servicios.astro
```

Cambios:

- Se ha añadido el uso de la imagen:

    - `public/images/arreglo-ventana-oscilobatiente.png`

- En la categoría `ventanas` dentro de la página de servicios:

```bash
{categoria.id === 'ventanas' && (
  <div class="mt-2 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
    <img
      src="/images/arreglo-ventana-oscilobatiente.png"
      alt="Mano ajustando una ventana oscilobatiente de PVC en un piso de Madrid"
      class="h-full w-full object-cover"
      loading="lazy"
    />
  </div>
)}
```

Notas:

- `alt` describe claramente la acción y el contexto (ventana oscilobatiente en piso de Madrid).
- `loading="lazy"` ayuda a optimizar la carga de la página.

Estado:

- Ahora la página de servicios muestra:
    - Imagen de apertura de puerta blindada (aperturas).
    - Imagen específica para el servicio de ventanas oscilobatientes (ventanas).
- El sistema de tema y accesibilidad está iniciado (tema en `data-theme`, toggle y foco visible), listo para futuros ajustes visuales más finos si se desea separar completamente modo claro/oscuro.

## Sesión 10 – Enriquecer el contenido de las páginas de barrio existentes

En esta sesión se ha enriquecido el contenido de las landings locales para los barrios/municipios ya definidos: Getafe, Las Rozas, Pinto y Leganés.

### 1. Estructura general de contenido por barrio

Archivo modificado:

```bash
src/pages/barrios/[barrio].astro
```

Hasta ahora, la página de barrio incluía:

-Título (H1) y párrafo introductorio genérico con:
    - Servicio de cerrajería urgente.
    - Referencia a viviendas, locales y comunidades.
- Tres tarjetas de servicios:
    - Urgencias sin daños.
    - Cambio e instalación de cerraduras.
    - Ventanas y herrajes.
- Una lista de servicios habituales basada en `src/data/servicios.ts`.

Cambios introducidos:

- Se ha añadido una **capa de contenido específico por barrio** usando un objeto `contenidoPorBarrio` indexado por `slug`:

```bash
const contenidoPorBarrio: Record<
  string,
  {
    introExtra: string;
    llegadaTexto: string;
    comoTrabajamos: string;
    faqLlegada: string;
    faqPrecio: string;
    faqFestivos: string;
  }
> = { ... }
```

- Se ha definido un `contenido` que toma los textos específicos del barrio si existen, o un contenido por defecto si no:

```bash
const contenido = contenidoPorBarrio[barrio.slug] ?? {
  introExtra: '...',
  llegadaTexto: '...',
  comoTrabajamos: '...',
  faqLlegada: '...',
  faqPrecio: '...',
  faqFestivos: '...',
};
```

### 2. Contenido específico para Getafe, Las Rozas, Pinto y Leganés

En `contenidoPorBarrio` se han añadido entradas para:

- `getafe`
- `las-rozas`
- `pinto`
- `leganes`

Cada una incluye:

- `introExtra`:
    - Párrafo adicional que describe el tipo de viviendas y situaciones habituales en la zona (bloques de pisos, chalets, urbanizaciones, cerraduras antiguas, etc.).
- `llegadaTexto`:
    - Texto más concreto sobre el tiempo medio estimado de llegada a esa zona (rango de minutos y condicionantes de tráfico).
- `comoTrabajamos`:
    - Explicación de la forma de trabajar en el barrio/municipio:
        - Valoración previa por teléfono.
        - Explicación de opciones y precios.
        - Foco en minimizar daños y aumentar seguridad.
- `faqLlegada`, `faqPrecio`, `faqFestivos`:
    - Respuestas más detalladas y adaptadas al contexto del barrio sobre:
        - Tiempo de llegada.
        - Transparencia de precios.
        - Disponibilidad en noches y festivos.

### 3. Nuevas secciones añadidas a la plantilla `[barrio].astro`

Además de los bloques ya existentes, se han añadido tres secciones nuevas dentro del `<Layout>`:

1. **Párrafo extra tras la intro genérica**:

    - Debajo del primer párrafo que describe el servicio general en `{barrio.nombre}`, se añade:

    ```bash
    <p class="text-sm text-slate-300 sm:text-base">
      {contenido.introExtra}
    </p>
    ```

2. **Sección “Cómo trabajamos en {barrio.nombre}”**:

    - Nueva sección que explica la forma de trabajo específica:

    ```bash
    <section class="mt-8 space-y-3 text-sm text-slate-300">
      <h2 class="text-base font-semibold tracking-tight">
        Cómo trabajamos en {barrio.nombre}
      </h2>
      <p class="text-xs text-slate-400 sm:text-sm">
        {contenido.comoTrabajamos}
      </p>
    </section>
    ```

3. **Sección de Preguntas Frecuentes localizadas**:

    - Se ha añadido una mini‑FAQ por barrio:

    ```bash
    <section class="mt-8 space-y-3 text-sm text-slate-300">
      <h2 class="text-base font-semibold tracking-tight">
        Preguntas frecuentes sobre cerrajería urgente en {barrio.nombre}
      </h2>
      <div class="space-y-2 text-xs text-slate-300 sm:text-sm">
        <p>
          <strong>¿Cuánto tardáis en llegar a {barrio.nombre}?</strong> {contenido.faqLlegada}
        </p>
        <p>
          <strong>¿El precio está cerrado antes de empezar?</strong> {contenido.faqPrecio}
        </p>
        <p>
          <strong>¿Trabajáis también de noche y en festivos en {barrio.nombre}?</strong> {contenido.faqFestivos}
        </p>
      </div>
    </section>
    ```

4. **Ajuste del texto de llegada junto al botón principal**:

    - El texto situado a la derecha del botón “Llamar ahora” pasa de ser una frase genérica a usar `contenido.llegadaTexto`:

    ```bash
    <p class="text-xs text-slate-400">
      {contenido.llegadaTexto}
    </p>
    ```

### 4. Resultado para las 4 landings actuales

- Cada página `/barrios/[barrio]` (Getafe, Las Rozas, Pinto, Leganés):
    - Tiene ahora varios párrafos de contexto adicionales.
    - Menciona tiempos de llegada y situaciones típicas de la zona.
    - Explica la forma de trabajo y la política de precios de forma más detallada.
    - Incluye una mini sección de preguntas frecuentes específicas para ese barrio.

Con esto, cada landing local gana longitud y relevancia sin perder enfoque en el servicio de cerrajería urgente, mejorando su potencial SEO y la claridad para el usuario final.

## Sesión 11 – Migrar contenido de barrios a Astro Content Collections (MD)

En esta sesión se ha dado un paso más profesional en la arquitectura de contenido, pasando de un único archivo `src/data/barrios.ts` a **una colección de contenido de Astro** con un archivo por barrio.

### 1. Configuración de la colección `barrios`

Archivo creado:

```bash
src/content/config.ts
```

Contenido:

```bash
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
```

Notas:

- Se define una colección llamada `barrios` de tipo `content`.
- Se utiliza un esquema `z.object` para validar que todos los documentos de la colección contienen los campos esperados.

### 2. Creación de archivos de contenido por barrio

Se han creado los siguientes archivos:

```bash
src/content/barrios/getafe.md
src/content/barrios/las-rozas.md
src/content/barrios/pinto.md
src/content/barrios/leganes.md
```

Cada archivo contiene solo **frontmatter** (campos estructurados) por ahora, por ejemplo `getafe.md`:

```bash
---
nombre: "Getafe"
introExtra: >
  En Getafe trabajamos a diario en portales de edificios residenciales, comunidades de vecinos y viviendas
  unifamiliares. Estamos acostumbrados a lidiar con cerraduras antiguas, bombines desgastados y puertas que han
  sufrido muchos años de uso.
llegadaTexto: >
  En Getafe solemos tardar entre 25 y 35 minutos desde que confirmamos el aviso, dependiendo del tráfico y la zona
  concreta.
comoTrabajamos: >
  Cuando recibimos una llamada desde Getafe intentamos siempre hacer una valoración previa por teléfono, explicando las
  posibles soluciones y un rango de precio aproximado. Al llegar revisamos la puerta o cerradura, confirmamos el
  presupuesto y solo empezamos a trabajar cuando tú lo aceptas.
faqLlegada: >
  En condiciones normales llegamos a cualquier zona de Getafe en unos 25–35 minutos desde que se confirma el aviso. En
  horas punta o días de lluvia puede alargarse ligeramente, pero te avisamos siempre por teléfono.
faqPrecio: >
  Antes de desplazarnos te explicamos el precio orientativo de la apertura o reparación. Una vez vemos la puerta en
  persona confirmamos el importe final y solo empezamos si estás de acuerdo, sin sorpresas al terminar.
faqFestivos: >
  Sí, prestamos servicio de cerrajería urgente en Getafe las 24 horas todos los días del año, incluidos fines de
  semana, festivos y noches.
---
```

Los demás barrios (`las-rozas`, `pinto`, `leganes`) tienen campos equivalentes con sus textos específicos.

### 3. Actualización de `[barrio].astro` para usar `astro:content`

Archivo modificado:

```bash
src/pages/barrios/[barrio].astro
```

Cambios clave:

- Se ha eliminado cualquier dependencia de `src/data/barrios.ts`.
- Ahora se utiliza `getCollection` y `CollectionEntry` de `astro:content`:

```bash
import { getCollection, type CollectionEntry } from 'astro:content';

export async function getStaticPaths() {
  const entries = await getCollection('barrios');
  return entries.map((entry) => ({
    params: { barrio: entry.slug },
    props: { entry },
  }));
}

type Props = {
  entry: CollectionEntry<'barrios'>;
};

const { entry } = Astro.props as Props;
const data = entry.data;
```

- El resto de la plantilla usa `data` en lugar de `barrio`:
    - `data.nombre`
    - `data.introExtra`
    - `data.llegadaTexto`
    - `data.comoTrabajamos`
    - `data.faqLlegada`, `data.faqPrecio`, `data.faqFestivos`

Ejemplo:

```bash
<p class="text-sm text-slate-300 sm:text-base">
  {data.introExtra}
</p>
```

### 4. Actualización de los listados de barrios (home y `/barrios`)

Archivos modificados:

```bash
src/pages/index.astro
src/pages/barrios/index.astro
```

En ambos casos se ha sustituido la importación de `barrios` desde `src/data/barrios.ts` por llamadas a `getCollection('barrios')`.

Ejemplo en `/barrios/index.astro`:

```bash
import { getCollection } from 'astro:content';

const barrios = await getCollection('barrios');

{barrios.map((entry) => (
  <a href={`/barrios/${entry.slug}`}>
    <span class="font-semibold">{entry.data.nombre}</span>
    ...
  </a>
))}
```

Y en la home (`/`), el bloque de “Barrios y zonas iniciales” también lee desde la colección `barrios`.

### 5. Actualización del `sitemap.xml` para incluir barrios desde la colección

Archivo modificado:

```bash
src/pages/sitemap.xml.ts
```

- Se ha eliminado el uso de `src/data/barrios.ts`.
- Ahora se llama a `getCollection('barrios')`:

```bash
import { getCollection } from 'astro:content';

const barrios = await getCollection('barrios');

const urls = [
  '/',
  '/servicios',
  '/barrios',
  '/contacto',
  ...barrios.map((entry) => `/barrios/${entry.slug}`),
];
```

De esta forma, el sitemap se actualiza automáticamente cuando se añaden nuevos archivos de barrio en `src/content/barrios/`.

### 6. Eliminación de `src/data/barrios.ts`

Archivo eliminado:

```bash
src/data/barrios.ts
```

Motivo:

- Todo el contenido de barrios se gestiona ahora mediante la colección `barrios` de Astro Content.
- Evita duplicar información y mantiene una única fuente de verdad: los archivos `.md` de contenido.

### 7. Ventajas de esta nueva arquitectura

- **Un archivo por barrio** → mucho más manejable cuando haya decenas o cientos de barrios.
- **Validación de esquema** vía `astro:content` → evita olvidos de campos obligatorios.
- **Tipos fuertes** (`CollectionEntry<'barrios'>`) en TypeScript → menos errores al consumir datos.
- **Escalabilidad real**:
    - Para añadir un barrio nuevo, basta con crear `src/content/barrios/nuevo-barrio.md` con el frontmatter correspondiente.
    - No es necesario tocar la plantilla ni otros archivos de código.

## Sesión 12 – Mejora de SEO on-page, tema visual y UX

En esta sesión se han aplicado varias mejoras centradas en SEO on-page, experiencia de usuario y claridad visual.

### 1. Metadatos Open Graph y Twitter Cards

Archivo modificado:

```bash
src/components/Layout.astro
```

Cambios:

- Se han añadido metadatos para Open Graph y Twitter cuando `siteConfig.baseUrl` está configurado:

```bash
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={`${siteConfig.baseUrl}${Astro.url.pathname}`} />
<meta property="og:type" content="website" />
<meta
  property="og:image"
  content={`${siteConfig.baseUrl}/images/cerrajero-24h-madrid-hero.png`}
/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta
  name="twitter:image"
  content={`${siteConfig.baseUrl}/images/cerrajero-24h-madrid-hero.png`}
/>
```

Objetivo:

- Mejorar el snippet de la web cuando se comparte en redes sociales o apps de mensajería.
- Mantener título, descripción e imagen coherentes para todas las páginas.

### 2. Conexión real del cambio de tema (claro/oscuro)

Archivos modificados:

```bash
src/components/Layout.astro
src/styles/global.css
```

Cambios en `Layout.astro`:

- Se ha simplificado la clase del `<body>`:

```bash
<body class="min-h-screen">
```

- El color de fondo y el color del texto ya no están fijados en el `body`, sino que dependen del atributo
  `data-theme` en `document.documentElement` (gestionado por el script existente).

Cambios en `global.css`:

- Se han definido estilos específicos para cada tema:

```bash
:root[data-theme='dark'] {
  color-scheme: dark;
}

:root[data-theme='dark'] body {
  background-color: #020617; /* slate-950 */
  color: #e2e8f0; /* slate-200 */
}

:root[data-theme='light'] {
  color-scheme: light;
}

:root[data-theme='light'] body {
  background-color: #f3f4f6; /* slate-100 */
  color: #020617; /* slate-950 */
}
```

Resultado:

- El botón “Cambiar tema” en el header, que cambia `document.documentElement.dataset.theme` y guarda la preferencia en
  `localStorage`, ahora produce un efecto visual claro:
    - Tema oscuro: fondo oscuro y texto claro.
    - Tema claro: fondo claro y texto oscuro.

### 3. Página 404 personalizada

Archivo creado:

```bash
src/pages/404.astro
```

Contenido:

- Usa el `Layout` global y define:
    - Título: `Página no encontrada`.
    - Descripción SEO orientada a urgencias de cerrajería.
- Incluye:
    - Mensaje explicando que la página no existe o el enlace está desactualizado.
    - Botón para llamar (`tel:`) reutilizando `siteConfig.telefono`.
    - Enlace para volver al inicio (`/`).

Objetivo:

- Mejorar la experiencia de usuario en rutas no existentes y mantener siempre un acceso rápido a la llamada urgente.

### 4. Refuerzo de SEO local y enlazado interno

Archivo modificado:

```bash
src/pages/servicios.astro
```

Cambios:

- Se ha añadido un párrafo que:
    - Menciona explícitamente algunos barrios/municipios actuales (Getafe, Las Rozas, Pinto, Leganés).
    - Informa de que también se atienden otros distritos de Madrid ciudad.
    - Enlaza de forma clara hacia la página de `barrios`.

Archivo modificado:

```bash
src/pages/barrios/[barrio].astro
```

Cambios:

- Al final de la página de cada barrio se ha añadido una frase que enlaza hacia `/servicios`.

Objetivo:

- Mejorar el enlazado interno entre:
    - `/servicios`
    - `/barrios`
    - `/barrios/[barrio]`
- Reforzar las páginas clave de conversión desde el contenido local.

### 5. Bloque “Zonas de Madrid donde trabajamos” en la home

Archivo modificado:

```bash
src/pages/index.astro
```

Cambios:

- Se ha añadido una sección al final del contenido principal que explica que, además de los municipios actuales, se
  ofrece servicio en los principales distritos de Madrid ciudad (Centro, Salamanca, Chamberí, Retiro, Chamartín,
  Tetuán, etc.), preparando el terreno para futuras landings específicas por distrito.









