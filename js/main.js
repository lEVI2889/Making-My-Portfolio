/**
 * Obsidian Terminal - Main Application Coordinator
 * Pure vanilla JavaScript with zero third-party dependencies.
 * Strict Ponytail standard (<120 LOC).
 */

(function () {
  'use strict';

  function initNavObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    if (!sections.length || !navLinks.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });

    sections.forEach(sec => observer.observe(sec));
  }

  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const panel = document.getElementById('mobile-menu');
    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isExpanded));
      panel.hidden = isExpanded;
    });

    panel.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        btn.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
      });
    });
  }

  function initTelemetry() {
    const clockEl = document.getElementById('footer-utc-clock');
    const latencyEl = document.getElementById('footer-latency');

    function updateClock() {
      if (clockEl) {
        const d = new Date();
        clockEl.textContent = `UTC ${d.toISOString().slice(11, 19)}`;
      }
    }

    function updateLatency() {
      if (latencyEl) {
        const ping = Math.floor(Math.random() * (28 - 22 + 1)) + 22;
        latencyEl.textContent = `RTT: ${ping}ms`;
      }
    }

    updateClock();
    updateLatency();
    setInterval(updateClock, 1000);
    setInterval(updateLatency, 3500);
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '#!') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
          if (history.pushState) history.pushState(null, null, targetId);
        }
      });
    });
  }

  function initApp() {
    if (typeof window.initTerminal === 'function') window.initTerminal();
    if (typeof window.initProjects === 'function') window.initProjects();
    if (typeof window.initTimeline === 'function') window.initTimeline();
    if (typeof window.initDispatch === 'function') window.initDispatch();

    initNavObserver();
    initMobileMenu();
    initTelemetry();
    initSmoothScroll();
  }

  if (typeof window !== 'undefined') {
    window.initApp = initApp;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initApp, initNavObserver, initTelemetry };
  }
})();
