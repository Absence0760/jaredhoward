# Design system

The site's visual language lives in a **single global stylesheet**,
`src/app.css` — design tokens plus every component's styling, imported once in
`src/routes/+layout.svelte`. There is no CSS framework, no utility classes, and
(deliberately) **no external fonts, scripts, or stylesheets** — the Privacy
Policy commits the site to being first-party only, so the type stack is limited
to the OS's own fonts. Keep it that way; adding a `<link>` to a font host is a
policy change before it's a design change (see `../CLAUDE.md`).

## Direction

"Professional software engineering practice," in a **product / agency** key:
a bold gradient hero, elevated cards with hover-lift, deliberate depth, and a
monospace accent for the technical voice. It is intentionally **not** a blog —
no serif body text, no long-form essay column as the default.

## Tokens (`:root` in `app.css`)

**One token layer drives the whole site** — the masthead, the landing bands,
the reading column, the CV and the footer card. There is no second palette.
It lives under the `DESIGN TOKENS + LANDING PAGE` banner, with a contrast
table above it (see "Tokens" under "Landing page" below for the detail).

- **Type** — `--font-sans` (system UI stack) for everything; `--font-mono`
  (`ui-monospace` stack) for eyebrows, labels, section headings, tech chips,
  the sheet's row indices and the monogram lockup. No serif anywhere.
- **Ground** — `--l-ink-950` (page) → `--l-ink-700` (raised), five steps.
- **Lines** — `--l-line`, `--l-line-strong`, `--l-line-hover`, and
  `--l-line-interactive` for control boundaries (which have their own 3:1
  floor under WCAG 1.4.11).
- **Text** — `--l-fg`, `--l-fg-muted` (body), `--l-fg-dim` (chips and meta
  only — never anything a visitor must read).
- **Accent** — `--l-accent` is a **fill**, never text; `--l-accent-text` is the
  text blue; `--l-focus` is the focus ring.
- **Depth** — `--e1`–`--e3`. On dark these are borders plus an inset top
  highlight; on light, a conventional shadow ladder.
- **Scales** — `--s-1`…`--s-15` (4px base), `--r-xs`…`--r-full`,
  `--fs-display`…`--fs-name`, four `--ease-*` curves, `--page-max` /
  `--page-margin`.

Light and dark are one design in two lights: a single
`@media (prefers-color-scheme: dark)` block re-points the palette, and the two
places the schemes deliberately diverge are documented at the token block.

## Layout

`src/routes/+layout.svelte` wraps **every** route in one shell — `SiteHeader`
(the masthead) above, `LandingFooter` (the footer card) below. The old sidebar
rail is gone; navigation lives in the masthead on every page, so a visitor's
mental model doesn't change when they leave the home page.

Between them the layout branches once:

- **The landing page (`/`)** renders its own `<main class="landing">`, because
  its bands are full-bleed and each one re-applies the page gutters itself.
- **Every other route** gets `<main class="page">` — a single centred reading
  column (`--page-max` wide, `--page-margin` gutters) whose content is
  left-aligned to the same rail as the masthead brand and the hero headline.

## Component vocabulary

Shared by every route:

- **`.masthead`** — the brand lockup over the nav rail, with `.rail-dot`
  marking the current page. See "Landing page" for the compact behaviour.
- **`.landing-footer`** — the footer card: lockup, legal links, social buttons,
  a divider and the copyright line.
- **`.button`** (`-primary` / `-outline`) — the only button family. The CV's
  download link uses it.

The reading column (Services, Experience, CV, Contact, the legal pages, the
error page):

- **`.prose` / `.prose-header` / `.post-content`** — sans-serif long-form at a
  68ch measure. The header's rule is the same fading hairline the landing
  page's band labels sit on.
- **`.capability-data`** — a label/value data sheet on the same card surface as
  `.stream-card`.
- **`.cv`** — résumé layout reusing the mono section-heading pattern, opening
  with a `.cv-actions` row holding a `.button button-primary` download link to
  `/cv.pdf`. That PDF is **generated from this page at build time**
  (`pnpm build:pdf` → `scripts/generate_cv_pdf.mjs` prints the prerendered
  `/cv/` with headless Chromium), so page and PDF can't drift. The
  `@media print` block near the top of `app.css` is what the PDF renders:
  masthead / sheet / footer / download button hidden, an explicit light ground
  forced over the site-wide `color-scheme`, and the screen-hidden
  `.cv-print-header` (name · role · email · site) shown in their place.

The landing page's own vocabulary is listed under "Landing page" below. The old
auto-rotating `ProjectCarousel.svelte`, its `<noscript>` grid fallback in
`app.html`, and the `Sidebar.svelte` / `Footer.svelte` rail were all removed
with the redesign.

## Landing page

The landing page (`src/routes/+page.svelte`) is a **separate composition** from
the rest of the site. It shares the site's masthead and footer
card, but renders its own full-bleed `<main class="landing">` instead of the
reading column, so it owns the hero and the section bands. Its rules live in
`app.css` after the token block, under the `DESIGN TOKENS + LANDING PAGE`
banner.

**Two compositions ship, not one responsive layout.** They split at 720px and
1080px, and what changes between them is structural:

| | ≥1080px | 720–1079px | <720px |
| --- | --- | --- | --- |
| Masthead | 88px lockup band over a 56px nav rail, static | same, plus the menu button | 56px **fixed** bar, lockup only, backdrop blur |
| Navigation | the rail, with a dot that slides to the hovered item | rail + sheet (sheet is additive: routes, email, GitHub) | the sheet **is** the navigation |
| Hero graphic | co-equal subject, bleeding past the right margin | same | **atmosphere** — recropped, 4 bands not 7, dimmed and scrimmed behind the copy |
| Selected work | 3-up grid | 2-up grid | snap-scroller, 82vw cards, peek + a progress track whose thumb is `clientWidth / scrollWidth` |
| Stream card | 56px icon tile above the heading | same | 40px tile inline **beside** the heading, copy below both |
| CTAs | single primary button | single primary button | full-width, 52px |
| Footer links | inline row | inline row | 2×2 grid (single column below 400px) |

### Focal hierarchy

**The headline is the subject; the graphic is the setting.** On a page where an
80px headline and an 860px graphic share the fold, that has to be stated and
then built, not assumed. Three things carry it:

- The graphic is **cropped by the viewport** — it bleeds past the right page
  margin and its lower bands duck below the hero. A subject would be whole.
- Its leading edge **dissolves into the ground** as it approaches the type
  (`mask-image` on `.hero-figure`), so it emerges from the page rather than
  sitting on top of it.
- It carries **no information**: `aria-hidden`, no alt text, no role. Removing
  it costs the page nothing but atmosphere.

The crest is the single brightest pixel on the dark page (10.75:1 against the
ground) — but over a tiny area, and the coil's *mass* sits near the ground
(1.16:1 at the ramp's dark end). Brightness without area is a glint, not a
focal point. Motion agrees: the accent words colouring in at 620ms is the last
beat of the entrance, after the graphic has already settled.

### Tokens

The token block carries the ground/line/text/accent scales plus spacing
(`--s-1`…`--s-15`, 4px base), radii (`--r-xs`…`--r-full`), four easing curves
(`--ease-out-expo`, `--ease-out-quart`, `--ease-spring`, `--ease-ambient`), a
type scale (`--fs-display` … `--fs-role`) and a three-step elevation ladder.
A **contrast table** sits as a comment directly above the block, covering both
schemes. Every row is computed from the hex values immediately below it, so it
can be recomputed rather than trusted — do that when you touch a colour. Two
rules the table encodes:

- `--l-accent` is a **fill**, never text — `#2563EB` on the navy field is
  2.66:1. Accent text is always `--l-accent-text`.
- `--l-fg-dim` never carries anything a visitor must read: chips, indices and
  the copyright line only.

The two schemes are **the same design in two lights**, not one recipe rescaled.
They diverge in two places, deliberately:

- **Elevation.** Dark builds depth from border luminance plus an inset top
  highlight — a shadow on a near-black field is decoration that does nothing.
  Light uses a conventional shadow ladder.
- **The ribbon.** On a dark ground the rim carries depth and the specular crest
  is the brightest thing on screen. On a near-white ground there is no headroom
  above the ground for a crest, so gloss is carried by a **dark core** instead:
  the light ramp's deepest stop runs 11.22:1 against the page and its crest only
  1.60:1. Chrome reads on white paper because the highlight is *ringed by very
  dark tone*, not because the highlight is bright. Get this wrong — a crest at
  ~1.1:1 against the page — and the highlight stops reading as a highlight and
  starts reading as a hole punched through the band.

### Hero graphic

`HeroRibbon.svelte` is hand-authored inline SVG (~9 kB, no raster, no external
asset, zero `<filter>` elements). Seven bands, each an **open arc at an authored
start angle** — the asymmetry is in the markup, not in the animation, so a
`prefers-reduced-motion` visitor sees the same composed arrangement everyone
else does. Per band, back to front: an offset low-opacity occlusion pair (the
contact shadow that makes bands sit in front of one another), three tapering
sub-arcs sharing one gradient whose narrow specular crest is what reads as
gloss, and a dashed rim hairline. A single radial-gradient bloom sits behind
everything.

Colours come from `app.css` **by class**, never from inline attributes:
`var()` is not honoured inside SVG presentation attributes, so class-based
styling is the only way both palettes can drive the same markup.

**One light source, upper-left, for the whole cluster.** Every gradient runs the
same 45° screen vector and every occlusion copy is offset along it, so shadow
and highlight agree about where the light is — the difference between seven lit
rings and one lit object. Only the crest's position in the ramp shifts per band.
The dark and light schemes are not the same recipe rescaled: on a dark ground
the **rim** carries depth, on a pale one the **shadow** does, so `--rb-shade`
and `--rb-rim-alpha` are tuned per scheme rather than shared.

Motion: per-band rotation (28–74s, alternating direction), a 13s cluster
breathe, and a pointer parallax where the far bands move at roughly half the
near ones. All of it pauses when the graphic scrolls off-screen or the tab is
backgrounded, and stops entirely under reduced motion.

On compact viewports the graphic sits *behind* the hero copy, so the binding
contrast case is the **light** scheme: the eyebrow is dark accent text, and what
threatens it is the ribbon's dark bands rather than its lit ones.

The fix that worked was **compositional, not a dimmer switch**. Dropping the
crop so the coil's mass sits *below* the eyebrow rather than behind it let the
scrim start light (22% at the top instead of 48%) — so the graphic reads at a
higher opacity than before *and* the contrast improved. Fading the atmosphere
out until it passes is the move to avoid; it buys the number and loses the page.

Measured worst case under the live composite:

| | 375×667 | 320×568 |
| --- | --- | --- |
| headline, dark | 12.3:1 | 12.0:1 |
| headline, light | 10.8:1 | 10.7:1 |
| eyebrow, dark | 7.8:1 | 7.7:1 |
| eyebrow, light | 6.0:1 | 6.0:1 |

**Method** (re-run it if the scrim, the graphic's opacity or its crop changes):
set `visibility: hidden` on `.hero-title` and `.eyebrow` so the layout is
unchanged but the type is gone, screenshot each element's bounding box, and
compare the text colour against the *extreme* background luminance across every
pixel in that box — not against the token the ground nominally is.

### Motion

- **Hero entrance** is a pure-CSS sequence — identity, context, claim, proof,
  action — settled at 1080ms. No observer is involved; above-the-fold content
  never waits on one. The signature beat is the two accent words colouring in
  at 620ms, after the headline has landed neutral.
- **Below the fold**, `src/lib/reveal.ts` runs one shared `IntersectionObserver`
  that adds `.is-in`. Reveals are one-way and stagger 70ms, capped at three
  items. The hidden state is gated on a `js` class set by a **first-party inline
  script** in `app.html`'s `<head>` before first paint, so no-JS visitors never
  have anything hidden and nobody sees a visible→hidden flash.
- In/out transitions are deliberately **asymmetric** (≈180ms in, ≈240ms out).
- Card rows carry a **pointer spotlight** (`src/lib/spotlight.ts`) — one
  delegated, rAF-throttled listener per row writing `--mx`/`--my`. The highlight
  is a background gradient, so it costs no compositor layer; it simply never
  paints for coarse pointers or under reduced motion.
- The nav rail's active marker **slides to whichever item the pointer is over
  or the keyboard has focused** — both, not just the pointer — and returns to
  the current page on leave. Its measurement is rAF-batched, like every other
  layout read on the page. It needs measurement at all, so it is mount-gated:
  until then — and permanently, without JavaScript — a static CSS dot marks the
  active item instead.
- `prefers-reduced-motion` **removes** motion rather than shortening it, and the
  ribbon's pointer listener is never attached — re-evaluated on `change`, so
  toggling the OS setting takes effect without a reload.

### The reading column

Services, Experience, CV, Contact and the three legal pages share
`<main class="page">` inside the same shell. They keep the markup they always
had — `.prose` / `.prose-header` / `.post-content`, and `.cv` — and pick up the
token layer instead of a separate palette: the `.prose-header` and `.cv h2`
rules sit on the same fading hairline the landing page's band labels use, and
`.capability-data` is the same card as `.stream-card`. Measure is capped at
68ch, left-aligned to the masthead's rail rather than centred, so the eye keeps
one vertical edge across the whole site.

The CV's `@media print` block is what `scripts/generate_cv_pdf.mjs` renders, so
it hides `.masthead` / `.sheet` / `.landing-footer` and forces an explicit
light ground — the site-wide `color-scheme: light dark` must never reach the
PDF. Verify with `emulateMedia('print')` after touching either.

### Component vocabulary

`.masthead` (+ `.lockup`, `.menu-button`, `.masthead-rail`, `.rail-dot` — the
dot is the *only* current-page marker once it measures itself, since `.has-dot`
retires the CSS fallback, so it is hidden outright on routes outside `site.nav`
rather than parked on "Home") ·
`.cv-screen-header` (the CV's on-screen title — distinct from the print-only
`.cv-print-header`, which carries the identity line into the generated PDF and
is the *only* h1 the page used to have, leaving the screen outline starting at
h2; the screen one is hidden under `@media print` so the PDF has one title) ·
`.sheet` (the full-screen nav overlay: it reproduces the masthead row inside
itself as `.sheet-top` — lockup left, `.sheet-close` right, on one 56px
baseline, sticky so the close control never scrolls away — because the masthead
trigger is *covered* by the open sheet and the brand used to vanish at exactly
the moment the visitor was choosing where to go. Top-aligned rather than
centred, with `.sheet-foot` taking the bottom edge via `margin-top: auto`, so
the sheet is anchored at both ends instead of pooling its content in the middle;
plus a focus trap, Escape, `inert` on the page behind, and scroll position
preserved and restored; it is also a **scroll container**, and
centres with `justify-content: safe center` rather than `center`, because a
landscape phone is shorter than the sheet's own content and plain `center`
overflows rows out of reach in a container that cannot be scrolled back —
`@media (max-height: 500px)` then tightens `--sheet-pad-block`, the gap and the
row height so it usually needs no scrolling at all) · `.hero` / `.hero-title` /
`.hero-accent` ·
`.band` + `.band-head` / `.band-label` / `.band-rule` (a **fading** hairline) /
`.band-action` · `.button` (`-primary` / `-outline`) · `.stream-card` ·
`.work-card` with its `.work-preview` panel and overlapping `.work-badge` ·
`.chips` · `.landing-footer-card`.

Below 720px the masthead is `position: fixed`, so **both** `<main>`s have to
clear it: `main.landing` offsets by the bar alone (the hero carries its own top
padding), `main.page` by the bar **plus** the reading column's `--s-9`. Miss the
second and the first heading of every non-landing route renders under the blur —
and on `/cv/` the download CTA's top edge falls inside the masthead, where the
lockup wins the hit test and a tap navigates home.

The scroll-reveal hidden state (`.js [data-reveal]`) is armed by an inline
script in `app.html` and disarmed by a 2s watchdog unless the layout has set
`data-hydrated`. That covers the "JS enabled but the bundle never ran" case — a
dropped chunk or a blocking extension — which would otherwise leave a
prerendered page present in the DOM but blank on screen.

**`/work/` is where the full project list lives.** The home page shows the three
`featured` projects, matching the reference composition; `/work/` renders all of
them, and is the only surface that uses each project's long `blurb` and complete
`tech` array (the home cards use `cardBlurb` and `tech.slice(0, 3)`). Both
surfaces render in `site.projects` array order — there is no sort anywhere, so
reordering that array is the only way to reorder `/work/`, and `featured`
selects the home trio without affecting either page's order. It also
gives the home page's "View all work" a destination — that link used to point at
the GitHub profile, which promised a curated set and delivered a code host,
off-site. Entries reuse `WorkThumb` and `.work-badge`; note the badge hangs 14px
below its panel by design, so `.work-entry-preview` must not clip.

**The interior right rail (`SectionRail.svelte`, ≥1080px).** The reading column
is 68ch inside a 1280px page, which left ~450px of dead field down the right of
every interior route — read as a failed load rather than as air, because the
footer card below spanned the full width and retroactively announced the page
had been that wide all along. The rail gives that field a job: an optional card
plus an index of the page's own `h2`s. Experience uses the card to lift the
corporate-data `<dl>` off the bottom of a long page (it is the first thing a
SAM.gov buyer scans for); Contact uses it for the address, which was buried in
its third paragraph. Below 1080px the rail stops being a column and its
contents flow in document order, i.e. after the prose — a card still reads
correctly there, an index does not, so the index is dropped rather than
stacked. Each page declares its own `sections` array beside its markup rather
than deriving it from the DOM, so the index prerenders and works with no
JavaScript; only the active marker is scripted.

The marker keeps itself visible when the index is longer than the rail, and
**how it does that is load-bearing**. It must move the rail's own scroll box
and nothing else. `Element.scrollIntoView()` cannot be used: it scrolls every
scrollable ancestor, the document included, so marking the active item drags
the page back toward the rail while the reader is scrolling away from it — and
`html { scroll-behavior: smooth }` animates the drag. That shipped, and it made
all eight rail pages effectively unscrollable: scroll down, the next heading
activates, the document is pulled up, the previous heading re-activates. On
`/work/` at 1440px the scroll position oscillated between 259 and 600 and never
advanced. The reader was in a loop.

`src/lib/railScroll.ts` replaces it with a pure `railScrollDelta(box, link)`
returning how far the rail's box must move — negative up, positive down, `0`
when the link is already visible. The caller adds that to `box.scrollTop` and
has no other lever, so the document scroller is simply not reachable from the
marker. `railScroll.test.ts` covers the zero cases (including both flush
edges), the minimum-distance property, and a link taller than the box.

**The About band closes the page, it doesn't trail off.** It was a single
paragraph in a full-bleed band — ~40% empty, no structure, and the last beat of
a conversion page was a biography whose only call to action was a 14px muted
`band-action`. It is now two columns: bio left, a terminal CTA right. The
head's `band-action` was removed with it.

That terminal CTA is a bare `mailto:` (`.about-cta-mail-lead`), not a button.
The "Start a project" button that used to sit here — and its twin in the hero —
routed the reader to `/contact/` to *find* an address they can now simply
click, so both were removed. The mailto is consequently the landing page's only
call to action, which is why it is promoted out of the 14px muted
`.about-cta-mail` treatment to body weight in accent colour. `/contact/` itself
stays: it is the subject-line routing page the legal pages cite as the notice
channel, reachable from the masthead nav and the footer.

**The odd last work card spans.** Three featured projects into the 720–1079px
two-column grid orphaned the last one at identical width to its siblings with a
same-sized hole beside it, which reads as a failed load rather than the end of
a list. `.work-item:last-child:nth-child(odd)` spans the row and switches to
the horizontal anatomy — preview left, body right — so it closes the grid
deliberately. Scoped to an odd last child, so an even-numbered work list keeps
the plain 2-up grid.

**Porting a ribbon value between schemes: carry the ratio, not the number.**
Both defects this graphic has shipped were a dark-scheme alpha reused on a
ground with different headroom — the round-2 specular crest, then the round-3
occlusion, where `--rb-shade: 0.70` put the deepest shadow at 2.57:1 against the
page while the arc beside it measured 1.63:1. A shadow that out-contrasts its
own object gets promoted to figure, so the hero read as two interleaved ribbons,
one blue and one grey. Light now runs `--rb-shade: 0.30` / `--rb-occlusion:
#2f4b86` (composite alpha 0.211, ≈1.40:1 vs ground against a 4.55:1 arc),
holding dark's relationship of shadow ≈ ⅓ the arc's contrast step.

**Scroll-reveal does not run inside the horizontal work rail.** The shared
observer insets only its bottom edge, which assumes vertical runway. Below 720px
the work cards live in a snap-scroller that has none — they are clipped by the
rail, so vertical scrolling never intersects them at all and they sat blank
indefinitely. `RevealOptions.staticBelow` marks them revealed outright at those
widths; the rail's affordance is the peeking next card and the progress track.

`WorkThumb.svelte` draws the preview panels. They are **abstractions, not
screenshots** — nothing on the page purports to show a real client site, and the
`kind` badge labels what a project *is* rather than implying who it was for.

## Brand assets

The identity is a **JH ligature** — the J's stem is shared with the H's left
post and hooks underneath — in white on the blue→cyan brand gradient, matching
the brand blue and cyan. The same mark appears in the browser tab, the masthead
and footer lockups (inlined as an SVG glyph in `Monogram.svelte`), and the logo
lockup, so the brand reads consistently everywhere.

All assets are hand-authored SVG rendered locally with Inkscape + ImageMagick
(no web icon services), and live in `static/`:

- `favicon.svg` — scalable mark (rounded squircle), the primary tab icon.
- `icon-maskable.svg` — full-bleed variant for iOS/PWA (the platform masks the
  corners); source for the raster icons below.
- `favicon.ico` (16/32/48), `favicon-96x96.png`, `apple-touch-icon.png` (180),
  `icon-192.png` / `icon-512.png` (maskable, referenced by
  `manifest.webmanifest`).
- `logo.svg` / `logo-light.svg` — horizontal lockup (mark + "Jared Howard" in
  Montserrat ExtraBold, converted to paths so the file is self-contained + a
  mono-spaced "SOFTWARE ENGINEER" line) for dark-on-light and light-on-dark use.

The `<head>` links plus `<meta name="theme-color">` are wired in `app.html`. To
regenerate the rasters after editing an SVG, re-run the Inkscape/ImageMagick
export steps (Inkscape `--export-type=png --export-width=N`; `magick` to build
the multi-res `.ico`).

`icon-maskable.svg`, `logo.svg`, `logo-light.svg` and `favicon-96x96.png` are
**deliberately unreferenced** by the site — the first is the export source for
the rasters, the lockups are for off-site use, and the 96px raster is a legacy
size. `src/lib/static-assets.test.ts` keeps an allowlist naming each one, so a
genuinely stray file added to `static/` fails `pnpm test` while these do not.
Delete one and you lose a source asset, not dead weight.

### The 404 page

`static/404.html` is the page GitHub Pages serves for any URL that does not
resolve to a built route. It is a **full document load that never touches
`app.css`**, so it is the one page in the system that cannot use the token
layer: the stylesheet ships as `_app/immutable/assets/0.<hash>.css` and the
hash changes every build, so a static file cannot link it.

It therefore inlines the five tokens it needs — ground, foreground, muted,
link and rule — copied from `app.css`. That copy is the whole risk: the
previous 404 was written before the redesign and still carried the old
palette months later, because nothing compared the two. `static-assets.test.ts`
now asserts each inlined value still equals its `app.css` token in **both**
schemes, so the copy cannot drift silently again.

Keep it in step with `src/routes/+error.svelte`, which handles the same
condition for an in-app navigation after hydration. Two files, one message.
Measured: 16.08:1 body text and 6.02:1 links in light, 16.72:1 and 7.79:1 in
dark, no horizontal overflow from 320 to 2560, and it still renders — footer
links included — with JavaScript disabled.

## Accessibility

- Global `:focus-visible` ring (keyboard only): `--l-focus` at 2px with a 2px
  offset, so the ring's inner edge always sits on the page or card field
  (11.4:1 / 10.1:1 dark, 6.0:1 / 6.6:1 light) rather than on a blue button
  fill. No `border-radius` in that rule — it would reshape the element itself.
- One `<h1>` per page: the masthead brand is a link, not a heading, so each
  page's own `<h1>` (hero / prose-header / CV) is the sole top heading.
- `prefers-reduced-motion` disables hover transforms, view-transition
  cross-fades, and smooth scroll.

## Changing it

Restyle in `app.css` — that keeps the whole site coherent. Editing markup in a
page component is only for new content structure (a new section, a new card),
not styling. Any layout/component change updates **this file** in the same
change (repo rule), and if it touches a legal route's markup, run the
`docs/legal-status.md` tracker too.
