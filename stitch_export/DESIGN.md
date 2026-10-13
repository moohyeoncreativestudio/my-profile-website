---
name: Cinematic Obsidian
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#8fd5ff'
  on-tertiary: '#00344a'
  tertiary-container: '#1abdff'
  on-tertiary-container: '#004966'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#c5e7ff'
  tertiary-fixed-dim: '#7fd0ff'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#004c6a'
  background: '#111317'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 46px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Syne
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
  label-badge:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies an evocative, high-production cinematic aesthetic tailored for an auteur filmmaker, commercial director, and video producer. It merges strict editorial minimalism with immersive tactile elements borrowed from film projection booths, grading suites, and lens mechanics.

### Emotional Tone & Brand Identity
- **Atmospheric & Submerged:** Deep, void-like backdrops give visual focus exclusively to moving imagery and high-resolution frame grabs.
- **Editorial Precision:** Typographic tension between bold, avant-garde display titles and surgical, low-profile metadata creates authority without clutter.
- **Craft & Calibration:** Subtle amber illumination hints at 3200K tungsten warmth and anamorphic flares without overpowering the neutral obsidian canvas.

### Visual Style
A tailored hybrid of **Cinematic Glassmorphism** and **Technical Editorial Minimalism**:
- Translucent, frosted dark surfaces (`backdrop-filter: blur(16px)`) mimicking coated camera filters and optical viewfinders.
- Whisper-thin luminous borders simulating rim lighting on dark stages.
- Tactile playback controls and role badges calibrated for high tactile response across touch and cursor environments.

## Colors

The palette is engineered around low-reflectance neutral planes that allow 4K video stills and embedded showreels to command dynamic range.

### Palette Architecture
- **Primary (`#F59E0B` - Tungsten Amber):** Reserved for active focus states, playhead scrubbers, key callouts, and primary call-to-action interactions. Evokes 3200K cinema lighting and vintage director viewfinders.
- **Secondary (`#06B6D4` - Anamorphic Cyan):** Applied to technical metadata, video resolution indicators (4K, RAW, HDR), and secondary tags. Counterbalances the warmth of amber.
- **Neutral Base (`#0D0F12` - Obsidian Void):** The foundational canvas. Provides maximum dynamic contrast for video content without pure `#000000` clipping.
- **Elevated Surfaces:**
  - `Surface 1 (Slate Core)`: `#161A22` (Card panels, sheets, modals).
  - `Surface 2 (Elevated Charcoal)`: `#1F2430` (Hover overlays, control plates).
- **Text & Accents:**
  - High-emphasis text: `#F8FAFC` (Slate 50).
  - Mid-emphasis/Korean descriptors: `#94A3B8` (Slate 400).
  - Inactive/Border sheen: `rgba(255, 255, 255, 0.08)`.

## Typography

The typographic hierarchy establishes clear editorial contrast:
- **Headline Expression (`Syne`):** Sculptural, wide geometric letterforms with artistic tension. Used for production names, project loglines, and category dividers.
- **Editorial Utility (`Inter`):** Clean, neutral glyphs handling body descriptions, project synopses, and bilingual English/Korean text pairings with uniform horizontal rhythm.
- **Lens Metadata & Technical Badging (`Space Grotesk`):** Fixed-feel proportions delivering timecodes, runtime, aspect ratios, technical production roles, and camera specs.

### Localization & Korean Rendering
When displaying Korean text (project summaries, client logs, role titles):
- Maintain `Inter` with universal fallback to system sans fonts (`Pretendard`, `Apple SD Gothic Neo`).
- Apply a `-0.02em` letter spacing adjustment on Korean headings to preserve crisp editorial density.

## Layout & Spacing

A structured 12-column dynamic grid system balances widescreen cinematic aspect ratios (16:9, 2.39:1) with tight editorial content modules.

### Grid & Breakpoints
- **Desktop (>= 1280px):** 12-column layout, max container width 1440px, `margin: 4rem`, `gutter: 1.5rem`. Hero showreels can break container bounds into a 100vw full-bleed viewport.
- **Tablet (768px - 1279px):** 8-column layout, `margin: 2rem`, `gutter: 1.25rem`. Two-column project cards reflow to single or stacked horizontal cards.
- **Mobile (< 768px):** 4-column layout, `margin: 1.25rem`, `gutter: 1rem`. Controls migrate to thumb-reachable bottom interaction zones.

### Vertical Rhythm
Sections feature deliberate breathing room (`space-xl` scaled 2x to 3x in layout blocks) to emulate gallery pacing, avoiding dense enterprise-style stacking.

## Elevation & Depth

Visual hierarchy is established using luminance, transparency, and delicate specular edges rather than muddy drop shadows.

### Depth System
1. **Base Plate (`#0D0F12`):** Ground level. Houses video embeds, film grain shaders, and ambient background radial glow layers.
2. **Glass Layer (Navigation & Floating Controls):**
   - Background: `rgba(13, 15, 18, 0.72)`.
   - Backdrop filter: `blur(20px) saturate(180%)`.
   - Border: `1px solid rgba(255, 255, 255, 0.08)`.
3. **Card Tier (Showcase Cards):**
   - Background: `#161A22`.
   - Border: `1px solid rgba(255, 255, 255, 0.05)`.
   - Hover Elevation: Subtle rim illumination using `0 0 0 1px rgba(245, 158, 11, 0.3), 0 16px 32px -8px rgba(0, 0, 0, 0.7)`.
4. **Overlay Tier (Full-screen Video Players, Modals):**
   - Background: `rgba(9, 11, 14, 0.95)` with deep soft shadow `0 24px 64px -12px rgba(0, 0, 0, 0.9)`.

## Shapes

The system relies on medium, calibrated radii (`roundedness: 2`) that bridge the gap between architectural precision and modern device hardware profiles.

### Radius Application
- **Default (`0.5rem` / `8px`):** Input fields, inline badges, role tags, and secondary buttons.
- **Large (`1rem` / `16px`):** Video project cards, thumbnail containers, and sheet panels.
- **Full Pill (`9999px`):** Primary action buttons, floating audio/playback controllers, and floating navigation pills.

## Components

### Buttons
- **Primary Action (Showreel / Contact):** Pill-shaped. Solid `#F59E0B` fill with `#0D0F12` bold text. On hover, glows with `box-shadow: 0 0 20px rgba(245, 158, 11, 0.35)`.
- **Secondary / Ghost:** Glass fill `rgba(255, 255, 255, 0.04)`, `1px solid rgba(255, 255, 255, 0.12)`, text `#F8FAFC`. On hover, border transitions to `rgba(245, 158, 11, 0.5)`.
- **Floating Play Action:** Circular 64px pill on desktop (48px on mobile). Translucent core `rgba(13, 15, 18, 0.6)` with backdrop blur, centered triangle icon, and thin luminous ring that expands on hover.

### Role & Category Chips
- Compact, pill or soft-rounded (`roundedness: 1`) badge tags.
- Background: `rgba(255, 255, 255, 0.03)`.
- Border: `1px solid rgba(255, 255, 255, 0.08)`.
- Text: Label Caps (`Space Grotesk`, uppercase).
- Distinct color variants:
  - **Director / DP:** Accent border `rgba(245, 158, 11, 0.4)`, text `#FBBF24`.
  - **Editor / Colorist:** Accent border `rgba(6, 182, 212, 0.4)`, text `#22D3EE`.

### Project Showcase Cards
- Aspect ratio locked to cinematic dimensions (`16:9` or `2.39:1`).
- Dark `#161A22` substrate beneath progressive video preview or high-res frame grab.
- Overlay gradient: bottom-to-top scrim (`linear-gradient(180deg, transparent 40%, rgba(13, 15, 18, 0.95) 100%)`).
- Metadata dock at lower edge containing project title (`Syne`), client/year, and role chips.

### Form Inputs (Booking & Inquiries)
- Clean, dark inset fields.
- Background: `rgba(22, 26, 34, 0.6)`.
- Border: `1px solid rgba(255, 255, 255, 0.08)`.
- Focus state: `1px solid #F59E0B` with `0 0 0 3px rgba(245, 158, 11, 0.15)`.

### Technical Spec Indicator (Custom Component)
- Horizontal monospaced strip displayed inside project modals displaying camera package, lenses, aspect ratio, and color space (e.g., `RED V-RAPTOR // COOKE ANAMORPHIC // 2.39:1 // ARRI RAW`).