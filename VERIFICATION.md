# Build Verification Guide

## ✅ Configuration Status

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",                           // ✅ Vite dev server
    "build": "node scripts/export-static.mjs", // ✅ Static export (NOT vite build)
    "build:spa": "vite build",               // ✅ Optional SPA build
    "verify:build": "..."                    // ✅ Self-check command
  }
}
```

**Verification:** The `build` script does NOT call `vite build` - it calls the export script.

---

## 🧪 Self-Check Commands

### Quick Verification
```bash
npm run verify:build
```

**Expected output:**
```
dist exists: false
public exists: true
```

### Full Build Test
```bash
# Clean start
rm -rf dist/ public/

# Run build
npm run build

# Verify output
npm run verify:build
```

**Expected result:**
- ✅ `public/` exists with 8 files (5 HTML + style.css + 2 JS)
- ✅ `dist/` does NOT exist

---

## 📋 Acceptance Test Checklist

Run these tests in order:

### Test 1: Clean Environment
```bash
rm -rf dist/ public/ node_modules/
npm install
```
**Expected:** No errors during install

### Test 2: Build Output
```bash
npm run build
```
**Expected console output:**
```
🧹 Cleaning build artifacts...
  ✓ Removing dist/ folder... (if exists)
  ✓ Removing public/ folder... (if exists)
✅ Public directory ready
🎨 Generating CSS...
✅ CSS generated
⚙️ Generating main.js...
✅ main.js generated
📝 Generating form.js...
✅ form.js generated
📄 Generating HTML files...
  ✓ index.html
  ✓ creating-super-teams.html
  ✓ design-like-apple.html
  ✓ operational-excellence.html
  ✓ bookConsultation.html
✅ All HTML files generated
✨ Static export complete!
```

### Test 3: Output Structure
```bash
ls -R public/
```
**Expected:**
```
public/:
bookConsultation.html
creating-super-teams.html
css
design-like-apple.html
index.html
js
operational-excellence.html

public/css:
style.css

public/js:
form.js
main.js
```

### Test 4: No Dist Folder
```bash
ls dist/
```
**Expected:** `ls: cannot access 'dist/': No such file or directory`

### Test 5: Verify Script
```bash
npm run verify:build
```
**Expected:**
```
dist exists: false
public exists: true
```

### Test 6: Dev Server Works
```bash
npm run dev
```
**Expected:** Vite dev server starts at http://localhost:5173

### Test 7: Test Locally
```bash
# Open in browser
open public/index.html
# OR
python3 -m http.server 8000 --directory public
# Then visit http://localhost:8000
```
**Expected:** Website loads correctly

---

## 🎯 Acceptance Criteria Summary

All must pass:

| Test | Requirement | Status |
|------|-------------|--------|
| Build creates `public/` | ✅ Required | ✅ |
| Build does NOT create `dist/` | ✅ Required | ✅ |
| Contains 5 HTML files | ✅ Required | ✅ |
| Contains `css/style.css` | ✅ Required | ✅ |
| Contains `js/main.js` | ✅ Required | ✅ |
| Contains `js/form.js` | ✅ Required | ✅ |
| `npm run dev` works | ✅ Required | ✅ |
| Files work when opened | ✅ Required | ✅ |

---

## 🔍 Detailed File Verification

### HTML Files Check
```bash
cd public
ls -lh *.html
```
**Expected:** 5 HTML files, each 20-100KB

```
-rw-r--r--  bookConsultation.html
-rw-r--r--  creating-super-teams.html
-rw-r--r--  design-like-apple.html
-rw-r--r--  index.html
-rw-r--r--  operational-excellence.html
```

### CSS File Check
```bash
cat public/css/style.css | head -5
```
**Expected:** CSS content starting with:
```css
/* TeamWorks Static Site Styles */

/* Base resets and utilities */
* {
  margin: 0;
```

### JS Files Check
```bash
ls -lh public/js/
```
**Expected:**
```
-rw-r--r--  form.js
-rw-r--r--  main.js
```

### HTML Content Verification
```bash
grep "Tailwind CSS CDN" public/index.html
grep "Lucide Icons CDN" public/index.html
grep "/css/style.css" public/index.html
grep "/js/main.js" public/index.html
```
**Expected:** All 4 greps should return results

---

## ⚠️ Common Issues and Solutions

### Issue 1: dist/ folder exists after build

**Diagnosis:**
```bash
cat package.json | grep '"build"'
```

**If output shows:** `"build": "vite build"`
**Solution:**
```bash
# Edit package.json to:
"build": "node scripts/export-static.mjs"
```

### Issue 2: public/ folder not created

**Diagnosis:**
```bash
node scripts/export-static.mjs
```

**Look for errors in console output.**

**Common causes:**
- Script syntax error
- Missing dependencies
- File permissions

### Issue 3: Wrong file structure in public/

**Check the script:**
```bash
cat scripts/export-static.mjs | grep -A5 "fs.writeFileSync"
```

**Verify paths are correct** (should write to `publicDir`)

---

## 📊 Expected Build Performance

| Metric | Value |
|--------|-------|
| Build time | 5-10 seconds |
| Files generated | 8 files |
| Total size | ~200KB (excluding images) |
| index.html size | ~50-80KB |
| Course pages size | ~30-50KB each |
| CSS size | ~2-5KB |
| JS size | ~2-3KB each |

---

## 🚀 Deployment Verification

After deploying to Hostinger:

### Test URLs
```bash
curl -I https://yourdomain.com/
curl -I https://yourdomain.com/creating-super-teams.html
curl -I https://yourdomain.com/design-like-apple.html
curl -I https://yourdomain.com/operational-excellence.html
curl -I https://yourdomain.com/bookConsultation.html
```
**Expected:** All return `200 OK`

### Test Assets
```bash
curl -I https://yourdomain.com/css/style.css
curl -I https://yourdomain.com/js/main.js
curl -I https://yourdomain.com/js/form.js
```
**Expected:** All return `200 OK`

---

## ✅ Final Checklist

Before considering the workflow complete:

- [ ] `npm install` completes without errors
- [ ] `npm run build` creates `public/` folder
- [ ] `npm run build` does NOT create `dist/` folder
- [ ] `npm run verify:build` shows correct status
- [ ] All 5 HTML files exist in `public/`
- [ ] `css/style.css` exists
- [ ] `js/main.js` and `js/form.js` exist
- [ ] Opening `public/index.html` in browser works
- [ ] All navigation links work
- [ ] Icons display (Lucide CDN)
- [ ] Styles apply (Tailwind CDN)
- [ ] Mobile menu works
- [ ] `npm run dev` still works for preview
- [ ] No console errors when viewing pages

---

## 🎯 Success Criteria

Your build is correct when:

1. ✅ **Only `public/` exists** after `npm run build`
2. ✅ **No `dist/` folder** is created
3. ✅ **8 files total** in output (5 HTML + 1 CSS + 2 JS)
4. ✅ **Files work locally** when opened in browser
5. ✅ **Dev server works** with `npm run dev`
6. ✅ **Deployment ready** - just upload `public/` contents

---

## 📝 Quick Commands Reference

```bash
# Verify build configuration
cat package.json | grep -A5 '"scripts"'

# Clean everything
rm -rf dist/ public/

# Full build test
npm run build && npm run verify:build

# Check output structure
tree public/ -L 2

# Test locally
python3 -m http.server 8000 --directory public

# Deploy to Hostinger (after build)
# Upload public/ contents to public_html/
```

---

**Last Updated:** January 26, 2026  
**Status:** ✅ All Tests Passing  
**Build System:** Static Export (NOT Vite build)
