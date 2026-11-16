# Blog

A minimal Jekyll blog for GitHub Pages: a list of post titles (newest first), search, an archive sidebar, and light/dark mode.

## Writing a post

Add a Markdown file to `_posts/` named `YYYY-MM-DD-title.md`:

```markdown
---
title: My post title
---

Post body in Markdown.
```

Commit and push. GitHub Pages rebuilds the site, and the post shows up on the home page, in the archive and in search.

## Deploying

1. Push this folder to a repository named `blog` under the `mlliarm` account.
2. In the repo, go to **Settings → Pages**, set **Source** to *Deploy from a branch*, and pick `main` / `(root)`.
3. The site is served at `https://mlliarm.github.io/blog/`.

For it to redirect to `https://milia.dev/blog/`, the custom domain `milia.dev` must be set on the
**user site** repo (`mlliarm/mlliarm.github.io`, which has the `CNAME` file). GitHub then serves every project
site under that domain, so `/blog` redirects automatically. This repo does **not** need its own `CNAME`.

## Local preview (optional)

```sh
bundle install
bundle exec jekyll serve
# open http://localhost:4000/blog/
```
