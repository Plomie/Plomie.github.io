class I18n {
  constructor() {
    this.translations = {};
    this.currentLang = 'en';
    this.languageSelect = document.getElementById('language-select');
  }
  
  async loadTranslations(lang) {
    try {
      const response = await fetch(`/assets/translations/${lang}.json`);
      if (!response.ok) throw new Error('Failed to load translations');
      this.translations[lang] = await response.json();
      this.currentLang = lang;
      this.applyTranslations();
      return true;
    } catch (error) {
      console.error('Error loading translations:', error);
      return false;
    }
  }
  
  async init() {
    // Get saved language or browser preference
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    
    this.currentLang = savedLang || browserLang || 'en';
    
    // Load translations
    const success = await this.loadTranslations(this.currentLang);
    
    // If failed, fall back to English
    if (!success) {
      await this.loadTranslations('en');
    }
    
    // Set up language change handler
    if (this.languageSelect) {
      this.languageSelect.value = this.currentLang;
      this.languageSelect.addEventListener('change', (e) => {
        this.changeLanguage(e.target.value);
      });
    }
    
    // Set HTML lang attribute
    document.documentElement.setAttribute('lang', this.currentLang);
  }
  
  changeLanguage(lang) {
    if (lang === this.currentLang) return;
    
    localStorage.setItem('language', lang);
    
    // Show loading indicator
    const originalTitle = document.title;
    document.title = 'Loading...';
    
    // Load new translations
    this.loadTranslations(lang).then(success => {
      if (success) {
        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
        
        // Update page title
        const pageKey = this.getPageKey();
        if (this.translations[lang][pageKey + 'Title']) {
          document.title = this.translations[lang][pageKey + 'Title'];
        }
      } else {
        document.title = originalTitle;
      }
    });
  }
  
  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (this.translations[this.currentLang] && this.translations[this.currentLang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = this.translations[this.currentLang][key];
        } else {
          el.textContent = this.translations[this.currentLang][key];
        }
      }
    });
    
    // Update document title if possible
    const pageKey = this.getPageKey();
    const titleKey = pageKey + 'Title';
    if (this.translations[this.currentLang][titleKey]) {
      document.title = this.translations[this.currentLang][titleKey];
    }
  }
  
  getPageKey() {
    const path = window.location.pathname;
    const pages = {
      '/': 'home',
      '/index.html': 'home',
      '/about.html': 'about',
      '/services.html': 'services',
      '/contact.html': 'contact',
      '/settings.html': 'settings'
    };
    return pages[path] || 'home';
  }
}

// Initialize translations
document.addEventListener('DOMContentLoaded', () => {
  const i18n = new I18n();
  i18n.init();
});