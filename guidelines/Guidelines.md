**Add your own guidelines here**
# Guidelines.md
# =========================================
# Figma Make – Static Site (MPA) HARD RULES
# =========================================
#
# This project is a STATIC MULTI-PAGE WEBSITE (MPA).
# It is deployed to Hostinger shared hosting using Git.
#
# These rules are NON-NEGOTIABLE.
# Any violation will BREAK production.
#
# -----------------------------------------
# 1. ARCHITECTURE – ABSOLUTE RULES
# -----------------------------------------
#
# - This is NOT an SPA.
# - Do NOT use React Router, Next.js routing, or client-side routing of any kind.
# - Do NOT use SSR, SSG frameworks, or server adapters.
# - Each page MUST be a real, physical .html file.
#
# Required output pages (examples):
# - index.html
# - creating-super-teams.html
# - design-like-apple.html
# - operational-excellence.html
# - bookConsultation.html
#
# -----------------------------------------
# 2. BUILD OUTPUT – CRITICAL
# -----------------------------------------
#
# - `npm run build` MUST output STATIC FILES ONLY.
# - Build output directory MUST be:
#
#       /public
#
# - `/public` MUST contain:
#     - index.html
#     - other *.html pages
#     - css/
#     - js/
#
# - `/dist` MUST NOT be used.
# - Do NOT generate nested folders like `/public/public`.
#
# -----------------------------------------
# 3. DEPLOYMENT MODEL (HOSTINGER)
# -----------------------------------------
#
# - Hostinger Git Tool deploys the BRANCH ROOT directly into `public_html`.
# - Therefore:
#
#   The *contents* of `/public` must be copied to the repository root
#   before deployment to the `hostinger` branch.
#
# - The `hostinger` branch MUST contain ONLY static site files:
#
#   Correct `hostinger` branch structure:
#   ├── index.html
#   ├── creating-super-teams.html
#   ├── design-like-apple.html
#   ├── operational-excellence.html
#   ├── bookConsultation.html
#   ├── css/
#   └── js/
#
# - `node_modules`, `src`, build configs, and docs MUST NOT exist in `hostinger`.
#
# -----------------------------------------
# 4. LINKS & NAVIGATION – STRICT
# -----------------------------------------
#
# - ALL links MUST use RELATIVE URLs.
#
#   ✅ Correct:
#     href="creating-super-teams.html"
#     href="bookConsultation.html"
#
#   ❌ Forbidden:
#     href="/creating-super-teams"
#     href="/bookConsultation"
#
# - Do NOT use JavaScript click handlers for navigation.
# - Buttons that navigate MUST be:
#
#     <a href="page.html">...</a>
#
# NOT:
#     <button onclick="...">
#
# -----------------------------------------
# 5. JAVASCRIPT – INTERACTIVITY ONLY
# -----------------------------------------
#
# JavaScript is allowed ONLY for:
# - FAQ accordion toggle
# - Simple UI interactions
# - Form submission
#
# JavaScript MUST:
# - Be plain JS (no framework runtime)
# - Be included via <script src="js/*.js">
# - Never intercept navigation links
#
# -----------------------------------------
# 6. FAQ / ACCORDION REQUIREMENTS
# -----------------------------------------
#
# - FAQ MUST work with pure JavaScript.
# - No React state, no hydration, no framework lifecycle.
# - Click MUST toggle visibility via CSS classes or inline styles.
#
# -----------------------------------------
# 7. REACT USAGE – CONSTRAINED
# -----------------------------------------
#
# - React MAY be used internally during development ONLY.
# - React MUST be fully compiled away at build time.
# - Final output MUST be static HTML/CSS/JS.
#
# - Do NOT introduce:
#   - React Router
#   - useEffect for navigation
#   - Dynamic imports for pages
#
# -----------------------------------------
# 8. NODE / DEPENDENCIES
# -----------------------------------------
#
# - `node_modules` MUST NEVER be committed.
# - `.gitignore` MUST include:
#
#     node_modules/
#
# -----------------------------------------
# 9. FILE SAFETY RULES
# -----------------------------------------
#
# - Do NOT delete or rename existing HTML pages unless explicitly instructed.
# - Do NOT refactor working navigation or layout.
# - Do NOT “optimize” architecture.
#
# This project values STABILITY over cleverness.
#
# -----------------------------------------
# 10. CHANGE POLICY
# -----------------------------------------
#
# When modifying code:
# - Preserve existing file structure
# - Preserve existing URLs
# - Preserve existing page behavior
#
# If unsure: DO NOTHING and ask.
#
# =========================================
# END OF GUIDELINES
# =========================================

# General Guidelines

## Technology Constraints

- JavaScript is allowed **only when necessary** (interactions, toggles, analytics).

## CSS & Layout

- Use **Tailwind CSS** utility classes whenever possible.
- Prefer **flexbox and CSS grid** for layout.
- Use **absolute positioning only when strictly necessary** (e.g. decorative elements).
- Avoid fixed heights unless required for visual consistency.
- Layouts must be **responsive by default** (mobile-first).

## Code Quality

- Refactor continuously to keep code clean and readable.
- Avoid duplicated styles or logic.
- Keep files small and focused.
- Separate concerns clearly:
  - Layout → HTML
  - Styling → Tailwind utilities or small custom CSS
  - Behavior → minimal, well-scoped JS

## Performance

- Optimize for fast load times.
- Avoid unnecessary JavaScript.
- Do not include unused CSS or assets.
- Prefer system fonts or lightweight web fonts.
- Images should be optimized and use modern formats when possible (e.g. WebP).

## File Structure

Use a simple static structure:

/public
├── index.html
├── /css
│ └── style.css
├── /js
│ └── main.js
└── /assets
└── images, icons, media

- Helper scripts and reusable logic should live in `/js`.
- Reusable UI patterns should be documented and reused consistently.

## SEO & Accessibility

- Use **semantic HTML** (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Use **one `<h1>` per page**, followed by logical heading hierarchy.
- Always include:
  - `<title>`
  - meta description
  - canonical URL
- Images must have meaningful `alt` text.
- Links and buttons must be keyboard-accessible.

---

# Design System Guidelines

## Visual Principles

- Clean, modern, professional.
- High readability over visual gimmicks.
- Clear visual hierarchy using spacing, typography, and contrast.
- Avoid unnecessary animations or effects.

## Typography

- Use a consistent font stack across the site.
- Maintain clear heading scale (H1 → H6).
- Line length should be readable on both desktop and mobile.
- Text must never rely on color alone for meaning.

## Layout Rules

- Content should be wrapped in a centered container with sensible max-width.
- Use spacing utilities instead of empty divs.
- Sections should have clear vertical rhythm.

## Buttons

Buttons are primary conversion and interaction elements.

### Usage

- Buttons should represent clear user actions.
- Labels must be action-oriented and concise.

### Variants

- **Primary Button**
  - Purpose: Main action on a page or section
  - Style: Solid fill, high contrast
  - Usage: One primary button per section

- **Secondary Button**
  - Purpose: Supporting or alternative actions
  - Style: Outline or subtle background
  - Usage: May appear alongside primary

- **Tertiary Button**
  - Purpose: Low-emphasis actions
  - Style: Text-only
  - Usage: Use sparingly

## Forms (if used)

- Inputs must have visible labels.
- Placeholder text must not replace labels.
- Forms must be usable on mobile devices.

---

# Output Expectations

- The generated code must be **production-ready**, not prototype-quality.
- The result should be suitable for deployment on **Hostinger shared hosting**.
- No experimental or preview-only features.
- Favor simplicity, clarity, and long-term maintainability.
- <!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

- Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
- Refactor code as you go to keep code clean
- Keep file sizes small and put helper functions and components in their own files.

---

# Design system guidelines

Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

- Use a base font-size of 14px
- Date formats should always be in the format “Jun 10”
- The bottom toolbar should only ever have a maximum of 4 items
- Never use the floating action button with the bottom toolbar
- Chips should always come in sets of 3 or more
- Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:

## Button

The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage

Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants

- Primary Button
  - Purpose : Used for the main action in a section or page
  - Visual Style : Bold, filled with the primary brand color
  - Usage : One primary button per section to guide users toward the most important action
- Secondary Button
  - Purpose : Used for alternative or supporting actions
  - Visual Style : Outlined with the primary color, transparent background
  - Usage : Can appear alongside a primary button for less important actions
- Tertiary Button
  - Purpose : Used for the least important actions
  - Visual Style : Text-only with no border, using primary color
  - Usage : For actions that should be available but not emphasized
    -->