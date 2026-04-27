# Ray Hernaez Portfolio

## Short Description
A personal portfolio website for Ray Hernaez, built with plain HTML, CSS, and JavaScript.

## Current Site Structure
The live site currently works as:

- `index.html` - homepage hero
- `projects.html` - project archive overview
- `projects/*.html` - individual project detail pages
- `contact.html` - redirect entry that opens the shared contact overlay

The visual direction is dark, minimal, and retro-toned, with Oakline Studio used mainly as a structural reference.

## Current Status
### Live design direction
- Dark tobacco palette
- Centered typography-led homepage
- Plain-text sticky top-right navigation
- Tiny bottom-left footer
- Separate archive and project-detail pages
- Shared centered contact overlay

### Current page behavior
- `Home`, `Projects`, and `Contact` are always visible in the sticky nav
- `Contact` opens the shared overlay rather than a standalone content page
- The footer year is generated automatically
- The projects archive uses a two-column desktop grid and one-column mobile grid
- Project cover images and project names both open their detail pages
- Project detail pages include a `Learn more` text overlay
- Project detail images open a larger captioned and watermarked image overlay
- The contact email is click-to-copy
- Most site text is intentionally non-selectable
- Right-click is blocked on the main site surface
- Live project/archive images now use optimized `.webp` assets with lighter loading hints

## Current Projects
- Spirit Camper
- Sheldon
- Vampire Slayer
- When the Night Can't Breathe
- E.V.I.L.
- The Heavy 20s
- Frottage

## Folder Structure
- `index.html` - homepage
- `projects.html` - projects archive page
- `contact.html` - redirect shim for the contact overlay
- `projects/` - all project detail pages
- `css/style.css` - main styling, layout rules, overlays, and responsive behavior
- `js/main.js` - archive placeholder handling and archive media protections
- `js/project-detail.js` - project detail overlays, captioned/watermarked image previews, and project media protections
- `js/shared-layout.js` - shared footer rendering, project-page header injection, contact overlay behavior, custom cursor, and shared interaction rules
- `assets/images/` - optimized project image folders used in the archive and galleries
- `sections/` - reserved for future file splitting if needed

## Important Architecture Note
The public experience is now built around separate pages plus a shared contact overlay.

The older hidden homepage/about/contact/project content is no longer in the live homepage shell and has been archived in `LEGACY_SINGLE_PAGE_CONTENT.md`.

## Local Development
1. Open `index.html` or `projects.html` in a browser.
2. Update shared visual styling in `css/style.css`.
3. Update shared overlay/footer/header behavior in `js/shared-layout.js`.
4. Update project detail overlay behavior in `js/project-detail.js`.
5. Touch `js/main.js` only when archive-grid behavior is involved.

## Next Planned Work
- do a final copy and consistency pass across all pages
- run a dedicated responsiveness and browser QA pass
- add archive filtering later if the project list grows

## Deployment
This is a static website, so it can be deployed on platforms like GitHub Pages, Netlify, or Vercel.

## Credits
- Designed and built by Ray Hernaez
