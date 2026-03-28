# Portfolio Redesign Roadmap

## Goal
Build a dark, retro, minimal portfolio that borrows Oakline Studio's composition discipline and archive logic while keeping the experience personal, image-led, and easy to grow.

This roadmap is intentionally sequential. We work one focused area at a time, lock it in, then move forward.

## Current Status
### Completed
- Homepage hero has been redesigned into a centered intro with a dark retro visual system
- `Projects` and `Contact` now live on their own pages instead of being part of the homepage
- A shared sticky top-right nav now appears on all main pages
- A shared bottom-left footer now appears on all main pages
- Shared page chrome has been simplified with `js/shared-layout.js` so nav and footer are not duplicated by hand
- The project archive grid has been moved to its own `projects.html` page

### Current Main Pages
- `index.html` - hero-first homepage
- `projects.html` - project archive overview
- `contact.html` - about/contact page

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
- Separate `Projects` and `Contact` pages instead of a single agency-style landing page
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
Status: done for overview page

- Archive grid exists on `projects.html`
- Two-column desktop / one-column mobile behavior is in place
- Cover images and project names are shown
- Grid edges and divider logic are in place

### Phase 4: Contact / About Page
Status: done for first pass

- Contact page has its own layout
- About copy and contact info live there
- Email is currently the only contact method

### Phase 5: Shared Layout Cleanup
Status: done for first pass

- Sticky nav appears on all pages
- Footer appears on all pages
- Shared nav/footer rendering is centralized

## Next Phase: Project Detail Pages
### Priority
This is the next major task.

### What still needs to be built
- Separate detail page layout for each project
- Final content structure for each project page
- Actual links from archive project names into those detail pages
- Consistent project-page navigation back into the main site

### Questions to resolve during that phase
- What content blocks each project page should include
- Whether walkthrough videos should remain external, embedded, or replaced with lighter previews
- How minimal or information-dense each project page should feel

## Still To Do After Project Pages
- Decide whether to fully remove or archive the old hidden single-page portfolio sections still living inside `index.html`
- Decide whether to split project data/content further for easier maintenance
- Add filtering later if the project list grows
- Do a dedicated responsiveness and browser QA pass
- Do a final cleanup pass on spacing, typography, and hover polish

## Current Risks / Cleanup Notes
- `index.html` still contains legacy hidden sections from the older single-page version
- `js/main.js` still contains older section-switching and project-panel logic that is no longer part of the current main experience
- Shared layout is now cleaner, but the rest of the content architecture could still be simplified later

## Reference Notes
- Oakline homepage analysis lives in `OAKLINE_HOMEPAGE_REFERENCE.md`
- That document should guide structure and rhythm, not force a bright visual style
