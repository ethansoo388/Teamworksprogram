# Deployment Checklist

Use this checklist before each deployment to ensure everything works correctly.

## Pre-Build Checks

- [ ] All changes committed to main branch
- [ ] Guidelines.md rules followed
- [ ] No frozen components modified without approval
- [ ] All imports use @ alias (not relative paths like ../)
- [ ] All links are relative (no leading /)

## Build Process

### 1. Clean Build
```bash
# Remove any existing build artifacts
rm -rf dist/ public/

# Run build
npm run build
```

**Expected output:**
```
🚀 Starting static site export...
🧹 Cleaning build artifacts...
✅ Public directory ready
🎨 Generating CSS...
✅ CSS generated
⚙️ Generating main.js...
✅ main.js generated
📝 Generating form.js...
✅ form.js generated
📄 Generating HTML files from React components...
  ✓ Rendering index.html...
  ✓ index.html generated
  ... (all files)
✅ All HTML files generated
✨ Static export complete!
```

### 2. Verify Build Output

Check `/public` directory exists:
```bash
ls -la public/
```

**Should contain:**
- [ ] `index.html` (main site homepage)
- [ ] `aboutus.html` (main site)
- [ ] `contactus.html` (main site)
- [ ] `teamworks/` directory
  - [ ] `index.html` (TeamWorks landing)
  - [ ] `creating-super-teams.html`
  - [ ] `design-thinking.html`
  - [ ] `critical-thinking-kanban.html`
  - [ ] `bookConsultation.html`
- [ ] `css/style.css`
- [ ] `js/main.js`
- [ ] `js/form.js`

### 3. Local Testing

Start local server:
```bash
cd public
python3 -m http.server 8000
# OR
npx serve .
```

Visit http://localhost:8000

## Testing Checklist

### Main Site Tests

**Homepage (index.html)**
- [ ] Page loads without errors
- [ ] Navigation renders correctly
- [ ] Footer renders correctly
- [ ] All links work (use relative paths)
- [ ] Styles load correctly

**About Us (aboutus.html)**
- [ ] Page loads
- [ ] Navigation works
- [ ] Content displays correctly
- [ ] Links to other pages work

**Contact Us (contactus.html)**
- [ ] Page loads
- [ ] Links to TeamWorks consultation work
- [ ] Email links work (mailto:)
- [ ] Navigation works

### TeamWorks Tests

**Landing Page (teamworks/index.html)**
- [ ] Page loads from /teamworks/ path
- [ ] All sections render:
  - [ ] Navigation
  - [ ] Hero
  - [ ] Impact
  - [ ] Courses
  - [ ] Why Different
  - [ ] Testimonials
  - [ ] Pricing CTA
  - [ ] Footer
- [ ] Links to courses work
- [ ] Link to consultation works
- [ ] Links back to main site work (../)

**Course Pages**
- [ ] creating-super-teams.html loads
- [ ] design-thinking.html loads
- [ ] critical-thinking-kanban.html loads
- [ ] All course content renders
- [ ] Navigation works
- [ ] Book consultation links work

**Consultation Form (teamworks/bookConsultation.html)**
- [ ] Form displays correctly
- [ ] All fields present:
  - [ ] Full Name
  - [ ] Work Email
  - [ ] Company Name
  - [ ] Team Size (dropdown)
  - [ ] Delivery Format (radio)
  - [ ] Desired Outcomes (checkboxes)
  - [ ] Contact Method (radio)
- [ ] Validation works
- [ ] Submit button works
- [ ] Form submits to Google Sheets
- [ ] Success message shows
- [ ] Redirects to index.html after 5 seconds
- [ ] Error handling works

### Cross-Site Navigation Tests

**From Main Site to TeamWorks:**
- [ ] index.html → teamworks/index.html
- [ ] aboutus.html → teamworks/index.html
- [ ] contactus.html → teamworks/bookConsultation.html

**From TeamWorks to Main Site:**
- [ ] teamworks/index.html → ../index.html
- [ ] teamworks/bookConsultation.html → ../index.html (redirect)

### Style Tests

- [ ] No style bleed between main site and TeamWorks
- [ ] site-main namespace works
- [ ] site-teamworks namespace works
- [ ] Tailwind classes render correctly
- [ ] Custom CSS applies correctly
- [ ] Responsive design works (test mobile)

### JavaScript Tests

- [ ] Lucide icons render
- [ ] Mobile menu toggle works
- [ ] Smooth scroll works
- [ ] FAQ accordions work (if present)
- [ ] Form submission logic works
- [ ] No console errors

## Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers (iOS Safari, Android Chrome)

## Performance Check

- [ ] Pages load quickly
- [ ] No unnecessary scripts
- [ ] CSS is minified
- [ ] Images load (if any)
- [ ] No 404 errors in console

## SEO Check

For each page:
- [ ] `<title>` tag present and correct
- [ ] Meta description present
- [ ] Semantic HTML used (header, nav, main, footer)
- [ ] Headings hierarchy correct (h1 → h2 → h3)
- [ ] Links have descriptive text

## Deployment

### 1. Switch to Hostinger Branch
```bash
git checkout hostinger

# IMPORTANT: Ensure this branch is clean
git status
```

### 2. Copy Build Files
```bash
# From repository root
cp -r public/* .
```

### 3. Verify Structure
```bash
ls -la
```

**Should see:**
- `index.html` (at root)
- `aboutus.html`
- `contactus.html`
- `teamworks/` directory
- `css/` directory
- `js/` directory

**Should NOT see:**
- `node_modules/`
- `src/`
- `scripts/`
- `dist/`
- `public/` (already extracted)

### 4. Commit and Push
```bash
git add .
git status  # Review what's being committed

# Commit with descriptive message
git commit -m "Deploy: [description of changes]"

# Push to Hostinger
git push origin hostinger
```

### 5. Verify Deployment

Wait 1-2 minutes for Hostinger Git Tool to deploy, then:

**Visit Production URLs:**
- [ ] https://yourdomain.com/
- [ ] https://yourdomain.com/aboutus.html
- [ ] https://yourdomain.com/contactus.html
- [ ] https://yourdomain.com/teamworks/
- [ ] https://yourdomain.com/teamworks/bookConsultation.html

**Test All Functionality:**
- [ ] Navigation works
- [ ] Links work
- [ ] Styles load
- [ ] Form submits
- [ ] No broken links

## Post-Deployment

### 6. Smoke Tests

Run quick tests on production:
- [ ] Homepage loads
- [ ] Click through main navigation
- [ ] Submit test form (use real email)
- [ ] Verify form submission in Google Sheets
- [ ] Check mobile responsive design

### 7. Monitor

- [ ] Check for any error reports
- [ ] Monitor Google Sheets for test submissions
- [ ] Verify analytics tracking (if configured)

### 8. Rollback Plan

If issues found:
```bash
# On hostinger branch
git revert HEAD
git push origin hostinger
```

Or restore from previous commit:
```bash
git reset --hard HEAD~1
git push --force origin hostinger
```

## Common Issues

### Build Fails
**Symptom:** npm run build errors
**Fix:** 
- Check import paths
- Verify all components export correctly
- Check for syntax errors
- Review error message carefully

### Links Don't Work
**Symptom:** 404 errors when clicking links
**Fix:**
- Verify all links are relative (no leading /)
- Check file actually exists in /public
- Test locally first

### Form Won't Submit
**Symptom:** Form submission fails
**Fix:**
- Verify Google Apps Script URL in form.js
- Check field names match exactly
- Test with network tab open in DevTools
- Verify CORS settings in Google Apps Script

### Styles Missing
**Symptom:** Page loads but looks unstyled
**Fix:**
- Check css/style.css exists
- Verify CSS link path is correct
- Check Tailwind CDN loads
- Clear browser cache

### Images Don't Load
**Symptom:** Broken image placeholders
**Fix:**
- Check figma:asset imports (should work in Make)
- Verify image paths are correct
- Check assets were copied to /public

## Security Checklist

- [ ] No sensitive data in client-side code
- [ ] No API keys in JavaScript
- [ ] Form endpoints are secure
- [ ] HTTPS enabled on production
- [ ] No debugging code left in production

## Final Verification

Before marking deployment complete:
- [ ] All pages accessible
- [ ] All functionality works
- [ ] No console errors
- [ ] Form submission tested
- [ ] Cross-browser tested
- [ ] Mobile responsive
- [ ] SEO elements present
- [ ] Links all work
- [ ] Styles correct

## Sign-Off

**Deployed by:** _____________
**Date:** _____________
**Commit:** _____________
**Production URL:** _____________
**Issues:** _____________

---

## Next Deployment

Return to main branch:
```bash
git checkout main
```

Continue development, then repeat this checklist before next deployment.
