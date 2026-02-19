// CI Agile & TeamWorks Static Sites JavaScript

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Mobile hamburger menus (all pages) - STATIC EXPORT FRIENDLY
  // Supports multiple independent menus per page via:
  // - [data-mobile-toggle] on the toggle button
  // - aria-controls="<menu-id>" pointing to the menu container
  // - the menu container having id="<menu-id>" and [data-mobile-menu]
  // Optional:
  // - [data-mobile-backdrop] inside the menu for click-to-close
  // - [data-mobile-close] on links/buttons that should close the menu on click
  const toggles = Array.from(document.querySelectorAll('[data-mobile-toggle]'));
  const menusById = new Map();
  Array.from(document.querySelectorAll('[data-mobile-menu]')).forEach((el) => {
    if (el instanceof HTMLElement && el.id) menusById.set(el.id, el);
  });

  const setBodyScrollLocked = (locked) => {
    // If any menu is open, lock; if none open, unlock
    const anyOpen = Array.from(menusById.values()).some((m) => !m.classList.contains('hidden'));
    document.body.style.overflow = (locked ?? anyOpen) ? 'hidden' : '';
  };

  const closeMenu = (menu) => {
    if (!menu) return;
    menu.classList.add('hidden');
    menu.setAttribute('aria-hidden', 'true');
    // Toggle optional icons (open/close) within the related toggle button
    const btn = toggles.find((t) => t.getAttribute('aria-controls') === menu.id);
    if (btn) {
      const openIcon = btn.querySelector('[data-icon="open"]');
      const closeIcon = btn.querySelector('[data-icon="close"]');
      if (openIcon) openIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    }
    setBodyScrollLocked(false);
  };

  const openMenu = (menu) => {
    if (!menu) return;
    menu.classList.remove('hidden');
    menu.setAttribute('aria-hidden', 'false');
    const btn = toggles.find((t) => t.getAttribute('aria-controls') === menu.id);
    if (btn) {
      const openIcon = btn.querySelector('[data-icon="open"]');
      const closeIcon = btn.querySelector('[data-icon="close"]');
      if (openIcon) openIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
    }
    setBodyScrollLocked(true);
  };

  const toggleMenu = (menu) => {
    if (!menu) return;
    if (menu.classList.contains('hidden')) openMenu(menu);
    else closeMenu(menu);
  };

  toggles.forEach((btn) => {
    if (!(btn instanceof HTMLElement)) return;
    const id = btn.getAttribute('aria-controls');
    if (!id) return;
    const menu = document.getElementById(id);
    if (!(menu instanceof HTMLElement)) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu(menu);
    });

    // Backdrop close (if exists)
    const backdrop = menu.querySelector('[data-mobile-backdrop]');
    if (backdrop) {
      backdrop.addEventListener('click', () => closeMenu(menu));
    }

    // Close when clicking any item marked with data-mobile-close (or any anchor by default)
    menu.addEventListener('click', (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (target.closest('[data-mobile-close]') || target.closest('a')) {
        closeMenu(menu);
      }
    });
  });

  // Dropdown navigation functionality (main site) - HOVER BASED - HOVER BASED
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


  // TeamWorks Course 05 - Your Advantage carousel (static export)
  const tw05Carousel = document.querySelector('[data-tw05-carousel]');
  if (tw05Carousel) {
    const slides = Array.from(tw05Carousel.querySelectorAll('[data-tw05-slide]'));
    const dots = Array.from(tw05Carousel.querySelectorAll('[data-tw05-dot]'));
    const prevBtn = tw05Carousel.querySelector('[data-tw05-prev]');
    const nextBtn = tw05Carousel.querySelector('[data-tw05-next]');

    let current = 0;
    let autoTimer = null;

    const show = (i) => {
      if (!slides.length) return;
      const nextIndex = ((i % slides.length) + slides.length) % slides.length;
      current = nextIndex;

      slides.forEach((slide, idx) => {
        if (!(slide instanceof HTMLElement)) return;
        if (idx === current) {
          slide.classList.remove('hidden');
          slide.classList.add('block');
          slide.classList.remove('opacity-0');
          slide.classList.add('opacity-100');
        } else {
          slide.classList.add('hidden');
          slide.classList.remove('block');
          slide.classList.add('opacity-0');
          slide.classList.remove('opacity-100');
        }
      });

      dots.forEach((dot, idx) => {
        if (!(dot instanceof HTMLElement)) return;
        if (idx === current) {
          dot.classList.add('w-8', 'h-2', 'bg-[#0EA7E9]');
          dot.classList.remove('w-2', 'h-2', 'bg-gray-300');
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.classList.remove('w-8', 'h-2', 'bg-[#0EA7E9]');
          dot.classList.add('w-2', 'h-2', 'bg-gray-300');
          dot.removeAttribute('aria-current');
        }
      });
    };

    // Initial state
    show(0);

    const startAuto = () => {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = setInterval(() => {
        show(current + 1);
      }, 2500);
    };

    // Auto-advance every 2.5 seconds
    startAuto();

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const i = Number(dot.getAttribute('data-index') ?? '0');
        show(i);
        startAuto();
      });
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
      show(current - 1);
      startAuto();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      show(current + 1);
      startAuto();
    });

    // Cleanup
    window.addEventListener('beforeunload', () => {
      if (autoTimer) clearInterval(autoTimer);
    });
  }

  // TeamWorks Course 05 - FAQ accordion (only one open at a time, static export)
  const tw05Faq = document.querySelector('[data-tw05-faq]');
  if (tw05Faq) {
    const items = Array.from(tw05Faq.querySelectorAll('[data-tw05-faq-item]'));

    const setOpen = (openIndex) => {
      items.forEach((item) => {
        if (!(item instanceof HTMLElement)) return;
        const idx = Number(item.getAttribute('data-index') ?? '-1');
        const isOpen = idx === openIndex;

        item.classList.toggle('border-[#0EA7E9]', isOpen);
        item.classList.toggle('border-gray-200', !isOpen);

        const answer = item.querySelector('[data-tw05-faq-answer]');
        if (answer instanceof HTMLElement) answer.classList.toggle('hidden', !isOpen);

        const icon = item.querySelector('[data-tw05-faq-icon]');
        if (icon instanceof HTMLElement) icon.classList.toggle('rotate-180', isOpen);
      });
    };

    setOpen(0);

    items.forEach((item) => {
      const btn = item.querySelector('[data-tw05-faq-button]');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const idx = Number(item.getAttribute('data-index') ?? '0');
        setOpen(idx);
      });
    });
  }
});
