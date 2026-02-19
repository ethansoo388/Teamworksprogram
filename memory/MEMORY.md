# Project Memory

## This Project
- Vite + React + TypeScript repo at `/Users/ethansoo/Code/teamworks/Teamworksprogram/`
- Exports static HTML via `scripts/export-static.mjs` → `/public/`
- npm/node is at `/opt/homebrew/bin/` — always set `PATH="/opt/homebrew/bin:/opt/homebrew/opt/node/bin:$PATH"` before running npm commands
- Running `npm` without PATH causes "command not found" errors

## Architecture
- Routes defined in `src/config/routes.ts`, consumed by both `App.tsx` (dev router) and `export-static.mjs`
- Site pages: `src/site/pages/**` — these are the real production pages
- App components: `src/app/components/` — dev-only router pages (some shared components used by site pages)
- Shared canonical components: `src/shared/` (created during refactor)
- Static output: `/public/` with Tailwind CDN + Lucide CDN + `js/main.js`

## Completed Refactors (R1-R4, Feb 2026)
See: `memory/refactor-r1-r4.md`
