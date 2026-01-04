class ContactForm {
  constructor() {
    this.form = document.querySelector('.contact-form');
    this.responseEl = document.getElementById('form-response');
  }
  
  init() {
    if (!this.form) return;
    
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation
    ['name', 'email', 'message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('blur', () => this.validateField(el));
        el.addEventListener('input', () => this.validateField(el));
      }
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    
    // Validate each field
    ['name', 'email', 'message'].forEach(id => {
      const el = document.getElementById(id);
      const errorEl = document.getElementById(`${id}-error`);
      
      if (!this.validateField(el)) {
        isValid = false;
      }
    });
    
    if (isValid) {
      this.submitForm();
    }
  }
  
  validateField(element) {
    const id = element.id;
    const errorEl = document.getElementById(`${id}-error`);
    const value = element.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    if (!value) {
      isValid = false;
      errorMessage = this.getTranslation('fieldRequired');
    } else if (id === 'email' && !this.isValidEmail(value)) {
      isValid = false;
      errorMessage = this.getTranslation('invalidEmail');
    }
    
    if (!isValid) {
      this.showError(element, errorEl, errorMessage);
    } else {
      this.clearError(element, errorEl);
    }
    
    return isValid;
  }
  
  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  showError(element, errorElement, message) {
    element.setAttribute('aria-invalid', 'true');
    element.classList.add('input-error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  
  clearError(element, errorElement) {
    element.setAttribute('aria-invalid', 'false');
    element.classList.remove('input-error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }
  
  async submitForm() {
    this.showFormResponse(this.getTranslation('sending'), 'info');
    
    // Simulate form submission
    try {
      // In a real implementation, this would be a fetch request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      this.showFormResponse(this.getTranslation('messageSent'), 'success');
      
      // Reset form
      this.form.reset();
      
      // Clear errors
      ['name', 'email', 'message'].forEach(id => {
        const el = document.getElementById(id);
        const errorEl = document.getElementById(`${id}-error`);
        if (el && errorEl) {
          this.clearError(el, errorEl);
        }
      });
      
    } catch (error) {
      this.showFormResponse(this.getTranslation('submissionError'), 'error');
      console.error('Form submission error:', error);
    }
  }
  
  showFormResponse(message, type) {
    this.responseEl.textContent = message;
    this.responseEl.className = `form-response ${type}`;
    this.responseEl.style.display = 'block';
    
    // Auto-hide success message after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        this.responseEl.style.display = 'none';
      }, 5000);
    }
  }
  
  getTranslation(key) {
    const translations = {
      en: {
        fieldRequired: 'This field is required',
        invalidEmail: 'Please enter a valid email address',
        sending: 'Sending your message...',
        messageSent: 'Thank you! Your message has been sent successfully.',
        submissionError: 'Sorry, there was an error sending your message. Please try again.'
      },
      nl: {
        fieldRequired: 'Dit veld is verplicht',
        invalidEmail: 'Voer een geldig e-mailadres in',
        sending: 'Je bericht wordt verzonden...',
        messageSent: 'Bedankt! Je bericht is succesvol verzonden.',
        submissionError: 'Sorry, er is een fout opgetreden bij het verzenden van je bericht. Probeer het opnieuw.'
      },
      fr: {
        fieldRequired: 'Ce champ est obligatoire',
        invalidEmail: 'Veuillez entrer une adresse email valide',
        sending: 'Envoi de votre message...',
        messageSent: 'Merci ! Votre message a été envoyé avec succès.',
        submissionError: 'Désolé, une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.'
      },
      de: {
        fieldRequired: 'Dieses Feld ist erforderlich',
        invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        sending: 'Ihre Nachricht wird gesendet...',
        messageSent: 'Danke! Ihre Nachricht wurde erfolgreich gesendet.',
        submissionError: 'Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
      }
    };
    
    const lang = document.documentElement.lang || 'en';
    return translations[lang]?.[key] || translations.en[key];
  }
}

// Initialize contact form
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = new ContactForm();
  contactForm.init();
});