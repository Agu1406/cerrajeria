# DESIGN.md: Los Cerrajeros Madrid

Reglas visuales y de copy para no desviarnos. Los datos del negocio viven en `src/lib/data.ts` (origen: `CONTEXT.md`).

## Idea

Cerrajería de urgencia diurna con base en Getafe. Fondo acero claro, tipografía seria, acento oro (inspiración reloj/metal), precio claro y un CTA de llamar en rojo señal que se ve sin JavaScript. Nada que parezca plantilla, joyería a pantalla completa ni barbería.

## Color

Los nombres de token (`ink`, `cream`, `brass`) se mantienen por compatibilidad con las clases CSS. `brass*` es el rojo de urgencia (CTA); `gold*` es el acento Rolex. El plateado se traduce a acero claro / blanco, sin degradados metálicos.

| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#E8EBEE` | Fondo de página (acero frío; no blanco puro) |
| `--ink-soft` | `#FFFFFF` | Bandas / superficie elevada; texto sobre botón rojo |
| `--brass` | `#C23328` | `.btn-call`, sticky primario, skip-link (rojo señal) |
| `--brass-bright` | `#D63A2F` | Hover y foco de CTA / urgencia |
| `--brass-ink` | `#A82B22` | Rojo más oscuro si hace falta contraste en CTA |
| `--brass-dim` | `#B84A40` | Solo decorativo en rojo. No usar para texto |
| `--gold` | `#8A6B1F` | Acento usable (AA sobre `--ink`): filetes, subrayados |
| `--gold-bright` | `#C4A035` | Hover / filete de citas |
| `--gold-ink` | `#6E5518` | Enlaces de texto y acento más oscuro |
| `--gold-dim` | `#D4AF37` | Solo decorativo. No usar para texto |
| `--cream` | `#0E0E0E` | Texto principal (esfera) |
| `--cream-muted` | `#5A636E` | Texto secundario (acero) |
| `--line` | `rgba(14, 14, 14, 0.12)` | Separadores |

Ritmo de fondos: página en acero frío; bandas elevadas en blanco (`.section-cream`); pie y cabecera sobre el mismo sistema claro. CTA en rojo; oro solo en detalles. Sin oro como único botón de llamada. Sin verde esmeralda ni slate de plantilla. Sin azul noche, latón de barbería ni degradados metálicos.

## Tipografía

- Display: Cormorant Garamond (600/700), solo desde 24 px. Sin cursiva.
- Cuerpo: Manrope (400 a 800). Autoalojadas con Fontsource (licencia OFL). No cargar Google Fonts.

## Composición

- Hero: marca fuerte, un `h1`, una frase corta, grupo CTA (llamar + WhatsApp) y **foto dominante** (`MEDIA.heroPath`; móvil con `.hero-scrim`). Sin badge encima del titular. Sin tarjetas, lista de zonas, bullets de confianza ni stats en el primer viewport.
- CTA principal: `.btn-call` (rojo señal `--brass`, radio 2 px, min-height 44 px). Puede llevar flecha estática en el copy del botón; no animar la flecha. El oro no sustituye este botón.
- Servicios: lista o filas (nombre + precio orientativo cuando exista en data). No tres cajas con icono ni carta de barbería con duración.
- Opiniones: citas con filete superior, no tarjetas. Solo reseñas reales de `data.ts`.
- Espaciado: solo la escala `--s1` a `--s8`.
- Radio de borde: 2 px.
- Excepción: el único degradado permitido es el scrim de legibilidad del hero en móvil (`.hero-scrim`), funcional y claro.

## CTAs móviles (estándar)

Patrón compartido entre webs (copiar-pegar esta sección). Aquí el primario es **Llamar** y el secundario **WhatsApp**.

1. Cabecera móvil: CTA primario (`.btn-call`) + botón texto «Menú» (borde, 44 px; no icono ☰). El drawer solo lista enlaces; no duplica los CTAs.
2. Barra inferior 50/50 (`.sticky-cta`): primario + secundario. Siempre visible en móvil desde el primer pintado. Oculta en escritorio.
3. Si hay banner de cookies: ambos viven en un `.bottom-dock` en columna. La barra CTA queda **por encima del banner en el eje vertical** (no solapada por z-index). Al aceptar o rechazar cookies, el banner sale del flujo (`display: none`) y el CTA baja al borde inferior. Altura del dock → `--bottom-dock-h` para el `padding-bottom` del body.
4. Sin FABs circulares. El `tel:` (o la reserva) funciona sin JavaScript.

## Movimiento (nivel medio)

Permitido, y nada más:

- Entrada breve del hero (hasta ~0,7 s).
- Línea de acento bajo el titular que se dibuja al cargar (CSS; el texto y el teléfono ya visibles).
- Reveal al scroll: opacidad y 12 px, una vez, en cabeceras de sección y bloques bajo el fold. Sin JS o con `prefers-reduced-motion` todo se ve (`src/scripts/reveal.ts`).
- Subrayado que crece en enlaces de navegación.

Todo se desactiva con `prefers-reduced-motion`. No usar GSAP, Lenis ni Three.js.

## Prohibido (patrones de web hecha con IA)

Degradados decorativos (también en texto), glassmorphism, sombras difusas, emojis, iconos genéricos en cajas, bento, badges sobre el titular, haz de luz que sigue al cursor, orbes, rejillas de puntos, destellos, grano sobre degradado, guiones largos en el copy, fórmulas «no es X, es Y», reseñas o cifras inventadas, imágenes generadas por IA presentadas como el negocio, Lucide en todas partes.

Iconos: si hace falta, Phosphor en línea en el build (`Icon.astro` + `@iconify-json/ph`) y pocos (p. ej. servicios destacados junto al título). Sin Lucide, sin CDN/API en el navegador, sin iconos dentro de cajas de color ni tres cajas con icono en fila.

## Accesibilidad

- Contraste AA como mínimo; objetivos táctiles de 44 px; foco visible de 3 px en el acento brillante.
- Skip link, `lang="es"`, un solo `h1`, enlaces externos con aviso de nueva pestaña cuando aplique.
- Todo el contenido usable por teclado. La llamada funciona sin JavaScript.

## Marca y favicon (proceso estándar, estilo de esta web)

El **proceso** (SVG 64×64 → `public/favicon.svg` → layout/cabecera) es el mismo entre webs. Los **colores, la letra y la forma** salen solo de **este** `DESIGN.md`; no copiar la paleta ni el monograma de Ikaro u otro proyecto.

1. Tomar 2 colores de **esta** paleta (fondo de marca + acento). Aquí: acero `#E8EBEE` (`--ink`) + oro oscuro `#6E5518` (`--gold-ink`, contraste sobre el fondo claro).
2. Dibujar monograma o marca geométrica en SVG 64×64 (una letra o símbolo; sin foto, sin IA como logo). Aquí: «C» en `public/favicon.svg`.
3. Enlazar el SVG en el layout (`rel="icon" type="image/svg+xml"`).
4. Cabecera: tipografía de marca ± el mismo SVG (`MEDIA.brandMarkPath`). No raster verde/de terceros salvo marca oficial del cliente.
5. No Lucide ni emoji como logo. El rojo CTA no es el color del isotipo.

## Fotos

Viven en `public/images/`. Revisar alternativas en código. Prioridad: trabajos reales (antes/después). Foto de Erickson opcional hasta que exista archivo. La marca de UI es el SVG de favicon, no los WebP verdes antiguos.

## Copy

Español de España, frases cortas, tuteo. Nombrar Madrid / Getafe y el servicio real. Sin superlativos sin respaldo. Precio y teléfono siempre desde data.
