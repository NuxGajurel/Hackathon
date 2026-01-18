'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import '../lib/i18n';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguage = (lng: 'en' | 'ne') => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="w-full border-b border-slate-200/50 dark:border-slate-700/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 relative rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.jpeg"
                  alt="SaralSewa Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <h1 className="text-xl font-bold bg-linear-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                SaralSewa
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">

            <Link
              href="/ambulance"
              className={`px-4 py-2 rounded-lg transition-colors flex items-center ${isActive('/ambulance')
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Ambulance
            </Link>
            <Link
              href="/aisewa"
              className={`px-4 py-2 rounded-lg transition-colors flex items-center ${isActive('/aisewa')
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              <span className="mr-1.5 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {t('nav.aiSewa')}
            </Link>

            <Link
              href="/doctors"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/doctors')
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.doctors')}
            </Link>
            <Link
              href="/hospitals"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/hospitals')
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              Hospitals
            </Link>

            <Link
              href="/about"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/about')
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              About Us
            </Link>
            <Link
              href="/map"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/map')
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.map')}
            </Link>



            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 ml-4 border-l border-slate-200 dark:border-slate-700 pl-4">
              {user ? (
                <>
                  <Link
                    href="/profile"
                    className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors"
                  >
                    {t('nav.profile')}
                  </Link>
                  <button
                    onClick={logout}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors border border-slate-200 dark:border-slate-700"
                  >
                    {t('nav.logout')}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors"
                  >
                    {t('nav.signIn')}
                  </Link>
                  <Link
                    href="/sign-up"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                  >
                    {t('nav.signUp')}
                  </Link>
                </>
              )}
            </div>

            {/* Language Switcher */}
            <div className="ml-4 flex items-center space-x-2 border-l border-slate-200 dark:border-slate-700 pl-4">
              <button
                onClick={() => changeLanguage('ne')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${i18n.language === 'ne'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                ने
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${i18n.language === 'en'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
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
                href="/ambulance"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center ${isActive('/ambulance')
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Ambulance
              </Link>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/')
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/aisewa"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center ${isActive('/aisewa')
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                <span className="mr-1.5 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                {t('nav.aiSewa')}
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/services')
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.services')}
              </Link>
              <Link
                href="/doctors"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/doctors')
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.doctors')}
              </Link>
              <Link
                href="/hospitals"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/hospitals')
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                Hospitals
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/about')
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.about')}
              </Link>
              <Link
                href="/map"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/map')
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.map')}
              </Link>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex flex-col space-y-2">
                {user ? (
                  <>
                    <Link
                      href="/profile"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 font-medium"
                    >
                      {t('nav.profile')}
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="mx-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 rounded-lg font-medium text-center border border-slate-200 dark:border-slate-700"
                    >
                      {t('nav.logout')}
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/sign-in"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 font-medium"
                    >
                      {t('nav.signIn')}
                    </Link>
                    <Link
                      href="/sign-up"
                      onClick={() => setIsMenuOpen(false)}
                      className="mx-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-center"
                    >
                      {t('nav.signUp')}
                    </Link>
                  </>
                )}
              </div>

              <div className="flex items-center space-x-2 pt-2 border-t border-slate-200 dark:border-slate-700 mt-2">
                <span className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400">{t('nav.language')}:</span>
                <button
                  onClick={() => changeLanguage('ne')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${i18n.language === 'ne'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'text-slate-600 dark:text-slate-300'
                    }`}
                >
                  नेपाली
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${i18n.language === 'en'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
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
