# Portfolio Redesign Roadmap

## Goal
Build a dark, retro, minimal portfolio that borrows Oakline Studio's composition discipline and archive logic while keeping the experience personal, image-led, and easy to grow.

This roadmap stays sequential on purpose. Lock one area, then move forward.

## Current Status
### Completed
- Homepage hero has been redesigned into a centered intro with a dark retro visual system
- The homepage now acts as the main intro again
- The public site now uses a name-logo homepage with selected works and About Me directly after it plus individual project detail pages
- The contact/about experience now lives as an inline homepage section instead of a popup
- A shared full-width top status bar appears across the live site with the home link, availability, and Montreal time
- A shared full-width footer bar appears across the live site
- Shared top bar rendering, footer rendering, live clock, email copy behavior, and shared interaction rules are handled in `js/shared-layout.js`
- The project archive grid now lives on `index.html#selected-works`
- All seven projects now have their own detail pages under `projects/`
- Legacy hidden homepage content has been archived into markdown and removed from the live homepage shell

### Current Public Surface
- `index.html` - homepage hero, selected work archive, and About Me section
- `projects.html` - redirect shim to `index.html#selected-works`
- `projects/*.html` - project detail pages
- `contact.html` - redirect shim to `index.html#about-me`

## Working Agreement
- Keep the dark retro-vintage mood
- Keep Oakline as a structural reference, not a bright visual copy
- Avoid fake logos, fake mockups, or invented decorative assets
- Work step by step and leave room for personalized features as they come up
- Do not change approved sections casually once they feel locked

## What Has Been Translated From Oakline
- Centered hero composition
- Strong whitespace and restrained hierarchy
- Tiny mono labels, Inter-based UI text, and compact navigation treatment
- Sticky status bar treatment with live availability and location time
- Image-led project archive logic
- Minimal border/divider styling

## What We Intentionally Changed
- Dark tobacco palette instead of a white editorial canvas
- Ray's name as typography instead of logo artwork
- Homepage selected work archive and project detail pages instead of a separate archive page
- About/contact as an inline homepage section instead of a popup
- Persistent top status bar instead of a bottom sticky filter bar or separate nav links

## Phase Review
### Phase 1: Visual Direction
Status: done

- Warm dark palette
- Oakline-inspired font roles
- Thin border system
- Subtle grain and fixed background treatment

### Phase 2: Homepage Hero
Status: done for now

- Centered hero composition is in place
- Homepage copy has been simplified
- Homepage now acts as an entry point rather than an about page
- Project work now appears directly after the homepage name logo

### Phase 3: Project Archive
Status: done for first pass

- Archive grid exists on `index.html#selected-works`
- Two-column desktop / one-column mobile row-ordered grid behavior is in place
- Odd project counts make the first archive card span the full desktop row
- Cover images and project names both open project detail pages
- Archive grid lines have been removed so the image covers sit close together
- Cover hovers now use a faster black-and-white difference overlay

### Phase 4: Contact / About
Status: done for first pass

- About/contact content now lives in an inline homepage section
- `contact.html` now redirects to the homepage About Me section instead of opening a popup
- Email is click-to-copy
- About copy has been updated around Computation Arts, film, interaction, and play

### Phase 5: Shared Layout Cleanup
Status: done for first pass

- Sticky top status bar appears across the live site
- `RAY HERNAEZ` now acts as the persistent home link inside the top bar
- Footer bar appears across the live site
- Top bar, footer, project labels, and homepage small text share the same compact type scale
- Mobile/tablet layout starts at `860px`, with centered project sections and a simplified top bar
- Shared footer rendering is centralized
- Shared top bar rendering is centralized
- Live Montreal time rendering is centralized
- Email copy behavior is centralized
- Project-page contact CTA rendering is centralized

### Phase 6: Project Detail Pages
Status: done for first pass

- Separate detail page layout exists for each project
- Long-form `Learn more` overlays are in place
- Project detail images now display inline without zoom popups
- Randomized Other Works sections now appear above project-page contact CTAs, with two cards shown on mobile
- Centered Get In Touch sections now appear at the bottom of project detail pages
- Media stacks and embedded walkthroughs are in place where needed
- Detail pages are linked from the archive
- Live archive/detail images have been optimized into lighter `.webp` assets
- New projects can now be added into the archive/detail system without changing the overall layout pattern

## Next Phase: Polish And Cleanup
### Priority
This is the next major task.

### What still needs work
- Final copy pass across homepage, overlay text, archive labels, and project detail pages
- Dedicated responsive and browser QA pass
- Final polish pass on spacing, hover behavior, and overlay feel
- Decide whether any project pages need lighter video treatment later
- Add responsive image sets later only if performance still needs more help beyond the current `.webp` optimization

## Still To Do Later
- Decide whether project content/data should be split further for easier maintenance
- Add filtering later if the project list grows
- Review whether the custom cursor should stay as-is after broader device testing

## Current Risks / Cleanup Notes
- Legacy one-page content is archived in `LEGACY_SINGLE_PAGE_CONTENT.md`
- `js/main.js` has now been reduced to archive-only behavior, but the broader codebase could still be split further if the site grows
- `contact.html` is now a redirect shim to the homepage About Me section
- The current build has had many iterative visual adjustments, so a final consistency pass will still help

## Reference Notes
- Oakline homepage analysis lives in `OAKLINE_HOMEPAGE_REFERENCE.md`
- That document should guide structure and rhythm, not force a bright visual style
