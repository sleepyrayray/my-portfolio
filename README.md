# Ray Hernaez Portfolio

## Short Description
A personal portfolio website for Ray Hernaez, built with plain HTML, CSS, and JavaScript.

## Current Site Structure
The site currently has three main public pages:

- `index.html` - homepage hero
- `projects.html` - project archive overview
- `contact.html` - about/contact page

The visual direction is dark, minimal, and retro-toned, with Oakline Studio used mainly as a structural reference.

## Current Status
### Live design direction
- Dark tobacco palette
- Centered typography-led homepage
- Sticky top-right navigation
- Tiny bottom-left footer
- Separate overview pages for projects and contact

### Current page behavior
- `Home`, `Projects`, and `Contact` are always visible in the sticky nav
- The current page is highlighted in the nav
- The footer year is generated automatically
- The projects archive uses a two-column desktop grid and one-column mobile grid
- Project cover images are non-draggable and not directly interactive
- Project names are the intended entry points for future project detail pages

## Current Projects
- Spirit Camper
- Sheldon
- Vampire Slayer
- E.V.I.L.
- The Heavy 20s
- Frottage

## Folder Structure
- `index.html` - homepage
- `projects.html` - projects archive page
- `contact.html` - about/contact page
- `css/style.css` - main styling, layout rules, and responsive behavior
- `js/main.js` - older interaction logic plus current archive protections
- `js/shared-layout.js` - shared sticky nav and shared footer rendering
- `assets/images/` - project image folders used in the archive and galleries
- `sections/` - reserved for future file splitting if needed

## Important Architecture Note
The repo is currently in a transition state:

- the new public experience is built around separate pages
- some older single-page portfolio sections still remain inside `index.html`
- some older section-switching and project-panel logic still remains in `js/main.js`

Those leftovers do not define the current main experience, but they should likely be cleaned up after the project detail pages are designed.

## Local Development
1. Open `index.html`, `projects.html`, or `contact.html` in a browser.
2. Update shared visual styling in `css/style.css`.
3. Update shared nav/footer rendering in `js/shared-layout.js`.
4. Update any older interaction logic in `js/main.js` only when needed.

## Next Planned Work
- build the individual project detail pages
- link each project name in the archive to its real page
- clean up legacy hidden sections after the new structure is fully locked

## Deployment
This is a static website, so it can be deployed on platforms like GitHub Pages, Netlify, or Vercel.

## Credits
- Designed and built by Ray Hernaez
