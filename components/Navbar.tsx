'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Translations
const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      doctors: "Find Doctors",
      emergency: "Emergency",
      about: "About Us",
      map: "Map",
      language: "Language"
    }
  },
  ne: {
    nav: {
      home: "घर",
      services: "सेवाहरू",
      doctors: "डाक्टरहरू",
      emergency: "आपतकालीन",
      about: "हाम्रो बारेमा",
      map: "नक्सा",
      language: "भाषा"
    }
  }
};

export default function Navbar() {
  const pathname = usePathname();
  const [language, setLanguage] = useState<'en' | 'ne'>('ne');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('language') : 'ne';
    setLanguage((savedLang as 'en' | 'ne') || 'ne');
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: 'en' | 'ne') => {
    setLanguage(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lng);
    }
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <nav className="w-full border-b border-slate-200/50 dark:border-slate-700/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold bg-linear-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                SaralSewa
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/')
                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/services"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/services')
                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.services')}
            </Link>
            <Link
              href="/doctors"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/doctors')
                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.doctors')}
            </Link>
            <Link
              href="/emergency"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/emergency')
                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.emergency')}
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/about')
                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/map"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/map')
                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.map')}
            </Link>

            {/* Language Switcher */}
            <div className="ml-4 flex items-center space-x-2 border-l border-slate-200 dark:border-slate-700 pl-4">
              <button
                onClick={() => changeLanguage('ne')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${language === 'ne'
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                ने
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${language === 'en'
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/')
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/services')
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.services')}
              </Link>
              <Link
                href="/doctors"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/doctors')
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.doctors')}
              </Link>
              <Link
                href="/emergency"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/emergency')
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.emergency')}
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/about')
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.about')}
              </Link>
              <Link
                href="/map"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/map')
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium'
                    : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.map')}
              </Link>
              <div className="flex items-center space-x-2 pt-2 border-t border-slate-200 dark:border-slate-700 mt-2">
                <span className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400">{t('nav.language')}:</span>
                <button
                  onClick={() => changeLanguage('ne')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${language === 'ne'
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    : 'text-slate-600 dark:text-slate-300'
                    }`}
                >
                  नेपाली
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${language === 'en'
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    : 'text-slate-600 dark:text-slate-300'
                    }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
