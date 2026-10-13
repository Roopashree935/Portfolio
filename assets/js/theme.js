/* ==========================================================================
   theme.js — colour theme with persistence
   Reads/writes data-theme on <html>; respects the OS preference on first visit.
   ========================================================================== */

const STORAGE_KEY = 'kh-theme';
const root = document.documentElement;

function preferred() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function apply(theme) {
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(theme === 'light'));
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
