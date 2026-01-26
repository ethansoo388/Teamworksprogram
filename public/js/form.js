// Form handling for consultation page

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('consultation-form');
  
  if (form) {
    // REPLACE THIS URL with your actual Google Web App URL
    const FORM_ENDPOINT = 'YOUR_GOOGLE_WEB_APP_URL_HERE';
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Get elements
      const submitButton = form.querySelector('button[type="submit"]');
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
        
        // Send to Google Web App
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });

        // Since we're using no-cors, we can't read the response
        // but if no error was thrown, we consider it successful
        
        // Show success message
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        // Reset form
        form.reset();

      } catch (error) {
        console.error('Form submission error:', error);
        
        // Show error message
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');

        // Restore button
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    });
  }
});
