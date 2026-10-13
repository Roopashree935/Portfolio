/* ==========================================================================
   navigation.js — mobile navigation toggle
   ========================================================================== */

const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.dataset.open === 'true';
    menu.dataset.open = String(!open);
    toggle.setAttribute('aria-expanded', String(!open));
  });

  // close on Escape, and when a link is followed
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      menu.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

export {};
