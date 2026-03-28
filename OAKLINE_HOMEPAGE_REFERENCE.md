# Oakline Homepage Reference

## Purpose
Reference notes for the public homepage of `https://oakline.studio/` so we can reuse the layout logic and visual system later without re-inspecting the site.

This document is based on:
- visual review of the live homepage
- screenshots provided by Ray
- inspection of the public shipped HTML/CSS

Inspection date:
- March 27, 2026 (America/Toronto)

Public page metadata observed:
- site generator: Framer
- published: March 19, 2026

## Important Reminder
The strong feel of the Oakline homepage comes mostly from:
- composition
- spacing
- typography
- borders
- image assets

It is **not** primarily a complex codebase effect.

The key lesson is:
- copy the structure and rhythm
- do not invent fake logo assets or decorative mockups unless explicitly wanted

## Core Visual System
### Overall tone
- Light editorial homepage
- White or off-white canvas
- Black text
- Very soft gray borders
- Minimal shadows
- Lots of empty space

### Typography
- `Geist Mono` for UI, buttons, category labels, and small uppercase text
- `Geist` for body/testimonial copy
- `Inter` for some project-title text styles

### Color behavior
- Background: white
- Text: near-black
- Secondary text: medium-light gray
- Borders: very pale gray
- CTA accent: black fill with white text
- Active filter state: light gray fill

## Real Layout Facts From Public Source
### Breakpoints
- Desktop layout container width: `1200px`
- Tablet layout width: `810px`
- Mobile layout width: `390px`

### Hero
- Uses a true `100vh` hero section
- Centered vertical stack
- Narrow content column
- Tiny mono label above
- Graphic mark image
- Wordmark image
- Short uppercase pitch line
- 2 CTA links

### Hero background
- White background
- Full-width noise image overlay
- Noise is an image layer, not only CSS grain

### Bottom hero collage
- One large wide collage/sticker strip image
- Absolutely positioned near the bottom of the hero
- Wider than the page
- Shifted downward so it overlaps the transition into the next section

### Logo / proof row
- Small muted logo grid under the hero content
- 3 columns by 2 rows on desktop
- Very low contrast

### Testimonial section
- Centered
- Thin top border
- Large vertical padding
- Short gray testimonial text
- Small avatars beneath
- Name and role beneath the avatars

### Work grid
- CSS grid observed in public source:
  - `grid-template-columns: repeat(2, minmax(400px, 1fr))`
- Little or no visible grid gap
- Thin borders define the tiles
- Each work tile is a bordered cell with lots of breathing room
- Project name is centered near the bottom in muted gray
- Images are not all the same size
- Empty space inside each tile is part of the design

### Sticky filter bar
- Public source shows:
  - `position: sticky`
  - `bottom: 48px`
- Compact horizontal control
- Active item has light gray background
- Inactive items are pale gray text on white
- Final CTA is black with white text

## Concrete Public Structure
The homepage is effectively:

1. Hero
- small mono line
- mark image
- wordmark image
- short statement
- CTA row
- muted proof logos
- bottom collage strip

2. Testimonial band
- single centered quote
- avatar row
- name and role

3. Work archive
- two-column bordered project grid
- image-led cells
- centered muted project names

4. Sticky bottom filter / CTA
- `All`
- `Brand`
- `Product`
- `Web`
- `Book a call`

## Specific Public Source Clues
### Observed hero values
- Hero uses `height: 100vh`
- Hero content stack uses large vertical gaps
- CTA buttons are tiny and compact
- Upper label is mono, uppercase, centered

### Observed work-tile values
- Tile padding is generous
- Tile titles use muted gray
- Borders are approximately `1px`
- Tile layout depends on whitespace as much as the artwork

### Observed sticky bar values
- Sticky bar is `width: min-content`
- It sits near the bottom of the viewport
- It is built as a compact bordered strip rather than a full-width footer

## Asset Dependence
The Oakline homepage heavily relies on custom graphic assets:
- logo mark image
- wordmark image
- noise overlay image
- bottom collage strip image
- muted client logo graphics
- project mockup images

This matters because:
- the exact Oakline feel cannot be matched by CSS alone
- if we do not want to create custom assets, we should copy the layout logic, not the graphics themselves

## What To Borrow For Ray's Portfolio
### Recommended to borrow
- centered hero composition
- tiny mono typography
- restrained button styling
- white/off-white canvas
- soft border system
- two-column archive grid
- centered muted project labels
- sticky bottom filter bar later

### Recommended to adapt
- replace agency/client proof with Ray-specific content
- use Ray's name as plain text instead of a logo
- use one project cover image per project
- keep project navigation simple: `Projects`, `Contact`
- use Oakline spacing and structure, not Oakline branding

### Recommended to avoid
- inventing a fake logo
- inventing fake sticker collage assets
- forcing a dark theme if the goal is a close Oakline match
- over-decorating the work tiles

## Design Tension To Remember
Oakline homepage reference and earlier direction are in tension:

- Oakline homepage = light, sparse, editorial
- earlier requested direction = dark, retro, vintage

If the homepage should be truly Oakline-like, the safer choice is:
- light homepage
- minimal typography
- restrained borders
- no fake graphics

If the project pages later go darker or more editorial, that can still be handled separately.

## Translation Strategy For This Portfolio
Best homepage adaptation path:

1. Use a centered intro block
- tiny mono line
- Ray Hernaez as plain text
- short one-line positioning statement
- compact `Projects` and `Contact` buttons

2. Add a quiet secondary proof/about row
- short about line
- optional location / practice tags

3. Build the archive as a bordered 2-column grid
- one cover image per project
- centered muted labels
- no heavy cards or shadows

4. Add the sticky filter bar later
- even if filters are placeholders at first

## Sources
- [Oakline Studio](https://oakline.studio/)
- [Framer gallery entry](https://www.framer.com/gallery/oakline-studio/)
