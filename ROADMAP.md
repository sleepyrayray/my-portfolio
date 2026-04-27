# Portfolio Redesign Roadmap

## Goal
Build a dark, retro, minimal portfolio that borrows Oakline Studio's composition discipline and archive logic while keeping the experience personal, image-led, and easy to grow.

This roadmap stays sequential on purpose. Lock one area, then move forward.

## Current Status
### Completed
- Homepage hero has been redesigned into a centered intro with a dark retro visual system
- The public site now uses a separate homepage, archive page, and individual project detail pages
- The contact experience now lives in a shared overlay instead of a standalone content page
- A shared sticky top-right nav appears across the live site
- A shared bottom-left footer appears across the live site
- Shared footer rendering, contact overlay behavior, and project-page header injection are handled in `js/shared-layout.js`
- The project archive grid lives on `projects.html`
- All seven projects now have their own detail pages under `projects/`
- Legacy hidden homepage content has been archived into markdown and removed from the live homepage shell

### Current Public Surface
- `index.html` - hero-first homepage
- `projects.html` - project archive overview
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
- Tiny mono labels and compact navigation treatment
- Image-led project archive logic
- Minimal border/divider styling

## What We Intentionally Changed
- Dark tobacco palette instead of a white editorial canvas
- Ray's name as typography instead of logo artwork
- Separate project archive and detail pages instead of a single agency-style landing page
- Contact as an overlay instead of a dedicated content page
- Persistent sticky top-right nav instead of a bottom sticky filter bar

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

### Phase 3: Project Archive
Status: done for first pass

- Archive grid exists on `projects.html`
- Two-column desktop / one-column mobile behavior is in place
- Cover images and project names both open project detail pages
- Grid edges and divider logic are in place

### Phase 4: Contact / About
Status: done for first pass

- Contact content now lives in a shared overlay
- `contact.html` now acts as a redirect entry point instead of a standalone content page
- Email is click-to-copy

### Phase 5: Shared Layout Cleanup
Status: done for first pass

- Sticky nav appears across the live site
- Footer appears across the live site
- Shared footer rendering is centralized
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
