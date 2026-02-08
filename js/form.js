// Form handling for TeamWorks consultation and main site Contact Us forms

document.addEventListener('DOMContentLoaded', () => {
  const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzF0P4cFMBBEnEFxmEY3tC8tXTRqEYS0DOP8ru1UCYqDUEySnelgW69hrysgMauONdJsQ/exec';

  // ========================================
  // TEAMWORKS CONSULTATION FORM HANDLER
  // ========================================
  const consultationForm = document.getElementById('consultation-form');
  
  if (consultationForm) {
    consultationForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Validate required radio buttons
      const deliveryFormat = consultationForm.querySelector('input[name="deliveryFormat"]:checked');
      const contactMethod = consultationForm.querySelector('input[name="contactMethod"]:checked');
      
      if (!deliveryFormat) {
        alert('Please select a preferred delivery format');
        return;
      }
      
      if (!contactMethod) {
        alert('Please select a contact method');
        return;
      }
      
      // Get form data - properly handle multiple checkboxes
      const formData = new FormData(consultationForm);
      
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
      const submitButton = consultationForm.querySelector('button[type="submit"]');
      const successMessage = document.getElementById('success-message');
      const errorMessage = document.getElementById('error-message');
      
      // Store original button text
      const originalButtonText = submitButton.innerHTML;
      
      try {
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
        
        // Hide any previous messages
        if (successMessage) successMessage.classList.add('hidden');
        if (errorMessage) errorMessage.classList.add('hidden');
        
        // CRITICAL: Use URLSearchParams for form-encoded POST (NOT JSON)
        const data = new URLSearchParams({
          sheetName: 'TW_BookConsultationForm',
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

        // Check if response is OK and parse JSON safely
        if (!response.ok) {
          throw new Error('Server responded with error status');
        }

        const result = await response.json().catch(() => null);

        // Verify the response indicates success
        if (!result || result.status !== 'success') {
          throw new Error(result?.message || 'Form submission failed - invalid response from server');
        }

        // Reset form
        consultationForm.reset();

        // Redirect to Thank You page immediately
        window.location.assign('../thankyou.html');
        return;

      } catch (error) {
        console.error('Form submission error:', error);
        
        // Show error message (do NOT hide the form)
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');

        // Restore button
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    });
  }

  // ========================================
  // CONTACT US FORM HANDLER
  // ========================================
  const contactForm = document.getElementById('contact-us-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Validate required radio buttons
      const contactMethod = contactForm.querySelector('input[name="contactMethod"]:checked');
      
      if (!contactMethod) {
        alert('Please select a preferred contact method');
        return;
      }
      
      // Get form data
      const formData = new FormData(contactForm);
      
      // Build data object
      const fullName = formData.get('fullName') || '';
      const workEmail = formData.get('workEmail') || '';
      const contactMethodValue = formData.get('contactMethod') || '';
      const organizationRole = formData.get('organizationRole') || '';
      const challenge = formData.get('challenge') || '';
      const message = formData.get('message') || '';
      
      // Handle multiple interests checkboxes - collect all checked values
      const interests = formData.getAll('interests').join(', ') || '';
      
      // Add tracking fields
      const pageUrl = window.location.href;
      const referrer = document.referrer || 'Direct';
      const timestamp = new Date().toISOString();
      
      // Get elements
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const successMessage = document.getElementById('contact-success-message');
      const errorMessage = document.getElementById('contact-error-message');
      
      // Store original button text
      const originalButtonText = submitButton.innerHTML;
      
      try {
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
        
        // Hide any previous messages
        if (successMessage) successMessage.classList.add('hidden');
        if (errorMessage) errorMessage.classList.add('hidden');
        
        // CRITICAL: Use URLSearchParams for form-encoded POST (NOT JSON)
        const data = new URLSearchParams({
          sheetName: 'ContactUsForm',
          fullName,
          workEmail,
          contactMethod: contactMethodValue,
          organizationRole,
          interests,
          challenge,
          message,
          pageUrl,
          referrer,
          timestamp,
        });
        
        // Send to Google Web App using form-encoded data
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: data,
        });

        // Check if response is OK and parse JSON safely
        if (!response.ok) {
          throw new Error('Server responded with error status');
        }

        const result = await response.json().catch(() => null);

        // Verify the response indicates success
        if (!result || result.status !== 'success') {
          throw new Error(result?.message || 'Form submission failed - invalid response from server');
        }

        // Reset form
        contactForm.reset();

        // Redirect to Thank You page immediately
        window.location.assign('thankyou.html');
        return;

      } catch (error) {
        console.error('Form submission error:', error);
        
        // Show error message (do NOT hide the form)
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');

        // Restore button
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    });
  }
});
