# 📥 Files to Download and Deploy

## ✅ Files You Need

### Core HTML Files (Required)
1. **`/public/index.html`** ← UPDATED (changed Course 01 button)
2. **`/public/creating-super-teams.html`** ← NEW (course detail page)
3. **`/public/bookConsultation.html`** ← Existing (no changes)

### CSS Files (Required)
4. **`/public/css/style.css`** ← Existing (no changes)

### JavaScript Files (Required)
5. **`/public/js/main.js`** ← Existing (no changes)
6. **`/public/js/form.js`** ← Existing (no changes)

## 📋 Quick Copy Instructions

### Option A: Copy via Figma Make Interface

1. Open each file in Figma Make
2. Select all content (Ctrl+A or Cmd+A)
3. Copy (Ctrl+C or Cmd+C)
4. Paste into Hostinger File Manager editor

### Option B: Use Hostinger File Manager Directly

For each file:

1. **Go to Hostinger** → hPanel → Files → File Manager
2. **Navigate to** `public_html` folder
3. **For existing files** (index.html):
   - Click file → Edit
   - Select all → Delete
   - Paste new content from Figma Make
   - Save
4. **For new files** (creating-super-teams.html):
   - Click "New File"
   - Name it exactly: `creating-super-teams.html`
   - Click Edit
   - Paste content from Figma Make
   - Save

## 🎯 Priority Files (Deploy These First)

If you want to test in stages:

**Stage 1: Minimum Viable Deployment**
- ✅ `/public/creating-super-teams.html` (NEW)
- ✅ `/public/index.html` (UPDATED)

**Stage 2: Verify Existing Files**
- ✅ `/public/css/style.css`
- ✅ `/public/js/main.js`

**Stage 3: Full Test**
- ✅ Test all navigation
- ✅ Test mobile menu
- ✅ Test CTA buttons

## 📂 Expected File Structure on Hostinger

```
public_html/
│
├── index.html                    ← UPDATED
├── creating-super-teams.html     ← NEW
├── bookConsultation.html         
│
├── css/
│   └── style.css                 
│
└── js/
    ├── main.js                   
    └── form.js                   
```

## 🔗 URLs After Deployment

- `https://teamworks.ciagile.com/` → Main page (index.html)
- `https://teamworks.ciagile.com/creating-super-teams` → NEW course page
- `https://teamworks.ciagile.com/bookConsultation` → Booking page

## ⚡ Quick Test

After uploading:

1. Visit: `https://teamworks.ciagile.com`
2. Scroll to "Course 01: Creating Super Teams"
3. Button should say "Learn more" (not "Book this course")
4. Click button
5. Should navigate to new course detail page
6. Click "Book this course" on detail page
7. Should go to booking form

## 💡 Pro Tips

- **Clear cache** after uploading: Ctrl+Shift+R
- **Check permissions**: Files = 644, Folders = 755
- **Backup first**: Download current index.html before overwriting
- **Test on mobile**: Use browser DevTools or real device

## 🚨 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Button still says "Book this course" | Clear browser cache |
| 404 error on /creating-super-teams | Check filename spelling exactly |
| Page looks broken | Verify css/style.css is uploaded |
| Icons don't show | Internet connection required (CDN) |
| Mobile menu doesn't work | Verify js/main.js is uploaded |

---

**Need the actual file contents?** 

All files are in the `/public` folder of your Figma Make project. You can read them using the file viewer or copy them directly.
