import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const neTranslation = {
  nav: {
    home: "घर",
    services: "सेवाहरू",
    doctors: "डाक्टरहरू",
    emergency: "आपतकालीन",
    about: "हाम्रो बारेमा",
    language: "भाषा"
  },
  home: {
    title: "सरल सेवा - हाम्रो सेवामा स्वागत छ",
    subtitle: "नेपालका ग्रामीण क्षेत्रहरूको लागि AI-शक्ति प्राप्त स्वास्थ्य सेवा व्यवस्थापन प्रणाली",
    description: "निम्न ब्यान्डविड्थ र मोबाइल-पहिलो स्वास्थ्य सेवा समाधान जुन आपतकालीन परिस्थितिहरूमा सहयोग गर्दछ।",
    getStarted: "सुरु गर्नुहोस्",
    learnMore: "थप जान्नुहोस्"
  },
  common: {
    welcome: "स्वागत छ",
    loading: "लोड हुँदैछ...",
    error: "त्रुटि"
  }
};

const enTranslation = {
  nav: {
    home: "Home",
    services: "Services",
    doctors: "Find Doctors",
    emergency: "Emergency",
    about: "About Us",
    language: "Language"
  },
  home: {
    title: "SaralSewa - Welcome to Hamro Sewa",
    subtitle: "AI-powered healthcare management system for rural areas of Nepal",
    description: "Low-bandwidth, mobile-first healthcare solution that helps during emergency situations.",
    getStarted: "Get Started",
    learnMore: "Learn More"
  },
  common: {
    welcome: "Welcome",
    loading: "Loading...",
    error: "Error"
  }
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        ne: {
          translation: neTranslation,
        },
        en: {
          translation: enTranslation,
        },
      },
      fallbackLng: 'ne', // Default to Nepali
      lng: 'ne', // Set Nepali as default
      interpolation: {
        escapeValue: false, // React already escapes
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
    });
}

export default i18n;
