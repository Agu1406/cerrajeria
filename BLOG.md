# Cómo publicar en el blog

El blog no usa base de datos: cada entrada es un **archivo Markdown** en `src/content/blog/`. Para publicar algo nuevo, creas un archivo y vuelves a desplegar la web.

---

## 1. Crear una nueva entrada

Crea un archivo `.md` dentro de `src/content/blog/`. El **nombre del archivo** será la URL del post:

- `src/content/blog/mi-nuevo-post.md` → se verá en **/blog/mi-nuevo-post**

Usa guiones y minúsculas (ej. `como-cambiar-cerradura.md`, `precio-cerrajero-urgente.md`).

---

## 2. La cabecera (frontmatter)

Al inicio del archivo, entre dos líneas de `---`, pon siempre **title**, **description** y **pubDate**. La **image** es opcional pero recomendable.

```yaml
---
title: "El título que verá el usuario"
description: "Un resumen corto para el listado y para Google (1-2 frases)."
pubDate: 2025-03-10
image: "/images/blog/foto-del-post.webp"
---
```

- **title**: Título del artículo.
- **description**: Resumen; aparece en el listado del blog y en los resultados de búsqueda.
- **pubDate**: Fecha de publicación (formato año-mes-día: `2025-03-10`). Los posts se ordenan por esta fecha (más recientes primero).
- **image**: Ruta de la **imagen destacada** (la que sale en el listado y arriba del artículo). Opcional. La ruta es desde la carpeta `public/` (ej. `/images/blog/mi-foto.webp`).

### Borradores

Si estás escribiendo y no quieres que se vea aún, añade `draft: true`:

```yaml
---
title: "..."
description: "..."
pubDate: 2025-03-10
draft: true
---
```

Los posts con `draft: true` no se muestran en el listado ni se generan en el build.

---

## 3. El contenido (Markdown)

Debajo del segundo `---` escribe el texto en **Markdown**. Puedes usar:

- **Párrafos**: texto normal.
- **Títulos**: `## Título` o `### Subtítulo`.
- **Negrita**: `**texto**`.
- **Listas**: `- elemento` o `1. elemento`.
- **Enlaces**: `[texto del enlace](/contacto)` (enlaces internos así van bien).
- **Imágenes dentro del texto**: ver siguiente sección.

Ejemplo:

```markdown
---
title: "Cuándo cambiar la cerradura"
description: "Señales de que tu cerradura necesita un cambio."
pubDate: 2025-03-10
image: "/images/blog/cerradura-desgastada.webp"
---

Cuando la llave empieza a costar o la cerradura tiene años, puede ser momento de cambiar.

## Señales de desgaste

- La llave se atasca.
- La puerta no cierra del todo.
- Has perdido llaves y quieres más seguridad.

[Pide presupuesto sin compromiso](/contacto).
```

---

## 4. Imágenes

### Imagen destacada (cabecera)

- Pon la imagen en la carpeta **`public/images/blog/`** (puedes crear la carpeta `blog` si no existe).
- En el frontmatter usa la ruta que empieza por `/images/blog/`:

  ```yaml
  image: "/images/blog/nombre-del-archivo.webp"
  ```

- Formatos recomendados: **WebP** (mejor tamaño) o **JPG/PNG**. Un tamaño razonable es unos 800–1200 px de ancho.

### Imágenes dentro del texto

Puedes poner imágenes también en medio del artículo. En Markdown:

```markdown
![Descripción breve de la imagen](/images/blog/otra-foto.webp)
```

Las imágenes deben estar en `public/images/blog/` (o en otra carpeta dentro de `public/`) y la ruta en el Markdown debe empezar por `/`.

### Resumen

| Dónde quieres la imagen | Dónde guardas el archivo      | Cómo la usas |
|-------------------------|------------------------------|--------------|
| Destacada (listado + arriba del post) | `public/images/blog/`        | En el frontmatter: `image: "/images/blog/archivo.webp"` |
| Dentro del artículo     | `public/images/blog/` (o similar) | En el Markdown: `![Texto alternativo](/images/blog/archivo.webp)` |

---

## 5. Después de guardar

1. Guarda el `.md` en `src/content/blog/`.
2. Si has añadido imágenes, guarda los archivos en `public/images/blog/`.
3. Ejecuta `npm run build` (o despliega en tu hosting). La nueva entrada aparecerá en **/blog** y en **/blog/nombre-del-archivo**.

No hace falta tocar código: solo nuevos archivos Markdown (y las imágenes en `public/`).
