# Project Rules

## Static HTML Mockups

Do NOT make changes to static HTML mockup files (e.g. `jess/*.html`, or any `.html` files in the mockup directories).

All code changes go into the React/TypeScript codebase only (`src/`, `scripts/`, etc.).

**Exception:** Only touch static HTML files when the user explicitly instructs a new mockup.

## Zip File Exports

When creating a zip of the codebase, always exclude:
- `public/` (regenerated on build)
- `node_modules/`

Zip command pattern:
```
zip -r ~/Downloads/Claude<NNN>_<what-changed>.zip . --exclude "public/*" --exclude "node_modules/*" --exclude ".git/*"
```
