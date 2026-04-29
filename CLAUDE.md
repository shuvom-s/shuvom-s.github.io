# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

My (Shuvom Sadhuka)'s personal academic website, built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. It is deployed via GitHub Actions to `shuvom-s.github.io` from the `main` branch; the `gh-pages` branch is auto-generated and should never be edited manually. Note that I have heavily modified the original website, so various things aren't served, even though the pages exist, such as cv.md. In general, please DO NOT delete pages, as they may be useful in the future.

## Local development

**Docker (recommended):**
```bash
docker compose pull
docker compose up
# Site runs at http://localhost:8080
```

**Without Docker (requires Ruby + Bundler + Python):**
```bash
bundle install
pip install jupyter
bundle exec jekyll serve
# Site runs at http://localhost:4000
```

**Build only (no serve):**
```bash
bundle exec jekyll build
# Output goes to _site/
```

Changes to `_config.yml` require a server restart to take effect. All other file changes hot-reload automatically.

## Key content locations

| What | Where |
|------|--------|
| Homepage bio | `_pages/about.md` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Social/contact links | `_data/socials.yml` |
| Site-wide config | `_config.yml` |
| Theme colors/variables | `_sass/_themes.scss`, `_sass/_variables.scss` |

## Content conventions

- **Blog posts**: files in `_posts/` must be named `YYYY-MM-DD-title.md`. Files prefixed with `old` are excluded from the build (see `_config.yml` exclude list).
- **CV**: the site loads `assets/json/resume.json` as the primary CV source (via `jekyll_get_json`). Delete that file to fall back to `_data/cv.yml`.
- **Pages excluded from build**: `_pages/cv.md`, `_pages/publications.md`, `_pages/projects.md`, `_news/`, `_projects/`, and several others are in the `exclude` list in `_config.yml` — they are intentionally not rendered.

## Deployment

Pushing to `main` automatically triggers the `Deploy` GitHub Action. The built site lands on `gh-pages`. No manual deployment steps needed.
