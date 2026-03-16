# About This Repo

## Purpose

This repository is a portfolio website for Ray Hernaez. Right now it is a static, single-page portfolio scaffold focused on selected work in game design, interactive media, and mixed-media art.

The current version is designed to be easy to edit without build tooling. Content is data-driven from a single JavaScript file, and the site can be opened directly with `index.html` in a browser.

## What Is Currently In The Repo

- A static portfolio website made of:
  - `index.html`
  - `styles.css`
  - `main.js`
  - `content/site-content.js`
- Selected project content for 5 projects:
  - Spirit Camper
  - Sheldon
  - Vampire Slayer
  - E.V.I.L.
  - Frottage
- Real project assets in `assets/projects/`
- Old placeholder SVGs in `assets/placeholders/`
- Asset usage notes in `assets/README.md`
- Basic repo notes in `README.md`
- `.gitignore` with `.DS_Store`

## How The Site Is Organized

### Top-level structure

- `index.html`: the page shell and section structure
- `styles.css`: all visual styling and responsive layout
- `main.js`: renders the page from the content data and handles navigation, reveal animations, galleries, and YouTube embeds
- `content/site-content.js`: the main editable content source for site copy, project metadata, image paths, captions, and video links

### Content model

`content/site-content.js` currently contains:

- site name and role
- hero content
- about content
- projects intro content
- contact content
- an array of project entries

Each project entry currently includes:

- title, slug, date, medium, status, color
- cover image path and alt text for previews/cards
- summary and role
- focus tags
- optional YouTube link and label
- gallery images with captions and layout ratios, including optional reuse of the cover image inside the gallery order
- contributions, process notes, and takeaways

### Asset organization

Real assets are organized by project in:

- `assets/projects/spirit-camper/`
- `assets/projects/sheldon/`
- `assets/projects/vampire-slayer/`
- `assets/projects/evil/`
- `assets/projects/frottage/`

These folders currently contain mixed image formats already in use by the site, including PNG and JPEG files.

Placeholder SVGs still exist in:

- `assets/placeholders/`

Those are no longer the active source for the current selected-project covers.

## Current Website Goal

The current website goal appears to be:

- present a polished, image-led portfolio landing page
- highlight 5 selected projects rather than the full old Adobe Portfolio archive
- show each selected project as a compact case-study section with:
  - preview cover art on cards and project links
  - summary
  - role and metadata
  - gallery images, including cover art when a project reuses it there
  - process/contribution/takeaway content
  - YouTube walkthroughs where available
- show gallery thumbnails as square crops while still opening the original full-size images on click

The current site sections are:

- hero
- about
- selected projects grid
- project spotlight/case-study sections
- contact

## What Is Missing Or Incomplete

The following gaps are actually present in the repo right now:

- The contact section still uses placeholder values in `content/site-content.js`:
  - placeholder email
  - placeholder social links (`#`)
- There is no package manager or app framework setup in the repo right now:
  - no `package.json`
  - no bundler config
  - no build pipeline
- There is no deployment configuration in the repo
- There are no tests in the repo
- The site is currently a single-page static site only:
  - no separate project pages
  - no routing
- Only 5 selected projects are currently represented in the rebuilt site, even though the earlier screenshot review referenced more projects
- Placeholder asset files are still stored in `assets/placeholders/`, even though the active site uses `assets/projects/`

## Notes For Future Codex Threads

- If editing content first, start in `content/site-content.js`
- If changing layout or section structure, start in `index.html` and `main.js`
- If changing look and feel, start in `styles.css`
- If updating project media, keep using the per-project folders in `assets/projects/`
- Cover files are used for previews/cards and can also be inserted into a project's `gallery` array when they should appear in the case-study gallery
- Gallery previews are square-cropped in CSS, but clicking them still opens the original asset file directly
- The site currently supports embedded YouTube videos using `youtube-nocookie.com` URLs generated from links in `content/site-content.js`
- The repo is intentionally simple and can be opened directly in a browser without install steps

## Recommended Next Steps

These are the most natural next steps based on the current state of the repo:

1. Replace the placeholder contact email and social URLs in `content/site-content.js`
2. Continue reviewing project captions, image ordering, and alt text whenever project assets change
3. Decide whether to keep the one-page format or split projects into separate detail pages
4. Add any remaining selected projects if the portfolio should grow beyond the current 5
5. If the site needs deployment, performance optimization, or easier scaling, decide whether to keep it static or migrate it to a framework later
