'use client';

import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Using actual image paths from public/images/ folder
const SENImage = "/images/lala.jpg";
const Doctor = "/images/lala.jpg";
const Doctor2 = "/images/la2.jpg";

// Heading translations for hover effect - Multiple languages
const headingTranslations = {
  en: "AI-Powered Healthcare Support",
  ne: "AI-शक्ति प्राप्त स्वास्थ्य सेवा सहयोग", // Nepali
  ja: "AI搭載ヘルスケアサポート", // Japanese
  zh: "AI驱动的医疗保健支持", // Chinese (Simplified)
  es: "Soporte sanitario impulsado por IA", // Spanish
  hi: "एआई-संचालित स्वास्थ्य सेवा सहायता", // Hindi
  ar: "دعم الرعاية الصحية المعتمد على الذكاء الاصطناعي", // Arabic
  fr: "Soutien médical propulsé par l'IA", // French
  de: "KI-gestützte Gesundheitsversorgung", // German
  pt: "Suporte de saúde alimentado por IA", // Portuguese
  ko: "AI 기반 의료 지원", // Korean
  it: "Supporto sanitario alimentato dall'IA", // Italian
  th: "การสนับสนุนด้านการดูแลสุขภาพด้วย AI", // Thai
};

type LangKey = keyof typeof headingTranslations;

export default function Home() {
  const { t, i18n } = useTranslation();
  const [hoverLang, setHoverLang] = useState<LangKey>('en');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    import('../lib/i18n');
  }, []);

  // Function to animate through all languages quickly on hover
  const handleMouseEnter = () => {
    // Clear any existing timeouts
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const languages = Object.keys(headingTranslations) as LangKey[];
    const otherLangs = languages.filter((lang) => lang !== 'en');

    // Cycle through all languages quickly (60ms per language for fast animation)
    let currentIndex = 0;
    intervalRef.current = setInterval(() => {
      if (currentIndex < otherLangs.length) {
        setHoverLang(otherLangs[currentIndex]);
        currentIndex++;
      } else {
        // After completing all languages, loop back or stop on last
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        // Keep the last language displayed
        setHoverLang(otherLangs[otherLangs.length - 1]);
      }
    }, 60); // Fast animation - 60ms per language
  };

  const handleMouseLeave = () => {
    // Clear interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Clear all timeouts
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];

    setHoverLang('en');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FDFDFD] via-white to-[#F8FAFC] overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden" id="hero-3d-section">
        {/* 3D Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-[#48C78E]/15 rounded-full blur-3xl"
            style={{ animation: 'orbit3d 20s linear infinite' }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#3db07d]/15 rounded-full blur-3xl"
            style={{ animation: 'orbit3d 25s linear infinite reverse' }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#48C78E]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            style={{ animation: 'pulse3d 8s ease-in-out infinite' }}
          ></div>
        </div>

        {/* Floating 3D Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#48C78E]/30 rounded-full"
            style={{ animation: 'floatShape 12s ease-in-out infinite' }}
          ></div>
          <div
            className="absolute top-3/4 right-1/4 w-6 h-6 bg-[#3db07d]/30 rounded-full"
            style={{ animation: 'floatShape 15s ease-in-out infinite 2s' }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#48C78E]/25 rounded-full"
            style={{ animation: 'floatShape 10s ease-in-out infinite 4s' }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#E6F7F0] text-[#48C78E] rounded-full text-sm font-semibold">
                {t('home.badge')}
              </span>
            </div>

            {/* Main Heading - Changes through languages on hover */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3B4D5E] mb-6 leading-tight transition-all duration-500 cursor-pointer min-h-[1.2em] flex items-center justify-center"
              onMouseEnter={i18n.language === 'en' ? handleMouseEnter : undefined}
              onMouseLeave={i18n.language === 'en' ? handleMouseLeave : undefined}
            >
              {i18n.language === 'ne' ? t('home.heading') : headingTranslations[hoverLang]}
            </h1>

            {/* Sub-heading */}
            <p className="text-lg md:text-xl text-[#6A7C8E] max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('home.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link href="/doctors" className="px-8 py-3.5 bg-[#48C78E] text-white rounded-lg font-semibold text-base hover:bg-[#3db07d] transition shadow-md hover:shadow-xl hover:scale-105 text-center flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {t('home.findDoctor')}
              </Link>
              <Link href="/doctors" className="px-8 py-3.5 bg-white border-2 border-gray-300 text-[#3B4D5E] rounded-lg font-semibold text-base hover:bg-gray-50 hover:border-[#48C78E] transition hover:scale-105 text-center flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('home.findNearbyDoctors')}
              </Link>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-48 text-left">
              <div className="bg-gradient-to-br from-white to-[#F8FAFC] p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#48C78E] to-[#3db07d] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#3B4D5E] mb-3">
                  {t('home.feature1Title')}
                </h3>
                <p className="text-[#6A7C8E] leading-relaxed">
                  {t('home.feature1Desc')}
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-[#F8FAFC] p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#48C78E] to-[#3db07d] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#3B4D5E] mb-3">
                  {t('home.feature2Title')}
                </h3>
                <p className="text-[#6A7C8E] leading-relaxed">
                  {t('home.feature2Desc')}
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-[#F8FAFC] p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#48C78E] to-[#3db07d] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#3B4D5E] mb-3">
                  {t('home.feature3Title')}
                </h3>
                <p className="text-[#6A7C8E] leading-relaxed">
                  {t('home.feature3Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes orbit3d {
            0% { transform: rotateZ(0deg) translateX(100px) rotateZ(0deg); }
            100% { transform: rotateZ(360deg) translateX(100px) rotateZ(-360deg); }
          }
          @keyframes pulse3d {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
            50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.6; }
          }
          @keyframes floatShape {
            0%, 100% { transform: translateY(0px) rotateZ(0deg); }
            50% { transform: translateY(-30px) rotateZ(180deg); }
          }
        `}} />
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link href="/emergency" className="w-16 h-16 bg-gradient-to-br from-[#48C78E] to-[#3db07d] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </Link>
      </div>

      {/* About Us Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#E6F7F0] rounded-[40%_60%_70%_30%] opacity-50 z-0" />
          <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform md:-rotate-2">
            <Image src={Doctor2} alt="Specialist Care" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 w-32 h-32 border-8 border-white rounded-full overflow-hidden shadow-lg z-20 hidden md:block">
            <Image src={Doctor} fill className="object-cover" alt="Detail" />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <span className="text-[#48C78E] font-semibold tracking-wider uppercase text-sm">{t('home.aboutUs')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B4D5E] leading-tight">
            {i18n.language === 'ne' ? (
              <>
                तपाईंले विश्वास गर्न सक्ने <span className="text-[#48C78E]">उत्तम स्वास्थ्य सेवा</span>
              </>
            ) : (
              <>
                The Best <span className="text-[#48C78E]">Healthcare</span> That You Can Trust
              </>
            )}
          </h2>
          <p className="text-[#6A7C8E] leading-relaxed">
            {t('home.aboutDesc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[t('home.modernEquipment'), t('home.easyAppointment'), t('home.comfortableClinic'), t('home.alwaysMonitored')].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#48C78E] rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#3B4D5E] font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 pt-6">
            <Link href="/about" className="px-8 py-3 bg-[#48C78E] text-white rounded-md font-bold shadow-md hover:bg-[#3db07d] transition">{t('home.learnMore')}</Link>
            <Link href="/services" className="px-8 py-3 border border-gray-200 text-[#6A7C8E] rounded-md font-bold hover:bg-gray-50 transition">{t('home.bookNow')}</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-[#48C78E] font-bold tracking-widest uppercase text-xs">{t('home.testimonials')}</span>
          <h2 className="text-4xl font-bold text-[#3B4D5E] mt-4 mb-16">
            {i18n.language === 'ne' ? (
              <>
                हाम्रा <span className="text-[#48C78E]">ग्राहकहरू</span>ले के भन्छन्
              </>
            ) : (
              <>
                What Our <span className="text-[#48C78E]">Clients</span> Say
              </>
            )}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { name: "Sarah Jenkins", role: "Headteacher", content: t('home.testimonial1') },
              { name: "Dr. James Wilson", role: "Clinical Lead", content: t('home.testimonial2') },
              { name: "Emma Thompson", role: "Parent", content: t('home.testimonial3') }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 transition duration-300">
                <div className="flex gap-1 mb-4 text-[#F6BA5A]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-[#6A7C8E] italic mb-6">&quot;{review.content}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image src={SENImage} alt={review.name} fill className="object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="text-[#3B4D5E] font-bold text-sm">{review.name}</h4>
                    <p className="text-[#48C78E] text-xs font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}