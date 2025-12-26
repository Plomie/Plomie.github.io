// Sophisticated interactivity with refined UX and visual polish
// Fully compatible with your existing HTML and CSS — no changes needed

(function () {
  'use strict';

  // Respect user motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ==== 1. Smooth Scrolling (Enhanced) ====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Calculate offset (account for sticky header if present)
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

  // ==== 2. Elegant Form Submission Feedback ====
  const contactForm = document.querySelector('.contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = this.querySelector('input[type="text"]');
      const name = nameInput ? nameInput.value.trim() : 'there';
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value : '';

      // Create subtle in-page success message (no alert!)
      const feedback = document.createElement('div');
      feedback.textContent = `Thank you, ${name}! Your message has been received. We’ll contact you soon at ${email}.`;
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

      // Inject feedback style if not already present
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

  // ==== 3. Refined Scroll-Based Active Navigation ====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  if (sections.length && navLinks.length) {
    // Debounced scroll handler for performance
    let ticking = false;
    function updateActiveNav() {
      const scrollPos = window.scrollY + 100; // 100px tolerance

      let currentId = '';
      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          currentId = section.getAttribute('id');
          break;
        }
      }

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveNav);
        ticking = true;
      }
    });

    // Initial check
    updateActiveNav();
  }

  // Optional: Add minimal active style via JS if not in CSS
  if (navLinks.length && !document.querySelector('nav a.active')) {
    const activeStyle = document.createElement('style');
    activeStyle.textContent = `
      nav a.active {
        color: var(--color-primary);
        font-weight: var(--font-weight-bold);
        position: relative;
      }
      nav a.active::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--color-primary);
        border-radius: 2px;
      }
    `;
    document.head.appendChild(activeStyle);
  }
})();