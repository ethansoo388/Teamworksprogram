// CI Agile & TeamWorks Static Sites JavaScript

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
    const dropdown = container.querySelector(`[data-dropdown="${dropdownName}"]`);
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
    const closeMobileMenu = () => {
      mobileMenu.classList.remove('active');
      mobileMenu.classList.add('hidden');
    };

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu after selecting any menu item
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        // Only close if menu is currently open
        if (mobileMenu.classList.contains('active') || !mobileMenu.classList.contains('hidden')) {
          closeMobileMenu();
        }
      });
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
