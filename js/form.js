
// ===============================
// Client-side validation helpers
// ===============================
function setFieldError_(fieldEl, hasError) {
  if (!fieldEl) return;
  const cls = ['border-red-500', 'ring-1', 'ring-red-500'];
  if (hasError) {
    cls.forEach(c => fieldEl.classList.add(c));
  } else {
    cls.forEach(c => fieldEl.classList.remove(c));
  }
}

function validateName_(value) {
  const v = (value || '').trim();
  if (!v) return { ok: false, msg: 'Full Name is required.' };
  // letters + spaces + apostrophe + hyphen only (no numbers / symbols)
  const re = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
  if (!re.test(v)) return { ok: false, msg: 'Full Name must contain letters only (no numbers or special characters).' };
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

function showFormError_(errorEl, messages) {
  if (!errorEl) return;
  const list = Array.isArray(messages) ? messages : [messages];
  errorEl.textContent = list.filter(Boolean).join(' ');
  errorEl.classList.remove('hidden');
}

// Form handling for TeamWorks consultation and main site Contact Us forms

document.addEventListener('DOMContentLoaded', () => {
  const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwMB8hyEciDVHNN_lCtwCpRFbouPj7nY1Hk7UPGk-nv2o4_0KTxaVIlEafUblZWceuqwQ/exec';

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

      

      const form = consultationForm;

      // Create or reuse status message container (inline, non-breaking)
      let statusMessage = form.querySelector('.form-status-message');
      if (!statusMessage) {
        statusMessage = document.createElement('div');
        statusMessage.className = 'form-status-message mt-4 text-sm text-blue-600';
        form.appendChild(statusMessage);
      }
      statusMessage.textContent = 'Submitting. May takes 10 seconds.';

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
                              contactNumberRaw: contactNumberRaw,
          contactNumber: contactNumber,
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

        
        
        // Show meaningful error if available
        if (errorMessage) {
          const base = 'Submission failed. ';
          const detail = (error && error.message) ? error.message : 'Please check your input and try again.';
          errorMessage.textContent = base + detail + ' Please fill up the correct information again.';
        }
        if (typeof statusMessage !== 'undefined' && statusMessage) {
          statusMessage.textContent = '';
        }
// Show meaningful error if available
        if (errorMessage) {
          const base = 'Submission failed. ';
          const detail = (error && error.message) ? error.message : 'Please check your input and try again.';
          errorMessage.textContent = base + detail + ' Please fill up the correct information again.';
        }
        if (typeof statusMessage !== 'undefined' && statusMessage) {
          statusMessage.textContent = '';
        }
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
      
      const countryCode = formData.get('country_code') || '';
      const contactNumberRaw = formData.get('contact_number') || '';
      const contactNumber = (countryCode ? String(countryCode).trim() + ' ' : '') + String(contactNumberRaw).trim();
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

      

      const form = contactForm;

      // Create or reuse status message container (inline, non-breaking)
      let statusMessage = form.querySelector('.form-status-message');
      if (!statusMessage) {
        statusMessage = document.createElement('div');
        statusMessage.className = 'form-status-message mt-4 text-sm text-blue-600';
        form.appendChild(statusMessage);
      }
      statusMessage.textContent = 'Submitting. May takes 10 seconds.';

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
        window.location.assign('/thankyou.html');
        return;

      } catch (error) {
        console.error('Form submission error:', error);

        // Show error message (do NOT hide the form)
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');

        
        
        // Show meaningful error if available
        if (errorMessage) {
          const base = 'Submission failed. ';
          const detail = (error && error.message) ? error.message : 'Please check your input and try again.';
          errorMessage.textContent = base + detail + ' Please fill up the correct information again.';
        }
        if (typeof statusMessage !== 'undefined' && statusMessage) {
          statusMessage.textContent = '';
        }
// Show meaningful error if available
        if (errorMessage) {
          const base = 'Submission failed. ';
          const detail = (error && error.message) ? error.message : 'Please check your input and try again.';
          errorMessage.textContent = base + detail + ' Please fill up the correct information again.';
        }
        if (typeof statusMessage !== 'undefined' && statusMessage) {
          statusMessage.textContent = '';
        }
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

      // Get form data
      const formData = new FormData(aboutUsForm);

      // Validate required fields
      const fullName = formData.get('fullName') || '';
      const workEmail = formData.get('workEmail') || '';

      // -------------------------------
      // Required field validation
      // -------------------------------
      const nameCheck = validateName_(fullName);
      const emailCheck = validateEmail_(workEmail);

      const fullNameEl = aboutForm.querySelector('[name="fullName"]') || aboutForm.querySelector('[name="name"]');
      const workEmailEl = aboutForm.querySelector('[name="workEmail"]');

      setFieldError_(fullNameEl, false);
      setFieldError_(workEmailEl, false);
      if (errorMessage) errorMessage.classList.add('hidden');

      const errors = [];
      if (!nameCheck.ok) { errors.push(nameCheck.msg.replace('Full Name', 'Name')); setFieldError_(fullNameEl, true); }
      if (!emailCheck.ok) { errors.push(emailCheck.msg); setFieldError_(workEmailEl, true); }

      if (statusMessage) statusMessage.textContent = '';

      if (errors.length) {
        showFormError_(errorMessage, errors);
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = originalButtonText;
        }
        return;
      }

      [fullNameEl, workEmailEl].forEach((el) => {
        if (!el) return;
        el.addEventListener('input', () => setFieldError_(el, false), { once: true });
      });


      if (!fullName.trim() || !workEmail.trim()) {
        alert('Please fill in all required fields (Name and Work Email)');
        return;
      }

      // Build data object
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
      const submitButton = aboutUsForm.querySelector('button[type="submit"]');
      const errorMessage = document.getElementById('aboutus-error-message');

      // Store original button text
      const originalButtonText = submitButton.innerHTML;

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

        const result = await response.json().catch(() => null);

        // Verify the response indicates success
        if (!result || result.status !== 'success') {
          throw new Error(result?.message || 'Form submission failed - invalid response from server');
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

  // ========================================
  // JESS - CORPORATE ENROLLMENT (mailto)
  // ========================================
  const jessCorporateForm = document.getElementById('jess-corporate-enrollment-form');
  if (jessCorporateForm) {
    jessCorporateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(jessCorporateForm);

      const requiredFields = ['company','numberOfParticipants','contactPerson','role','email','contactNumber','interestedCourse','preferredDelivery'];
      let ok = true;

      const setErr = (name, msg) => {
        const el = jessCorporateForm.querySelector(`[data-error-for="${name}"]`);
        if (el) {
          el.textContent = msg;
          el.classList.toggle('hidden', !msg);
        }
      };

      // clear
      requiredFields.forEach((f) => setErr(f, ''));

      requiredFields.forEach((f) => {
        const v = String(fd.get(f) || '').trim();
        if (!v) {
          ok = false;
          setErr(f, 'This field is required');
        }
      });

      const email = String(fd.get('email') || '').trim();
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        ok = false;
        setErr('email', 'Please enter a valid email address');
      }

      if (!ok) return;

      const body = [
        'Corporate Enrollment Request',
        '',
        `Company Name: ${fd.get('company') || ''}`,
        `Number of Participants: ${fd.get('numberOfParticipants') || ''}`,
        '',
        'Contact Person',
        `Full Name: ${fd.get('contactPerson') || ''}`,
        `Role / Position: ${fd.get('role') || ''}`,
        `Email: ${fd.get('email') || ''}`,
        `Contact Number: ${fd.get('contactNumber') || ''}`,
        '',
        'Program Details',
        `Interested Course: ${fd.get('interestedCourse') || ''}`,
        `Preferred Delivery Mode: ${fd.get('preferredDelivery') || ''}`,
        '',
        `Additional Notes: ${fd.get('additionalNotes') || ''}`,
      ].join('
');

      const subject = `JESS Corporate Enrollment Request - ${fd.get('company') || 'Company'}`;
      const mailto = `mailto:romanoff@ciagile.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      const success = document.getElementById('jess-corporate-success');
      if (success) success.classList.remove('hidden');
      jessCorporateForm.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========================================
  // JESS - INDIVIDUAL ENROLLMENT (mailto)
  // ========================================
  const jessIndForm = document.getElementById('jess-individual-enrollment-form');
  if (jessIndForm) {
    jessIndForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(jessIndForm);

      const requiredFields = ['fullName','email','contactNumber','organization','jobTitle','paymentMethod'];
      let ok = true;

      const setErr = (name, msg) => {
        const el = jessIndForm.querySelector(`[data-error-for="${name}"]`);
        if (el) {
          el.textContent = msg;
          el.classList.toggle('hidden', !msg);
        }
      };

      requiredFields.forEach((f) => setErr(f, ''));

      requiredFields.forEach((f) => {
        const v = String(fd.get(f) || '').trim();
        if (!v) {
          ok = false;
          setErr(f, 'This field is required');
        }
      });

      const email = String(fd.get('email') || '').trim();
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        ok = false;
        setErr('email', 'Please enter a valid email address');
      }

      if (!ok) return;

      const invoiceNeeded = String(fd.get('invoiceNeeded') || 'no');

      const body = [
        'Individual Enrollment Request',
        '',
        `Full Name: ${fd.get('fullName') || ''}`,
        `Email: ${fd.get('email') || ''}`,
        `Contact Number: ${fd.get('contactNumber') || ''}`,
        `Organization: ${fd.get('organization') || ''}`,
        `Job Title: ${fd.get('jobTitle') || ''}`,
        '',
        `Course Selected: ${fd.get('courseSelected') || ''}`,
        `Preferred Class Date: ${fd.get('classDate') || ''}`,
        `Payment Method: ${fd.get('paymentMethod') || ''}`,
        `Invoice Needed: ${invoiceNeeded === 'yes' ? 'Yes' : 'No'}`,
      ].join('
');

      const subject = `JESS Individual Enrollment Request - ${fd.get('fullName') || ''}`;
      const mailto = `mailto:romanoff@ciagile.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      const success = document.getElementById('jess-individual-success');
      if (success) success.classList.remove('hidden');
      jessIndForm.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
