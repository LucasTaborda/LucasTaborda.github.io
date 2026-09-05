# SPECS — Web Personal (v1)

| Campo | Valor |
|---|---|
| Proyecto | Web personal / portfolio — Lucas Taborda |
| Fecha | 2026-08-31 |
| Estado | Borrador para aprobación |
| Objetivo final | Conseguir entrevistas como **Senior AI-Driven Developer (SDD)** |
| Tipo | One-page estática, 100% frontend |

---

## 1. Resumen

Web personal de una sola página, hecha a mano con HTML, CSS y JavaScript vanilla en **3 archivos separados**. Sin framework, sin backend, sin build obligatorio. Estética **neobrutalista retrowave** (magenta + cian, tipografía monoespaciada) con carácter retro/programador/gamer, pero ejecutada con sobriedad para sostener una imagen profesional senior.

## 2. Objetivos

- **Primario:** proyectar imagen de desarrollador senior AI-driven (metodología SDD) que genera confianza de contratación.
- **Secundarios:**
  - Mostrar expertise en web (Drupal, WordPress, Laravel, APIs) e IA agéntica.
  - Diferenciarse con el background de videojuegos (Unity, gamejam) como prueba de rendimiento, creatividad y pasión por construir.
  - Contacto alcanzable en ≤ 2 clicks desde cualquier punto de la página.
- **No-objetivos (v1):** blog, CMS, formularios propios, login, cookies, música/sonido.

## 3. Público objetivo

| Persona | Qué busca en la web | Tiempo de decisión |
|---|---|---|
| Recruiter técnico | Perfil claro, keywords, CV, links rápidos | 5–10 s de escaneo |
| CTO / Tech lead | Prueba de criterio, método de trabajo (SDD), código real | 30–60 s |
| Otra dev / referido | Proyectos, tono, personalidad | Paseo tranquilo |

**Implicación de diseño:** hero con mensaje y CTAs legibles en los primeros 5 segundos; el "juego" está en el acabado, no en estorbar la lectura.

## 4. Posicionamiento y mensaje

- **Headline propuesto:** `Senior AI-Driven Developer` — *web senior (Drupal · WordPress · Laravel · APIs) + IA agéntica + dev de videojuegos por vocación.*
- **Tono de los textos:** primera persona, directo, sin humo, con guiños gamer mínimos y medidos.
- **Diferenciadores:**
  1. SDD como método explícito (sección propia, ver §7.5).
  2. Trayectoria híbrida: web enterprise + juegos + IA → versatilidad rara.
  3. La web en sí es la prueba: hecha a mano, vanilla, lightweight, con specs (este documento) publicables como muestra del método.

## 5. Alcance técnico

- Archivos: `index.html`, `styles.css`, `script.js` + carpeta `assets/`.
- JavaScript vanilla (ES6+), sin librerías, sin jQuery, sin frameworks.
- Solo animaciones CSS + `IntersectionObserver` + ~100 líneas de JS totales.
- Despliegue estático (ver §16).
- Estructura:

```
/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── foto.webp          (retrato, ≥600px, ≤80KB)
    ├── cv.pdf
    ├── favicon.svg
    ├── og-image.png       (1200×630)
    └── projects/          (gifs/capturas del portfolio)
```

## 6. Dirección de arte

### 6.1 Concepto

*"Terminal de los 80 operada por un ingeniero senior."* CRT, arcade y synthwave en el acabado; orden, jerarquía y aire en la estructura.

**Checklist de contención (anti-fantoche):**
- Máximo 2 colores neón vivos en pantalla por sección + neutros.
- Glow solo en ≤ 3 elementos visibles (headline, foto, CTA primario).
- Una sola animación ambiental lenta (scanlines o sol), nunca ambas intensas.
- Cero parpadeos rápidos, cero música, cero autoplay.
- El 80% de la superficie es fondo oscuro legible; el neón es condimento.
- Los guiños gamer se limitan a: prefix de terminal, un par de stickers/HUD en el hero y una sección "gamer mode".

### 6.2 Tokens de color

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#0D0221` | Fondo general |
| `--bg-alt` | `#150A33` | Secciones alternas |
| `--surface` | `#191040` | Tarjetas, nav |
| `--magenta` | `#FF2E97` | Color primario: CTAs, acentos, sombras hover |
| `--cyan` | `#2DE2E6` | Color secundario: links, detalles, iconos |
| `--fg` | `#EAE6FF` | Texto principal |
| `--muted` | `#9B8FC0` | Texto secundario, meta |
| `--border` | `#EAE6FF` | Bordes 2–3px |

Contrastes orientativos sobre `--bg`: `--fg` ≈ 14:1 (AAA), `--cyan` ≈ 11:1 (AAA), `--magenta` ≈ 6:1 (AA, válida en texto grande/elementos UI). Texto sobre magenta: negro ≈ 7:1 (AA/AAA). Verificar con herramienta al implementar.

### 6.3 Tipografía

- **Una sola familia mono:** `"JetBrains Mono", ui-monospace, "Cascadia Code", Menlo, Consolas, monospace`.
- Pesos: 400 y 700 únicamente.
- Escala fluida con `clamp()`: `0.75 · 0.875 · 1 · 1.25 · 1.75 · 2.5 · 3.5 (hero)` en rem.
- Fallback con fuentes de sistema (coste de font = 0) + opcional cargar JetBrains Mono woff2 (≤60KB, `font-display: swap`, solo 2weights).
- Detalle opcional: pixel font (tipo *Press Start 2P*) únicamente para el logo y micro-labels de 8–10px, subset reducido. Si supera ~25KB, se descarta.

### 6.4 Componentes neobrutalistas

| Componente | Especificación |
|---|---|
| Tarjeta | `border: 2px solid var(--border)`, `box-shadow: 6px 6px 0 #000` (dura, sin blur). Hover: `translate(-2px,-2px)` + sombra `8px 8px 0 var(--magenta)` |
| Botón primario | Relleno magenta, texto negro, borde 2px negro, sombra dura `4px 4px 0 #000`. Active: `translate(2px,2px)` + sombra `2px 2px` |
| Botón secundario | Fondo transparente, borde cian, texto cian |
| Chips/tags | Mono `0.75rem` uppercase, borde 1.5px, fondo `--bg-alt` |
| Foto | Marco de 3px + sombra dura magenta; filtro duotone CSS (sepia+hue-rotate hacia magenta/cian) que desaparece al hover mostrando la foto real |
| Fondo retrowave | Grid en perspectiva con `linear-gradient` CSS puro, opacidad baja, `position: fixed` |
| Scanlines | `repeating-linear-gradient` global, opacidad ≤ 0.04, `pointer-events: none` |
| Titular hero | Aberración cromática sutil: `text-shadow: 2px 0 var(--magenta), -2px 0 var(--cyan)` (solo H1) |
| Section headers | Prefix de terminal: `~/lucas $ 01 --sobre-mi` |
| Cursor | Bloque parpadeante (`steps(1)`) donde haya texto tipo terminal |

## 7. Estructura de la página (one-page)

Nav sticky: logo `~/lucas` + links `#sobre-mi #skills #experiencia #sdd #portfolio #contacto` + botón CV. En móvil: hamburguesa (full-screen overlay brutalista).

1. **Hero (100svh)** — Izquierda: línea de terminal con typing; H1 con nombre; headline; sub de stack; CTAs `[ver portfolio]` `[copiar email]`. Derecha: `assets/foto.webp` con marco brutalista y 2 stickers HUD ("LV. SENIOR" / "+99 IA"). Fondo: grid + sol synthwave detrás de la foto.
2. **Sobre mí (01)** — 2–3 párrafos: de web (Drupal/WP/Laravel/APIs) a IA agéntica, con paréntesis gamer (estudié videojuegos, Unity, gamejam). + 3 stats grandes: `[X]+ años` · `[n] proyectos` · `1 gamejam`.
3. **Skills (02)** — 4 grupos en tarjetas: *Web* (Drupal, WordPress, Laravel, APIs REST, PHP…), *IA agéntica* (claude-code/cursor/copilot-style, SDD, prompts, orquestación de agentes), *Juegos* (Unity, C#, game design), *Herramientas* (Git, CI, testing…). Nivel con barra segmentada, no estrellas.
4. **Experiencia (03)** — Timeline vertical: cada item = tarjeta con rol, empresa, periodo y 2–3 bullets de impacto (no tareas).
5. **Cómo trabajo — SDD (04)** — ⭐ Sección diferenciadora hacia el target: pipeline visual `Spec → Plan → Agentes → Review → Ship` (CSS puro) + 3 bullets con prácticas reales (specs versionadas, agents con límites y validación, review humana). Enlaza a un ejemplo real (repo/PR/spec publicada).
6. **Portfolio (05)** — Grid 3×2 (desktop) de cards: GIF, título, 1 línea, tags, links `[demo] [repo] [vídeo]`. Filtros: `todo / web / ia / juegos` (JS, sin recarga). Contenido en array `PROJECTS` de `script.js` → render dinámico (fuente única de datos, cero backend).
7. **Gamer mode (06)** — Franja de acento magenta: Unity, la gamejam, y qué aporta ese background al rol senior (rendimiento, prototipado rápido, pasión por construir).
8. **Contacto (07)** — Botones grandes: `[email]` (mailto + copia al portapapeles con toast), `[GitHub]`, `[LinkedIn]`. Meta: "Respondo en <24h · CET". Opcional: `[calendly]`.
9. **Footer** — `"Hecho a mano con HTML, CSS y JS. Sin frameworks, sin cookies."` · © 2026 · hint sutil del easter egg.

### Wireframe desktop

```
┌──────────────────────────────────────────────────────┐
│ ~/lucas   [sobre-mí skills exp sdd portfolio cv]     │ ← sticky
├══════════════════════════════════════════════════════┤
│   ~ ~ ~ ~ ~ ~ ~ grid retrowave + scanlines ~ ~ ~ ~   │
│  ~/lucas $ npm run hire_           ┌───────────────┐ │
│  LUCAS TABORDA                     │    [FOTO]     │ │
│  Senior AI-Driven Developer        │  marco/duo    │ │
│  web · ia agéntica · videojuegos   └───────────────┘ │
│  [VER PORTFOLIO] [COPIAR EMAIL]        LV.99  +99IA  │
├──────────────────────────────────────────────────────┤
│ 01 SOBRE MÍ                    ▸ stats en fila       │
├──────────────────────────────────────────────────────┤
│ 02 SKILLS      ┌web┐ ┌ia┐ ┌games┐ ┌tools┐            │
├──────────────────────────────────────────────────────┤
│ 03 EXPERIENCIA   │ tarjetas en timeline vertical      │
├──────────────────────────────────────────────────────┤
│ 04 CÓMO TRABAJO (SDD)  [Spec]→[Plan]→[Agents]→[Ship] │
├──────────────────────────────────────────────────────┤
│ 05 PORTFOLIO   filtros: (todo)(web)(ia)(juegos)      │
│  ┌──────┐ ┌──────┐ ┌──────┐                          │
│  │ GIF  │ │ GIF  │ │ GIF  │  → 2 filas               │
│  └──────┘ └──────┘ └──────┘                          │
├──────────────────────────────────────────────────────┤
│ 06 GAMER MODE  ▸ franja de acento magenta            │
├──────────────────────────────────────────────────────┤
│ 07 CONTACTO   [EMAIL] [GITHUB] [LINKEDIN]            │
├──────────────────────────────────────────────────────┤
│ footer · hecho a mano · © 2026 · ▲↑▲↑▼▼ hint         │
└──────────────────────────────────────────────────────┘
```

### Wireframe móvil (< 768px)

Una columna: nav burger → hero (foto arriba, texto debajo, CTAs full-width) → secciones apiladas → portfolio en 1 col → contacto en botones full-width → footer. Timeline pasa a línea a la izquierda con `padding-left`.

## 8. Portfolio sin servidor (recomendaciones)

Opciones evaluadas para mostrar proyectos sin pagar servidores:

| Opción | Coste | Pros | Contras |
|---|---|---|---|
| **GitHub Pages** | 0€ | HTTPS gratis, dominio propio, ideal para la web y demos | Soft-limit ~100GB/mes banda (más que suficiente) |
| **Cloudflare Pages** | 0€ | Sin límite de ancho de banda, builds rápidos | Cuenta extra |
| Netlify / Vercel (hobby) | 0€ | Previews, forms básicos | Límites de uso, TOS no para "clonar webs" masivamente |
| **itch.io** (juegos WebGL) | 0€ | Hosting de builds de Unity/gamejam + widget embebible | — |
| **YouTube embed** | 0€ | Gameplay/demos largas sin storage propio | Requiere canal |
| GIFs/capturas en el repo | 0€ | Autoalojado junto al código | Peso si abusas (comprimir) |
| CodePen / StackBlitz | 0€ | Demos UI vivas embebibles | Solo snippets |

**Decisión recomendada (coste anual total: 0€, salvo dominio opcional ~10€/año):**

1. La web personal vive en **GitHub Pages** (`usuario.github.io` o dominio propio con HTTPS por CNAME).
2. Cada proyecto destacado = **"case study estático"**: una mini-página propia (1 HTML) con reconstrucción esencial del proyecto — *no clonar webs enteras de clientes*. Menos mantenimiento, cero riesgo, misma demostración. Deploy en Pages: `usuario.github.io/nombre-proyecto`.
3. Juegos: binomio **itch.io** (build jugable) + vídeo de gameplay en **YouTube** embebido.
4. El portfolio en la web se alimenta del array `PROJECTS` en `script.js`: título, GIF alojado en `assets/`, tags, y los 3 links (demo / repo / vídeo).
5. Como el target es SDD: los enlaces a **repos ordenados** (README, specs y PRs legibles) valen tanto o más que las demos — mostrar el método es el portfolio.

## 9. Contacto sin backend

- **Email:** botón que hace `mailto:` + botón "copiar" con `navigator.clipboard` y toast de confirmación.
- **GitHub / LinkedIn:** enlaces directos en nav, hero y footer.
- **Si se quiere formulario (v1.1):** servicio gratuito externo tipo Formspree (free tier) — el form apunta a su endpoint, no existe backend propio.
- Nada de datos personales sensibles en la página.

## 10. Interacciones y animaciones

| Efecto | Técnica | Coste |
|---|---|---|
| Typing de la línea de terminal | JS (~20 líneas, `setInterval`) | mínimo |
| Cursor parpadeante | CSS `steps(1)` | 0 |
| Reveal on scroll | `IntersectionObserver` + clase CSS | mínimo |
| Hover de tarjetas/botones | `transform` + `box-shadow` | 0 |
| Filtros de portfolio | JS `classList` (sin recarga) | mínimo |
| Copiar email | `navigator.clipboard` + toast CSS | mínimo |
| Easter egg | Código Konami (~15 líneas) → filtro CRT global | mínimo |

**Reglas:** solo se animan `transform` y `opacity`; duraciones 150–400ms; easing `cubic-bezier(.2,.8,.2,1)`; máx. 1 animación ambiental lenta. Con `prefers-reduced-motion: reduce` se desactivan typing, reveals y efectos (contenido 100% visible estático).

## 11. Presupuesto de rendimiento

| Métrica | Objetivo |
|---|---|
| HTML | < 25KB |
| CSS | < 15KB |
| JS | < 10KB (sin minificar) |
| Font woff2 (opcional) | ≤ 60KB, 2 pesos, `font-display: swap` |
| Foto hero (WebP/AVIF) | ≤ 80KB, `loading="lazy"` para imágenes bajo el fold, siempre con `width/height` (CLS 0) |
| Peso total inicial | < 300KB |
| Lighthouse | Perf ≥ 95 · A11y ≥ 95 · BP 100 · SEO 100 |

Sin CDN de terceros bloqueantes; el único recurso externo aceptable es la fuente (con preload) o nada (stack de fuentes de sistema).

## 12. Responsive

- Mobile-first. Breakpoints: `480px` (ajustes), `768px` (tablet), `1024px` (layout 2 columnas hero/skills).
- Contenedor: `max-width: 1100px`, `padding-inline: clamp(1rem, 5vw, 4rem)`.
- Nav → hamburger a partir de `768px` hacia abajo (overlay full-screen, `aria-expanded`).
- Tipografía y espaciados fluidos con `clamp()`.
- Touch targets ≥ 44×44px.

## 13. Accesibilidad

HTML semántico (header/main/section/footer, un solo h1) · skip-link · `:focus-visible` con outline neón de 3px · contraste AA en todo texto · `alt` descriptivos en imágenes · menu hamburguesa con `aria-*` correcto y cierre con Escape · jerarquía de headings estricta · `prefers-reduced-motion` respetado.

## 14. SEO y social

- `<title>`: `Lucas Taborda — Senior AI-Driven Developer`
- Meta description orientada a búsqueda/recruiters · canonical · favicon SVG.
- Open Graph + Twitter card con imagen 1200×630.
- JSON-LD `schema.org/Person` con `jobTitle`, `sameAs` (GitHub, LinkedIn).
- Con una sola página no hace falta sitemap; `robots` = index.

## 15. Despliegue

- Recomendado: **GitHub Pages** (repo público, rama `main`, sitio desde raíz). HTTPS incluido, dominio propio opcional vía CNAME + `Enforce HTTPS`.
- Alternativa: Cloudflare Pages.
- Único coste posible: dominio (~10–12€/año) → candidatos: `lucastaborda.dev`, `lucasdev.gg`.
- Flujo: commit → push → live (sin pipeline necesario; si luego se quiere minificar, un action de GH de 20 líneas).

## 16. Datos necesarios del propietario (checklist)

- [ ] Foto de retrato (buena luz, fondo neutro, ≥600px)
- [ ] CV actualizado en PDF
- [ ] Email a mostrar, usuario de GitHub y URL de LinkedIn
- [ ] Años de experiencia y stat de proyectos ("+[X] años · [n] proyectos shiped")
- [ ] 4–6 proyectos de portfolio: nombre, descripción 1 línea, demo/repo/vídeo, GIF o captura
- [ ] Empleos: empresa, rol real, periodo, 2–3 logros medibles por puesto
- [ ] Nombre de la gamejam y de la entry (+ link a itch/vídeo si existe)
- [ ] Dominio deseado (opcional)

## 17. Decisiones abiertas

1. ¿Idioma: español, inglés o toggle ES/EN? *Sugerencia: si el target incluye reclutadores internacionales, inglés (o ES default + toggle).*
2. ¿Foto real con tratamiento duotone o avatar pixel-art como fallback mientras hay foto?
3. ¿Analytics? Si se desea: GoatCounter free (sin cookies) — decidir en v1.1.
4. ¿Sección SDD enlaza a repo público de ejemplo? (requiere pulir un repo antes del lanzamiento)

## 18. Fuera de alcance (candidatos a v2)

Multiidioma completo · blog (estático, sin CMS) · versión light/dark (dark es identidad) · formulario propio · páginas de proyecto individuales con plantilla · PWA/offline.

## 19. Criterios de aceptación (DoD)

- [ ] Exactamente `index.html` + `styles.css` + `script.js` (+ assets), sin dependencias externas más allá de fuentes opcionales
- [ ] Lighthouse ≥ 95/95/100/100 (perf/a11y/BP/SEO) en mobile y desktop
- [ ] Sin layout roto de 360px a 1920px; menú hamburguesa funcional en móvil
- [ ] Todas las animaciones desactivadas con `prefers-reduced-motion`
- [ ] Contacto (email) alcanzable en ≤ 2 clicks desde cualquier scroll-position
- [ ] Contraste AA verificado; HTML válido sin errores (validador W3C)
- [ ] Cumple la checklist de contención de §6.1
- [ ] Desplegado y accesible vía HTTPS