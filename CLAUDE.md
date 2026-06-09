# Project Rules

## Static HTML Mockups

Do NOT make changes to static HTML mockup files (e.g. `jess/*.html`, or any `.html` files in the mockup directories).

All code changes go into the React/TypeScript codebase only (`src/`, `scripts/`, etc.).

**Exception:** Only touch static HTML files when the user explicitly instructs a new mockup.

## Zip File Exports

When creating a zip of the codebase, always exclude:
- `public/` (regenerated on build)
- `node_modules/`
- `.git/`
- `.claude/` (contains Claude Code session data and worktrees with their own node_modules — not needed for build or deploy)

The Bash tool's working directory persists between commands. Always verify `pwd` is the project root before zipping, then use `.` as the source:

```
# 1. Verify cwd is the project root
pwd
# Should be: /Users/ethan/Code/Teamworksprogram

# 2. Zip using relative paths
zip -r ~/Downloads/Claude<NNN>_<what-changed>.zip . --exclude "public/*" --exclude "node_modules/*" --exclude ".git/*" --exclude ".claude/*"
```
