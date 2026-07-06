# openCCR Visual Identity — Rules for Claude Sessions

This file defines the design system for the openCCR website. All future sessions
editing this site MUST follow these rules exactly. Do not introduce new colors,
fonts, or component patterns without updating this file.

---

## Stack Constraints

- **No build tools.** Pure HTML, CSS, and vanilla JS only. No npm, no webpack, no
  preprocessors, no frameworks.
- **Multi-page site.** Nav and footer are duplicated per page (no server-side
  includes). Keep them in sync manually when changing shared elements.
- **Google Fonts** loaded via `@import` in `css/main.css`. Requires internet access.

---

## File Structure

```
index.html          Landing page
hardware.html
software.html
api.html
community.html
shop.html
css/
  main.css          Design tokens, reset, typography, layout grid, utilities
  components.css    All component styles: nav, footer, cards, buttons, badges,
                    safety-warning, hero, page-hero, section-header, placeholder
js/
  nav.js            Mobile menu toggle only — no other JS
CLAUDE.md           This file
docs/superpowers/specs/  Design specs and planning docs
```

---

## Color Palette

All colors are CSS custom properties defined in `css/main.css `:root`.

```
--color-bg:         #FFFFFF   White base background
--color-bg-subtle:  #F0F5FA   Light blue-tinted grey — section alternation
--color-border:     #C8DCF0   Soft blue-grey — borders, dividers
--color-text:       #111827   Near-black — body text
--color-text-muted: #4B6478   Muted blue-grey — secondary text, nav links
--color-navy:       #0A3060   Deep navy — headers, wordmark, primary buttons
--color-ocean:      #0E6BAD   Mid ocean blue — links, active nav, card labels
--color-cyan:       #24B4D8   Bright cyan — hover states, CTAs, highlights
--color-warning:    #C0392B   Safety-critical red — CCR safety notices only
```

Rules:
- Never add new color variables without updating this file.
- `--color-warning` is reserved for safety-critical content only. Do not use it
  for decorative or status purposes.
- On dark (navy) backgrounds, use white text and `--color-cyan` for accents.

---

## Typography

```
--font-heading: 'Space Grotesk', system-ui, sans-serif
--font-body:    'Inter', system-ui, sans-serif
--font-code:    'JetBrains Mono', 'Fira Code', monospace
```

Usage:
- **Space Grotesk** — all headings (h1–h6), section eyebrows, wordmark, card titles,
  nav wordmark, feature-card labels, badge text, button-like labels
- **Inter** — all body copy, nav links, footer links, captions, form labels
- **JetBrains Mono** — `<code>`, `<pre>`, inline code snippets, API examples

### Wordmark

```html
<a href="index.html" class="nav__wordmark">
  <span class="open">open</span><span class="ccr">CCR</span>
</a>
```

- `.open` — font-weight 400
- `.ccr` — font-weight 700, letter-spacing 0.04em
- Color: `--color-navy` on light backgrounds, `#fff` on dark (navy) backgrounds
- Always use this exact markup. Never render the wordmark as plain text.

---

## Spacing Scale

```
--space-1:   4px
--space-2:   8px
--space-3:  12px
--space-4:  16px
--space-6:  24px
--space-8:  32px
--space-12: 48px
--space-16: 64px
```

Always use these tokens for margin/padding. Do not use arbitrary pixel values.

---

## Layout

- `--max-width: 1200px` — site container max width
- `--nav-height: 64px` — fixed nav height; pages use `.page-content` (padding-top: 64px)
- `.container` — max-width wrapper with horizontal padding
- `.section` — standard content section with `padding-block: var(--space-16)`
- `.section--subtle` — adds `background: var(--color-bg-subtle)` for alternation
- `.grid-2`, `.grid-3`, `.grid-4` — CSS grid columns, collapse to 1 col at 768px

---

## Components

### Navigation (`.nav`)

Fixed top nav, white background, `--color-border` bottom border, `z-index: 100`.

```html
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="container nav__inner">
    <!-- wordmark -->
    <a href="index.html" class="nav__wordmark">
      <span class="open">open</span><span class="ccr">CCR</span>
    </a>
    <!-- desktop links -->
    <ul class="nav__links" role="list">
      <li><a href="hardware.html">Hardware</a></li>
      <!-- ... -->
    </ul>
    <!-- hamburger — mobile only -->
    <button class="nav__hamburger" id="nav-hamburger"
            aria-expanded="false" aria-controls="nav-mobile"
            aria-label="Toggle mobile menu">
      <!-- 3-line SVG icon -->
    </button>
  </div>
</nav>
<!-- mobile drawer -->
<div class="nav__mobile" id="nav-mobile">
  <ul class="nav__mobile-links" role="list"><!-- same links --></ul>
</div>
```

- Add `class="active"` to the `<a>` matching the current page (both desktop and mobile)
- Nav link default color: `--color-text-muted`; hover: `--color-cyan`; active: `--color-ocean`
- Mobile menu controlled by `js/nav.js` — adds/removes `.is-open` on `#nav-mobile`

### Footer (`.footer`)

Dark navy background (`--color-navy`), 4-column grid: brand + 3 link columns.
Collapses to 2-col on mobile (brand spans full width).

Always include the disclaimer in `.footer__bottom`:
```
Not certified for diving. Use at your own risk.
```

### Buttons (`.btn`)

Three variants:
- `.btn--primary` — navy fill; hover → ocean
- `.btn--outline` — navy border on white; hover → navy fill
- `.btn--outline-light` — white border on dark bg

Two sizes beyond default:
- `.btn--lg` — larger padding, base font size
- `.btn--sm` — smaller padding, xs font size

### Cards

Two card types:

**`.card`** — info card with icon, title, body text. Not a link.
```html
<div class="card">
  <div class="card__icon"><!-- SVG icon --></div>
  <h3 class="card__title">Title</h3>
  <p class="card__body">Description.</p>
  <div class="card__footer"><!-- optional action --></div>
</div>
```

**`.feature-card`** — clickable link card for homepage feature grid.
```html
<a href="page.html" class="feature-card">
  <div>
    <div class="feature-card__label">Category</div>
    <div class="feature-card__title">Title</div>
  </div>
  <p class="feature-card__desc">Description.</p>
  <span class="feature-card__arrow" aria-hidden="true">→</span>
</a>
```
Hover: border changes to `--color-cyan`, slight lift.

### Badges (`.badge`)

Inline status tags. Variants: `.badge--navy`, `.badge--ocean`, `.badge--cyan`,
`.badge--warning`. Keep badge text very short (1–3 words).

### Safety Warning (`.safety-warning`)

**Reserved exclusively for CCR safety-critical notices.** Uses `--color-warning` red.

```html
<div class="safety-warning">
  <svg class="safety-warning__icon"><!-- triangle-warning SVG --></svg>
  <div class="safety-warning__content">
    <div class="safety-warning__title">Safety Notice</div>
    <p class="safety-warning__text">Warning text here.</p>
  </div>
</div>
```

Every page with hardware, software, or shop content must include a safety warning
near the top of the page content. The community page must include contributor safety
guidelines.

### Section Header (`.section-header`)

Centered header block above content grids:
```html
<div class="section-header">
  <p class="section-header__eyebrow">Category label</p>
  <h2 class="section-header__title">Main heading</h2>
  <p class="section-header__subtitle">Supporting text, max ~560px wide.</p>
</div>
```

### Page Hero (`.page-hero`)

Dark navy hero for sub-pages (not index). Grid pattern overlay.
```html
<div class="page-hero">
  <div class="container page-hero__inner">
    <p class="page-hero__eyebrow">Section</p>
    <h1 class="page-hero__title">Page Title</h1>
    <p class="page-hero__subtitle">One to two sentences.</p>
  </div>
</div>
```

### Index Hero (`.hero`)

Light `--color-bg-subtle` hero for the landing page. CSS grid pattern overlay.
Grid pattern: `linear-gradient` with `rgba(14, 107, 173, 0.06)` at 48px spacing.

### Placeholder Blocks (`.placeholder-block`)

Dashed border, subtle background, centered text. For content sections not yet built:
```html
<div class="placeholder-block">
  <h3>Section Name</h3>
  <p>Content coming soon.</p>
</div>
```

---

## CSS Custom Properties — Quick Reference

All defined in `css/main.css`:

- Colors: `--color-bg`, `--color-bg-subtle`, `--color-border`, `--color-text`,
  `--color-text-muted`, `--color-navy`, `--color-ocean`, `--color-cyan`, `--color-warning`
- Fonts: `--font-heading`, `--font-body`, `--font-code`
- Font sizes: `--text-xs` through `--text-5xl`
- Spacing: `--space-1` through `--space-16`
- Layout: `--max-width`, `--nav-height`, `--radius-sm/md/lg`
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- Transitions: `--transition` (200ms ease)

---

## Responsive Breakpoint

Single breakpoint at `768px`. Below this:
- Nav hides desktop links, shows hamburger
- Grids collapse to single column
- Section padding reduces to `--space-12`
- Heading sizes step down one level

---

## Do Not

- Do not use `!important`
- Do not use inline styles for anything reusable (one-off layout overrides acceptable)
- Do not add arbitrary colors outside the palette
- Do not use JavaScript for anything except mobile nav toggle
- Do not add `npm`, `package.json`, or any build tooling
- Do not use `--color-warning` for non-safety content
- Do not forget to set `.active` on nav links for the current page
- Do not forget the safety warning on hardware, software, shop, and community pages
