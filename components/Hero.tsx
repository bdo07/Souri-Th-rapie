'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const t = useTranslations('hero')

  const handleWhatsApp = () => {
    window.open('https://wa.me/2126XXXXXXX', '_blank')
  }

  const handleCall = () => {
    window.open('tel:+2126XXXXXXX', '_self')
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-cream/30 to-royal-blue/20"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
          >
            <span className="text-sm font-medium text-teal">🌟 Premium Wellness Services</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl lg:text-3xl font-medium text-royal-blue"
          >
            {t('subtitle')}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleWhatsApp}
              className="group flex items-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaWhatsapp className="w-5 h-5 group-hover:animate-bounce" />
              <span>{t('appointment')}</span>
            </button>
            
            <button
              onClick={handleCall}
              className="group flex items-center space-x-3 bg-teal text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dark-teal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaPhone className="w-5 h-5 group-hover:animate-pulse" />
              <span>{t('callUs')}</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-teal">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-royal-blue">1000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal">50+</div>
              <div className="text-gray-600">Treatments</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-teal transition-colors duration-300 animate-bounce"
      >
        <FaArrowDown className="w-6 h-6" />
      </motion.button>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 bg-teal/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-32 h-32 bg-royal-blue/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 w-16 h-16 bg-cream/30 rounded-full blur-xl"
      />
    </section>
  )
}

export default Hero 