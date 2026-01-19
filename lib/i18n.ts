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
    language: "भाषा",
    signIn: "साइन इन",
    signUp: "खाता खोल्नुहोस्",
    profile: "प्रोफाइल",
    logout: "लग आउट",
    map: "नक्सा",
    aiSewa: "AI सेवा",
    ambulance: "एम्बुलेन्स ट्र्याकर",
    admin: "एडमिन"
  },
  profile: {
    editProfile: "प्रोफाइल सम्पादन गर्नुहोस्",
    saveChanges: "परिवर्तनहरू बचत गर्नुहोस्",
    cancel: "रद्द गर्नुहोस्",
    uploadCertificate: "प्रमाणपत्र अपलोड गर्नुहोस्",
    doctorOnly: "डाक्टरहरूको लागि मात्र"
  },
  ai: {
    chatTitle: "AI स्वास्थ्य सल्लाहकार",
    chatPlaceholder: "तपाईंको लक्षणहरू वर्णन गर्नुहोस्...",
    getAdvice: "AI स्वास्थ्य सल्लाह प्राप्त गर्नुहोस्",
    // New additions
    disclaimerTitle: "अस्वीकरण",
    disclaimerText: "यो AI उपकरण शैक्षिक उद्देश्यका लागि मात्र हो। यो व्यावसायिक चिकित्सा सल्लाह, निदान वा उपचारको विकल्प होइन।",
    emergencyTitle: "के यो आपतकालीन हो?",
    emergencyText: "यदि तपाईंलाई चिकित्सा आपतकाल परेको छ भने, तुरुन्तै मद्दतको लागि कल गर्नुहोस्।",
    callAmbulance: "एम्बुलेन्स बोलाउनुहोस् (१०२)",
    assistantTitle: "AI स्वास्थ्य सहायक",
    assistantSubtitle: "सधैं सहयोगको लागि यहाँ छु",
    initialMessage: "नमस्ते! म तपाईंको सरल सेवा स्वास्थ्य सल्लाहकार हुँ। म तपाईंलाई लक्षणहरू बुझ्न र घरेलु उपचारहरू सुझाव दिन मद्दत गर्न सक्छु।\n\n**कृपया ध्यान दिनुहोस:** म एक AI हुँ, डाक्टर होइन। आपतकालीन अवस्थामा, कृपया एम्बुलेन्स बोलाउनुहोस्।",
    suggestion1: "मलाई धेरै टाउको दुखेको छ",
    suggestion2: "डेंगुको लक्षणहरू",
    suggestion3: "बच्चालाई उच्च ज्वरो आएको छ",
    suggestion4: "पेट दुख्ने घरेलु उपाय",
    systemAlert: "प्रणाली चेतावनी",
    tryAgain: "कृपया पछि फेरि प्रयास गर्नुहोस्"
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
    language: "Language",
    signIn: "Sign In",
    signUp: "Sign Up",
    profile: "Profile",
    logout: "Logout",
    map: "Map",
    aiSewa: "AISewa",
    ambulance: "Ambulance Tracker",
    admin: "Admin"
  },
  profile: {
    editProfile: "Edit Profile",
    saveChanges: "Save Changes",
    cancel: "Cancel",
    uploadCertificate: "Upload Certificate",
    doctorOnly: "For Doctors Only"
  },
  ai: {
    chatTitle: "AI Health Advisor",
    chatPlaceholder: "Describe your symptoms...",
    getAdvice: "Get AI Health Advice",
    // New additions
    disclaimerTitle: "Disclaimer",
    disclaimerText: "This AI tool provides health information for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.",
    emergencyTitle: "Emergency?",
    emergencyText: "If you have a medical emergency, call for help immediately.",
    callAmbulance: "Call Ambulance (102)",
    assistantTitle: "AI Health Assistant",
    assistantSubtitle: "Always here to help",
    initialMessage: "Namaste! I am your SaralSewa Health Advisor. I can help you understand symptoms and suggest home remedies. \n\n**Please note:** I am an AI, not a doctor. In emergencies, please call an ambulance.",
    suggestion1: "I have a severe headache",
    suggestion2: "Symptoms of Dengue",
    suggestion3: "Baby has high fever",
    suggestion4: "Stomach pain home remedies",
    systemAlert: "System Alert",
    tryAgain: "Please try again later"
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
      fallbackLng: 'en', // Default to English
      lng: 'en', // Set English as default
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
