// TeamWorks lead capture form submission
// Sends x-www-form-urlencoded to Google Apps Script Web App (no CORS preflight).
// Works on static hosting (Hostinger) behind Cloudflare.

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyMunBs-hCW0FZ4h_sjoX3zm-QkUeK9akyQIRanfBlxMzW_NOjKldmlfnTAhx-ne4DP7Q/exec';

function buildUrlEncodedPayload(form) {
  const fd = new FormData(form);
  const params = new URLSearchParams();

  // Append all fields (including multiple checkboxes)
  for (const [key, value] of fd.entries()) {
    if (value === null || value === undefined) continue;
    const v = String(value).trim();
    if (v.length === 0) continue;
    params.append(key, v);
  }

  // Add timestamp (server will also add one if missing)
  params.set('timestamp', new Date().toISOString());

  return params;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('consultation-form');
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const successMessage = document.getElementById('success-message');

  if (!form) {
    console.error('[TeamWorks] consultation-form not found.');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Basic required checks (mirror HTML required fields)
    const fullName = (form.querySelector('[name="fullName"]')?.value || '').trim();
    const workEmail = (form.querySelector('[name="workEmail"]')?.value || '').trim();
    if (!fullName || !workEmail) {
      alert('Please fill in your Full Name and Work Email.');
      return;
    }

    // UX: disable submit
    const originalText = submitText ? submitText.textContent : null;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
    }
    if (submitText) submitText.textContent = 'Submitting...';

    try {
      const payload = buildUrlEncodedPayload(form);

      // NOTE: mode:no-cors means we cannot read the response in the browser.
      // If the network request is made successfully, Apps Script will log doPost + append rows.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload
      });

      // Optimistic success UI
      if (successMessage) {
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        alert('Thank you! We will contact you shortly.');
        form.reset();
      }

    } catch (err) {
      console.error('[TeamWorks] form submit failed:', err);
      alert('Submission failed. Please try again.');

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
      }
      if (submitText && originalText !== null) submitText.textContent = originalText;
      return;
    }

    // Re-enable button (optional, in case user stays on page)
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
    }
    if (submitText && originalText !== null) submitText.textContent = originalText || 'Submit';
  });
});
