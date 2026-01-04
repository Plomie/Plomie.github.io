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
      if (mobileMenuToggle) {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (nav && nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        mobileMenuToggle && !mobileMenuToggle.contains(e.target)) {
      nav.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
  
  // Close menu when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav && nav.classList.contains('active')) {
      nav.classList.remove('active');
      if (mobileMenuToggle) {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }
  });
  
  // Active link highlighting
  const currentPage = window.location.pathname;
  document.querySelectorAll('.nav__link').forEach(link => {
    if (link.href.includes(currentPage) || 
        (currentPage === '/' && link.href.includes('index.html')) ||
        (currentPage === '/index.html' && link.href.includes('/'))) {
      link.classList.add('active');
    }
  });
  
  // Initialize theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  // Skip link functionality
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.tabIndex = -1;
        mainContent.focus();
        setTimeout(() => {
          mainContent.removeAttribute('tabIndex');
        }, 1000);
      }
    });
  }
});

// Theme change event listener
document.addEventListener('themeChanged', (e) => {
  console.log('Theme changed:', e.detail.darkMode ? 'dark' : 'light');
});