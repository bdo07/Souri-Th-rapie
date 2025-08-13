'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaWhatsapp,
  FaDirections
} from 'react-icons/fa'

const Contact = () => {
  const t = useTranslations('contact')

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: t('address'),
      content: '123 Wellness Street, Medical District, SAFI, MOROCCO',
      action: 'Get Directions',
      actionIcon: FaDirections,
      actionHandler: () => window.open('https://maps.google.com/?q=123+Wellness+Street', '_blank')
    },
    {
      icon: FaPhone,
      title: t('phone'),
      content: '+212 77 09 18 995',
      action: 'Call Now',
      actionIcon: FaPhone,
      actionHandler: () => window.open('tel:+212770918995', '_self')
    },
    {
      icon: FaEnvelope,
      title: t('email'),
      content: 'info@souri-therapie.com',
      action: 'Send Email',
      actionIcon: FaEnvelope,
      actionHandler: () => window.open('mailto:info@souri-therapie.com', '_self')
    },
    {
      icon: FaClock,
      title: t('hours'),
      content: t('hoursValue'),
      action: 'Book Appointment',
      actionIcon: FaWhatsapp,
      actionHandler: () => window.open('https://wa.me/212770918995', '_blank')
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal to-royal-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {info.content}
                      </p>
                      <button
                        onClick={info.actionHandler}
                        className="flex items-center space-x-2 text-teal hover:text-dark-teal transition-colors duration-200 text-sm font-medium"
                      >
                        <info.actionIcon className="w-4 h-4" />
                        <span>{info.action}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-teal to-royal-blue rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Our team is here to help you with any questions or concerns
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.open('https://wa.me/212770918995', '_blank')}
                  className="flex items-center justify-center space-x-2 bg-white text-teal px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => window.open('tel:+212770918995', '_self')}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-teal transition-colors duration-300"
                >
                  <FaPhone className="w-5 h-5" />
                  <span>Call Now</span>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890123!2d-7.123456789012345!3d33.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA3JzM0LjQiTiA3wrAwNycwNC40Ilc!5e0!3m2!1sen!2sma!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Souri Thérapie Location"
              />
            </div>

            {/* Location Details */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Visit Our Clinic
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Souri Thérapie</p>
                    <p className="text-gray-600">123 Wellness Street, Medical District</p>
                    <p className="text-gray-600">SAFI, MOROCCO</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaClock className="w-5 h-5 text-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Opening Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => window.open('https://maps.google.com/?q=123+Wellness+Street', '_blank')}
                className="mt-4 w-full bg-gradient-to-r from-teal to-royal-blue text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaDirections className="w-5 h-5" />
                <span>{t('getDirections')}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 