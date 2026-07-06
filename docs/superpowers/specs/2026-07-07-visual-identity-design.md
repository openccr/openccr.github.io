# openCCR Visual Identity Design Spec

**Date:** 2026-07-07
**Status:** Implemented

---

## Overview

This document records design decisions made when establishing the openCCR website visual identity. The canonical rules for future sessions are in `CLAUDE.md` at the repo root. This document records *why* decisions were made.

---

## Audience & Vibe

**Dual audience:** Technical divers / hardware builders + software developers.

**Vibe:** Marine × technical hybrid. Not consumer, not purely academic. Professional, open-source, safety-aware.

Decisions driven by this:
- Navy/ocean blue palette: marine without being literal (no cartoon waves)
- Space Grotesk: geometric, technical — not a humanist sans (too soft) or a monospace-heavy aesthetic (too dev-only)
- Safety red reserved strictly for CCR notices — reinforces that this is life-support infrastructure

---

## Color Palette Rationale

| Token | Hex | Rationale |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Clean white base. No colored backgrounds complicating contrast. |
| `--color-bg-subtle` | `#F0F5FA` | Blue-tinted grey. Section alternation without harsh grey. |
| `--color-border` | `#C8DCF0` | Soft blue-grey. Visible but not heavy. |
| `--color-text` | `#111827` | Near-black. Not pure black — avoids harsh contrast. |
| `--color-text-muted` | `#4B6478` | Blue-grey muted. Coherent with palette, not neutral grey. |
| `--color-navy` | `#0A3060` | Deep, authoritative. Primary brand anchor. |
| `--color-ocean` | `#0E6BAD` | Mid-range blue. Interactive elements — readable against white. |
| `--color-cyan` | `#24B4D8` | Vivid, energetic. Hover states only — ensures intentional use. |
| `--color-warning` | `#C0392B` | CCR-standard safety red. Restricted to safety notices. |

---

## Typography Rationale

**Space Grotesk (headings):** Geometric grotesque with slight personality. Technical without being cold. Reads well at both display and small sizes. Google Fonts, free.

**Inter (body):** Developer/documentation standard. Maximum readability at 14–18px. Excellent legibility at small sizes for BOM tables, code comments, captions.

**JetBrains Mono (code):** Best-in-class for firmware/code contexts. Ligatures disabled by default for technical accuracy.

---

## Layout System

**Max width: 1200px.** Comfortable for documentation-style content on wide displays without becoming newspaper-column narrow.

**Spacing scale: 4/8/12/16/24/32/48/64px.** Standard 4px base unit. Named by pixel value for clarity (`--space-4` = 16px). Avoids fractional values.

**Single responsive breakpoint: 768px.** Simple, maintainable. Avoids the trap of three breakpoints for a docs site.

---

## Component Decisions

### Nav
Fixed top nav chosen over sticky because content sections should scroll cleanly without the nav snapping.

Mobile: hamburger toggle with slide-down drawer rather than sidebar — simpler JS, no overlay management.

### Hero — Index vs Sub-pages
- Index hero: light (`--color-bg-subtle`), horizontal layout. Landing page = invitation.
- Sub-page hero: dark navy, full-width. Sub-page = entering a distinct domain.

Both use the same subtle CSS grid pattern (linear-gradient lines at 48px) for coherence. Index pattern uses ocean blue at 6% opacity; sub-page uses white at 3%.

### Safety Warning Component
Dedicated component rather than generic "alert" because:
1. CCR context means safety notices have a specific, serious meaning
2. Restricted to `--color-warning` — no "info" or "success" variants that would dilute the signal
3. Always includes icon + title + text — enforced structure

### Feature Cards vs Info Cards
Two distinct card types:
- `.feature-card` — links (clickable), homepage navigation grid
- `.card` — content (not links), principle descriptions, module summaries

Separation prevents the antipattern of wrapping non-interactive content in `<a>` tags.

---

## Accessibility Notes

- Nav hamburger includes `aria-expanded` and `aria-controls`
- All decorative SVG icons have `aria-hidden="true"`
- Wordmark `<a>` has `aria-label="openCCR home"`
- Color contrast: navy (#0A3060) on white exceeds WCAG AA for normal and large text
- Focus styles: `:focus-visible` on `.btn` uses `--color-cyan` outline
- Screen reader utility class `.sr-only` available

---

## Files Created

```
css/main.css              Design tokens + reset + typography + layout
css/components.css        All component styles
js/nav.js                 Mobile nav toggle
index.html                Landing page (hero + safety + feature grid + principles)
hardware.html             Skeleton: BOM, schematics, build guide
software.html             Skeleton: architecture, flashing, firmware modules
api.html                  Skeleton: serial protocol, extension API, log format
community.html            Skeleton: contributing, GitHub repos, license, contact
shop.html                 Skeleton: kits, individual components
CLAUDE.md                 Visual identity rules for future sessions
docs/superpowers/specs/2026-07-07-visual-identity-design.md  This file
```

---

## Verification Checklist

- [ ] `index.html` renders nav, hero, safety warning, feature grid, principles cards, footer
- [ ] Hamburger nav opens/closes on mobile (375px viewport)
- [ ] Active nav link correct on each sub-page
- [ ] `--color-warning` only appears in safety warning components
- [ ] Google Fonts load (Space Grotesk, Inter, JetBrains Mono)
- [ ] No CSS custom property references undefined variables
- [ ] Sub-pages have page-hero (dark navy) + safety warning + footer
- [ ] Footer disclaimer present on all pages
