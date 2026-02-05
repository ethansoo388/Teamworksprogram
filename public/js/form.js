// Form handling for consultation page

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('consultation-form');
  
  if (form) {
    // ⚠️ IMPORTANT: REPLACE THIS URL with your actual Google Apps Script Web App URL
    // Example: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
    const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyMunBs-hCW0FZ4h_sjoX3zm-QkUeK9akyQIRanfBlxMzW_NOjKldmlfnTAhx-ne4DP7Q/exec';
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Validate required radio buttons
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
      
      // Get form data - properly handle multiple checkboxes
      const formData = new FormData(form);
      
      // Build data object to match exact field names
      const fullName = formData.get('fullName') || '';
      const workEmail = formData.get('workEmail') || '';
      const companyName = formData.get('companyName') || '';
      const teamSize = formData.get('teamSize') || '';
      const deliveryFormatValue = formData.get('deliveryFormat') || '';
      const contactMethodValue = formData.get('contactMethod') || '';
      
      // Handle multiple outcomes checkboxes - collect all checked values
      const outcomes = formData.getAll('outcomes').join(', ') || '';
      
      // Add tracking fields
      const pageUrl = window.location.href;
      const referrer = document.referrer || 'Direct';
      const timestamp = new Date().toISOString();
      
      // Get elements
      const submitButton = form.querySelector('button[type="submit"]');
      const successMessage = document.getElementById('success-message');
      const errorMessage = document.getElementById('error-message');
      
      // Store original button text
      const originalButtonText = submitButton.innerHTML;
      
      try {
        // Check if endpoint is still placeholder
        if (FORM_ENDPOINT === 'YOUR_GOOGLE_WEB_APP_URL_HERE') {
          throw new Error('Form endpoint not configured. Please update FORM_ENDPOINT in form.js');
        }
        
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
        
        // Hide any previous messages
        if (successMessage) successMessage.classList.add('hidden');
        if (errorMessage) errorMessage.classList.add('hidden');
        
        // CRITICAL: Use URLSearchParams for form-encoded POST (NOT JSON)
        const data = new URLSearchParams({
          fullName,
          workEmail,
          companyName,
          teamSize,
          deliveryFormat: deliveryFormatValue,
          outcomes,
          contactMethod: contactMethodValue,
          pageUrl,
          referrer,
          timestamp,
        });
        
        // Send to Google Web App using form-encoded data
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: data,
        });

        // Since we're using no-cors, we can't read the response
        // but if no error was thrown, we consider it successful
        
        // Show success message
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        // Reset form
        form.reset();

        // Redirect after 5 seconds
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 5000);

      } catch (error) {
        console.error('Form submission error:', error);
        
        // Show error message
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');

        // Restore button
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    });
  }
});
