/* ==========================================================================
   theme.js — colour theme with persistence
   Reads/writes data-theme on <html>.

   Defaults to DARK: this brand is dark-first (cyan-on-slate), so we do not
   follow the OS preference on a first visit — a light OS setting would
   otherwise flip the whole site. The toggle still lets anyone choose light,
   and that choice is remembered.
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
