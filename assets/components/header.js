class SiteHeader extends HTMLElement {
  connectedCallback() {
    const currentPage = window.location.pathname;
    
    this.innerHTML = `
      <header class="header" role="banner">
        <div class="container header__inner">
          <a href="/" class="logo bbh-bartle-regular" aria-label="Home">ModernBiz</a>
          <button class="mobile-menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav class="nav" role="navigation">
            <button class="mobile-menu-close" aria-label="Close menu">&times;</button>
            <ul class="nav__list">
              <li><a href="/" class="nav__link ${currentPage === '/' || currentPage === '/index.html' ? 'active' : ''}">Home</a></li>
              <li><a href="/about.html" class="nav__link ${currentPage.includes('about') ? 'active' : ''}">About</a></li>
              <li><a href="/services.html" class="nav__link ${currentPage.includes('services') ? 'active' : ''}">Services</a></li>
              <li><a href="/contact.html" class="nav__link ${currentPage.includes('contact') ? 'active' : ''}">Contact</a></li>
              <li><a href="/settings.html" class="nav__link ${currentPage.includes('settings') ? 'active' : ''}">Settings</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);