'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { 
  FaHeartbeat, 
  FaLightbulb, 
  FaHandHoldingHeart, 
  FaDotCircle,
  FaStar,
  FaArrowRight
} from 'react-icons/fa'

const Services = () => {
  const t = useTranslations('services')

  const services = [
    {
      icon: FaHeartbeat,
      title: t('physicalTherapy.title'),
      description: t('physicalTherapy.description'),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      icon: FaLightbulb,
      title: t('laserTreatments.title'),
      description: t('laserTreatments.description'),
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      icon: FaHandHoldingHeart,
      title: t('cuppingTherapy.title'),
      description: t('cuppingTherapy.description'),
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500'
    },
    {
      icon: FaAcupuncture,
      title: t('acupuncture.title'),
      description: t('acupuncture.description'),
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      icon: FaStar,
      title: t('additionalServices.title'),
      description: t('additionalServices.description'),
      color: 'from-teal to-royal-blue',
      bgColor: 'bg-gradient-to-br from-teal/10 to-royal-blue/10',
      iconColor: 'text-teal'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className={`service-card h-full p-8 rounded-2xl ${service.bgColor} border border-gray-100 hover:border-transparent transition-all duration-300`}>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 text-white`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <FaArrowRight className={`w-5 h-5 ${service.iconColor}`} />
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal/5 to-royal-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal to-royal-blue rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Wellness Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Book your consultation today and experience the difference
            </p>
            <button
              onClick={() => window.open('https://wa.me/2126XXXXXXX', '_blank')}
              className="bg-white text-teal px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 mx-auto"
            >
              <FaHeartbeat className="w-5 h-5" />
              <span>Book Consultation</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 