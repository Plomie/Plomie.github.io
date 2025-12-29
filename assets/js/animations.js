// Scroll Animation with IntersectionObserver
const animateOnScroll = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
};

// Run on load
if ('IntersectionObserver' in window) {
  document.addEventListener('DOMContentLoaded', animateOnScroll);
}