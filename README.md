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
blog.html            Changelog-style blog listing
blog/
  post-01.html        Sample post
  post-02.html        Sample post
css/style.css         All styling, design tokens at the top
js/main.js            Mobile nav toggle
```

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
- To add a new blog entry: duplicate `blog/post-01.html`, then add an entry to `blog.html` at the top, bumping the version number (v0.4, v0.5, ...).

## Adding images

The site already has spots wired up for photos — you just need to drop files in:

- **Your portrait**: save it as `assets/images/portrait.jpg` (square photo works best, at least 500×500px). It's referenced on the home page and the About page. Until that file exists, a simple placeholder illustration shows instead — nothing breaks, nothing looks like an error.
- **Project screenshots**: `projects/project-01.html` has a working example — a `<figure class="article-figure">` block with an image and caption. Save a screenshot to `assets/images/` and point the `src` at it; if the file's missing, the whole figure just hides itself rather than showing a broken-image icon. Copy that pattern into any project or blog post.
- **General rule**: keep images under ~500KB each (resize/export at web quality, not print quality) so the site stays fast on GitHub Pages. `.jpg` for photos, `.png` for screenshots with text/UI, `.svg` for anything vector.

## Design notes

The whole site borrows PM vocabulary on purpose — status pills, a spec sheet for the About section, changelog-style blog entries, versioned badges on projects. It's meant to feel like a product she shipped, not a résumé with a nicer font. Palette is ink/paper with a teal + gold accent; type pairs Fraunces (display) with IBM Plex Sans/Mono (body/labels) — deliberately steering away from the generic cream-and-terracotta AI look.
