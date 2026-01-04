// i18n.js — Shared internationalization module

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    settingsNav: "Settings",
    homeTitle: "Home | Modern Business",
    aboutTitle: "About | Modern Business",
    servicesTitle: "Services | Modern Business",
    contactTitle: "Contact | Modern Business",
    settingsTitle: "Settings | Modern Business",
    buildFuture: "Build Your Digital Future",
    heroText: "A modern, scalable solution for businesses ready to thrive in the digital age.",
    getStarted: "Get Started",
    whyChooseUs: "Why Choose Us",
    expertise: "Expertise",
    expertiseText: "Years of experience in delivering high-quality digital products.",
    innovation: "Innovation",
    innovationText: "We stay ahead with cutting-edge tools and modern practices.",
    support: "Support",
    supportText: "Dedicated support before, during, and after your project.",
    readyTransform: "Ready to transform your business?",
    contactUs: "Contact Us",
    ourStory: "Our Story",
    story1: "Founded in 2020, Modern Business began with a simple mission: to help companies thrive online with smart, beautiful, and functional digital experiences.",
    story2: "Today, we serve clients globally — from startups to enterprises — delivering websites, apps, and strategies that drive real results.",
    byTheNumbers: "By The Numbers",
    happyClients: "Happy Clients",
    projectsDelivered: "Projects Delivered",
    yearsInBusiness: "Years in Business",
    ourServices: "Our Services",
    webDev: "Web Development",
    webDevText: "Fast, responsive websites optimized for performance and search visibility.",
    appDesign: "App Design",
    appDesignText: "Intuitive mobile and desktop applications built with your users in mind.",
    seo: "SEO Optimization",
    seoText: "Strategic optimization to improve your search rankings and organic traffic.",
    uiux: "UI/UX Design",
    uiuxText: "User-centered design that creates engaging, intuitive digital experiences.",
    getInTouch: "Get In Touch",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    settings: "Settings",
    appearance: "Appearance",
    darkMode: "Dark Mode",
    language: "Language",
    preferredLanguage: "Preferred Language"
  },
  nl: {
    home: "Home",
    about: "Over",
    services: "Diensten",
    contact: "Contact",
    settingsNav: "Instellingen",
    homeTitle: "Home | Modern Business",
    aboutTitle: "Over | Modern Business",
    servicesTitle: "Diensten | Modern Business",
    contactTitle: "Contact | Modern Business",
    settingsTitle: "Instellingen | Modern Business",
    buildFuture: "Bouw aan jouw digitale toekomst",
    heroText: "Een moderne, schaalbare oplossing voor bedrijven die willen groeien in het digitale tijdperk.",
    getStarted: "Aan de slag",
    whyChooseUs: "Waarom voor ons kiezen?",
    expertise: "Expertise",
    expertiseText: "Jarenlange ervaring in het leveren van hoogwaardige digitale producten.",
    innovation: "Innovatie",
    innovationText: "We blijven voorop met geavanceerde tools en moderne werkwijzen.",
    support: "Ondersteuning",
    supportText: "Toegewijde ondersteuning voor, tijdens en na jouw project.",
    readyTransform: "Klaar om je bedrijf te transformeren?",
    contactUs: "Neem contact op",
    ourStory: "Ons Verhaal",
    story1: "Opgericht in 2020, begon Modern Business met een eenvoudige missie: bedrijven helpen om online te gedijen met slimme, mooie en functionele digitale ervaringen.",
    story2: "Vandaag de dag bedienen we klanten wereldwijd — van startups tot grote ondernemingen — met websites, apps en strategieën die echte resultaten opleveren.",
    byTheNumbers: "In Cijfers",
    happyClients: "Tevreden Klanten",
    projectsDelivered: "Afgeronde Projecten",
    yearsInBusiness: "Jaren Actief",
    ourServices: "Onze Diensten",
    webDev: "Webontwikkeling",
    webDevText: "Snelle, responsieve websites geoptimaliseerd voor prestaties en zoekmachine zichtbaarheid.",
    appDesign: "App Ontwerp",
    appDesignText: "Intuïtieve mobiele en desktop applicaties gebouwd met je gebruikers in gedachten.",
    seo: "SEO Optimalisatie",
    seoText: "Strategische optimalisatie om je zoekmachine posities en organisch verkeer te verbeteren.",
    uiux: "UI/UX Ontwerp",
    uiuxText: "Gebruikersgericht ontwerp dat betrokkenheid en intuïtieve digitale ervaringen creëert.",
    getInTouch: "Neem Contact Op",
    name: "Naam",
    email: "E-mail",
    message: "Bericht",
    send: "Verstuur Bericht",
    settings: "Instellingen",
    appearance: "Uiterlijk",
    darkMode: "Donkere Modus",
    language: "Taal",
    preferredLanguage: "Voorkeurstaal"
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    contact: "Contact",
    settingsNav: "Paramètres",
    homeTitle: "Accueil | Modern Business",
    aboutTitle: "À propos | Modern Business",
    servicesTitle: "Services | Modern Business",
    contactTitle: "Contact | Modern Business",
    settingsTitle: "Paramètres | Modern Business",
    buildFuture: "Construisez votre avenir numérique",
    heroText: "Une solution moderne et évolutive pour les entreprises prêtes à prospérer à l'ère numérique.",
    getStarted: "Commencer",
    whyChooseUs: "Pourquoi nous choisir ?",
    expertise: "Expertise",
    expertiseText: "Des années d'expérience dans la livraison de produits numériques de haute qualité.",
    innovation: "Innovation",
    innovationText: "Nous restons en avance grâce à des outils de pointe et des pratiques modernes.",
    support: "Support",
    supportText: "Un support dédié avant, pendant et après votre projet.",
    readyTransform: "Prêt à transformer votre entreprise ?",
    contactUs: "Nous contacter",
    ourStory: "Notre Histoire",
    story1: "Fondée en 2020, Modern Business a commencé avec une mission simple : aider les entreprises à prospérer en ligne grâce à des expériences numériques intelligentes, belles et fonctionnelles.",
    story2: "Aujourd'hui, nous servons des clients dans le monde entier — des startups aux grandes entreprises — en livrant des sites web, des applications et des stratégies qui génèrent de vrais résultats.",
    byTheNumbers: "En chiffres",
    happyClients: "Clients satisfaits",
    projectsDelivered: "Projets livrés",
    yearsInBusiness: "Années d'activité",
    ourServices: "Nos Services",
    webDev: "Développement Web",
    webDevText: "Sites web rapides et réactifs optimisés pour les performances et la visibilité dans les moteurs de recherche.",
    appDesign: "Conception d'applications",
    appDesignText: "Applications mobiles et desktop intuitives conçues avec vos utilisateurs à l'esprit.",
    seo: "Optimisation SEO",
    seoText: "Optimisation stratégique pour améliorer votre classement dans les moteurs de recherche et le trafic organique.",
    uiux: "Conception UI/UX",
    uiuxText: "Conception centrée sur l'utilisateur qui crée des expériences numériques engageantes et intuitives.",
    getInTouch: "Prendre Contact",
    name: "Nom",
    email: "E-mail",
    message: "Message",
    send: "Envoyer le message",
    settings: "Paramètres",
    appearance: "Apparence",
    darkMode: "Mode sombre",
    language: "Langue",
    preferredLanguage: "Langue préférée"
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    services: "Leistungen",
    contact: "Kontakt",
    settingsNav: "Einstellungen",
    homeTitle: "Startseite | Modern Business",
    aboutTitle: "Über uns | Modern Business",
    servicesTitle: "Leistungen | Modern Business",
    contactTitle: "Kontakt | Modern Business",
    settingsTitle: "Einstellungen | Modern Business",
    buildFuture: "Gestalten Sie Ihre digitale Zukunft",
    heroText: "Eine moderne, skalierbare Lösung für Unternehmen, die im digitalen Zeitalter erfolgreich sein möchten.",
    getStarted: "Loslegen",
    whyChooseUs: "Warum uns wählen?",
    expertise: "Expertise",
    expertiseText: "Jahrelange Erfahrung in der Lieferung hochwertiger digitaler Produkte.",
    innovation: "Innovation",
    innovationText: "Wir bleiben mit modernsten Tools und zeitgemäßen Methoden an der Spitze.",
    support: "Support",
    supportText: "Engagierter Support vor, während und nach Ihrem Projekt.",
    readyTransform: "Bereit, Ihr Unternehmen zu transformieren?",
    contactUs: "Kontaktieren Sie uns",
    ourStory: "Unsere Geschichte",
    story1: "Gegründet im Jahr 2020, begann Modern Business mit einer einfachen Mission: Unternehmen dabei zu helfen, online mit intelligenten, ansprechenden und funktionellen digitalen Erlebnissen zu florieren.",
    story2: "Heute betreuen wir Kunden weltweit – von Start-ups bis zu Großunternehmen – und liefern Websites, Apps und Strategien, die echte Ergebnisse liefern.",
    byTheNumbers: "Zahlen & Fakten",
    happyClients: "Zufriedene Kunden",
    projectsDelivered: "Abgeschlossene Projekte",
    yearsInBusiness: "Jahre im Geschäft",
    ourServices: "Unsere Leistungen",
    webDev: "Webentwicklung",
    webDevText: "Schnelle, responsive Websites optimiert für Leistung und Suchmaschinen-Sichtbarkeit.",
    appDesign: "App-Design",
    appDesignText: "Intuitive mobile und Desktop-Anwendungen, entwickelt mit Ihren Nutzern im Blick.",
    seo: "SEO-Optimierung",
    seoText: "Strategische Optimierung, um Ihre Suchmaschinen-Rankings und organischen Traffic zu verbessern.",
    uiux: "UI/UX-Design",
    uiuxText: "Nutzerzentriertes Design, das ansprechende, intuitive digitale Erlebnisse schafft.",
    getInTouch: "Kontakt aufnehmen",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    send: "Nachricht senden",
    settings: "Einstellungen",
    appearance: "Erscheinungsbild",
    darkMode: "Dunkler Modus",
    language: "Sprache",
    preferredLanguage: "Bevorzugte Sprache"
  }
};

// Get saved or default language
function getLanguage() {
  return localStorage.getItem('language') || 'en';
}

// Apply language to entire page
function applyLanguage(lang) {
  if (!translations[lang]) lang = 'en'; // fallback

  document.documentElement.setAttribute('lang', lang);

  // Update title if possible
  const titleKeys = ['homeTitle', 'aboutTitle', 'servicesTitle', 'contactTitle', 'settingsTitle'];
  let newTitle = 'Modern Business';
  for (const key of titleKeys) {
    const el = document.querySelector(`[data-i18n="${key}"]`);
    if (el) {
      newTitle = translations[lang][key] || newTitle;
      break;
    }
  }
  document.title = newTitle;

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLanguage();
  applyLanguage(lang);
});