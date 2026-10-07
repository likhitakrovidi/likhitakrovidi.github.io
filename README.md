# likhitakrovidi.github.io

Personal site, built as plain HTML/CSS/JS — no build step, so you can edit any file directly and refresh.

## Structure

```
index.html          Home page
about.html           About page
projects.html        All projects
projects/
  project-01.html    Teardown template (Duolingo streak)
  project-02.html    Mock PRD template (Instagram Close Friends)
blog.html            Writing listing
blog/
  post-01.html        Sample post
  post-02.html        Sample post
css/style.css         All styling, design tokens at the top
js/main.js            Mobile nav toggle, scroll reveal
```

## Drafts

`_drafts/` holds placeholder pages (teardown and PRD templates, unfinished posts, and the full Work page mockup). GitHub Pages skips folders that start with an underscore, so nothing in there is published. When a draft is real, move it back to `projects/` or `blog/` and link it from `index.html` / `blog.html`.

## How to publish

1. Copy all these files into your repo `likhitakrovidi.github.io` (root level — `index.html` needs to sit at the top).
2. Commit and push:
   ```
   git add .
   git commit -m "Launch v1.0 of the site"
   git push origin main
   ```
3. GitHub Pages should pick it up automatically since the repo is already named `<username>.github.io`. Check **Settings → Pages** to confirm it's set to deploy from the `main` branch, root folder.
4. Visit `https://likhitakrovidi.github.io` in a minute or two.

## What to edit first

- Every placeholder is called out in the copy itself (city, email, LinkedIn, real bio, real projects).
- Search for `example.com` and `your-handle` to find every link that needs a real destination.
- To add a new project: duplicate `projects/project-01.html`, edit the content, then add a card for it in `projects.html` (and optionally `index.html`'s featured section).
- To add a new blog entry: duplicate `blog/post-01.html`, then add an entry to the top of the list in `blog.html` (and optionally the "Recent writing" list on `index.html`).

## Adding images

The site already has spots wired up for photos — you just need to drop files in:

- **Your portrait**: save it as `assets/images/portrait.jpg` (square photo works best, at least 500×500px). It's referenced on the home page and the About page. Until that file exists, a simple placeholder illustration shows instead — nothing breaks, nothing looks like an error.
- **Project screenshots**: `projects/project-01.html` has a working example — a `<figure class="article-figure">` block with an image and caption. Save a screenshot to `assets/images/` and point the `src` at it; if the file's missing, the whole figure just hides itself rather than showing a broken-image icon. Copy that pattern into any project or blog post.
- **General rule**: keep images under ~500KB each (resize/export at web quality, not print quality) so the site stays fast on GitHub Pages. `.jpg` for photos, `.png` for screenshots with text/UI, `.svg` for anything vector.

## Design notes

Quiet and editorial: a warm paper background, Marcellus (a free lookalike for Minerva Modern) for headings, nav and body, Cormorant Garamond italic for the intro paragraph and emphasis, and one accent colour — the red from the portrait — used only for links and the email. To switch to the real Minerva Modern via Adobe Fonts, add the kit embed to each page and set `--font-display`, `--font-body` and `--font-italic` in `css/style.css` to `"minerva-modern"`. The portrait sits in an arched frame. Project tiles use flat colour blocks (`tile-art--sage`, `--sky`, `--butter`, `--blush`, `--stone`) with a one- or two-word italic label in place of a thumbnail; swap in a real image inside `.tile-art` whenever you have one.
