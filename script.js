/**
 * Refined interactivity for multi-page website
 * - Form feedback remains
 * - Smooth scroll only for in-page anchors (e.g., long pages)
 * - Scroll-based nav highlighting REMOVED (handled via HTML)
 */

(function () {
  'use strict';

  // Respect user motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ==== 1. Smooth Scrolling (for in-page anchors only) ====
  // Only applies if link points to an ID on the SAME page (e.g., #top, #faq)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;

    // Check if target exists on this page
    const target = document.querySelector(href);
    if (!target) return; // If #about doesn't exist here, do nothing

    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Calculate offset (account for sticky header)
      const header = document.querySelector('.site-header');
      const offset = header ? header.offsetHeight + 20 : 20;

      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      if (prefersReducedMotion) {
        window.scrollTo(0, top);
      } else {
        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==== 2. Elegant Form Submission Feedback (Contact Page Only) ====
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = this.querySelector('#name');
      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'there';

      // Create subtle in-page success message
      const feedback = document.createElement('div');
      feedback.textContent = `Thank you, ${name}! We'll be in touch soon.`;
      feedback.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--color-primary);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: var(--radius-md);
        font-weight: var(--font-weight-semibold);
        box-shadow: var(--shadow-md);
        z-index: 1000;
        opacity: 0;
        animation: fadeInUp 0.4s forwards;
      `;

      // Inject animation style if not present
      if (!document.getElementById('js-feedback-style')) {
        const style = document.createElement('style');
        style.id = 'js-feedback-style';
        style.textContent = `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translate(-50%, 20px);
            }
            to {
              opacity: 1;
              transform: translate(-50%, 0);
            }
          }
        `;
        document.head.appendChild(style);
      }

      document.body.appendChild(feedback);

      // Auto-dismiss after 4 seconds
      setTimeout(() => {
        feedback.style.animation = 'fadeInUp 0.4s reverse';
        setTimeout(() => feedback.remove(), 400);
      }, 4000);

      // Reset form
      this.reset();
    });
  }
})();