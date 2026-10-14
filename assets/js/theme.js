/* ==========================================================================
   theme.js — colour theme with persistence
   Reads/writes data-theme on <html>.

   Defaults to DARK: this brand is dark-first (cyan-on-indigo), so we do not
   follow the OS preference on a first visit — a light OS setting would
   otherwise flip the whole site.

   The control is a sun/moon symbol drawn in CSS from data-theme, so this file
   only maintains the accessible name and pressed state. The button's own text
   stays in the DOM as a fallback but is collapsed to zero size by CSS.
   ========================================================================== */

const STORAGE_KEY = 'kh-theme';
const root = document.documentElement;

function preferred() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return 'dark';
}

function apply(theme) {
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    const next = theme === 'light' ? 'dark' : 'light';
    btn.setAttribute('aria-pressed', String(theme === 'light'));
    btn.setAttribute('aria-label', `Switch to ${next} theme`);
    btn.setAttribute('title', `Switch to ${next} theme`);
  });
}

apply(preferred());

document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  });
});

export {};
