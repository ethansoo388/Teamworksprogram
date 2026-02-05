# 📝 Form Submission Setup Guide

## Issue Identified

Your consultation form on `bookConsultation.html` is not capturing leads in Google Sheets because:

1. **Missing Google Web App URL** - The form endpoint is still a placeholder
2. **Checkbox data loss** - Multiple checkbox selections were only capturing the last value (FIXED ✅)
3. **Missing radio button validation** - Required fields weren't validated (FIXED ✅)

---

## ✅ What We Fixed

### 1. **Checkbox Handling** (FIXED)
**Problem**: When users selected multiple "outcomes", only the last checkbox value was captured.

**Solution**: Updated form.js to properly collect all checkbox values:
```javascript
// Old (broken) code:
const data = Object.fromEntries(formData.entries()); // ❌ Loses multiple values

// New (fixed) code:
formData.forEach((value, key) => {
  if (data[key]) {
    if (Array.isArray(data[key])) {
      data[key].push(value);
    } else {
      data[key] = [data[key], value];
    }
  } else {
    data[key] = value;
  }
});
```

### 2. **Radio Button Validation** (FIXED)
Added validation to ensure users select required options before submission:
```javascript
const deliveryFormat = form.querySelector('input[name="deliveryFormat"]:checked');
const contactMethod = form.querySelector('input[name="contactMethod"]:checked');

if (!deliveryFormat) {
  alert('Please select a preferred delivery format');
  return;
}

if (!contactMethod) {
  alert('Please select a contact method');
  return;
}
```

### 3. **Better Error Messages** (FIXED)
Added check to notify if the Google Web App URL is still a placeholder:
```javascript
if (FORM_ENDPOINT === 'YOUR_GOOGLE_WEB_APP_URL_HERE') {
  throw new Error('Form endpoint not configured. Please update FORM_ENDPOINT in form.js');
}
```

---

## 🔧 What You Need To Do

### Step 1: Create Google Apps Script Web App

1. **Open your Google Sheet** where you want to capture leads

2. **Open Apps Script Editor**:
   - Click `Extensions` → `Apps Script`

3. **Paste this code** (replace any existing code):

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Create headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Full Name',
        'Work Email',
        'Company Name',
        'Team Size',
        'Delivery Format',
        'Outcomes',
        'Contact Method'
      ]);
    }
    
    // Prepare the row data
    var row = [
      new Date(),
      data.fullName || '',
      data.workEmail || '',
      data.companyName || '',
      data.teamSize || '',
      data.deliveryFormat || '',
      data.outcomes || '',
      data.contactMethod || ''
    ];
    
    // Append the row
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. **Deploy as Web App**:
   - Click `Deploy` → `New deployment`
   - Click the gear icon ⚙️ → Select `Web app`
   - Configure:
     - **Description**: "TeamWorks Lead Form"
     - **Execute as**: `Me`
     - **Who has access**: `Anyone` (important!)
   - Click `Deploy`

5. **Copy the Web App URL**:
   - After deployment, you'll see a URL like:
   ```
   https://script.google.com/macros/s/AKfycbz.../exec
   ```
   - **COPY THIS URL** - you'll need it in Step 2

6. **Authorize the script**:
   - Click `Authorize access`
   - Choose your Google account
   - Click `Advanced` → `Go to [Your Project Name]`
   - Click `Allow`

---

### Step 2: Update the Form Endpoint

After running `npm run build`, you need to update the Google Web App URL:

#### Option A: Update Before Build (Recommended)

Edit `/scripts/export-static.mjs` line 309:

```javascript
// Find this line:
const FORM_ENDPOINT = 'YOUR_GOOGLE_WEB_APP_URL_HERE';

// Replace with your actual URL:
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz.../exec';
```

Then run `npm run build` to generate updated files.

#### Option B: Update After Build

1. After running `npm run build`, open `/public/js/form.js`
2. Find line ~11:
   ```javascript
   const FORM_ENDPOINT = 'YOUR_GOOGLE_WEB_APP_URL_HERE';
   ```
3. Replace with your actual Google Web App URL:
   ```javascript
   const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz.../exec';
   ```

---

## 🚀 Deployment Steps

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Verify the form endpoint** is updated in `/public/js/form.js`

3. **Deploy to Hostinger**:
   - Copy contents of `/public` folder to your `hostinger` branch root
   - Push to Hostinger Git Tool

---

## 🧪 Testing

After deployment, test the form:

1. Fill out the consultation form
2. Submit the form
3. Check your Google Sheet - you should see a new row with:
   - Timestamp
   - Full Name
   - Work Email
   - Company Name
   - Team Size
   - Delivery Format
   - **All selected outcomes** (comma-separated)
   - Contact Method

---

## 📊 Expected Data Format in Google Sheets

| Timestamp | Full Name | Work Email | Company Name | Team Size | Delivery Format | Outcomes | Contact Method |
|-----------|-----------|------------|--------------|-----------|-----------------|----------|----------------|
| 2025-01-28 14:30 | John Tan | john@abc.com | ABC Solutions | 11-15 | in-person | Eliminate Project Delays, Improve Team Collaboration, Increase Team Productivity | email |

Note: The "Outcomes" column will contain all selected checkboxes as a comma-separated list.

---

## 🔍 Troubleshooting

### Form submission shows error
- Verify the Google Web App URL is correct in `form.js`
- Check that the Apps Script is deployed as "Anyone" can access
- Open browser console (F12) and check for error messages

### Google Sheet not updating
- Verify the Apps Script is authorized
- Check the Apps Script execution logs:
  - Open Apps Script editor
  - Click `Executions` in left sidebar
  - Look for error messages

### Multiple checkboxes not working
- Verify you're using the UPDATED `export-static.mjs` file
- Rebuild the site with `npm run build`
- Clear your browser cache

---

## 📋 Form Fields Captured

**Basic Info:**
- Full Name (text)
- Work Email (email)
- Company Name (text)
- Team Size (dropdown)

**Preferences:**
- Delivery Format (radio: in-person, virtual, hybrid)
- Outcomes (checkboxes - multiple selections):
  - Eliminate Project Delays
  - Improve Team Collaboration
  - Increase Team Productivity
  - Gain Total Visibility & Transparency
  - Stop Firefighting & Start Preventing
  - Build Accountability Culture
- Contact Method (radio: email, phone, video, whatsapp)

---

## ✅ Checklist

- [ ] Created Google Apps Script Web App
- [ ] Copied Web App URL
- [ ] Updated FORM_ENDPOINT in export-static.mjs (or form.js)
- [ ] Ran `npm run build`
- [ ] Verified form.js has correct URL
- [ ] Deployed to Hostinger
- [ ] Tested form submission
- [ ] Verified data appears in Google Sheet

---

## Need Help?

If you encounter issues:
1. Check browser console for errors (F12 → Console tab)
2. Check Apps Script execution logs
3. Verify all deployment steps were followed
4. Test the Google Web App URL directly in browser

The form will now properly capture ALL data including multiple checkbox selections!
