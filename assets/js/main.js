// Component registration
import './components/header.js';
import './components/footer.js';
import './components/mobile-menu.js';

document.addEventListener('DOMContentLoaded', () => {
  // Add loaded class for critical CSS transition
  document.querySelector('.header').classList.add('loaded');
  document.querySelector('.hero')?.classList.add('loaded');
  document.querySelector('.about-hero')?.classList.add('loaded');
  document.querySelector('.section')?.classList.add('loaded');
  
  // Initialize mobile menu
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const nav = document.querySelector('.nav');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
      nav.classList.add('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (mobileMenuClose && nav) {
    mobileMenuClose.addEventListener('click', () => {
      nav.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !mobileMenuToggle.contains(e.target)) {
      nav.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
  
  // Active link highlighting
  document.querySelectorAll('.nav__link').forEach(link => {
    if (window.location.pathname.includes(link.pathname)) {
      link.classList.add('active');
    }
  });
  
  // Initialize theme
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});