# Build & Deployment Guide

## 🎯 Quick Commands

```bash
# Development (preview in Figma Make)
npm run dev

# Production build (for Hostinger deployment)
npm run build

# Optional: Vite SPA build (if needed)
npm run build:spa
```

---

## 📦 What `npm run build` Does

When you run `npm run build`, the script (`scripts/export-static.mjs`) will:

1. ✅ **Clean up old builds**
   - Deletes `dist/` folder (if exists from vite build)
   - Deletes `public/` folder (if exists)

2. ✅ **Create fresh structure**
   - Creates `public/` folder
   - Creates `public/css/` folder
   - Creates `public/js/` folder

3. ✅ **Generate HTML files**
   - `index.html` - Homepage
   - `creating-super-teams.html` - Course 01
   - `design-like-apple.html` - Course 02
   - `operational-excellence.html` - Course 03
   - `bookConsultation.html` - Consultation form

4. ✅ **Generate CSS**
   - `css/style.css` - Custom styles

5. ✅ **Generate JavaScript**
   - `js/main.js` - Site functionality
   - `js/form.js` - Form handling

---

## 📁 Expected Output

After `npm run build`, you should have:

```
public/
├── index.html
├── creating-super-teams.html
├── design-like-apple.html
├── operational-excellence.html
├── bookConsultation.html
├── css/
│   └── style.css
└── js/
    ├── main.js
    └── form.js
```

**Important:** There should be **NO** `dist/` folder created.

---

## 🚀 Deployment to Hostinger

### Method 1: Manual Upload via File Manager

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Login to Hostinger:**
   - Go to Hostinger control panel
   - Open File Manager
   - Navigate to `public_html/`

3. **Upload files:**
   - Upload ALL files from `public/` folder
   - Maintain the folder structure:
     ```
     public_html/
     ├── index.html
     ├── creating-super-teams.html
     ├── design-like-apple.html
     ├── operational-excellence.html
     ├── bookConsultation.html
     ├── css/
     │   └── style.css
     └── js/
         ├── main.js
         └── form.js
     ```

4. **Set permissions:**
   - Files: `644`
   - Folders: `755`

5. **Test:**
   - Visit `https://yourdomain.com/`
   - Test all pages
   - Verify navigation works

### Method 2: Git Subtree Push

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Update site content"
   ```

3. **Push to hostinger branch:**
   ```bash
   git subtree push --prefix public origin hostinger
   ```

4. **Pull on server:**
   - SSH into Hostinger
   - Navigate to `public_html/`
   - Pull from hostinger branch

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Homepage loads: `https://yourdomain.com/`
- [ ] Course 01 loads: `https://yourdomain.com/creating-super-teams.html`
- [ ] Course 02 loads: `https://yourdomain.com/design-like-apple.html`
- [ ] Course 03 loads: `https://yourdomain.com/operational-excellence.html`
- [ ] Consultation form loads: `https://yourdomain.com/bookConsultation.html`
- [ ] All navigation links work
- [ ] Mobile menu toggles correctly
- [ ] Form submits (after configuring endpoint)
- [ ] Icons display (Lucide CDN loading)
- [ ] Styles applied (Tailwind CDN loading)
- [ ] No console errors (F12 to check)

---

## 🔧 Configuration

### Form Endpoint

To configure the Google Web App endpoint for form submissions:

1. **After building**, open `public/js/form.js`
2. Find this line:
   ```javascript
   const FORM_ENDPOINT = 'YOUR_GOOGLE_WEB_APP_URL_HERE';
   ```
3. Replace with your actual Google Web App URL
4. Re-upload `form.js` to Hostinger

---

## 🐛 Troubleshooting

### Build fails with "Module not found"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### `dist/` folder still appears

**Problem:** You might have run `npm run build:spa` instead.

**Solution:**
- Delete `dist/` folder manually
- Run `npm run build` (not `build:spa`)
- The export script will clean it up automatically

### Files not generated

**Check:**
1. Script executed without errors?
2. `public/` folder created?
3. Check console output for error messages

**Solution:**
```bash
# Run with verbose output
node scripts/export-static.mjs
```

### Styles broken on deployment

**Check:**
1. `css/style.css` uploaded?
2. Internet connection working? (Tailwind CDN needs to load)
3. Browser cache cleared? (Ctrl+Shift+R)

---

## 📊 File Sizes

Typical sizes after build:

- `index.html`: ~50-80KB
- `creating-super-teams.html`: ~30-50KB
- `design-like-apple.html`: ~30-50KB
- `operational-excellence.html`: ~30-50KB
- `bookConsultation.html`: ~30-40KB
- `css/style.css`: ~2-5KB
- `js/main.js`: ~2-3KB
- `js/form.js`: ~2KB

**Total:** ~150-250KB (excluding images)

---

## 🔄 Update Workflow

When you need to update the site:

1. **Edit React components** in `/src/app/components/`
2. **Preview changes** with `npm run dev`
3. **Build for production** with `npm run build`
4. **Deploy** `public/` contents to Hostinger

**Never edit files in `public/` directly** - they will be overwritten on next build!

---

## 💡 Tips

### Fast iteration during development:
- Use `npm run dev` for instant preview
- Only run `npm run build` when ready to deploy

### Testing before deployment:
1. Run `npm run build`
2. Open `public/index.html` in your browser
3. Test all functionality locally
4. Then upload to Hostinger

### Keeping builds clean:
- The export script automatically cleans up old builds
- Both `public/` and `dist/` are in `.gitignore`
- Don't commit build output to git

---

## 📞 Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server (Vite) |
| `npm run build` | Static export for Hostinger |
| `npm run build:spa` | Vite SPA build (creates dist/) |

| Folder | Purpose | Commit to Git? |
|--------|---------|----------------|
| `/src` | Source code | ✅ Yes |
| `/scripts` | Build scripts | ✅ Yes |
| `/public` | Build output | ❌ No |
| `/dist` | Vite build output | ❌ No |

---

**Last Updated:** January 26, 2026  
**Status:** ✅ Ready to use  
**Build time:** ~5-10 seconds  
**Deployment time:** ~5-10 minutes
