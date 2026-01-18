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
    learnMore: "थप जान्नुहोस्",
    // Added keys
    heading: "AI-शक्ति प्राप्त स्वास्थ्य सेवा सहयोग",
    badge: "तपाईंको स्वास्थ्य, हाम्रो प्राथमिकता",
    findDoctor: "डाक्टर खोज्नुहोस्",
    findNearbyDoctors: "नजिकैका डाक्टरहरू",
    feature1Title: "विशेषज्ञ डाक्टरहरू",
    feature1Desc: "हाम्रा विशेषज्ञ डाक्टरहरूबाट गुणस्तरीय सेवा प्राप्त गर्नुहोस्।",
    feature2Title: "आधुनिक प्रविधि",
    feature2Desc: "हामी अत्याधुनिक स्वास्थ्य प्रविधि प्रयोग गर्छौं।",
    feature3Title: "२४/७ सेवा",
    feature3Desc: "हामी तपाईंको सेवामा सधैं तत्पर छौं।",
    aboutUs: "हाम्रो बारेमा",
    aboutDesc: "हामी नेपालको ग्रामीण क्षेत्रमा स्वास्थ्य सेवा पुर्याउन प्रतिबद्ध छौं।",
    modernEquipment: "आधुनिक उपकरण",
    easyAppointment: "सजिलो अपोइन्टमेन्ट",
    comfortableClinic: "आरामदायी क्लिनिक",
    alwaysMonitored: "सधैं निगरानी",
    bookNow: "बुक गर्नुहोस्",
    testimonials: "प्रशंसापत्र",
    testimonial1: "उत्कृष्ट सेवा!",
    testimonial2: "धेरै सहयोगी स्टाफ।",
    testimonial3: "सिफारिस गर्दछु।"
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
    learnMore: "Learn More",
    // Added keys
    heading: "AI-Powered Healthcare Support",
    badge: "Your Health, Our Priority",
    findDoctor: "Find a Doctor",
    findNearbyDoctors: "Find Nearby Doctors",
    feature1Title: "Specialist Doctors",
    feature1Desc: "Get quality care from our specialist doctors.",
    feature2Title: "Modern Technology",
    feature2Desc: "We use state-of-the-art healthcare technology.",
    feature3Title: "24/7 Service",
    feature3Desc: "We are always ready to serve you.",
    aboutUs: "About Us",
    aboutDesc: "We are committed to delivering healthcare to rural Nepal.",
    modernEquipment: "Modern Equipment",
    easyAppointment: "Easy Appointment",
    comfortableClinic: "Comfortable Clinic",
    alwaysMonitored: "Always Monitored",
    bookNow: "Book Now",
    testimonials: "Testimonials",
    testimonial1: "Excellent service!",
    testimonial2: "Very helpful staff.",
    testimonial3: "Highly recommended."
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
