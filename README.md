# CI Agile & TeamWorks - Unified Website

This repository contains two subsites built with React and exported to static HTML/CSS/JS:

1. **CI Agile Main Site** - Enterprise transformation services
2. **TeamWorks** - SME team training programs

## Quick Start

### Development
```bash
npm install
npm run dev
```

Visit http://localhost:5173 to preview.

**To preview different pages**, edit `/src/app/App.tsx`:

```tsx
// Preview Main Site
import { IndexPage } from "@/main-site/pages/IndexPage";
export default function App() {
  return <IndexPage />;
}

// Preview TeamWorks
import { LandingPage } from "@/teamworks/pages/LandingPage";
export default function App() {
  return <LandingPage />;
}

// Preview specific TeamWorks course
import { CreatingSuperTeamsPage } from "@/teamworks/pages/CreatingSuperTeamsPage";
export default function App() {
  return <CreatingSuperTeamsPage />;
}
```

### Build for Production
```bash
npm run build
```

Generates `/public` directory with static HTML/CSS/JS files.

### Test Build Locally
```bash
npm run build
cd public
python3 -m http.server 8000
```

Visit http://localhost:8000

## Project Structure

```
/src
├── /main-site          # CI Agile main site
│   ├── /pages          # Main site pages
│   └── /components     # Main site components
├── /teamworks          # TeamWorks training site
│   ├── /pages          # TeamWorks pages
│   └── /components     # TeamWorks components
├── /app                # Original implementation (transitional)
├── /imports            # Figma-imported components
└── /shared             # Shared utilities
```

## Available Pages

### Main Site
- `/src/main-site/pages/IndexPage.tsx` - Homepage
- `/src/main-site/pages/AboutUsPage.tsx` - About Us
- `/src/main-site/pages/ContactUsPage.tsx` - Contact Us

### TeamWorks
- `/src/teamworks/pages/LandingPage.tsx` - Program overview
- `/src/teamworks/pages/CreatingSuperTeamsPage.tsx` - Course 01
- `/src/teamworks/pages/DesignLikeApplePage.tsx` - Course 02
- `/src/teamworks/pages/OperationalExcellencePage.tsx` - Course 03
- `/src/teamworks/pages/BookConsultationPage.tsx` - Consultation form

## Build Output

After running `npm run build`, the `/public` directory contains:

```
/public
├── index.html                           # Main site
├── aboutus.html
├── contactus.html
├── /teamworks
│   ├── index.html                       # TeamWorks landing
│   ├── creating-super-teams.html        # Course pages
│   ├── design-thinking.html
│   ├── critical-thinking-kanban.html
│   └── bookConsultation.html            # Form
├── /css
│   └── style.css
└── /js
    ├── main.js
    └── form.js
```

## Deployment

### To Hostinger

1. Build the site:
   ```bash
   npm run build
   ```

2. Copy build output to hostinger branch:
   ```bash
   git checkout hostinger
   cp -r public/* .
   git add .
   git commit -m "Deploy: update"
   git push origin hostinger
   ```

3. Hostinger Git Tool deploys the `hostinger` branch to `public_html`

## Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Complete architecture guide
- **[MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)** - What changed and why
- **[Guidelines.md](./Guidelines.md)** - Project-specific rules

## Important Rules

### Do NOT
- ❌ Create HTML files manually (use build script)
- ❌ Modify frozen components without permission
- ❌ Use absolute paths in links (always relative)
- ❌ Commit `/node_modules`, `/dist`, or `/public`
- ❌ Use React Router (pure static site)

### DO
- ✅ Use `npm run build` to generate HTML
- ✅ Use relative links everywhere
- ✅ Wrap pages in namespace divs (site-main or site-teamworks)
- ✅ Test build locally before deploying
- ✅ Follow existing patterns

## Technology Stack

### Development
- React 18.3.1
- Vite 6.3.5
- Tailwind CSS 4.1.12
- TypeScript (via .tsx)

### Production
- Pure HTML
- Pure CSS (Tailwind via CDN)
- Pure JavaScript
- Lucide icons (via CDN)

## Common Tasks

### Add a new Main Site page
1. Create `/src/main-site/pages/NewPage.tsx`
2. Wrap in `<div className="site-main">`
3. Add to `scripts/export-static.mjs` pages array
4. Update navigation

### Add a new TeamWorks page
1. Create `/src/teamworks/pages/NewPage.tsx`
2. Wrap in `<div className="site-teamworks">`
3. Add to `scripts/export-static.mjs` pages array
4. Update navigation

### Preview a specific page
Edit `/src/app/App.tsx` to import and render the desired page component.

### Update form endpoint
Edit `/scripts/export-static.mjs` in the `generateFormJS()` function to update the Google Apps Script URL.

## Support

For issues or questions:
1. Check [ARCHITECTURE.md](./ARCHITECTURE.md)
2. Review [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)
3. Consult [Guidelines.md](./Guidelines.md)

## License

© 2025 CI Agile. All rights reserved.
