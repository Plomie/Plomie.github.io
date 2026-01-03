document.addEventListener('DOMContentLoaded', () => {
  const darkModeBtn = document.getElementById('dark-mode-toggle');
  const langSelect = document.getElementById('language-select');
  const htmlEl = document.documentElement;

  // --- Language ---
  const savedLang = localStorage.getItem('language') || 'en';
  if (langSelect) {
    langSelect.value = savedLang;
  }

  // --- Dark Mode ---
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  let isDark = false;
  if (savedTheme === 'dark') {
    isDark = true;
  } else if (savedTheme === 'light') {
    isDark = false;
  } else {
    // Respect system preference if no user choice
    isDark = systemPrefersDark;
  }

  if (isDark) {
    htmlEl.setAttribute('data-theme', 'dark');
  } else {
    htmlEl.removeAttribute('data-theme');
  }

  if (darkModeBtn) {
    darkModeBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  // --- Event Listeners ---

  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
      const currentlyDark = htmlEl.hasAttribute('data-theme');
      if (currentlyDark) {
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

  if (langSelect) {
    langSelect.addEventListener('change', () => {
      const newLang = langSelect.value;
      localStorage.setItem('language', newLang);
      // Reload to let i18n.js apply new language consistently
      window.location.reload();
    });
  }
});