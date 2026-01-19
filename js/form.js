// Form submission handler for Google Web App

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('consultation-form');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const successMessage = document.getElementById('success-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Disable submit button
            submitBtn.disabled = true;
            submitText.textContent = 'Submitting...';
            submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

            // Collect form data
            const formData = new FormData(form);
            
            // Collect all selected outcomes
            const outcomes = [];
            const outcomeCheckboxes = form.querySelectorAll('input[name="outcomes"]:checked');
            outcomeCheckboxes.forEach(checkbox => {
                outcomes.push(checkbox.value);
            });

            // Create data object
            const data = {
                fullName: formData.get('fullName'),
                workEmail: formData.get('workEmail'),
                companyName: formData.get('companyName'),
                teamSize: formData.get('teamSize'),
                deliveryFormat: formData.get('deliveryFormat'),
                outcomes: outcomes.join(', '),
                contactMethod: formData.get('contactMethod'),
                timestamp: new Date().toISOString()
            };

            // TODO: Replace with your actual Google Web App URL
            const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

            // Submit to Google Sheets via Web App
            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                // Show success message
                form.classList.add('hidden');
                successMessage.classList.remove('hidden');
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Optional: Redirect after 3 seconds
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 5000);
            })
            .catch(error => {
                console.error('Error:', error);
                
                // Show error message
                alert('Sorry, something went wrong. Please try again or contact us directly.');
                
                // Re-enable submit button
                submitBtn.disabled = false;
                submitText.textContent = 'Get My Custom Plan';
                submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
            });
        });
    }
});

// Google Apps Script Code (Deploy as Web App)
// Copy this to your Google Apps Script and deploy as Web App:
/*

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add headers if first row is empty
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
    
    // Append data
    sheet.appendRow([
      data.timestamp,
      data.fullName,
      data.workEmail,
      data.companyName,
      data.teamSize,
      data.deliveryFormat,
      data.outcomes,
      data.contactMethod
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

*/
