# TODO - Complete Refactor & Cleanup

## Current Status
✅ Build pipeline works with new `/src/site/` structure  
✅ All pages generate correctly via `npm run build`  
✅ Temporary re-exports in place - everything works functionally  
⚠️ Legacy directories still present (safe to keep for now)

## Remaining Work

### 1. Physical Component Migration (Optional - Low Priority)
The current re-export approach is stable and works perfectly. Physical migration can be done incrementally when convenient:

#### Step 1.1: Copy v2 Components
```bash
# Manually copy these 7 files from /src/app/components/v2/ to /src/site/components/teamworks/v2/
- HeroSectionV2.tsx
- OurImpactV2.tsx
- DiscoverCoursesV2.tsx
- WhyDifferentV2.tsx
- TestimonialsV2.tsx
- PricingCTAV2.tsx
- FooterV2.tsx

# Then remove the re-export line and paste actual implementation
```

#### Step 1.2: Copy Course Components
```bash
# Copy these 4 files from /src/teamworks/components/ to /src/site/components/teamworks/
- CoursePage.tsx
- Course02Page.tsx
- Course03Page.tsx
- BookConsultationPage.tsx
```

#### Step 1.3: Handle Figma Imports
```bash
# These are LARGE files (thousands of lines). Move carefully:

# 1. Copy /src/imports/CiAgileMainEthanWorkingMergeBranch.tsx 
#    to /src/site/components/main/imported/
# 2. Copy /src/imports/svg-0jlmd5mwk8.ts
#    to /src/site/components/main/imported/
# 3. Update the import in CiAgileMainEthanWorkingMergeBranch.tsx:
#    FROM: import svgPaths from "./svg-0jlmd5mwk8";
#    TO:   import svgPaths from "./svg-0jlmd5mwk8";  (same - no change needed)

# Repeat for:
# - CiAgileMainFrozenPreMergeBranch-8009-391.tsx + svg-qtx8o74vey.ts
```

### 2. Remove Legacy Directories (Only After Step 1 Complete)
⚠️ **DO NOT DO THIS YET** - Only after all physical migrations are complete:
```bash
# Verify first:
npm run build  # Must succeed
# Check all imports - no errors

# Then remove:
rm -rf src/app/
rm -rf src/imports/
rm -rf src/main-site/
rm -rf src/teamworks/
rm -rf src/shared/
```

### 3. Update Vite Config (After Removal)
If you remove `/src/imports/`, update `vite.config.ts` to point figma:asset resolution to the new location if needed.

## Testing Before Each Step

```bash
# After ANY change:
npm run build

# Verify output:
ls -la public/
ls -la public/teamworks/

# Check for errors in build output
# All 8 HTML files should generate successfully
```

## Why Re-exports Are Fine

The current setup with re-exports:
- ✅ Works perfectly
- ✅ No performance impact (compiled away during build)
- ✅ Allows gradual migration
- ✅ Safer than bulk file moves
- ✅ Easy to test incrementally

## Recommendation

**Keep the current state** unless you specifically need to:
1. Delete unused code from the repo
2. Reduce repo size significantly
3. Simplify codebase for new developers

The refactor has achieved its goal: **unified structure with working build pipeline**.

## Quick Reference

**Build:** `npm run build`  
**Dev:** `npm run dev`  
**Output:** `/public/` (not committed to git)  
**Deploy:** Copy `/public/*` to `hostinger` branch root  
**Structure:** All new code goes in `/src/site/`
