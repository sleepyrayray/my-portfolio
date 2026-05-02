# Portfolio Redesign Roadmap

## Goal
Build a dark, retro, minimal portfolio that borrows Oakline Studio's composition discipline and archive logic while keeping the experience personal, image-led, and easy to grow.

This roadmap stays sequential on purpose. Lock one area, then move forward.

## Current Status
### Completed
- Homepage hero has been redesigned into a centered intro with a dark retro visual system
- The homepage now acts as the main intro again
- The public site now uses a name-logo homepage with selected works directly after it plus individual project detail pages
- The contact experience now lives in a shared overlay instead of a standalone content page
- A shared top-left `RAY HERNAEZ` home link and compact sticky top-right nav appear across the live site
- A shared bottom-left footer appears across the live site
- Shared home link rendering, footer rendering, contact overlay behavior, and project-page header injection are handled in `js/shared-layout.js`
- The project archive grid now lives on `index.html#selected-works`
- All seven projects now have their own detail pages under `projects/`
- Legacy hidden homepage content has been archived into markdown and removed from the live homepage shell

### Current Public Surface
- `index.html` - homepage hero and selected work archive
- `projects.html` - redirect shim to `index.html#selected-works`
- `projects/*.html` - project detail pages
- `contact.html` - redirect shim that opens the contact overlay through `index.html?contact=1`

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
- Image-led project archive logic
- Minimal border/divider styling

## What We Intentionally Changed
- Dark tobacco palette instead of a white editorial canvas
- Ray's name as typography instead of logo artwork
- Homepage selected work archive and project detail pages instead of a separate archive page
- Contact as an overlay instead of a dedicated content page
- Persistent branded home link and sticky top-right nav instead of a bottom sticky filter bar

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
- Cover images and project names both open project detail pages
- Archive grid lines have been removed so the image covers sit close together

### Phase 4: Contact / About
Status: done for first pass

- Contact content now lives in a shared overlay
- `contact.html` now acts as a redirect entry point instead of a standalone content page
- Email is click-to-copy

### Phase 5: Shared Layout Cleanup
Status: done for first pass

- Sticky nav appears across the live site
- `RAY HERNAEZ` now acts as the persistent home link
- Footer appears across the live site
- Navigation, footer, and the home link share the same compact type scale
- Shared footer rendering is centralized
- Shared home link rendering is centralized
- Shared contact overlay behavior is centralized
- Project-page brand header is injected centrally

### Phase 6: Project Detail Pages
Status: done for first pass

- Separate detail page layout exists for each project
- Long-form `Learn more` overlays are in place
- Clickable captioned and watermarked image overlays are in place for project detail images
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
- `contact.html` is now a redirect shim, so the real contact experience lives in shared JS/CSS rather than a standalone HTML page
- The current build has had many iterative visual adjustments, so a final consistency pass will still help

## Reference Notes
- Oakline homepage analysis lives in `OAKLINE_HOMEPAGE_REFERENCE.md`
- That document should guide structure and rhythm, not force a bright visual style
