# DESIGN.md: Los Cerrajeros Madrid

Reglas visuales y de copy para no desviarnos. Los datos del negocio viven en `src/lib/data.ts` (origen: `CONTEXT.md`).

## Idea

Cerrajería de urgencia diurna con base en Getafe. Fondo claro frío, tipografía seria, precio claro y un CTA de llamar en rojo señal que se ve sin JavaScript. Nada que parezca plantilla ni barbería.

## Color

Los nombres de token (`ink`, `cream`, `brass`) se mantienen por compatibilidad con las clases CSS. El significado es urgencia diurna, no tinta/latón de barbería.

| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#F2F4F7` | Fondo de página (gris frío; no blanco puro) |
| `--ink-soft` | `#FFFFFF` | Bandas / superficie elevada; texto sobre botón rojo |
| `--brass` | `#C23328` | Acento, `.btn-call`, enlaces, filetes (AA sobre `--ink`) |
| `--brass-bright` | `#D63A2F` | Hover y foco |
| `--brass-ink` | `#A82B22` | Acento más oscuro cuando haga falta más contraste |
| `--brass-dim` | `#B84A40` | Solo decorativo. No usar para texto |
| `--cream` | `#1C2430` | Texto principal (carbón) |
| `--cream-muted` | `#5A6570` | Texto secundario |
| `--line` | `rgba(28, 36, 48, 0.12)` | Separadores |

Ritmo de fondos: página en gris frío; bandas elevadas en blanco (`.section-cream`); pie y cabecera sobre el mismo sistema claro. Sin verde esmeralda ni slate de plantilla. Sin azul noche ni latón.

## Tipografía

- Display: Cormorant Garamond (600/700), solo desde 24 px. Sin cursiva.
- Cuerpo: Manrope (400 a 800). Autoalojadas con Fontsource (licencia OFL). No cargar Google Fonts.

## Composición

- Hero: marca fuerte, un `h1`, una frase corta, grupo CTA (llamar + WhatsApp). Sin badge encima del titular. Sin tarjetas en el primer viewport.
- CTA principal: `.btn-call` (rojo señal, radio 2 px, min-height 44 px). Puede llevar flecha estática en el copy del botón; no animar la flecha.
- Servicios: lista o filas (nombre + precio orientativo cuando exista en data). No tres cajas con icono ni carta de barbería con duración.
- Opiniones: citas con filete superior, no tarjetas. Solo reseñas reales de `data.ts`.
- Espaciado: solo la escala `--s1` a `--s8`.
- Radio de borde: 2 px.
- Excepción: el único degradado permitido es el scrim de legibilidad del hero en móvil (`.hero-scrim`), funcional y claro.

## Movimiento (nivel medio)

Permitido, y nada más:

- Entrada breve del hero (hasta ~0,7 s).
- Línea de acento bajo el titular que se dibuja al cargar (CSS; el texto y el teléfono ya visibles).
- Reveal al scroll: opacidad y 12 px, una vez, en cabeceras de sección y bloques bajo el fold. Sin JS o con `prefers-reduced-motion` todo se ve (`src/scripts/reveal.ts`).
- Subrayado que crece en enlaces de navegación.

Todo se desactiva con `prefers-reduced-motion`. No usar GSAP, Lenis ni Three.js.

## Prohibido (patrones de web hecha con IA)

Degradados decorativos (también en texto), glassmorphism, sombras difusas, emojis, iconos genéricos en cajas, bento, badges sobre el titular, haz de luz que sigue al cursor, orbes, rejillas de puntos, destellos, grano sobre degradado, guiones largos en el copy, fórmulas «no es X, es Y», reseñas o cifras inventadas, imágenes generadas por IA presentadas como el negocio, Lucide en todas partes.

Iconos: si hace falta, Phosphor en línea en el build y pocos; no una API de iconos.

## Accesibilidad

- Contraste AA como mínimo; objetivos táctiles de 44 px; foco visible de 3 px en el acento brillante.
- Skip link, `lang="es"`, un solo `h1`, enlaces externos con aviso de nueva pestaña cuando aplique.
- Todo el contenido usable por teclado. La llamada funciona sin JavaScript.

## Fotos

Viven en `public/images/`. Revisar alternativas en código. Prioridad: trabajos reales (antes/después) y logo. Foto de Erickson opcional hasta que exista archivo.

## Copy

Español de España, frases cortas, tuteo. Nombrar Madrid / Getafe y el servicio real. Sin superlativos sin respaldo. Precio y teléfono siempre desde data.
