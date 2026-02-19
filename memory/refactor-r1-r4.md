# Refactor R1-R4 Summary (Feb 2026)

## R1: Removed ui/ system and 40+ dependencies
- Deleted `src/app/components/ui/` (48 Radix UI wrapper files)
- Confirmed zero external imports before deletion (grep search)
- Removed from package.json: all @radix-ui/*, @mui/*, @emotion/*, class-variance-authority,
  tailwind-merge, clsx, cmdk, vaul, sonner, next-themes, react-day-picker, input-otp,
  react-resizable-panels, recharts, embla-carousel-react, react-slick, react-dnd*,
  react-responsive-masonry, motion, react-hook-form, react-popper, @popperjs/core,
  tw-animate-css, date-fns
- Remaining deps: lucide-react, react, react-dom, react-router-dom

## R2: Canonicalized ImageWithFallback
- Created `src/shared/ImageWithFallback.tsx` (canonical, single source of truth)
- Deleted duplicates: `src/site/components/teamworks/ImageWithFallback.tsx`,
  `src/site/shared/ImageWithFallback.tsx`, `src/app/components/figma/ImageWithFallback.tsx`
- Updated 11 import sites to use `@/shared/ImageWithFallback`
- Removed empty dirs: `src/app/components/figma/`, `src/site/shared/`

## R3: Renamed legacy imported components
- `CiAgileMainEthanWorkingMergeBranch.tsx` → `src/site/components/main/HomePageSections.tsx`
- `CiAgileMainFrozenPreMergeBranch-8009-391.tsx` → `src/site/components/main/AboutPageSections.tsx`
- Deleted `CiAgileMainFrozenPreMergeBranch.tsx` (thin re-export wrapper)
- Moved `svg-0jlmd5mwk8.ts`, `svg-qtx8o74vey.ts` to `src/site/components/main/`
- Added semantic export aliases in AboutPageSections.tsx:
  Section1→OurBeliefSection, Section2→WhatMakesDifferentSection,
  Section3→FounderProfileSection, Section4→AboutCIAgileSection,
  Section5→ExperienceScalesSection, Section6→ExecutionPatternsSection
- Updated IndexPage, AboutUsPage, MainSiteFooter imports
- Deleted `imported/` folder

## R4: Removed fixRelativeUrls() from export script
- Verified zero `href="/"` or `src="/"` in generated public/ HTML
- Removed function body + call from `exportStaticSite()`
- Removed unused `glob` import
- Build no longer mutates any TSX source files
