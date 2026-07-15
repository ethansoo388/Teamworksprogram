/* ---------------------------------------------------------------------------
   Landing page JS — inlined into landing-shell.html at build time.
   Scope: Meta Pixel bootstrap + Lead/WhatsApp events + sticky CTA bar.
   No libraries. Keep this file small — it ships inline.
   --------------------------------------------------------------------------- */
(function () {
  'use strict';

  // ── Meta Pixel bootstrap ──────────────────────────────────────────────
  // Pixel ID is set in the shell head (window.META_PIXEL_ID). While it still
  // holds the REPLACE placeholder, the fbq stub exists (so calls never throw)
  // but nothing is sent to Facebook.
  var PIXEL_ID = window.META_PIXEL_ID || '';
  // Fire only on the production domain — staging/local visits must not
  // pollute the real pixel's data or retargeting audiences.
  var pixelHost = window.location.hostname.indexOf('www.ciagile.com') === 0 ||
    window.location.hostname === 'ciagile.com';
  var pixelLive = pixelHost && PIXEL_ID && PIXEL_ID.indexOf('REPLACE') === -1;

  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    if (!pixelLive) return; // stub only — do not load fbevents.js yet
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  if (pixelLive) {
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  // ── Custom event: WhatsApp click ──────────────────────────────────────
  var waLinks = document.querySelectorAll('[data-wa-link]');
  for (var i = 0; i < waLinks.length; i++) {
    waLinks[i].addEventListener('click', function () {
      window.fbq('trackCustom', 'WhatsAppClick', {
        placement: this.getAttribute('data-placement') || 'unknown'
      });
    });
  }

  // ── Lead event ────────────────────────────────────────────────────────
  // Preferred: Calendly's booking-confirmed postMessage (fires on actual
  // bookings). Fallback: if the embedded widget is not Calendly, fire Lead
  // on first interaction with the calendar container instead.
  var leadFired = false;
  function fireLead(source) {
    if (leadFired) return;
    leadFired = true;
    window.fbq('track', 'Lead', { source: source });
  }

  window.addEventListener('message', function (e) {
    if (e.data && e.data.event === 'calendly.event_scheduled') {
      fireLead('calendly_booking');
    }
  });

  var calendar = document.getElementById('calendar-embed');
  if (calendar) {
    calendar.addEventListener('pointerdown', function () {
      var isCalendly = calendar.querySelector('iframe[src*="calendly"]');
      if (!isCalendly) fireLead('widget_interaction');
    });
  }

  // ── Lazy looping clips (Lia story, SOPs/workflows) ─────────────────────
  // Each <video data-video-src> ships with no src (preload=none + poster
  // only). The mp4 is attached and played only when that section approaches
  // the screen, so the clips never compete with initial page load.
  var lazyClips = document.querySelectorAll('video[data-video-src]');
  function armLazyClip(clip) {
    function startClip() {
      if (clip.src) return;
      clip.src = clip.getAttribute('data-video-src');
      clip.muted = true; // required for programmatic autoplay
      clip.load();
      var playing = clip.play();
      if (playing && playing.catch) playing.catch(function () {});
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries, obs) {
        if (entries[0].isIntersecting) {
          startClip();
          obs.disconnect();
        }
      }, { rootMargin: '300px 0px' }).observe(clip);
    } else {
      startClip();
    }
  }
  for (var c = 0; c < lazyClips.length; c++) armLazyClip(lazyClips[c]);

  // ── Calendly widget: lazy-inject the script near the booking section ──
  // The inline-widget div ships empty; Calendly's widget.js (which scans
  // for .calendly-inline-widget on load) is added when the visitor nears
  // the booking section, or immediately when any #booking CTA is clicked.
  // A skeleton (spinner + text) covers the container until Calendly paints,
  // and the container is resized live from Calendly's page_height messages
  // so there is never dead space below the widget.
  var calendlyHost = document.querySelector('.calendly-inline-widget');
  if (calendlyHost) {
    var calendlyContainer = document.getElementById('calendar-embed');
    var calendlyLoaded = false;
    var loadCalendly = function () {
      if (calendlyLoaded) return;
      calendlyLoaded = true;
      var s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.body.appendChild(s);
    };
    var bookingLinks = document.querySelectorAll('a[href="#booking"]');
    for (var b = 0; b < bookingLinks.length; b++) {
      bookingLinks[b].addEventListener('click', loadCalendly);
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries, obs) {
        if (entries[0].isIntersecting) {
          loadCalendly();
          obs.disconnect();
        }
      }, { rootMargin: '1400px 0px' }).observe(calendlyHost);
    } else {
      loadCalendly();
    }

    // Warm start: fetch the widget shortly after the page finishes loading
    // (after LCP/critical work), no matter where the visitor is. By the
    // time anyone reads enough to click a CTA, the calendar is already
    // rendered — no 2-3s boot delay on direct jumps to #booking.
    var warmStart = function () { setTimeout(loadCalendly, 1200); };
    if (document.readyState === 'complete') {
      warmStart();
    } else {
      window.addEventListener('load', warmStart);
    }

    // Calendly reports its rendered content height on every step change.
    // Track it so the widget always fits snugly (no blank tail after the
    // calendar, enough room for the questions form), and use the first
    // height report as the "painted" signal that hides the skeleton.
    window.addEventListener('message', function (e) {
      if (!e.origin || e.origin.indexOf('calendly.com') === -1) return;
      var d = e.data;
      if (d && d.event === 'calendly.page_height' && d.payload && d.payload.height) {
        calendlyHost.style.height = d.payload.height;
        if (calendlyContainer) calendlyContainer.classList.add('lp-cal-loaded');
      }
    });
  }

  // ── Sticky mobile CTA bar ─────────────────────────────────────────────
  // Shown once the hero CTA scrolls out of view; hidden again while the
  // booking section is on screen (so it never covers the calendar).
  var bar = document.getElementById('sticky-cta');
  // The hero deliberately has no CTA button — the bar appears once the hero
  // section itself scrolls out of view.
  var heroCta = document.getElementById('hero-cta') || document.getElementById('hero');
  var booking = document.getElementById('booking');

  if (bar && heroCta && booking && 'IntersectionObserver' in window) {
    var pastHero = false;
    var atBooking = false;

    function updateBar() {
      var show = pastHero && !atBooking;
      bar.classList.toggle('is-visible', show);
      document.body.classList.toggle('lp-sticky-on', show);
    }

    new IntersectionObserver(function (entries) {
      pastHero = !entries[0].isIntersecting;
      updateBar();
    }).observe(heroCta);

    new IntersectionObserver(function (entries) {
      atBooking = entries[0].isIntersecting;
      updateBar();
    }, { rootMargin: '0px 0px -20% 0px' }).observe(booking);
  } else if (bar) {
    // No IntersectionObserver: keep the bar always visible on mobile.
    bar.classList.add('is-visible');
    document.body.classList.add('lp-sticky-on');
  }
})();
