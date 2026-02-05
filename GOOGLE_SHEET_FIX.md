# 🔧 Google Sheet Column Alignment Fix

## 🚨 CRITICAL ISSUE FOUND

Your Google Sheet has an **extra empty column** causing data misalignment!

### Current Sheet Structure (FROM YOUR SCREENSHOT):
```
Column 1: Timestamp
Column 2: Full Name
Column 3: Work Email
Column 4: Company Name
Column 5: Team Size
Column 6: Delivery Format
Column 7: Outcomes
Column 8: (EMPTY COLUMN) ← PROBLEM!
Column 9: Contact Method
Column 10+: Unknown
```

### Expected Structure (FROM APPS SCRIPT):
```
Column 1: Timestamp
Column 2: Full Name
Column 3: Work Email
Column 4: Company Name
Column 5: Team Size
Column 6: Delivery Format
Column 7: Outcomes
Column 8: Contact Method (NO GAP!)
Column 9: Page URL
Column 10: Referrer
```

---

## 📊 What's Happening Now

When your form sends data, the Apps Script tries to insert:
```javascript
[timestamp, fullName, email, company, teamSize, deliveryFormat, outcomes, contactMethod, pageUrl, referrer]
```

But your sheet has an extra column, so:
- **Contact Method** data → Goes into Column 9 (but should be Column 8)
- **Page URL** data → Goes into Column 10 (but should be Column 9)
- **Referrer** data → Goes into Column 11 (but should be Column 10)
- **Column 8** → Always empty!

This causes **contact method preferences to be in the wrong place**.

---

## ✅ FIX #1: Delete Empty Column (Quick Fix)

### Option A: Manual Column Delete

1. **Open your Google Sheet**
2. **Find the empty column** (Column H, between "Outcomes" and "Contact Method")
3. **Right-click on the column header** (the letter "H")
4. **Select "Delete column"**
5. **Verify the headers are now**:
   ```
   A: Timestamp
   B: Full Name
   C: Work Email
   D: Company Name
   E: Team Size
   F: Delivery Format
   G: Outcomes
   H: Contact Method (should now be directly after Outcomes)
   I: Page URL (if exists)
   J: Referrer (if exists)
   ```

### Option B: Clean Slate (Recommended)

1. **Open your Google Sheet**
2. **Delete ALL rows** (including header row)
   - Select all rows → Right-click → Delete rows
3. **Leave the sheet completely empty**
4. **Next form submission will auto-create correct headers**
   - The Apps Script's `ensureHeaders_()` function will run
   - It will create the exact 10 columns needed
   - No gaps, perfect alignment

---

## ✅ FIX #2: Updated Form to Send Page URL & Referrer

I've updated the form.js to now capture:

```javascript
// NEW: Automatically captures
data.pageUrl = window.location.href;  // e.g., "https://yourdomain.com/bookConsultation.html"
data.referrer = document.referrer || 'Direct';  // Where user came from
```

**Benefits:**
- Track which page generated the lead
- Track marketing sources (referrer)
- Better analytics on lead sources
- Helps identify which pages convert best

---

## 📋 Complete Column Mapping (After Fix)

| Column | Header | Form Field | Example Value |
|--------|--------|------------|---------------|
| A | Timestamp | Auto-generated | 2025-01-28T15:30:00.000Z |
| B | Full Name | `fullName` | Ethan Test 6 |
| C | Work Email | `workEmail` | ethanso@hotmail.com |
| D | Company Name | `companyName` | ABC Test 6 |
| E | Team Size | `teamSize` | 51+ |
| F | Delivery Format | `deliveryFormat` | In-Person Workshop |
| G | Outcomes | `outcomes` (joined) | Improve Team Collaboration, Increase Team Productivity |
| H | Contact Method | `contactMethod` | Email (I prefer written communication) |
| I | Page URL | `pageUrl` (NEW!) | https://yourdomain.com/bookConsultation.html |
| J | Referrer | `referrer` (NEW!) | https://google.com or "Direct" |

---

## 🧪 Testing After Fix

### Step 1: Rebuild Your Site
```bash
npm run build
```

### Step 2: Deploy to Hostinger
Follow your normal deployment workflow (copy `/public` contents to `hostinger` branch)

### Step 3: Submit Test Form

Fill out the consultation form with test data:
- **Full Name**: Test User
- **Email**: test@example.com
- **Company**: Test Company
- **Team Size**: 11-15
- **Delivery Format**: Select "In-Person"
- **Outcomes**: Select 2-3 options
- **Contact Method**: Select "Email"

### Step 4: Verify Google Sheet

Check your "Leads" sheet:

**Row should contain:**
```
Col A: Current timestamp
Col B: Test User
Col C: test@example.com
Col D: Test Company
Col E: 11-15
Col F: in-person
Col G: Eliminate Project Delays, Improve Team Collaboration (comma-separated)
Col H: email
Col I: https://yourdomain.com/bookConsultation.html
Col J: Direct (or referrer URL if you came from another page)
```

**Verify:**
- ✅ No empty column between Outcomes and Contact Method
- ✅ Contact Method value is in Column H
- ✅ Page URL is captured in Column I
- ✅ Referrer is captured in Column J (or shows "Direct")
- ✅ All data aligns correctly with headers

---

## 🔍 Troubleshooting

### Contact Method still in wrong column

**Check:**
1. Did you delete the empty column?
2. Did you rebuild with `npm run build`?
3. Did you deploy the new files to Hostinger?
4. Clear browser cache (Ctrl+Shift+R)

### Page URL and Referrer still empty

**Check:**
1. Did you run `npm run build` after updating export-static.mjs?
2. Check `/public/js/form.js` contains these lines:
   ```javascript
   data.pageUrl = window.location.href;
   data.referrer = document.referrer || 'Direct';
   ```
3. Redeploy if needed

### Headers recreated with 10 columns but data still misaligned

**This means:**
- Old data has wrong structure
- New submissions will be correct
- You may need to manually fix old rows or delete them

**Fix:**
1. Keep new correct headers (10 columns)
2. Delete all data rows (keep header)
3. New submissions will align perfectly

---

## 📧 Email & Teams Notification

Your Apps Script also sends:
- **Email to**: services@ciagile.com
- **Teams notification**: Via webhook

**Email will contain:**
```
New TeamWorks consultation lead received:

Name: Test User
Email: test@example.com
Company: Test Company
Team size: 11-15
Delivery format: in-person
Outcomes: Eliminate Project Delays, Improve Team Collaboration
Preferred contact: email

Page: https://yourdomain.com/bookConsultation.html
Referrer: Direct

Sheet: [Link to your Google Sheet]
```

**Teams notification will show:**
```
TeamWorks — New Lead
• Name: Test User
• Email: test@example.com
• Company: Test Company
• Team size: 11-15
• Delivery: in-person
• Contact: email
• Outcomes: Eliminate Project Delays, Improve Team Collaboration
• Sheet: [Link]
```

---

## ✅ Final Checklist

Before deploying:

- [ ] Deleted empty column in Google Sheet (Column H)
- [ ] Verified headers match script exactly (10 columns, no gaps)
- [ ] Or deleted all rows and let script recreate headers
- [ ] Ran `npm run build` to regenerate form.js with pageUrl/referrer
- [ ] Verified `/public/js/form.js` contains page tracking code
- [ ] Deployed updated files to Hostinger
- [ ] Submitted test form
- [ ] Verified all data appears in correct columns
- [ ] Verified Contact Method in Column H (not Column I)
- [ ] Verified Page URL captured in Column I
- [ ] Verified Referrer captured in Column J
- [ ] Received email notification at services@ciagile.com
- [ ] Received Teams notification (if webhook configured)

---

## 🎯 Summary

**Problems Found:**
1. ❌ Extra empty column causing data misalignment
2. ❌ Form not capturing page URL or referrer

**Fixes Applied:**
1. ✅ Instructions to delete empty column or reset sheet
2. ✅ Form.js updated to capture page URL and referrer
3. ✅ All 10 columns now properly mapped

**Result:**
- Contact Method will now appear in the correct column
- You'll track which pages generate leads
- You'll see where leads come from (referrer)
- Perfect data alignment with your Apps Script

**Next Step**: Run `npm run build` and deploy!
