'use client'

import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaArrowUp
} from 'react-icons/fa'

const Footer = () => {
  const t = useTranslations('footer')
  const locale = useLocale()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: t('services'), href: `/${locale}#services` },
    { name: 'About Us', href: `/${locale}#about` },
    { name: 'Testimonials', href: `/${locale}#testimonials` },
    { name: 'Contact', href: `/${locale}#contact` },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-teal to-royal-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <span className="text-xl font-bold">Souri Thérapie</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-teal transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}#services`} className="text-gray-300 hover:text-teal transition-colors duration-300">
                  Physical Therapy
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="text-gray-300 hover:text-teal transition-colors duration-300">
                  Laser Treatments
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="text-gray-300 hover:text-teal transition-colors duration-300">
                  Cupping Therapy
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#services`} className="text-gray-300 hover:text-teal transition-colors duration-300">
                  Acupuncture
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-teal mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Wellness Street, Medical District
                  </p>
                  <p className="text-gray-300 text-sm">SAFI, MOROCCO</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-teal flex-shrink-0" />
                <a
                  href="tel:+212770918995"
                  className="text-gray-300 hover:text-teal transition-colors duration-300 text-sm"
                >
                  +212 77 09 18 995
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-teal flex-shrink-0" />
                <a
                  href="mailto:info@souri-therapie.com"
                  className="text-gray-300 hover:text-teal transition-colors duration-300 text-sm"
                >
                  info@souri-therapie.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-5 h-5 text-teal flex-shrink-0" />
                <a
                  href="https://wa.me/212770918995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal transition-colors duration-300 text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {t('copyright')}
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-teal transition-colors duration-300">
                {t('privacy')}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-teal transition-colors duration-300">
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-teal to-royal-blue rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  )
}

export default Footer 