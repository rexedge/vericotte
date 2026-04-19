# Vericotte Website Design Prompt

_Detailed instructions for AI coding agents (GitHub Copilot, Cursor, etc.) to generate the Vericotte website as production-ready code. This document is the single source of truth for design intent, brand identity, layout structure, and aesthetic direction._

---

## Overview

Build the homepage for **Vericotte** — a premium, forward-thinking business consulting firm based in Lagos, Nigeria. Vericotte's three core service lines are **Audit, Tax, and Advisory**. The website should feel classy, competent, innovative, creative, technology-driven, reliable, and futuristic — while remaining faithful to the Vericotte brand identity.

The design must be visually superior to any Big 4 accounting firm website. Where firms like Deloitte, PwC, EY, and KPMG rely on safe, corporate-template aesthetics, Vericotte's site should feel like a statement — bold spatial composition, cinematic atmosphere, and details that reward attention. Every section should feel intentionally crafted, not assembled from a component library.

**Tech stack:** Use whatever framework is configured in the project (Next.js App Router, React, etc.). Use Tailwind CSS for styling. Implement animations with CSS transitions/keyframes or a motion library if available. All code must be production-grade, semantic, accessible, and responsive.

**Tagline:** _Navigating Complexity, Innovating Tomorrow_

---

## Brand Colours (Exact HEX Values)

Use these precisely — do not substitute or approximate.

| Role                 | Name         | HEX       |
| -------------------- | ------------ | --------- |
| Primary Background   | Deep Navy    | `#153241` |
| Secondary Background | Deep Teal    | `#2D5867` |
| Primary Accent       | Brand Orange | `#EA5D05` |
| Secondary Accent     | Warm Orange  | `#F37022` |
| Highlight            | Amber        | `#FBA22E` |
| Tertiary             | Cyan Teal    | `#0A9FBF` |
| Light Surface        | Off-White    | `#F1F1F0` |
| Dark Surface         | Charcoal     | `#4B4B4D` |

**Gradient 1 (Dark):** `#0C4F60` → `#153241`
**Gradient 2 (Orange):** `#F37022` → `#EA5D05`

---

## Typography

| Element              | Font                | Weight                   |
| -------------------- | ------------------- | ------------------------ |
| Logo wordmark        | Commune             | Bold                     |
| All headings         | Montserrat          | ExtraBold 800 / Bold 700 |
| Subheadings & labels | Montserrat          | SemiBold 600             |
| Body copy            | Montserrat or Omnes | Regular 400              |
| Captions & tags      | Montserrat          | Medium 500               |

---

## Aesthetic Direction

**Mood:** Premium · Futuristic · Trustworthy · Dynamic
**Tone:** Confident and forward-looking — a Lagos-based firm operating at global standards with a design presence that outclasses every Big 4 website
**Feel:** Think Bloomberg Terminal meets a modern African powerhouse — dark, structured, precise, with bold orange energy. Where Big 4 sites feel like corporate brochures, this should feel like an experience — cinematic depth, deliberate asymmetry, and atmosphere that commands attention

Key design principles:

- Deep navy (`#153241`) as the dominant background — used with layered depth (noise textures, subtle radial gradients, parallax fog) rather than flat solid fills
- Bold orange (`#EA5D05`) as the single most important accent — used on CTAs, borders, highlights, and hover states. Treat it like a signature colour that sears into memory
- Teal (`#2D5867`, `#0A9FBF`) as supporting depth and contrast
- The Vericotte parallelogram crystal shapes (from the logo) used as a repeating geometric background pattern at low opacity — also consider using them as section dividers, clip-path masks, or decorative overlay elements
- Spatial composition that breaks the grid — asymmetric hero layouts, overlapping cards, elements that bleed across section boundaries, and controlled negative space that gives the design room to breathe
- High contrast between sections — alternate between dark navy and white/off-white, with transition moments (diagonal dividers, gradient bleeds) that feel designed, not default
- Micro-interactions and motion that feel premium — staggered entrance reveals, magnetic hover effects on cards, smooth parallax on scroll, and cursor-aware lighting effects on glassmorphism surfaces
- Typography treated as a design element — oversized display text, mixed weights within a line, creative kerning on hero headlines, and text that interacts with surrounding visual elements

---

## Page Sections

### 1. Navigation Bar (Sticky)

- Background: Deep navy `#153241`
- Left: Vericotte logo (icon + wordmark in white)
- Centre: Nav links — About · Services · Industries · Insights · Contact (white, small caps, letter-spaced)
- Right: CTA button — "Get Started" in solid orange `#EA5D05`
- Hover states: orange on links, darker orange on button

---

### 2. Hero Section (Full-screen, min-height 90vh)

**Layout:** Two-column (left: text · right: metrics card)

**Background:** Deep navy `#153241` with the Vericotte parallelogram pattern tiled at ~7% opacity

**Left column:**

- Small pill tag: `AUDIT · TAX · ADVISORY` — orange border, orange text
- Tagline above headline (small caps, letter-spaced, muted): _"Navigating Complexity, Innovating Tomorrow"_
- Headline (large, bold, white, Montserrat ExtraBold): _"Nigeria's Premier Audit, Tax & Advisory Firm"_ — with the word "Premier" in orange `#EA5D05`
- Body text (small, muted white): 2–3 lines describing Vericotte's mission — delivering world-class audit, tax, and advisory services with precision, innovation, and deep local expertise
- Two CTA buttons: Primary (solid orange — "Our Services →") and Ghost (outlined white — "Corporate Profile")

**Right column — Metrics Dashboard Card:**

- Dark glassmorphism card: dark semi-transparent background, orange-tinted border
- Metric 1: "Assets Managed — ₦40B+" with "▲ 12.4% YoY" in orange
- Metric 2: "Client Retention — 98%" with "Consistent excellence"
- Service pills row: `AUDIT` · `TAX` · `ADVISORY` — small orange bordered badges (the three core service pillars)
- Contact strip: "Lagos, Nigeria · vericotte.com · info@vericotte.com"

---

### 3. Stats Bar (Full-width)

- Background: Solid brand orange `#EA5D05`
- Four equal columns with white dividers between them
- Each column: Large number (white, Montserrat ExtraBold, ~3rem) above a small uppercase muted label

| Stat  | Label               |
| ----- | ------------------- |
| 15+   | Years of Excellence |
| 200+  | Clients Served      |
| ₦40B+ | Assets Managed      |
| 98%   | Retention Rate      |

---

### 4. About Us (Two-column)

**Left panel — dark teal `#2D5867`:**

- Small section label: `WHO WE ARE` (orange, with horizontal orange line before it)
- Heading: "A New Powerhouse in Audit, Tax & Advisory" (white, bold)
- Two body paragraphs (muted white, small) — emphasise Vericotte's commitment to rigorous standards, innovation, and deep understanding of Nigeria's business landscape
- CTA button: solid orange "Learn More →"

**Right panel — white or off-white `#F1F1F0`:**

- Small section label: `OUR DIRECTION`
- Heading: "Purpose-Driven. Results-Oriented." (navy)
- Three bordered cards with orange left-border accent:
  - **Our Vision:** "To be the leading audit, tax, and advisory firm in Nigeria..."
  - **Our Mission:** "To deliver excellence in audit, tax, and advisory services with precision and personal commitment..."
  - **Our Promise:** "Navigating complexity with you — always..."

---

### 5. Services (White background)

- Section label: `WHAT WE DO` (orange)
- Heading: "Three Core Pillars of Excellence" (navy)
- Subtext: "Focused expertise in the disciplines that matter most to Nigerian businesses."
- 3-column card grid with thin dividers between cards (1.5px gray)
- Each card: Large muted number (01, 02, 03), bold service name, short description
- On hover: orange top border animates in, card lifts with a subtle shadow transition, background shifts to off-white

| #   | Service           | Description                                                                                       |
| --- | ----------------- | ------------------------------------------------------------------------------------------------- |
| 01  | Audit & Assurance | Rigorous, independent audits that meet international standards and provide stakeholder confidence |
| 02  | Tax Advisory      | Proactive tax strategy, compliance, and planning under Nigerian law                               |
| 03  | Business Advisory | Strategic guidance on structure, growth, risk, and performance                                    |

---

### 6. Why Vericotte (Dark navy background)

- Section label: `WHY CHOOSE VERICOTTE` (orange)
- Heading: "Built Different. Built Better." (white)
- 2x3 grid of feature cards (dark semi-transparent background, subtle border, glassmorphism effect with orange glow on hover)
- Each card: small orange dot · bold title (white) · description (muted white)

Features to include:

- Certified Professionals (ICAN-licensed, FIRS-compliant)
- Technology-Driven (modern reporting tools and real-time visibility)
- Sector Specialists (fintech, real estate, manufacturing, NGOs)
- Proactive Counsel (identify risks before they appear)
- Transparent Pricing (clear deliverables, honest fees)
- Youthful Vigour, Proven Expertise (the hunger to outperform, backed by decades of combined experience)

---

### 7. Testimonials (Off-white background `#F1F1F0`)

- Section label: `CLIENT VOICES`
- Heading: "Trusted Across Nigeria"
- 3-column grid of white cards
- Each card: 3px solid orange top border · opening quote mark in large orange · italic quote text · author avatar (navy circle with initials) · name and role below

---

### 8. CTA Banner (Full-width, orange background `#EA5D05`)

- Two-column: text left · button right
- Heading (white, bold): "Ready to Navigate Complexity Together?"
- Subtext (muted white): "Schedule a free consultation with one of our senior advisors today."
- Button (white background, orange text): "Book a Consultation →"

---

### 9. Footer

**Top section (very dark navy `#0C1C26`) — 4 columns:**

- Column 1: Vericotte logo + tagline + address summary
- Column 2: Services (links)
- Column 3: Company (links)
- Column 4: Contact details

**Bottom bar:** Copyright · Privacy Policy · Terms of Use · "ICAN Licensed"

---

## Interaction & Animation Notes

- Sticky nav with subtle blur/transparency on scroll (backdrop-filter: blur with semi-transparent navy)
- Hero metrics card with a subtle floating/parallax effect and cursor-aware tilt (3D transform on mousemove)
- Service cards: orange top-border slides in from left on hover, card lifts with layered shadow
- Stats bar numbers count up on scroll entrance with eased timing
- All buttons: smooth background transition on hover (200ms ease) with subtle scale pulse
- Section entrances: elements fade up on scroll with staggered delays (50–100ms between siblings)
- Glassmorphism cards respond to cursor proximity with soft orange glow
- Parallelogram pattern subtly shifts on scroll for depth (slow parallax, ~0.2x speed)
- Text reveals on hero: words animate in sequentially with clip-path or translateY

---

## Design Quality Benchmark

This website must be visually superior to any Big 4 accounting firm's website. Study what Deloitte, PwC, EY, and KPMG do — and deliberately surpass it:

- Where they use flat, template-driven layouts → use spatial composition with asymmetry, overlap, and diagonal flow
- Where they rely on stock photography → use geometric abstraction, data-viz aesthetics, and the Vericotte crystal motif
- Where they default to safe corporate typography → use bold display sizing, mixed weights, and typographic hierarchy that commands attention
- Where their hover states are basic colour swaps → use magnetic effects, layered shadows, and micro-animations
- Where their backgrounds are solid white or gray → use textured depth — noise, subtle gradients, pattern overlays
- The goal: anyone landing on vericotte.com should immediately feel this is a tier above

---

## What to Avoid

- Do not use purple gradients or generic blue tones
- Do not use Inter, Roboto, or Arial as primary fonts
- Do not center all body text — left-align paragraphs
- Do not add decorative underlines beneath headings
- Do not make the layout feel generic or templated — this should feel distinctly Vericotte
- Do not produce anything that looks like a Big 4 website — no safe corporate grids, no stock-photo hero banners, no cookie-cutter card layouts
- Do not flatten the design into a component-library aesthetic — every section should feel bespoke
- Do not use predictable, evenly-distributed colour palettes — lean into dominant navy with sharp orange punctuation

---

## Implementation Notes for AI Agents

- **Read this entire document before generating any code.** Do not start coding from the first section alone — understand the full design system, colour palette, typography, and aesthetic direction first.
- Implement each page section as its own component. Use clear, descriptive component names (e.g., `HeroSection`, `StatsBar`, `ServicesGrid`, `WhyVericotte`).
- Use CSS custom properties (variables) for all brand colours, defined once at the `:root` or in `globals.css` / Tailwind config.
- Import Google Fonts for Montserrat. The Commune font (logo only) can be referenced but may not be available — fall back gracefully.
- All images/icons should use SVG where possible. For the Vericotte parallelogram pattern, generate it as an inline SVG or CSS background pattern.
- Ensure full responsiveness: the two-column hero collapses to single-column on mobile, the stats bar stacks, cards go to single-column, etc.
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`) and proper heading hierarchy.
- Implement scroll-triggered animations with Intersection Observer or a library like `framer-motion` if available in the project.
- All interactive elements must be keyboard-accessible and meet WCAG AA contrast requirements.

---

## Reference Material

- **Brand Colours:** Vericotte Brand Identity Guide 2023
- **Firm Content:** Vericotte Corporate Profile (Audit · Tax · Advisory)
- **Logo:** Vericotte primary logotype — crystal parallelogram icon in teal and orange, white wordmark, orange dot on "i"
- **Tagline:** _Navigating Complexity, Innovating Tomorrow_
- **Website:** vericotte.com
- **Location:** Lagos, Nigeria (office: 8, Idowu Odunuga Crescent, Aguda, Surulere)

---

_Prompt prepared for AI coding agents (GitHub Copilot, Cursor, Windsurf, Claude Code, etc.) to generate production-ready frontend code._
_Brand assets and further guidance: kanzbrandit@gmail.com_
