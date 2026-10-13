/* ==========================================================================
   main.js — module entry point
   Imported by every page. Keep this file thin: orchestration only.
   ========================================================================== */

/** Site-wide constants. */
export const SITE = Object.freeze({
  name: 'Kartik H.',
  origin: 'https://portfolio.techstudyhubcore.in',
  email: 'kartik.h6822@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/kartik-h6',
    github: 'https://github.com/kartik-h6',
  },
});

/** Mark the current page's nav link for assistive tech and styling. */
function markCurrentNav() {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach((a) => {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });
}

function boot() {
  markCurrentNav();
  document.documentElement.dataset.enhanced = 'true';
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
