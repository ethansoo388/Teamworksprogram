# 📂 Where to Find Files in Figma Make

## 🎯 Quick Reference: File Locations

All your files are in the `/public` directory of your Figma Make project.

---

## 📁 Directory Structure Visual

```
Your Figma Make Project
│
└─── /public/                          👈 All your website files are here!
     │
     ├── index.html                    ⭐ UPDATED - Copy this!
     ├── creating-super-teams.html     ⭐ NEW - Copy this!
     ├── bookConsultation.html         ✅ Existing - Already on server
     │
     ├── /css/
     │   └── style.css                 ✅ Existing - Already on server
     │
     └── /js/
         ├── main.js                   ✅ Existing - Already on server
         └── form.js                   ✅ Existing - Already on server
```

---

## 🔍 How to Access Files in Figma Make

### Method 1: File Explorer (Left Sidebar)

Most Figma Make interfaces have a file explorer on the left side:

```
📁 Project Files (Left Sidebar)
  ├── 📁 public
  │   ├── 📄 index.html                 👈 Click to open
  │   ├── 📄 creating-super-teams.html  👈 Click to open
  │   ├── 📄 bookConsultation.html
  │   ├── 📁 css
  │   │   └── 📄 style.css
  │   └── 📁 js
  │       ├── 📄 main.js
  │       └── 📄 form.js
```

**Steps:**
1. Look for file tree/explorer on left
2. Expand `/public` folder
3. Click on file name
4. Content shows in main editor
5. Select all (Ctrl+A) and copy (Ctrl+C)

### Method 2: Using File Menu

If you don't see a file explorer:

1. Look for "File" or "View" menu
2. Find "File Browser" or "Explorer" option
3. Navigate to `/public` folder
4. Click file to open

### Method 3: Using Search/Command Palette

Many editors have a quick search:

1. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
2. Type filename: `index.html`
3. Press Enter to open
4. Repeat for each file

---

## 📋 Files You Need to Copy (Priority Order)

### 🚨 MUST COPY (New/Updated Files)

#### File 1: creating-super-teams.html (NEW)
```
Location: /public/creating-super-teams.html
Status: NEW FILE - Must copy to Hostinger
Size: ~45KB
Purpose: Course 01 detail page
```

**How to Copy:**
1. Open file in Figma Make
2. Select All: Ctrl+A (Windows) or Cmd+A (Mac)
3. Copy: Ctrl+C (Windows) or Cmd+C (Mac)
4. Go to Hostinger File Manager
5. Create new file: `creating-super-teams.html`
6. Paste: Ctrl+V (Windows) or Cmd+V (Mac)
7. Save

#### File 2: index.html (UPDATED)
```
Location: /public/index.html
Status: UPDATED - Must replace on Hostinger
Size: ~30KB
Purpose: Main landing page
Changed: Course 01 button text and link
```

**How to Copy:**
1. Open file in Figma Make
2. Select All: Ctrl+A (Windows) or Cmd+A (Mac)
3. Copy: Ctrl+C (Windows) or Cmd+C (Mac)
4. Go to Hostinger File Manager
5. Open existing `index.html`
6. Delete all content
7. Paste: Ctrl+V (Windows) or Cmd+V (Mac)
8. Save

### ✅ VERIFY EXISTS (Should Already Be There)

These files should already be on your Hostinger server. Just verify they exist:

#### File 3: css/style.css
```
Location: /public/css/style.css
Status: EXISTING - Should already be on server
Action: Verify it exists (don't need to copy unless missing)
```

#### File 4: js/main.js
```
Location: /public/js/main.js
Status: EXISTING - Should already be on server
Action: Verify it exists (don't need to copy unless missing)
```

#### File 5: js/form.js
```
Location: /public/js/form.js
Status: EXISTING - Should already be on server
Action: Verify it exists (don't need to copy unless missing)
```

#### File 6: bookConsultation.html
```
Location: /public/bookConsultation.html
Status: EXISTING - Should already be on server
Action: Verify it exists (don't need to copy unless missing)
```

---

## 💾 Step-by-Step: Copying Each File

### For creating-super-teams.html (NEW FILE)

**In Figma Make:**
```
1. Click on file tree/explorer (left sidebar)
2. Navigate: public → creating-super-teams.html
3. Click the filename
4. File opens in editor
5. Keyboard: Ctrl+A (select all)
6. Keyboard: Ctrl+C (copy)
```

**In Hostinger:**
```
1. Login to hPanel
2. Go to: Files → File Manager
3. Navigate to: public_html
4. Click: "New File" button
5. Name: creating-super-teams.html
6. Click the new file to edit
7. Keyboard: Ctrl+A (select all - if any content)
8. Keyboard: Ctrl+V (paste)
9. Click: "Save" button
```

### For index.html (UPDATE EXISTING FILE)

**In Figma Make:**
```
1. Click on file tree/explorer (left sidebar)
2. Navigate: public → index.html
3. Click the filename
4. File opens in editor
5. Keyboard: Ctrl+A (select all)
6. Keyboard: Ctrl+C (copy)
```

**In Hostinger:**
```
1. Login to hPanel
2. Go to: Files → File Manager
3. Navigate to: public_html
4. Find: index.html
5. Click the filename
6. Click: "Edit" button
7. Keyboard: Ctrl+A (select all existing content)
8. Keyboard: Delete (remove old content)
9. Keyboard: Ctrl+V (paste new content)
10. Click: "Save" button
```

---

## 🖼️ Visual Guide: Figma Make Interface

Most Figma Make interfaces look something like this:

```
┌─────────────────────────────────────────────────────────┐
│  [File] [Edit] [View] [Tools]        [Preview] [Deploy] │
├───────────┬─────────────────────────────────────────────┤
│           │                                             │
│ 📁 Files  │  Editor Area                                │
│  ├─ src   │  (Your code shows here)                     │
│  ├─ public│                                             │
│  │  ├─ i* │  <!DOCTYPE html>                            │
│  │  ├─ c* │  <html>                                     │
│  │  ├─ b* │    <head>                                   │
│  │  ├─css │      ...                                    │
│  │  └─js  │    </head>                                  │
│  └─ docs  │    <body>                                   │
│           │      ...                                    │
│           │                                             │
└───────────┴─────────────────────────────────────────────┘

* i = index.html
* c = creating-super-teams.html
* b = bookConsultation.html
```

**Where to look:**
- **Left Panel:** File tree/explorer
- **Middle Panel:** Code editor
- **Right Panel:** Preview (sometimes)

---

## 🎯 Quick Checklist

Use this to track your progress:

```
Copying Files from Figma Make:
□ Found file explorer in Figma Make
□ Located /public folder
□ Opened creating-super-teams.html
□ Copied creating-super-teams.html content
□ Opened index.html
□ Copied index.html content

Uploading to Hostinger:
□ Logged into Hostinger hPanel
□ Opened File Manager
□ Navigated to public_html folder
□ Created creating-super-teams.html
□ Pasted content into creating-super-teams.html
□ Saved creating-super-teams.html
□ Opened existing index.html
□ Replaced content in index.html
□ Saved index.html

Testing:
□ Visited main page
□ Found Course 01 section
□ Verified button says "Learn more"
□ Clicked button
□ Verified new page loads
```

---

## 🆘 Can't Find Files?

### If you don't see a file explorer:

**Try these:**
1. Press `Ctrl+B` or `Cmd+B` (toggles sidebar)
2. Check menu: View → File Explorer
3. Check menu: File → Open File
4. Look for folder/file icon in toolbar
5. Try keyboard shortcut: `Ctrl+P` or `Cmd+P`

### If Figma Make looks different:

**Alternative method:**
1. Look for any "Files" or "Explorer" button
2. Check top menu bar for file navigation
3. Look for a search function
4. Try right-clicking in the workspace
5. Check for a file browser panel

### Still stuck?

**Manual method:**
1. Copy all documentation files first
2. They contain full instructions
3. Contact Figma Make support for file access
4. Or export project if available

---

## 📞 Emergency Instructions

If you absolutely cannot find the files in Figma Make:

1. **Check for Export Function**
   - Look for "Export" or "Download" in menu
   - Export entire project as ZIP
   - Extract and find files

2. **Contact Support**
   - Figma Make should have a help/support option
   - Ask how to access project files
   - Mention you need to download for deployment

3. **Use Documentation**
   - All necessary information is in the docs
   - You can manually recreate files if needed
   - But copying is much faster!

---

## ✅ Success Indicators

You've successfully found and copied files when:

1. ✅ You can see `/public` folder
2. ✅ You can open `creating-super-teams.html`
3. ✅ You can see HTML code in editor
4. ✅ You can select and copy the code
5. ✅ You can paste into Hostinger

---

## 🎉 You're All Set!

Once you've copied the files:

1. Test on your website
2. Verify everything works
3. Clear browser cache if needed
4. Enjoy your new course page!

---

**Need more help?**
- Read: `QUICK_START.txt` for deployment steps
- Read: `DEPLOYMENT_GUIDE.md` for detailed instructions
- Read: `README.md` for project overview

**Last Updated:** January 21, 2026
**Status:** Ready to Copy & Deploy
