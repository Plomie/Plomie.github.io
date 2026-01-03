document.addEventListener('DOMContentLoaded', () => {
  const darkModeBtn = document.getElementById('dark-mode-toggle');
  const langSelect = document.getElementById('language-select');
  const htmlEl = document.documentElement;

  // Load and apply saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    htmlEl.setAttribute('data-theme', 'dark');
    if (darkModeBtn) darkModeBtn.setAttribute('aria-pressed', 'true');
  }

  // Load and apply saved language
  const savedLang = localStorage.getItem('language') || 'en';
  if (langSelect) langSelect.value = savedLang;

  // Dark mode toggle
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
      const isDark = htmlEl.hasAttribute('data-theme');
      if (isDark) {
        htmlEl.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        darkModeBtn.setAttribute('aria-pressed', 'false');
      } else {
        htmlEl.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeBtn.setAttribute('aria-pressed', 'true');
      }
    });
  }

  // Language change → reload page after saving
  if (langSelect) {
    langSelect.addEventListener('change', () => {
      const newLang = langSelect.value;
      localStorage.setItem('language', newLang);
      window.location.reload();
    });
  }
});