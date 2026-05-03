# Ray Hernaez Portfolio

## Short Description
A personal portfolio website for Ray Hernaez, built with plain HTML, CSS, and JavaScript.

## Current Site Structure
The live site currently works as:

- `index.html` - homepage hero, selected work archive, and About Me section
- `projects.html` - redirect shim to the homepage selected works section
- `projects/*.html` - individual project detail pages
- `contact.html` - redirect entry that opens the homepage About Me section

The visual direction is dark, minimal, and retro-toned, with Oakline Studio used mainly as a structural reference.
The current type system uses Unbounded for display headings, Inter for general UI/body text, and Geist Mono for small label/meta text.

## Current Status
### Live design direction
- Dark tobacco palette
- Typography-led homepage with selected works right after the name logo and subtext
- Selected work archive shown on the homepage
- Full-width sticky status bar with `RAY HERNAEZ`, availability, and Montreal time
- Full-width footer bar with the generated copyright line
- Homepage selected work archive with separate project-detail pages
- Inline About Me and contact section below selected works

### Current page behavior
- `RAY HERNAEZ` is the persistent home link in the top bar
- The top bar shows `AVAILABLE FOR WORK` and a live Montreal, QC clock
- At `860px` and below, the mobile/tablet top bar simplifies to `RAY HERNAEZ` and `AVAILABLE FOR WORK`
- The footer year is generated automatically
- The projects archive uses a wide two-column row-ordered grid on desktop and one column on mobile
- Project cover hovers use a faster black-and-white difference overlay
- Project cover images and project names both open their detail pages
- Project detail pages include a compact arrow control for the `Learn more` text overlay
- Project detail images display inline without zoom popups
- Project detail pages show random Other Works before the contact prompt, with two shown on mobile
- Project detail pages end with a centered Get In Touch section
- The contact email is click-to-copy
- Most site text is intentionally non-selectable
- Right-click is blocked on the main site surface
- Live project/archive images now use optimized `.webp` assets with lighter loading hints

## Current Projects
- Spirit Camper
- E.V.I.L.
- The Heavy 20s
- Sheldon
- When the Night Can't Breathe
- Frottage
- Vampire Slayer

## Folder Structure
- `index.html` - homepage hero, selected work archive, and About Me section
- `projects.html` - redirect shim to `index.html#selected-works`
- `contact.html` - redirect shim to `index.html#about-me`
- `projects/` - all project detail pages
- `css/style.css` - main styling, layout rules, overlays, and responsive behavior
- `js/main.js` - archive media interaction protections
- `js/project-detail.js` - project detail overlays and project media protections
- `js/shared-layout.js` - shared top bar/footer rendering, live clock, custom cursor, email copy, and shared interaction rules
- `assets/images/` - optimized project image folders used in the archive and galleries
- `sections/` - reserved for future file splitting if needed

## Important Architecture Note
The public experience is now built around a name-logo intro, the selected work archive, an inline About Me/contact section, and separate project detail pages.

The older hidden homepage/about/contact/project content is no longer in the live homepage shell and has been archived in `LEGACY_SINGLE_PAGE_CONTENT.md`.

## Local Development
1. Open `index.html` in a browser.
2. Update shared visual styling in `css/style.css`.
3. Update shared footer/header/email behavior in `js/shared-layout.js`.
4. Update project detail overlay behavior in `js/project-detail.js`.
5. Touch `js/main.js` only when archive image interaction behavior is involved.

## Next Planned Work
- do a final copy and consistency pass across all pages
- run a dedicated responsiveness and browser QA pass
- add archive filtering later if the project list grows

## Deployment
This is a static website, so it can be deployed on platforms like GitHub Pages, Netlify, or Vercel.

## Credits
- Designed and built by Ray Hernaez
