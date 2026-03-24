# Ray Hernaez Portfolio

## Short Description
A personal portfolio website for Ray Hernaez, built with plain HTML, CSS, and JavaScript.

## Purpose of the Site
This site presents Ray Hernaez's work in game design, digital art, and interactive media in a clean, easy-to-navigate format. It highlights project case studies, gallery images, and walkthrough videos while keeping the interface simple and focused.

## Current Status
The site includes personalized `Home`, `About`, `Projects`, and `Contact` sections with real portfolio content.

Current state:
- Dark theme layout is in place
- Main navigation switches between `Home`, `About`, `Projects`, and `Contact`
- Only one main section is visible at a time
- The `Projects` section opens with project buttons first, with no project selected by default
- Project images open in a modal with captions
- Some projects include embedded YouTube walkthroughs
- The footer includes an automatically updating year

## Current Projects
- The Heavy 20s
- Spirit Camper
- Sheldon
- Vampire Slayer
- E.V.I.L.
- Frottage

## Folder Structure
- `index.html` - the full site layout and portfolio content
- `css/style.css` - all styling, layout, responsive rules, and gallery presentation
- `js/main.js` - section switching, project switching, gallery modal logic, and footer year handling
- `assets/images/` - project image folders used in the galleries
- `sections/` - reserved for future file splitting if needed

## Site Behavior
- The top navigation shows one main section at a time
- The `Projects` area uses its own project switcher
- Opening `Projects` shows the project chooser before any case study is selected
- Clicking a project button reveals that project's case study
- Clicking a gallery thumbnail opens a larger image with a caption

## Local Development
1. Open `index.html` in a browser.
2. Edit text directly in `index.html`.
3. Update styles in `css/style.css`.
4. Update the simple interaction logic in `js/main.js` if needed.

## Deployment
This is a static website, so it can be deployed on platforms like GitHub Pages, Netlify, or Vercel.

## Credits
- Designed and built by Ray Hernaez
