// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle && nav) {
  mobileMenuToggle.addEventListener('click', () => {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
  });
}

// Active Link Highlight (based on current page)
document.querySelectorAll('.nav__link').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});