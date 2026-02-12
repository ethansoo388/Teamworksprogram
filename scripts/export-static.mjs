import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

// Helper to create HTML shell
function createHTMLShell(title, bodyHTML, options = {}) {
  const {
    description = 'CI Agile & TeamWorks - Transform your organization with proven delivery systems and team training.',
    includeFormJS = false,
    pageClass = '',
    siteType = 'teamworks' // 'main' or 'teamworks'
  } = options;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${description}">
    <title>${title}</title>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Lucide Icons CDN -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <!-- Custom Styles -->
    <link rel="stylesheet" href="${siteType === 'main' ? 'css' : '../css'}/style.css">
</head>
<body class="antialiased${pageClass ? ' ' + pageClass : ''}">
    ${bodyHTML}
    
    <!-- Scripts -->
    <script src="${siteType === 'main' ? 'js' : '../js'}/main.js"></script>${includeFormJS ? `\n    <script src="${siteType === 'main' ? 'js' : '../js'}/form.js"></script>` : ''}
</body>
</html>`;
}

// Clean and recreate public directory
function setupPublicDir() {
  console.log('🧹 Cleaning build artifacts...');
  
  // Delete dist/ folder if it exists (from vite build)
  if (fs.existsSync(distDir)) {
    console.log('  ✓ Removing dist/ folder...');
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  
  // Delete public/ folder if it exists
  if (fs.existsSync(publicDir)) {
    console.log('  ✓ Removing public/ folder...');
    fs.rmSync(publicDir, { recursive: true, force: true });
  }
  
  fs.mkdirSync(publicDir, { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'css'), { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'js'), { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'assets'), { recursive: true });
  fs.mkdirSync(path.join(publicDir, 'teamworks'), { recursive: true });
  
  console.log('✅ Public directory ready');
}

// Generate CSS file
function generateCSS() {
  console.log('🎨 Generating CSS...');
  
  const css = `/* CI Agile & TeamWorks Static Sites Styles */

/* Base resets and utilities */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Ensure full height */
body {
  min-height: 100vh;
}

/* Style isolation - prevent CSS bleed between sites */
.site-main {
  /* Main site namespace */
}

.site-teamworks {
  /* TeamWorks site namespace */
}

/* Custom animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Custom gradients */
.gradient-purple {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-pink {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.gradient-orange {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.gradient-green {
  background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
}

.gradient-blue {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

/* Mobile menu hidden by default */
#mobile-menu {
  display: none;
}

#mobile-menu.active {
  display: block;
}

/* Form validation styles */
input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
}

input:valid:not(:placeholder-shown) {
  border-color: #10b981;
}

/* Loading state */
.loading {
  opacity: 0.6;
  pointer-events: none;
}

/* Success/Error message styles */
.message {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.message.success {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #34d399;
}

.message.error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #f87171;
}

/* Print styles */
@media print {
  nav, footer, .no-print {
    display: none;
  }
}
`;

  fs.writeFileSync(path.join(publicDir, 'css', 'style.css'), css);
  console.log('✅ CSS generated');
}

// Generate main.js file
function generateMainJS() {
  console.log('⚙️ Generating main.js...');
  
  const js = `// CI Agile & TeamWorks Static Sites JavaScript

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Dropdown navigation functionality (main site) - HOVER BASED
  const dropdownContainers = document.querySelectorAll('[data-dropdown-container]');
  
  dropdownContainers.forEach(container => {
    const dropdownName = container.getAttribute('data-dropdown-container');
    const dropdown = container.querySelector(\`[data-dropdown="\${dropdownName}"]\`);
    const trigger = container.querySelector('[data-dropdown-trigger]');
    const text = container.querySelector('[data-dropdown-text]');
    const icon = container.querySelector('[data-dropdown-icon]');
    
    // Only proceed if all required elements exist
    if (!dropdown || !trigger) {
      console.warn('Dropdown elements not found for:', dropdownName);
      return;
    }
    
    // Show dropdown on hover
    container.addEventListener('mouseenter', () => {
      // Close all other dropdowns first
      document.querySelectorAll('[data-dropdown]').forEach(dd => {
        if (dd !== dropdown) {
          dd.classList.add('hidden');
        }
      });
      
      // Reset all other triggers to default color
      document.querySelectorAll('[data-dropdown-text]').forEach(t => {
        if (t !== text) {
          t.style.color = '#364153';
        }
      });
      document.querySelectorAll('[data-dropdown-icon]').forEach(i => {
        if (i !== icon) {
          i.style.color = '#364153';
        }
      });
      
      // Show current dropdown
      dropdown.classList.remove('hidden');
      
      // Change trigger text and icon to blue (#0066CC)
      if (text) text.style.color = '#0066CC';
      if (icon) icon.style.color = '#0066CC';
    });
    
    // Hide dropdown when mouse leaves the entire container (trigger + dropdown)
    container.addEventListener('mouseleave', () => {
      dropdown.classList.add('hidden');
      
      // Reset color to default
      if (text) text.style.color = '#364153';
      if (icon) icon.style.color = '#364153';
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      }
    });
  });

  // Handle cross-page anchor links with data-scroll-to attribute
  document.querySelectorAll('a[data-scroll-to]').forEach(link => {
    link.addEventListener('click', function (e) {
      const sectionId = this.getAttribute('data-scroll-to');
      const currentHref = this.getAttribute('href');
      
      // Check if we're on the homepage
      const isHomepage = window.location.pathname === '/' || 
                        window.location.pathname.endsWith('index.html') || 
                        window.location.pathname === '';
      
      if (isHomepage) {
        // On homepage, prevent default and scroll to section
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      // If not on homepage, allow default navigation to index.html#section
    });
  });

  // Handle hash on page load (for cross-page navigation)
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    setTimeout(() => {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections for animation
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // FAQ toggle functionality
  const faqButtons = document.querySelectorAll('[data-faq-button]');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('[data-faq-icon]');
      
      // Toggle answer visibility
      answer.classList.toggle('hidden');
      
      // Rotate icon
      if (icon) {
        icon.style.transform = answer.classList.contains('hidden') 
          ? 'rotate(0deg)' 
          : 'rotate(180deg)';
      }
    });
  });
});
`;

  fs.writeFileSync(path.join(publicDir, 'js', 'main.js'), js);
  console.log('✅ main.js generated');
}

// Generate form.js file
function generateFormJS() {
  console.log('📝 Generating form.js...');
  
  const js = `// Form handling for TeamWorks consultation and main site Contact Us forms

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
      
      if (!fullName.trim() || !workEmail.trim()) {
        alert('Please fill in all required fields (Name and Work Email)');
        return;
      }
      
      // Build data object
      const organizationRole = formData.get('organizationRole') || '';
      const challenge = formData.get('challenge') || '';
      
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
        window.location.assign('thankyou.html');
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
`;

  fs.writeFileSync(path.join(publicDir, 'js', 'form.js'), js);
  console.log('✅ form.js generated');
}

// Copy assets from src/assets to public/assets
function copyAssets() {
  console.log('🖼️  Copying assets...');
  
  const srcAssetsDir = path.join(rootDir, 'src', 'assets');
  const destAssetsDir = path.join(publicDir, 'assets');
  
  // Check if src/assets exists
  if (!fs.existsSync(srcAssetsDir)) {
    console.log('  ⚠️  No src/assets directory found, skipping asset copy');
    return;
  }
  
  // Recursively copy all files from src/assets to public/assets
  function copyRecursive(src, dest) {
    if (!fs.existsSync(src)) {
      return;
    }
    
    const stats = fs.statSync(src);
    
    if (stats.isDirectory()) {
      // Create directory if it doesn't exist
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      
      // Copy all files in directory
      const files = fs.readdirSync(src);
      files.forEach(file => {
        copyRecursive(path.join(src, file), path.join(dest, file));
      });
    } else {
      // Copy file
      fs.copyFileSync(src, dest);
      console.log(`  ✓ Copied ${path.relative(srcAssetsDir, src)}`);
    }
  }
  
  copyRecursive(srcAssetsDir, destAssetsDir);
  console.log('✅ Assets copied');
}

// Render a React component using Vite SSR (for loading TSX only)
async function renderPageWithVite(vite, pagePath, componentName) {
  try {
    // Use Vite ONLY to load the TSX page component
    const module = await vite.ssrLoadModule(pagePath);
    const Component = module[componentName];
    
    if (!Component) {
      throw new Error(`Component ${componentName} not found in ${pagePath}`);
    }
    
    // Use directly imported React (NOT through Vite)
    const element = React.createElement(Component);
    const html = renderToStaticMarkup(element);
    
    return html;
  } catch (error) {
    console.error(`Error rendering ${componentName}:`, error);
    throw error;
  }
}

// Fix image paths in HTML based on page location
function fixImagePaths(html, isTeamworksPage) {
  // Replace /src/assets/img/ with the correct relative path
  const srcAssetsPattern = /src="\/src\/assets\/img\//g;
  const assetsPattern = /src="assets\/img\//g;
  // Some Vite builds emit absolute URLs like /assets/img/...
  const absAssetsPattern = /src="\/assets\/img\//g;
  
  if (isTeamworksPage) {
    // TeamWorks pages are in teamworks/ subdirectory, need ../assets/img/
    return html
      .replace(srcAssetsPattern, 'src="../assets/img/')
      .replace(absAssetsPattern, 'src="../assets/img/')
      .replace(assetsPattern, 'src="../assets/img/');
  } else {
    // Main site pages are in root, need assets/img/
    return html
      .replace(srcAssetsPattern, 'src="assets/img/')
      .replace(absAssetsPattern, 'src="assets/img/')
      .replace(assetsPattern, 'src="assets/img/');
  }
}

// Generate HTML files from React components using Vite SSR
async function generateHTMLFiles() {
  console.log('📄 Generating HTML files from React components...');
  
  // Create Vite server for SSR (to load TSX files only)
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  });
  
  try {
    const pages = [
      // Main site pages
      {
        path: '/src/site/pages/index/IndexPage.tsx',
        componentName: 'IndexPage',
        filename: 'index.html',
        title: 'CI Agile - Transform Your Organization',
        description: 'Proven delivery systems that help organizations execute and achieve measurable business outcomes across Asia Pacific.',
        siteType: 'main',
      },
      {
        path: '/src/site/pages/about/AboutUsPage.tsx',
        componentName: 'AboutUsPage',
        filename: 'aboutus.html',
        title: 'About Us - CI Agile',
        description: 'Learn about CI Agile and our mission to transform organizations through proven delivery systems.',
        siteType: 'main',
        includeFormJS: true,
      },
      {
        path: '/src/site/pages/contact/ContactUsPage.tsx',
        componentName: 'ContactUsPage',
        filename: 'contactus.html',
        title: 'Contact Us - CI Agile',
        description: 'Get in touch with CI Agile to discuss how we can help transform your organization.',
        siteType: 'main',
        includeFormJS: true,
      },
      {
        path: '/src/site/pages/thankyou/ThankYouPage.tsx',
        componentName: 'ThankYouPage',
        filename: 'thankyou.html',
        title: 'Thank You - CI Agile',
        description: 'Thank you for contacting CI Agile. We will get back to you within 24 hours.',
        siteType: 'main',
      },
      // TeamWorks pages
      {
        path: '/src/site/pages/teamworks/LandingPage.tsx',
        componentName: 'LandingPage',
        filename: 'teamworks/index.html',
        title: 'TeamWorks - Transform Your Team in Just 2 Days',
        description: 'Fun, hands-on training workshops for SME teams across Southeast Asia. Build super teams, design like Apple, achieve operational excellence.',
        siteType: 'teamworks',
      },
      {
        path: '/src/site/pages/teamworks/CreatingSuperTeamsPage.tsx',
        componentName: 'CreatingSuperTeamsPage',
        filename: 'teamworks/creating-super-teams.html',
        title: 'Creating Super Teams - TeamWorks Course 01',
        description: 'Learn practical Agile and Scrum frameworks to build high-performing teams that deliver results in just 2 weeks.',
        siteType: 'teamworks',
      },
      {
        path: '/src/site/pages/teamworks/DesignLikeApplePage.tsx',
        componentName: 'DesignLikeApplePage',
        filename: 'teamworks/design-thinking.html',
        title: 'Win Customers Through Design - TeamWorks Course 02',
        description: 'Create customer-focused products and services using design thinking.',
        siteType: 'teamworks',
      },
      {
        path: '/src/site/pages/teamworks/OperationalExcellencePage.tsx',
        componentName: 'OperationalExcellencePage',
        filename: 'teamworks/critical-thinking-kanban.html',
        title: 'Critical Thinking for Better Work - TeamWorks Course 03',
        description: 'Apply critical thinking and Kanban to make better decisions and deliver faster.',
        siteType: 'teamworks',
      },
      {
        path: '/src/site/pages/teamworks/BookConsultationPage.tsx',
        componentName: 'BookConsultationPage',
        filename: 'teamworks/bookConsultation.html',
        title: 'Book Free Consultation - TeamWorks',
        description: 'Schedule a free consultation to discuss which TeamWorks course is perfect for your team.',
        includeFormJS: true,
        siteType: 'teamworks',
      },
    ];
    
    for (const page of pages) {
      try {
        console.log(`  ✓ Rendering ${page.filename}...`);
        
        // Use Vite to load TSX component, React to render it
        const bodyHTML = await renderPageWithVite(vite, page.path, page.componentName);
        
        // Fix image paths based on page location
        const fixedBodyHTML = fixImagePaths(bodyHTML, page.siteType === 'teamworks');
        
        const html = createHTMLShell(page.title, fixedBodyHTML, {
          description: page.description,
          includeFormJS: page.includeFormJS || false,
          siteType: page.siteType,
        });
        
        fs.writeFileSync(path.join(publicDir, page.filename), html);
        console.log(`  ✓ ${page.filename} generated`);
      } catch (error) {
        console.error(`  ✗ Error generating ${page.filename}:`, error);
        throw error;
      }
    }
    
    console.log('✅ All HTML files generated');
  } finally {
    await vite.close();
  }
}

// Main export function
async function exportStaticSite() {
  console.log('🚀 Starting static site export...\n');
  
  try {
    // Step 1: Clean and setup directories
    setupPublicDir();
    console.log('');
    
    // Step 2: Generate CSS
    generateCSS();
    console.log('');
    
    // Step 3: Generate JavaScript
    generateMainJS();
    console.log('');
    
    // Step 4: Generate form JavaScript
    generateFormJS();
    console.log('');
    
    // Step 5: Copy assets
    copyAssets();
    console.log('');
    
    // Step 6: Generate HTML files from React components using Vite SSR
    await generateHTMLFiles();
    console.log('');
    
    console.log('✨ Static export complete!');
    console.log(`📁 Output directory: ${publicDir}`);
    console.log('\n📋 Generated files:');
    console.log('  Main Site:');
    console.log('    - index.html');
    console.log('    - aboutus.html');
    console.log('    - contactus.html');
    console.log('    - thankyou.html');
    console.log('  TeamWorks:');
    console.log('    - teamworks/index.html');
    console.log('    - teamworks/creating-super-teams.html');
    console.log('    - teamworks/design-thinking.html');
    console.log('    - teamworks/critical-thinking-kanban.html');
    console.log('    - teamworks/bookConsultation.html');
    console.log('  Assets:');
    console.log('    - css/style.css');
    console.log('    - js/main.js');
    console.log('    - js/form.js');
    console.log('    - assets/* (images and other assets)');
    console.log('\n🚀 Ready to deploy to Hostinger!');
    
  } catch (error) {
    console.error('\n❌ Export failed:', error);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run export
exportStaticSite();