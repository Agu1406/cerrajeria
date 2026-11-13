# Los Cerrajeros Madrid

Web de un negocio real de cerrajería en Madrid ([loscerrajerosmadrid.es](https://www.loscerrajerosmadrid.es)). Sitio estático con páginas por servicio y por barrio, blog, formulario de contacto y las páginas legales que exige la ley española.

## Stack

- [Astro 5](https://astro.build) con contenido en colecciones (`src/content`).
- Tailwind CSS 4 y tipografías autoalojadas con `@fontsource` (Cormorant Garamond y Manrope).
- Funciones serverless en `api/` (Vercel) para el formulario de contacto y las solicitudes de derechos RGPD, con envío por SMTP (Nodemailer) o Resend.
- Despliegue en Vercel. Redirección de `loscerrajerosmadrid.es` a `www` y de las URLs antiguas en `vercel.json`.
- Versión en inglés de la portada (`src/pages/en`) con textos en `src/i18n`.

## Comandos

| Comando           | Qué hace                                  |
| :---------------- | :---------------------------------------- |
| `npm install`     | Instala las dependencias.                 |
| `npm run dev`     | Servidor local en `localhost:4321`.       |
| `npm run build`   | Genera el sitio en `dist/`.               |
| `npm run preview` | Sirve la compilación para revisarla.      |
| `npm run check`   | Comprueba tipos de Astro y TypeScript.    |

## Estructura

```text
api/              Funciones serverless (contacto, derechos)
public/           Imágenes, favicon y archivos estáticos
scripts/          Generadores de páginas por barrio y utilidades de contenido
src/components/   Piezas de interfaz
src/config/       Datos del sitio (dominio, teléfono, horarios)
src/content/      Blog y páginas por barrio (colecciones de Astro)
src/data/         Servicios y plantilla de datos legales (legal.example.json)
src/lib/          Fuente de verdad de negocio (data.ts) y datos legales (legal.ts)
src/pages/        Rutas, incluidas las páginas legales y llms.txt
```

## Datos legales: fuera del repositorio

Titular, NIF y correo legal no se versionan. `src/lib/legal.ts` los lee de, en este orden de prioridad:

1. La variable de entorno `LEGAL_JSON` (en Vercel, Settings, Environment Variables).
2. El archivo local `src/data/legal.local.json`, ignorado por git. Se crea copiando `src/data/legal.example.json`.

Si falta algún dato el build falla a propósito: no se publica una página legal vacía.

## Variables de entorno

| Variable                                   | Uso                                          |
| :----------------------------------------- | :------------------------------------------- |
| `LEGAL_JSON`                               | Datos legales del titular (JSON en una línea) |
| `CONTACT_EMAIL`                            | Dónde llegan las consultas del formulario    |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`    | Servidor de correo saliente                  |
| `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`      | Credenciales y remitente                     |
| `RESEND_API_KEY`, `RESEND_FROM`            | Alternativa a SMTP                           |

Ninguna va en el repositorio.

## Decisiones

- **Una fuente de verdad.** Teléfono, servicios, horarios y reseñas viven en `src/lib/data.ts` y `src/config`. Las páginas solo leen.
- **Contenido real.** Las reseñas son literales de Google y los casos del blog son trabajos reales con permiso de los clientes.
- **Analítica con consentimiento.** Las cookies de análisis (Google Tag Manager y Vercel Web Analytics) solo se activan si la persona las acepta. Las políticas de cookies y de privacidad lo explican.
- **Páginas por barrio generadas** con `scripts/generate-service-barrios.mjs` a partir de los datos de servicios.
- **SEO.** `sitemap.xml`, `robots.txt` y `llms.txt` son rutas de Astro que leen la configuración del sitio y los servicios, sin listas duplicadas.

## Licencias

El código y el contenido pertenecen a su titular. Las tipografías son OFL.
