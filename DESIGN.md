---
name: Adekro
description: A technical-drafting studio system for a custom-software house — navy and brand gold on warm ivory, laid out like a blueprint sheet.
colors:
  bg-main: "#fbf9f4"
  bg-surface: "#fffefa"
  bg-accent: "#082b5c"
  bg-soft: "#edf2f7"
  bg-strong: "#03152f"
  text-main: "#061b39"
  text-muted: "#43546a"
  text-light: "#f8f7f1"
  line: "#d4dbe4"
  brand: "#c8953e"
  brand-dark: "#9d6d25"
  brand-ink: "#85591a"
  gold-light: "#f1d18f"
  blue-mid: "#0b438a"
typography:
  display:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(3rem, 5.8vw, 5.6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "0"
  headline:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(2.1rem, 4vw, 3.3rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(1.4rem, 2.4vw, 2.3rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Space Grotesk, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "tnum, lnum"
  label:
    fontFamily: "Space Grotesk, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  small:
    fontFamily: "Space Grotesk, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  card-title:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)"
    fontWeight: 700
    lineHeight: 1.2
  stat-value:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(1.8rem, 3vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.1
  subsection-title:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.15
  category-title:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(1.55rem, 2.5vw, 2.3rem)"
    fontWeight: 700
    lineHeight: 1.1
  section-title-lg:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3.7rem)"
    fontWeight: 700
    lineHeight: 1.05
  cta-title:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(1.8rem, 3vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.08
  service-title:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)"
    fontWeight: 700
    lineHeight: 1.2
  hero-title-compact:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(2.75rem, 13vw, 3.8rem)"
    fontWeight: 700
    lineHeight: 1.0
  lead:
    fontFamily: "Space Grotesk, Segoe UI, sans-serif"
    fontSize: "clamp(1.02rem, 1.7vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.6
  product-title:
    fontFamily: "Space Grotesk, Segoe UI, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 700
    lineHeight: 1.2
  legal-heading:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.25
  glyph:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  xs: "3px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  pill: "999px"
spacing:
  sm: "0.8rem"
  md: "1.4rem"
  lg: "2.4rem"
  xl: "3.2rem"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "#03152f"
    rounded: "{rounded.pill}"
    padding: "0.82rem 1.3rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-dark}"
    textColor: "#fff"
    rounded: "{rounded.pill}"
    padding: "0.82rem 1.3rem"
  button-secondary:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.sm}"
    padding: "0.82rem 1.3rem"
  card:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.sm}"
    padding: "1.4rem 1.35rem"
  product-preview:
    backgroundColor: "{colors.bg-strong}"
    textColor: "{colors.text-light}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "1rem 1rem 2rem"
  sheet-tab:
    backgroundColor: "{colors.bg-strong}"
    textColor: "{colors.gold-light}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "0.32rem 0.7rem"
---

# Design System: Adekro

## Overview

**Creative North Star: "Lo Studio di Progettazione" (The Drafting Studio)**

Adekro's marketing site was rebuilt from a generic SaaS look — blurred gradient blobs, soft-shadow cards, stock-icon badges — into the visual language of a technical drafting studio: the place where a project is measured, annotated, and drawn before it is built. The system keeps Adekro's existing navy/gold brand palette but re-stages it on a warm ivory ground with a fine millimeter grid, hairline borders, tabular data, and hard offset "plate" shadows standing in for blur. Gold is used as drafting ink — annotation tabs, index numbers, dimension-style accents — never as a filled background.

Density is moderate and confident: generous section padding, but text blocks and cards keep hard edges and a measured rhythm rather than airy whitespace with rounded-everything softness. The one deliberately soft shape in the whole system is the primary CTA pill button, kept round on purpose so the single action a visitor should take always reads as the exception, not the rule.

Confirmed visual rejections: no blob/gradient hero art, no soft pill badges as category labels (replaced by the sheet-tab component), no diffuse blurred drop shadows on cards or panels (replaced by hard zero-blur offset shadows), no generic rounded-lg-everywhere corner treatment.

**Key Characteristics:**
- Product previews are drawing sheets: a flat navy plate, gold-light linework and ivory type, one dimension line along the foot. Six products, one visual language; no per-product palettes, no photography.
- Dimension lines ("quote") with end ticks measure groups of content and carry a real value (the product count in each group), never a decorative number.
- Fine millimeter blueprint grid (`--grid-line`, `--grid-line-dark`) used sparingly: hero panel and a couple of illustrative product-card previews only, never as an ambient global texture.
- Hard "offset plate" shadows (zero blur, `6px 6px 0`) at rest, pushed further and gold-tinted on hover, instead of diffuse blur.
- Sharp-to-slightly-softened corners (6px/8px) everywhere except the primary CTA, which stays a pill.
- Merriweather serif for headings treated as technical caption type; Space Grotesk with tabular numerals for UI, data, and process indices.
- The `.sheet-tab` component replaces every eyebrow/kicker label with a drafting title-block tag.

## Colors

Navy and blue-reale on warm ivory, with brand gold reserved for ink, not fill.

### Primary
- **Deep Navy Plate** (`#03152f`, token `bg-strong`): the darkest surface — hero blueprint panel, sheet-tab background, section-accent panels, footer-adjacent dark blocks.
- **Royal Blue Accent** (`#082b5c`, token `bg-accent`): paired with Deep Navy Plate in the dark-panel gradients (hero blueprint, `.section-accent`, `.operational-grid`); also the stat-value color on light surfaces.
- **Blue-Mid** (`#0b438a`, token `blue-mid`): a mid-tone accent used inside illustrative product-preview art (credit bars, farm-map fields), not a UI chrome color.

### Secondary
- **Brand Gold** (`#c8953e`, token `brand`) / **Brand Gold Dark** (`#9d6d25`, token `brand-dark`): the primary CTA fill and its hover state, dimension-line and divider ink, the feature-list bullet, focus outlines, selection color. Used as a small solid fill only on the CTA pill and small marks (bullets, toggle, satellite dot) — never as a large background field. `brand-dark` is for lines and fills; it measures 4.3:1 on ivory, so it is not used for text.
- **Brand Ink** (`#85591a`, token `brand-ink`): the text-safe darker gold (5.4:1 on soft slate, 5.8:1 on ivory) for small gold-toned type: the active nav item, "Scopri …" product links, legal links, cookie labels and status text.
- **Gold-Light Ink** (`#f1d18f`, token `gold-light`): the "drafting ink" tone — sheet-tab text, process-index numbers and borders, dark-panel headings/dividers, all linework and labels inside product previews and the service list, and the recolored gestionali-su-misura icon glyph (previously an off-palette teal, corrected to this token during finish review).

### Neutral
- **Warm Ivory** (`#fbf9f4`, token `bg-main`): page background.
- **Paper White** (`#fffefa`, token `bg-surface`): card/panel background, sitting one step lighter than the page so cards read as sheets placed on the desk.
- **Soft Slate Tint** (`#edf2f7`, token `bg-soft`): flat full-bleed section tint (`.section-soft`), footer-adjacent muted blocks.
- **Ink Text** (`#061b39`, token `text-main`) / **Muted Ink** (`#43546a`, token `text-muted`): heading/body and secondary copy respectively.
- **Hairline** (`#d4dbe4`, token `line`) and **Hairline Strong** (`rgba(6,27,57,0.16)`, token `line-strong`): all card, section-divider, and footer borders.

### Named Rules
**The Ink, Not Fill Rule.** Brand gold marks lines, numbers, tabs, and small accent shapes; it does not fill large surfaces. A gold background is reserved for the primary CTA pill and small state dots — never a card, section, or panel.

**The Text Ink Rule.** Gold-toned type on a light ground is `brand-ink`, never `brand-dark` or `brand`. Gold-light is for type on navy only.

**The One Soft Shape Rule.** The primary CTA button is the only pill in the system. Every other surface — cards, tabs, stat blocks, footer columns, product panels — uses the sharp/near-sharp radius scale, so the one rounded shape stays legible as "the action."

## Typography

**Display Font:** Merriweather (with Georgia, serif fallback)
**Body Font:** Space Grotesk (with Segoe UI, sans-serif fallback), tabular/lining numeral features enabled by default (`--font-tabular`)

**Character:** A serif treated like technical lettering — tight tracking, decisive size, no ornamental italic — paired with a geometric sans used for UI chrome and any counted value (indices, stats, credits), so numbers always read as measured data.

### Hierarchy
- **Display** (700, `clamp(3rem, 5.8vw, 5.6rem)`, line-height 0.98): product-detail hero h1 only.
- **Headline** (700, `clamp(2.1rem, 4vw, 3.3rem)`, line-height 1.2, tracking -0.03em): standard section h1.
- **Title** (700, `clamp(1.4rem, 2.4vw, 2.3rem)` down to `clamp(1.1rem, 1.8vw, 1.45rem)` in cards): section and card h2/h3.
- **Body** (400, 1rem, `--text-body`, line-height 1.7): paragraph copy, including product-card and service-list text on every width, capped at ~70ch (`.section-lead`) or ~65ch (footer intro).
- **Heading and display exceptions** (frontmatter roles `card-title`, `stat-value`, `subsection-title`, `category-title`, `section-title-lg`, `cta-title`, `service-title`, `hero-title-compact`, `lead`, `product-title`, `legal-heading`, `glyph`): each heading role keeps its own fluid `clamp()` tuned to where it sits. They are documented so the scale is explicit; a new heading should reuse the nearest role rather than add a thirteenth.
- **Small** (400–700, 0.875rem, `--text-small`): captions, breadcrumbs, cookie help text, table and meta lines, hero-panel sublines, source and date lines in guides and news.
- **Label** (700, 0.75rem, `--text-label`, letter-spacing 0.08–0.1em, uppercase): sheet-tab text, process-index digits, dimension-line values, preview type, footer column headings — always Space Grotesk with tabular numerals where the label carries a count or step number.

### Named Rules
**The Role Scale Rule.** Text below headings uses three sizes only: label 0.75rem, small 0.875rem, body 1rem. A new in-between value is a defect; map it to the nearest role.

**The Labeled-Information Rule.** A small uppercase label is only used when it carries real information (a product category, a news sector, a numbered process step); it always renders as the `.sheet-tab` drafting tab, never as a bare decorative eyebrow line above a heading.

## Layout

Centered container at `min(1100px, 100% - 2.4rem)`, widened to `min(1280px, 100% - 2.4rem)` for the header/nav row. Sections use flat vertical rhythm (`.section` padding 3.2rem top/bottom, collapsing to 1rem between adjacent sections) rather than a hard-bordered card wrapping every section. Two-column grids are the default composition for hero and CTA blocks (`.product-hero-grid`, `.operational-grid`), collapsing to a single column under 900px. Product groups are separated by a dimension line (`.quota`), not a border. The dark service block holds a three-item list (`.service-list`, three columns, one under 900px) beside the single contact CTA; there is no separate strip of cards after it. The header needs about 950px for logo, six links and the CTA on one row: below 1200px the brand caption is hidden, below 1100px nav and CTA padding tighten, and below 1000px it stacks and is no longer sticky (stacked it is ~250px tall). `overflow-x: clip` (not `hidden`) is used so desktop sticky keeps working. Under 640px product cards are one column, preview above copy. Product and feature grids are 2-column (`.cards`, `.product-grid`, `.stats-grid` at 3-column), collapsing to 1 column under 900px. `.section-shell` is a bare positioning wrapper — no border, background, or shadow of its own — used specifically so a grid of cards is never nested inside a second bordered card; `.section.section-soft` instead applies a flat full-bleed tint at the section level, and `.section-accent .section-shell` is the one exception that keeps a real bordered/shadowed dark panel, because it is always a single CTA/feature block, never a wrapper around other cards.

## Elevation & Depth

Depth is structural, not ambient: instead of diffuse blurred drop shadows, surfaces at rest carry a hard, zero-blur "offset plate" shadow that reads like a drafting plate sitting slightly off the page, and it grows and shifts to a gold tint on hover/interaction rather than softening.

### Shadow Vocabulary
- **Plate (light)** (`box-shadow: 6px 6px 0 rgba(6, 27, 57, 0.16)`, token `--shadow-plate`): resting state for `.card`, `.stat-card`, `.product-card`.
- **Plate (dark)** (`box-shadow: 6px 6px 0 rgba(200, 149, 62, 0.32)`, token `--shadow-plate-dark`): resting state for dark panels — `.hero-blueprint`, `.section-accent .section-shell`, `.operational-grid`.
- **Plate hover (gold push)** (`box-shadow: 10px 10px 0 rgba(200, 149, 62, 0.16)` on cards/stats, `12px 12px 0 rgba(6, 27, 57, 0.12)` on product cards): the offset grows and the card nudges up-left (`translate(-2px,-2px)` to `-3px,-3px`) on hover, paired with a border color shift to brand gold.
- A conventional diffuse blurred shadow is used only for two chrome elements that sit above page content rather than in the page flow: the sheet-tab's small drop shadow and the cookie-consent dialog's modal shadow.

### Named Rules
**The Offset-Not-Blur Rule.** Card and panel depth at rest is a hard zero-blur offset shadow, never a blurred glow. Blur is reserved for true overlays (modal, floating tab), not for in-flow surfaces.

## Shapes

Corners are sharp-to-slightly-softened by default: 6px (`--radius`) for cards, stat blocks, product cards, footer columns, and 8px (`--radius-lg`) for larger dark panels (hero blueprint, section-accent, operational grid). Buttons split the rule deliberately: `.btn-secondary` uses the sharp 4px radius like the rest of the system, while `.btn-primary` is the one full pill (999px) in the system, reserved for the primary call to action. Borders are hairline (1px) and do real structural work — card outlines, section dividers, the dashed `.process-connector` between process nodes — rather than being decorative. The fine millimeter grid (`.blueprint-grid`, `.blueprint-grid-dark`, 22–24px cell) is the system's one recurring background texture, restricted to the hero blueprint panel and the custom-gestionali product-card preview.

## Components

### Buttons
- **Shape:** pill (999px radius) for primary; sharp rectangle (4px) for secondary.
- **Primary:** brand gold fill (`#c8953e`) on navy text (`#03152f`), padding `0.82rem 1.3rem`, soft ambient shadow (the one place a diffuse shadow is allowed on an in-flow element, because the pill shape already signals "not a drafting plate").
- **Hover / Focus:** primary darkens to `#9d6d25` with white text and lifts (`translateY(-2px)`) with a larger diffuse shadow; all interactive elements get a 3px solid brand-gold focus ring (`outline-offset: 3px`).
- **Secondary:** hairline border, paper-white background, hover fills to soft-slate tint and border darkens to `bg-accent`.

### Cards / Containers
- **Corner Style:** 6px radius.
- **Background:** paper white (`#fffefa`) on light sections; on `.section-accent`, translucent white-on-navy (`rgba(255,255,255,0.06)`) with no shadow.
- **Shadow Strategy:** see Elevation & Depth — plate shadow at rest, larger gold-tinted offset + upward nudge on hover.
- **Border:** 1px hairline-strong, shifting to brand gold on hover.
- **Internal Padding:** ~1.4rem (cards), 1.2–1.5rem (stat cards, product-card copy).

### Navigation
- Sticky header above 1000px (static and stacked below; brand caption hidden below 1200px), blurred translucent paper background (`backdrop-filter: blur(18px)`), bottom hairline border. Nav links get a muted-ink default, navy text + soft-slate background fill on hover, and a brand-gold underline that scales in from the left on hover/active state. Active link is bold and `brand-ink` colored. The header CTA is a secondary button to `/contatti` labeled "Parliamo del tuo progetto", the same label as every other contact action. Mobile collapses the nav row to a stacked, centered layout.

### Product Preview (signature component)
The illustration at the head of each product card, drawn as a sheet: flat `bg-strong` navy plate, `gold-light` linework (1px borders, 40–50% alpha rules), ivory type in label/small sizes, one filled or outlined gold-light element as the single accent, and a dimension line along the foot (`.product-preview::after`). Only the custom-software preview carries the millimeter grid. Previews are `aria-hidden` illustrations; their sample figures are not claims. No photography, no per-product colors.

### Dimension Line (signature component)
`.quota`: a hairline in `brand-dark` with end ticks flanking a label-size value in `text-muted`, placed above each product group to measure it ("3 soluzioni"). The value is computed from the data, so it can never drift. It replaces the border that used to separate groups. Decorative otherwise, hence `aria-hidden`.

### Service List
Inside the dark service block: three items, each a `gold-light` Merriweather h3 over a hairline, with a body-size ivory line. Not cards: no fill, no shadow, no border box. One contact CTA sits in the block's right column.

### Sheet Tab (signature component)
A small dark-navy tab with gold-ink uppercase text, standing in for every eyebrow/kicker in the system. Two placements: absolute-positioned overlapping a container's top-left edge (`.sheet-tab`, used on product-detail and novita hero panels and process-step cards, labeled "Fase 1/2/3") or set inline before a heading (`.sheet-tab.sheet-tab-inline`, used on every product card's category label on the home page and `/prodotti` catalog). It only ever carries real information — a category, a sector, or a step number — never a decorative caption.

### Hero Blueprint (signature component)
The dark "foglio di lavorazione" (work sheet) panel that fills the homepage hero's right column: navy-to-royal-blue gradient, fine gold-tinted millimeter grid, a `.process-track` of three `.process-node` rows with tabular `.process-index` tags (01/02/03 — Analisi / Progettazione / Sviluppo) joined by a dashed `.process-connector`, and a `.hero-blueprint-status` row with a gold-light status dot (decorative, not a live status) that pulses only when the visitor has not asked for reduced motion; the panel is `aria-hidden` and its entrance is a 14px rise, never an opacity fade from zero. This panel did not exist before this build; it replaces what was previously an empty second hero column.

## Do's and Don'ts

### Do:
- **Do** use the hard offset plate shadow (`6px 6px 0`, zero blur) for any new in-flow card or panel; grow the offset and tint it gold on hover instead of adding blur.
- **Do** use `.sheet-tab` for any new category, sector, or step label; never place a bare uppercase caption line above a heading.
- **Do** keep the millimeter blueprint grid rare — one hero panel or one illustrative preview per screen, not an ambient global texture.
- **Do** keep the primary CTA as the system's only pill; every other new component uses the 6px/8px sharp radius scale.
- **Do** use Space Grotesk with tabular numerals for any counted value (stats, indices, prices, quantities).
- **Do** set small gold-toned text on light grounds in `brand-ink` (`#85591a`); keep `brand-dark` for lines and the CTA hover fill.
- **Do** pick text sizes from the role scale (`--text-label`, `--text-small`, `--text-body`) and give every tap target at least 44px.
- **Do** wrap decorative motion in `prefers-reduced-motion: no-preference` and start entrances from a visible state.
- **Do** mark illustrations that contain sample data `aria-hidden`.

### Don't:
- **Don't** add a decorative eyebrow/kicker caption; if a label doesn't carry real category/sector/step information, don't add a label at all.
- **Don't** fill a large surface with solid brand gold; gold is ink and small accents, not a background field.
- **Don't** introduce diffuse blurred drop shadows on in-flow cards or panels; blur is reserved for true overlays (the sheet-tab's own small drop shadow and the cookie-consent modal are the only exceptions).
- **Don't** add photography or a new color family to a product preview; draw it in navy, ivory and gold-light.
- **Don't** invent live status or numbers (online dots, counts) that the data does not back; dimension lines show real counts only.
- **Don't** round a second element into a pill; the primary CTA is the system's one deliberately soft shape.
- **Don't** change route URLs, SEO metadata (titles/descriptions/keywords/canonical/schema.org), or the product copy in `src/lib/products.ts` / `src/lib/news.ts` — this system is a visual layer over fixed content and information architecture.
