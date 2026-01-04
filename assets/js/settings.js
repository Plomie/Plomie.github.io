document.addEventListener('DOMContentLoaded', () => {
  const darkModeBtn = document.getElementById('dark-mode-toggle');
  
  // Initialize dark mode toggle
  if (darkModeBtn) {
    const isDark = document.documentElement.hasAttribute('data-theme');
    darkModeBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    
    darkModeBtn.addEventListener('click', () => {
      const currentlyDark = document.documentElement.hasAttribute('data-theme');
      
      if (currentlyDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        darkModeBtn.setAttribute('aria-pressed', 'false');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeBtn.setAttribute('aria-pressed', 'true');
      }
      
      // Dispatch theme change event for other components
      document.dispatchEvent(new CustomEvent('themeChanged', {
        detail: { darkMode: !currentlyDark }
      }));
    });
  }
});