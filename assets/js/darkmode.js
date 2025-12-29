// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');
const html = document.documentElement;

if (savedTheme === 'dark') {
  html.setAttribute('data-theme', 'dark');
}
// No toggle logic here anymore — handled in settings.js