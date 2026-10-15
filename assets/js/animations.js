/* ==========================================================================
   animations.js — scroll reveal via IntersectionObserver
   Adds .is-visible to .reveal elements as they enter the viewport.
   ========================================================================== */

/* This module owns the flag that cancels the CSS failsafe. If this file never
   runs, the flag stays absent and animations.css reveals everything after 2s —
   so a failed module can never leave the page blank. Deliberately NOT main.js:
   if main.js loaded but this file did not, a main.js flag would cancel the
   failsafe and the content would stay hidden forever. */
document.documentElement.dataset.revealReady = 'true';

const targets = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

export {};
