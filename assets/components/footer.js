class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="container footer-container">
          <p class="inter-normal">&copy; ${new Date().getFullYear()} Modern Business. All rights reserved.</p>
          <div class="footer-links">
            <a href="/about.html" class="inter-medium">About</a>
            <a href="/services.html" class="inter-medium">Services</a>
            <a href="/contact.html" class="inter-medium">Contact</a>
            <a href="/settings.html" class="inter-medium">Settings</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);