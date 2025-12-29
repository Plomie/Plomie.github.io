const toggleButton = document.querySelector('.dark-mode-toggle');
const html = document.documentElement;

// Check system preference and localStorage
const storedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
  html.setAttribute('data-theme', 'dark');
}

// Toggle theme
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      toggleButton.querySelector('.dark-mode-toggle__icon').textContent = '🌙';
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleButton.querySelector('.dark-mode-toggle__icon').textContent = '☀️';
    }
  });
}