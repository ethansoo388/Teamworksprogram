// Form handling for TeamWorks consultation and main site Contact Us forms

document.addEventListener('DOMContentLoaded', () => {
  const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwMB8hyEciDVHNN_lCtwCpRFbouPj7nY1Hk7UPGk-nv2o4_0KTxaVIlEafUblZWceuqwQ/exec';

  

// ===============================
// Client-side validation helpers
// ===============================
function setFieldError_(fieldEl, hasError) {
  if (!fieldEl) return;
  const cls = ['border-red-500', 'ring-1', 'ring-red-500'];
  if (hasError) cls.forEach(c => fieldEl.classList.add(c));
  else cls.forEach(c => fieldEl.classList.remove(c));
}

function validateName_(value, label) {
  const v = (value || '').trim();
  if (!v) return { ok: false, msg: (label || 'Name') + ' is required.' };
  const re = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
  if (!re.test(v)) return { ok: false, msg: (label || 'Name') + ' must contain letters only (no numbers or special characters).' };
  return { ok: true };
}

function validateEmail_(value) {
  const v = (value || '').trim();
  if (!v) return { ok: false, msg: 'Work Email is required.' };
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(v)) return { ok: false, msg: 'Please enter a valid email address.' };
  return { ok: true };
}

function validateNumber_(value) {
  const v = (value || '').trim();
  if (!v) return { ok: false, msg: 'Contact Number is required.' };
  const re = /^\d+$/;
  if (!re.test(v)) return { ok: false, msg: 'Contact Number must be numeric.' };
  return { ok: true };
}

function ensureStatusEl_(form) {
  let el = form.querySelector('.form-status-message');
  if (!el) {
    el = document.createElement('div');
    el.className = 'form-status-message mt-4 text-sm text-blue-600';
    form.appendChild(el);
  }
  return el;
}

function showFormError_(errorEl, messages) {
  if (!errorEl) return;
  const list = Array.isArray(messages) ? messages : [messages];
  errorEl.textContent = list.filter(Boolean).join(' ');
  errorEl.classList.remove('hidden');
}
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
        window.location.assign('/thankyou.html');
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

      // Get elements FIRST (before any validation that references them)
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const successMessage = document.getElementById('contact-success-message');
      const errorMessage = document.getElementById('contact-error-message');
      const originalButtonText = submitButton.innerHTML;

      // Get form data
      const formData = new FormData(contactForm);

      // Build data object
      const fullName = formData.get('fullName') || '';
      const workEmail = formData.get('workEmail') || '';
      const contactNumber = formData.get('contactNumber') || '';
      const contactMethodValue = formData.get('contactMethod') || '';
      const organizationRole = formData.get('organizationRole') || '';
      const challenge = formData.get('challenge') || '';
      const message = formData.get('message') || '';
      const interests = formData.getAll('interests').join(', ') || '';
      const pageUrl = window.location.href;
      const referrer = document.referrer || 'Direct';
      const timestamp = new Date().toISOString();

      // -------------------------------
      // Required field validation
      // -------------------------------
      const fullNameEl = contactForm.querySelector('[name="fullName"]');
      const workEmailEl = contactForm.querySelector('[name="workEmail"]');
      const contactNumberEl = contactForm.querySelector('[name="contactNumber"]');
      const contactMethodEls = contactForm.querySelectorAll('input[name="contactMethod"]');

      // Reset errors
      [fullNameEl, workEmailEl, contactNumberEl].forEach(el => setFieldError_(el, false));
      contactMethodEls.forEach(el => setFieldError_(el, false));
      if (errorMessage) errorMessage.classList.add('hidden');

      const errors = [];
      const nameCheck = validateName_(fullName, 'Full Name');
      const emailCheck = validateEmail_(workEmail);
      const numberCheck = validateNumber_(contactNumber);

      if (!nameCheck.ok) { errors.push(nameCheck.msg); setFieldError_(fullNameEl, true); }
      if (!emailCheck.ok) { errors.push(emailCheck.msg); setFieldError_(workEmailEl, true); }
      if (!numberCheck.ok) { errors.push(numberCheck.msg); setFieldError_(contactNumberEl, true); }
      if (!contactMethodValue.trim()) {
        errors.push('Preferred contact method is required.');
        contactMethodEls.forEach(el => setFieldError_(el, true));
      }

      if (errors.length) {
        showFormError_(errorMessage, errors);
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
        return;
      }

      const statusMessage = ensureStatusEl_(contactForm);
      statusMessage.textContent = 'Submitting. May take 10 seconds.';

      // Clear highlight when editing
      [fullNameEl, workEmailEl, contactNumberEl].forEach((el) => {
        if (!el) return;
        el.addEventListener('input', () => setFieldError_(el, false), { once: true });
      });
      contactMethodEls.forEach((el) => {
        el.addEventListener('change', () => setFieldError_(el, false), { once: true });
      });

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

        let result = null;
        try { result = await response.json(); } catch (e) { result = null; }
        // If JSON isn't readable but request succeeded, treat as success.
        if (result && result.status && result.status !== 'success') {
          throw new Error(result.message || 'Form submission failed');
        }

        // Reset form
        contactForm.reset();

        // Redirect to Thank You page immediately
        window.location.assign('/thankyou.html');
        return;

      } catch (error) {
        console.error('Form submission error:', error);

        // Show error message (do NOT hide the form)
        errorMessage.classList.remove('hidden');
        if (successMessage) successMessage.classList.add('hidden');

        // Restore button
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    });
  }

  // ========================================
  // ABOUT US FORM HANDLER
  // ========================================
  const aboutUsForm = document.getElementById('about-us-form');

  if (aboutUsForm) {
    aboutUsForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Get elements FIRST (before any validation that references them)
      const submitButton = aboutUsForm.querySelector('button[type="submit"]');
      const errorMessage = document.getElementById('aboutus-error-message');
      const originalButtonText = submitButton.innerHTML;

      // Get form data
      const formData = new FormData(aboutUsForm);

      // Build data object
      const fullName = formData.get('fullName') || '';
      const workEmail = formData.get('workEmail') || '';
      const organizationRole = formData.get('organizationRole') || '';
      const challenge = formData.get('challenge') || '';
      const message = formData.get('message') || '';
      const interests = formData.getAll('interests').join(', ') || '';
      const pageUrl = window.location.href;
      const referrer = document.referrer || 'Direct';
      const timestamp = new Date().toISOString();

      // -------------------------------
      // Required field validation
      // -------------------------------
      const fullNameEl = aboutUsForm.querySelector('[name="fullName"]');
      const workEmailEl = aboutUsForm.querySelector('[name="workEmail"]');

      setFieldError_(fullNameEl, false);
      setFieldError_(workEmailEl, false);
      if (errorMessage) errorMessage.classList.add('hidden');

      const errors = [];
      const nameCheck = validateName_(fullName, 'Name');
      const emailCheck = validateEmail_(workEmail);

      if (!nameCheck.ok) { errors.push(nameCheck.msg); setFieldError_(fullNameEl, true); }
      if (!emailCheck.ok) { errors.push(emailCheck.msg); setFieldError_(workEmailEl, true); }

      if (errors.length) {
        showFormError_(errorMessage, errors);
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
        return;
      }

      const statusMessage = ensureStatusEl_(aboutUsForm);
      statusMessage.textContent = 'Submitting. May take 10 seconds.';

      // Clear highlight when editing
      [fullNameEl, workEmailEl].forEach((el) => {
        if (!el) return;
        el.addEventListener('input', () => setFieldError_(el, false), { once: true });
      });

      try {
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';

        // Hide any previous messages
        if (errorMessage) errorMessage.classList.add('hidden');

        // CRITICAL: Use URLSearchParams for form-encoded POST (NOT JSON)
        const data = new URLSearchParams({
          sheetName: 'AboutUsForm',
          fullName,
          workEmail,
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

        let result = null;
        try { result = await response.json(); } catch (e) { result = null; }
        // If JSON isn't readable but request succeeded, treat as success.
        if (result && result.status && result.status !== 'success') {
          throw new Error(result.message || 'Form submission failed');
        }

        // Reset form
        aboutUsForm.reset();

        // Redirect to Thank You page immediately
        window.location.assign('/thankyou.html');
        return;

      } catch (error) {
        console.error('Form submission error:', error);

        // Show error message (do NOT hide the form)
        if (errorMessage) {
          errorMessage.classList.remove('hidden');
          const errorText = errorMessage.querySelector('p');
          if (errorText) {
            errorText.textContent = error.message || 'Unable to submit form. Please try again.';
          }
        }

        // Restore button
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    });
  }
});
