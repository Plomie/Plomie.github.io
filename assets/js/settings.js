// DOM Elements
const darkModeBtn = document.getElementById('dark-mode-toggle');
const langSelect = document.getElementById('language-select');
const htmlEl = document.documentElement;

// Load saved preferences
const savedTheme = localStorage.getItem('theme') || 'light';
const savedLang = localStorage.getItem('language') || 'en';

// Apply saved theme
if (savedTheme === 'dark') {
  htmlEl.setAttribute('data-theme', 'dark');
  if (darkModeBtn) darkModeBtn.setAttribute('aria-pressed', 'true');
}

// Apply saved language
if (langSelect) {
  langSelect.value = savedLang;
  htmlEl.setAttribute('lang', savedLang);
  updateLanguage(savedLang);
}

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

// Language switch
if (langSelect) {
  langSelect.addEventListener('change', () => {
    const newLang = langSelect.value;
    localStorage.setItem('language', newLang);
    htmlEl.setAttribute('lang', newLang);
    updateLanguage(newLang);
  });
}

// Update all translatable text on page
function updateLanguage(lang) {
  // These must match element IDs or data attributes you want to translate
  document.title = translations[lang].settings + ' | Modern Business';
  setTextContent('settings-heading', translations[lang].settings);
  setAllText('.nav__link[href="/"]', translations[lang].home);
  setAllText('.nav__link[href="/about.html"]', translations[lang].about);
  setAllText('.nav__link[href="/services.html"]', translations[lang].services);
  setAllText('.nav__link[href="/contact.html"]', translations[lang].contact);
  setAllText('.nav__link[href="/settings.html"]', translations[lang].settingsNav);
  setTextContent('appearance-heading', translations[lang].appearance);
  setTextContent('language-heading', translations[lang].language);

  // Labels
  setLabel('dark-mode-label', translations[lang].darkMode);
  setLabel('language-select-label', translations[lang].preferredLanguage);

  // Update form labels on contact page (if loaded later, this won't apply — but works for current page)
  if (document.getElementById('name')) document.querySelector('label[for="name"]').textContent = translations[lang].name;
  if (document.getElementById('email')) document.querySelector('label[for="email"]').textContent = translations[lang].email;
  if (document.getElementById('message')) document.querySelector('label[for="message"]').textContent = translations[lang].message;

  // Buttons
  const sendBtn = document.querySelector('.contact-form .btn');
  if (sendBtn) sendBtn.textContent = translations[lang].send;
}

// Helper: Set text content by ID
function setTextContent(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// Helper: Set text for all matching selectors
function setAllText(selector, text) {
  document.querySelectorAll(selector).forEach(el => {
    if (el.textContent.trim() !== '') el.textContent = text;
  });
}

// Helper: Set label (we add IDs to labels for clarity)
function setLabel(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// Add IDs to labels dynamically for translation (since HTML doesn't have them yet)
document.addEventListener('DOMContentLoaded', () => {
  const labels = document.querySelectorAll('label');
  labels.forEach(label => {
    if (label.htmlFor === 'dark-mode-toggle') label.id = 'dark-mode-label';
    if (label.htmlFor === 'language-select') label.id = 'language-select-label';
  });

  // Add hidden headings for translation (optional but clean)
  const appearanceHeading = document.createElement('h2');
  appearanceHeading.id = 'appearance-heading';
  appearanceHeading.style.display = 'none';
  document.body.appendChild(appearanceHeading);

  const languageHeading = document.createElement('h2');
  languageHeading.id = 'language-heading';
  languageHeading.style.display = 'none';
  document.body.appendChild(languageHeading);
});