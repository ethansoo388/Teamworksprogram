// CI Agile & TeamWorks Static Sites JavaScript

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  // JS is available. Used for progressive-enhancement styling (scoped in CSS).
  document.documentElement.classList.add('js');
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

  // Close any open dropdowns when clicking outside (desktop + touch)
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.closest('[data-dropdown-container]')) return;

    document.querySelectorAll('[data-dropdown]').forEach(dd => dd.classList.add('hidden'));
    document.querySelectorAll('[data-dropdown-text]').forEach(t => {
      t.style.color = '#364153';
    });
    document.querySelectorAll('[data-dropdown-icon]').forEach(i => {
      i.style.color = '#364153';
    });
  });

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

    // Also support click-to-toggle (needed for touch devices and click-first users)
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const wasHidden = dropdown.classList.contains('hidden');

      // Close all dropdowns first
      document.querySelectorAll('[data-dropdown]').forEach(dd => dd.classList.add('hidden'));
      document.querySelectorAll('[data-dropdown-text]').forEach(t => {
        t.style.color = '#364153';
      });
      document.querySelectorAll('[data-dropdown-icon]').forEach(i => {
        i.style.color = '#364153';
      });

      // If it was hidden, open it; if it was open, keep it closed
      if (wasHidden) {
        dropdown.classList.remove('hidden');
        if (text) text.style.color = '#0066CC';
        if (icon) icon.style.color = '#0066CC';
      }
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
        // Browser default anchor jump is instant; reset to top then smooth-scroll.
        // This is safe for static export and provides a consistent experience.
        try {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        } catch (_) {
          window.scrollTo(0, 0);
        }
        requestAnimationFrame(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
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

  // ─────────────────────────────────────────────────────────────
  // JESS: Card-level reveal on scroll (static-export friendly)
  // - Elements opt-in via class "jess-reveal" (no visual change by default)
  // - We add the initial hidden/transition classes at runtime to avoid breaking
  //   non-JS rendering in case main.js fails to load.
  // - Scoped strictly under .site-jess to protect Main + TeamWorks.
  // Optional stagger: set data-delay="150" (ms)
  const initJessReveal = () => {
    const jessRoot = document.querySelector('.site-jess');
    if (!jessRoot) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealEls = Array.from(jessRoot.querySelectorAll('.jess-reveal')).filter(
      (el) => el instanceof HTMLElement
    );

    if (revealEls.length === 0) return;

    // If reduced motion: just show instantly (no transitions).
    if (prefersReduced) {
      revealEls.forEach((el) => {
        el.classList.add('opacity-100', 'translate-y-0');
      });
      return;
    }

    // Apply initial state + transition at runtime (failsafe if JS isn't present).
    revealEls.forEach((el) => {
      el.classList.add(
        'opacity-0',
        'translate-y-6',
        'transition-all',
        'duration-700',
        'ease-out',
        'will-change-transform'
      );
    });

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.dataset.delay || '0');

          // Stagger using timeout; then reveal.
          window.setTimeout(() => {
            el.classList.remove('opacity-0', 'translate-y-6');
            el.classList.add('opacity-100', 'translate-y-0');
          }, Number.isFinite(delay) ? delay : 0);

          obs.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  };

  // JESS: Bar fill animation (ProblemSection) — width grows to data-bar-target
  const initJessBars = () => {
    const jessRoot = document.querySelector('.site-jess');
    if (!jessRoot) return;

    const bars = Array.from(jessRoot.querySelectorAll('[data-bar-target]')).filter(
      (el) => el instanceof HTMLElement
    );
    if (bars.length === 0) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Ensure deterministic start width
    bars.forEach((bar) => {
      if (!bar.style.width) bar.style.width = '0%';
    });

    if (prefersReduced) {
      bars.forEach((bar) => {
        const target = Number(bar.dataset.barTarget || '0');
        bar.style.width = `${Number.isFinite(target) ? target : 0}%`;
      });
      return;
    }

    const barObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = Number(el.dataset.barTarget || '0');
          // Let the browser register the 0% state before we set the target.
          requestAnimationFrame(() => {
            el.style.width = `${Number.isFinite(target) ? target : 0}%`;
          });
          obs.unobserve(el);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    bars.forEach((bar) => barObserver.observe(bar));
  };

  initJessReveal();
  initJessBars();

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

  // TeamWorks Course 05 - Investment grid "Learn more" accordion (static export)
  const tw05InvestGrid = document.querySelector('[data-tw05-invest-grid]');
  if (tw05InvestGrid) {
    const btns = Array.from(tw05InvestGrid.querySelectorAll('[data-tw05-invest-btn]'));
    const descs = Array.from(tw05InvestGrid.querySelectorAll('[data-tw05-invest-desc]'));
    let openIndex = -1;

    const setOpen = (idx) => {
      const closing = idx === openIndex;
      openIndex = closing ? -1 : idx;

      btns.forEach((btn) => {
        if (!(btn instanceof HTMLElement)) return;
        const i = Number(btn.getAttribute('data-index') ?? '-1');
        const isOpen = i === openIndex;
        const icon = btn.querySelector('svg');
        if (icon) icon.classList.toggle('rotate-180', isOpen);
      });

      descs.forEach((desc) => {
        if (!(desc instanceof HTMLElement)) return;
        const i = Number(desc.getAttribute('data-index') ?? '-1');
        const isOpen = i === openIndex;

        if (isOpen) {
          desc.classList.remove('max-h-0');
          desc.classList.add('max-h-48', 'mt-4');
        } else {
          desc.classList.add('max-h-0');
          desc.classList.remove('max-h-48', 'mt-4');
        }

        // Update card shadow
        const card = desc.closest('.border-2');
        if (card) {
          if (isOpen) {
            card.classList.remove('shadow-sm', 'hover:shadow-md');
            card.classList.add('shadow-xl');
          } else {
            card.classList.add('shadow-sm', 'hover:shadow-md');
            card.classList.remove('shadow-xl');
          }
        }
      });
    };

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-index') ?? '0');
        setOpen(idx);
      });
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


  // Static-safe reveal + stagger (works after HTML export)
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');

      // If this is a reveal group, apply stagger delays to items
      if (el instanceof HTMLElement && el.hasAttribute('data-reveal-group')) {
        const stagger = Number(el.getAttribute('data-stagger') ?? '80');

        // Prefer explicit items; fallback to direct children (Jess pages) if missing.
        const explicit = Array.from(el.querySelectorAll('[data-reveal-item]'));
        const targets = explicit.length
          ? explicit
          : Array.from(el.children);

        targets.forEach((child, idx) => {
          if (!(child instanceof HTMLElement)) return;
          child.style.transitionDelay = `${Math.max(0, idx) * stagger}ms`;
        });
      }

      revealObserver.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach((el) => {
    revealObserver.observe(el);
  });

  // Jess accordion smooth open/close (details/summary)
  const accordions = Array.from(document.querySelectorAll('[data-jess-accordion]'));
  accordions.forEach((details) => {
    if (!(details instanceof HTMLDetailsElement)) return;
    const content = details.querySelector('[data-jess-accordion-content]');
    if (!(content instanceof HTMLElement)) return;

    // Set initial state
    const setInstantHeight = () => {
      if (details.open) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0px';
      }
    };

    setInstantHeight();

    details.addEventListener('toggle', () => {
      // Animate via max-height
      content.style.transition = 'max-height 300ms ease, opacity 300ms ease';
      if (details.open) {
        content.style.opacity = '1';
        // from current 0 to scrollHeight
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.opacity = '0.98';
        content.style.maxHeight = '0px';
      }
    });

    // Recalculate on resize
    window.addEventListener('resize', () => {
      // Avoid expensive work if closed
      if (details.open) content.style.maxHeight = content.scrollHeight + 'px';
    });
  });

  // Generic static modal (works after export)
  // Usage:
  // - Trigger: element with [data-modal-open="modal-id"]
  // - Modal wrapper: <div data-modal id="modal-id" class="hidden"> ... </div>
  // - Close: any element with [data-modal-close] inside modal (including backdrop)
  const modalOpeners = Array.from(document.querySelectorAll('[data-modal-open]'));
  const modalsById = new Map();
  Array.from(document.querySelectorAll('[data-modal]')).forEach((m) => {
    if (m instanceof HTMLElement && m.id) modalsById.set(m.id, m);
  });

  const openModal = (id) => {
    const modal = modalsById.get(id);
    if (!modal) return;

    // JESS-only: animate modal open (keep other sites unchanged)
    const isJess = !!modal.closest('.site-jess');
    if (isJess) {
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
      modal.classList.add('jess-modal');
      // Start state (CSS reads .jess-modal:not(.is-open))
      modal.classList.remove('is-open');
      requestAnimationFrame(() => {
        modal.classList.add('is-open');
      });
    } else {
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
    }

    document.body.style.overflow = 'hidden';
  };

  const closeModal = (modal) => {
    if (!(modal instanceof HTMLElement)) return;

    const isJess = !!modal.closest('.site-jess');
    if (isJess) {
      // Animate out, then hide.
      modal.classList.remove('is-open');
      window.setTimeout(() => {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
      }, 200);
    } else {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
    }

    // Restore scroll only if no other modals are open
    const anyOpen = Array.from(modalsById.values()).some((m) => !m.classList.contains('hidden'));
    if (!anyOpen) document.body.style.overflow = '';
  };

  modalOpeners.forEach((opener) => {
    opener.addEventListener('click', (e) => {
      const id = opener.getAttribute('data-modal-open');
      if (!id) return;
      e.preventDefault();
      openModal(id);
    });
  });

  modalsById.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (target.closest('[data-modal-close]')) {
        closeModal(modal);
      }
    });
  });

  // ESC to close any open modal
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    modalsById.forEach((modal) => {
      if (!modal.classList.contains('hidden')) closeModal(modal);
    });
  });

  // Generic static carousel (show one slide at a time)
  // Usage:
  // - Wrapper: [data-carousel]
  // - Slides: [data-carousel-slide]
  // - Buttons: [data-carousel-prev], [data-carousel-next]
  Array.from(document.querySelectorAll('[data-carousel]')).forEach((carousel) => {
    if (!(carousel instanceof HTMLElement)) return;
    const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]')).filter((s) => s instanceof HTMLElement);
    if (!slides.length) return;

    let current = Number(carousel.getAttribute('data-carousel-initial') ?? '0') || 0;
    const show = (idx) => {
      current = ((idx % slides.length) + slides.length) % slides.length;
      slides.forEach((s, i) => {
        if (!(s instanceof HTMLElement)) return;
        s.classList.toggle('hidden', i !== current);
      });
    };

    // Initial: hide all but current
    show(current);

    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); show(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); show(current + 1); });
  });

  // Horizontal scroller controls (for desktop card strips)
  // Usage:
  // - Scroll container: [data-scroll-container]
  // - Buttons: [data-scroll-prev], [data-scroll-next] within the same section
  Array.from(document.querySelectorAll('[data-scroll-prev], [data-scroll-next]')).forEach((btn) => {
    if (!(btn instanceof HTMLElement)) return;
    const section = btn.closest('section') || btn.parentElement;
    if (!section) return;
    const container = section.querySelector('[data-scroll-container]');
    if (!(container instanceof HTMLElement)) return;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const delta = btn.hasAttribute('data-scroll-prev') ? -1 : 1;
      const amount = Math.max(280, Math.min(520, container.clientWidth * 0.8));
      container.scrollBy({ left: delta * amount, behavior: 'smooth' });
    });
  });

});


