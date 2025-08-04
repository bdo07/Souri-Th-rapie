'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaWhatsapp, 
  FaPhone, 
  FaBars, 
  FaTimes,
  FaGlobe
} from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const Header = () => {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('services'), href: `/${locale}#services` },
    { name: t('about'), href: `/${locale}#about` },
    { name: t('testimonials'), href: `/${locale}#testimonials` },
    { name: t('contact'), href: `/${locale}#contact` },
  ]

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ]

  const handleWhatsApp = () => {
    window.open('https://wa.me/2126XXXXXXX', '_blank')
  }

  const handleCall = () => {
    window.open('tel:+2126XXXXXXX', '_self')
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-teal to-royal-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ST</span>
            </div>
            <span className="text-xl font-bold gradient-text">Souri Thérapie</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-teal transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-teal transition-colors duration-200">
                <FaGlobe className="w-4 h-4" />
                <span>{languages.find(lang => lang.code === locale)?.flag}</span>
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((language) => (
                  <Link
                    key={language.code}
                    href={pathname.replace(`/${locale}`, `/${language.code}`)}
                    className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 whatsapp-btn"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
            <button
              onClick={handleCall}
              className="flex items-center space-x-2 bg-teal text-white px-4 py-2 rounded-lg hover:bg-dark-teal transition-colors duration-200"
            >
              <FaPhone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-teal transition-colors duration-200"
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-teal transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  {languages.map((language) => (
                    <Link
                      key={language.code}
                      href={pathname.replace(`/${locale}`, `/${language.code}`)}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-2 text-gray-700 hover:text-teal transition-colors duration-200"
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button
                  onClick={() => {
                    handleWhatsApp()
                    setIsMenuOpen(false)
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    handleCall()
                    setIsMenuOpen(false)
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-teal text-white px-4 py-2 rounded-lg hover:bg-dark-teal transition-colors duration-200"
                >
                  <FaPhone className="w-4 h-4" />
                  <span>Call</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header 