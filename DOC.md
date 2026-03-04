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






