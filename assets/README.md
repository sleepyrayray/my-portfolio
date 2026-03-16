## Assets

This scaffold now uses per-project asset folders inside `assets/projects/`.

You can mix image formats as needed, including `.jpg`, `.jpeg`, `.png`, and `.webp`.

Recommended image directions:

- Card/grid thumbnails: around `1600x1200`
- Hero or spotlight stills: landscape `4:3` or `16:10`
- Keep file names lowercase and hyphenated for consistency

## Project Folders

Each selected project now has its own folder and the site points to a `cover` image inside each one:

- `assets/projects/spirit-camper/cover.*`
- `assets/projects/sheldon/cover.*`
- `assets/projects/vampire-slayer/cover.*`
- `assets/projects/evil/cover.*`
- `assets/projects/frottage/cover.*`

The easiest workflow is:

1. Keep one `cover` image in each project folder for project previews and cards.
2. Add additional numbered gallery files like `1.jpg`, `2.png`, `3.jpg` as needed, and include the `cover` file in `gallery` too if you want it to appear with the rest of the case-study images.
3. Update paths, captions, and optional video links in `content/site-content.js`.
