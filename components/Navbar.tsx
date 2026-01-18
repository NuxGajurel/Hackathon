'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import '../lib/i18n'; // Ensure i18n is initialized



export default function Navbar() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lng: 'en' | 'ne') => {
    i18n.changeLanguage(lng);
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
              <div className="w-8 h-8 bg-linear-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold bg-linear-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                SaralSewa
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/')
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/services"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/services')
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.services')}
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
              href="/emergency"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/emergency')
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.emergency')}
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/about')
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {t('nav.about')}
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
            <div className="flex items-center space-x-2 ml-2">
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
                href="/emergency"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${isActive('/emergency')
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300'
                  }`}
              >
                {t('nav.emergency')}
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
