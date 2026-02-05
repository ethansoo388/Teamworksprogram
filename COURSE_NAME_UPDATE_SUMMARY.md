# Course Name Update Summary

## Overview
Updated course names, descriptions, and export URLs for courses 02-05 to better market the TeamWorks training programs.

## Changes Made

### Course 02: Win Customers Through Design
- **Old Name:** Design Like Apple
- **New Name:** Win Customers Through Design
- **New Summary:** Create customer-focused products and services using design thinking.
- **Old URL:** design-like-apple.html
- **New URL:** design-thinking.html

### Course 03: Critical Thinking for Better Work
- **Old Name:** Work Clear, Work Fast
- **New Name:** Critical Thinking for Better Work
- **New Summary:** Apply critical thinking and Kanban to make better decisions and deliver faster.
- **Old URL:** operational-excellence.html
- **New URL:** critical-thinking-kanban.html

### Course 04: Practical Lean Problem Solving
- **Old Name:** Lean Six Sigma Problem Solving
- **New Name:** Practical Lean Problem Solving
- **New Summary:** Solve costly problems with proven methods.
- **Old URL:** bookConsultation.html (no dedicated page yet)
- **New URL:** bookConsultation.html (no dedicated page yet)

### Course 05: AI Skills for YOUR Team
- **Old Name:** Prompt Your AI Better
- **New Name:** AI Skills for YOUR Team
- **New Summary:** Better tools, better prompts, better results - handpicked and customized course for your industry and your team.
- **Old URL:** bookConsultation.html (no dedicated page yet)
- **New URL:** bookConsultation.html (no dedicated page yet)

## Files Updated

### 1. `/src/app/components/v2/DiscoverCoursesV2.tsx`
- Updated course titles for courses 02-05
- Updated course descriptions for courses 02-05
- Updated buttonLink URLs to use new export filenames

### 2. `/src/app/components/v2/FooterV2.tsx`
- Updated all footer course links to use new names
- Updated footer URLs to point to new export filenames

### 3. `/src/app/components/BookConsultationPage.tsx`
- Updated footer course links to use new names
- Updated footer URLs to point to new export filenames

### 4. `/src/app/components/Course02Page.tsx`
- Updated navigation logo text: "Win Customers Through Design"
- Updated breadcrumb: "Win Customers Through Design"
- Updated hero section title: "Win Customers Through Design"
- Updated hero section summary: "Create customer-focused products and services using design thinking."

### 5. `/src/app/components/Course03Page.tsx`
- Updated navigation logo text: "Critical Thinking for Better Work"
- Updated breadcrumb: "Critical Thinking for Better Work"
- Updated hero section title: "Critical Thinking for Better Work"
- Updated hero section summary: "Apply critical thinking and Kanban to make better decisions and deliver faster."

### 6. `/scripts/export-static.mjs`
- Updated export filename for Course 02: `design-thinking.html`
- Updated export filename for Course 03: `critical-thinking-kanban.html`
- Updated page titles and descriptions to match new names

## Verification Checklist

### ✅ Content Updates
- [x] Course names updated on main page
- [x] Course descriptions updated on main page
- [x] Course 02 hero section updated
- [x] Course 03 hero section updated

### ✅ Link Updates
- [x] Main page course buttons link to correct URLs
- [x] Footer links updated across all pages (main, course pages, consultation page)
- [x] All links use relative URLs without leading slashes

### ✅ Export Configuration
- [x] Export script updated with new filenames
- [x] Export script updated with new titles and descriptions
- [x] Console log messages reflect new filenames

## Next Steps

### To Deploy:
1. Run `npm run build` to generate static files
2. Verify generated files in `/public` directory:
   - index.html
   - creating-super-teams.html
   - design-thinking.html (NEW NAME)
   - critical-thinking-kanban.html (NEW NAME)
   - bookConsultation.html
   - css/style.css
   - js/main.js
   - js/form.js

3. Test all links locally:
   - Open each HTML file in browser
   - Click through all navigation links
   - Verify footer links work correctly
   - Ensure course cards link to correct pages

4. Deploy to Hostinger:
   - Copy contents of `/public` folder to repository root on `hostinger` branch
   - Push to trigger Hostinger Git deployment

## Notes

- **Visual Design:** No visual changes were made - only content and URL updates
- **Typography:** All fonts, colors, and styling remain unchanged
- **Course 01:** "Creating Super Teams" remains unchanged
- **Courses 04 & 05:** No dedicated pages yet, still link to bookConsultation.html
- **Backwards Compatibility:** Old URLs (design-like-apple.html, operational-excellence.html) will return 404 after deployment. Consider adding redirects if needed.
