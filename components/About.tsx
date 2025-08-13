'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { FaUsers, FaAward, FaHeart, FaCheckCircle } from 'react-icons/fa'

const About = () => {
  const t = useTranslations('about')

  const stats = [
    {
      icon: FaAward,
      number: '10+',
      label: t('experience'),
      color: 'text-teal'
    },
    {
      icon: FaUsers,
      number: '1000+',
      label: t('patients'),
      color: 'text-royal-blue'
    },
    {
      icon: FaHeart,
      number: '5000+',
      label: t('treatments'),
      color: 'text-teal'
    }
  ]

  const features = [
    'Professional and experienced team',
    'Modern medical equipment',
    'Personalized treatment plans',
    'Comprehensive wellness approach',
    'Traditional and modern techniques',
    'Patient-centered care'
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('title')}
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-teal mb-6">
                {t('subtitle')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('description')}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <FaCheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              onClick={() => window.open('https://wa.me/212770918995', '_blank')}
              className="bg-gradient-to-r from-teal to-royal-blue text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Souri Thérapie Team"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 right-8">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-4 shadow-lg text-center"
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal/10 to-royal-blue/10">
            <div className="w-16 h-16 bg-gradient-to-r from-teal to-royal-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAward className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Professionals</h3>
            <p className="text-gray-600">Our team consists of certified and experienced healthcare professionals</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-royal-blue/10 to-teal/10">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-blue to-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Patient-Centered Care</h3>
            <p className="text-gray-600">We prioritize your health and well-being with personalized treatment plans</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal/10 to-royal-blue/10">
            <div className="w-16 h-16 bg-gradient-to-r from-teal to-royal-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community Trust</h3>
            <p className="text-gray-600">Trusted by thousands of patients in our community for over a decade</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 