**Add your own guidelines here**

# General Guidelines

## Technology Constraints

- Use **HTML and CSS only** for production output.
- JavaScript is allowed **only when necessary** (interactions, toggles, analytics).
- **Do NOT use Node.js, React, Vue, Next.js, Vite, or build pipelines**.
- The final output must work by opening `index.html` directly in a browser.

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