# Preview Guide - Quick Reference

## How to Preview Different Pages

Edit `/src/app/App.tsx` and replace the contents with one of the examples below:

---

## Main Site Pages

### Homepage (CI Agile Main)
```tsx
import { IndexPage } from "@/main-site/pages/IndexPage";

export default function App() {
  return <IndexPage />;
}
```

### About Us
```tsx
import { AboutUsPage } from "@/main-site/pages/AboutUsPage";

export default function App() {
  return <AboutUsPage />;
}
```

### Contact Us
```tsx
import { ContactUsPage } from "@/main-site/pages/ContactUsPage";

export default function App() {
  return <ContactUsPage />;
}
```

---

## TeamWorks Pages

### TeamWorks Landing (Program Overview)
```tsx
import { LandingPage } from "@/teamworks/pages/LandingPage";

export default function App() {
  return <LandingPage />;
}
```

### Course 01 - Creating Super Teams
```tsx
import { CreatingSuperTeamsPage } from "@/teamworks/pages/CreatingSuperTeamsPage";

export default function App() {
  return <CreatingSuperTeamsPage />;
}
```

### Course 02 - Design Like Apple
```tsx
import { DesignLikeApplePage } from "@/teamworks/pages/DesignLikeApplePage";

export default function App() {
  return <DesignLikeApplePage />;
}
```

### Course 03 - Operational Excellence
```tsx
import { OperationalExcellencePage } from "@/teamworks/pages/OperationalExcellencePage";

export default function App() {
  return <OperationalExcellencePage />;
}
```

### Book Consultation Form
```tsx
import { BookConsultationPage } from "@/teamworks/pages/BookConsultationPage";

export default function App() {
  return <BookConsultationPage />;
}
```

---

## Tips

1. **Save the file** after editing - hot reload will update the preview
2. **Keep only one import** active at a time
3. **Comment out** unused imports to keep it clean
4. **Use the @ alias** for imports (configured in vite.config.ts)

## Path Aliases

- `@/main-site/*` - Main site code
- `@/teamworks/*` - TeamWorks code
- `@/shared/*` - Shared utilities
- `@/app/*` - Original implementation
- `@/imports/*` - Figma imports

---

**Current Preview:** TeamWorks Landing Page

To change, edit `/src/app/App.tsx` with one of the examples above.
