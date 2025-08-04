'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const t = useTranslations('testimonials')

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Physical Therapy Patient',
      rating: 5,
      content: 'The physical therapy sessions at Souri Thérapie completely transformed my recovery. The staff is incredibly professional and caring. I highly recommend their services!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Laser Treatment Patient',
      rating: 5,
      content: 'Amazing results from the laser treatments! The clinic is modern and clean, and the treatment was painless. I\'m very satisfied with the results.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Marie Dubois',
      role: 'Cupping Therapy Patient',
      rating: 5,
      content: 'The cupping therapy helped me with my chronic pain. The therapist was very knowledgeable and made me feel comfortable throughout the session.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'Acupuncture Patient',
      rating: 5,
      content: 'I was skeptical about acupuncture at first, but the results were incredible. My stress levels decreased significantly and I feel much more balanced.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
    },
    {
      name: 'David Chen',
      role: 'Wellness Package Patient',
      rating: 5,
      content: 'The comprehensive wellness package was exactly what I needed. The combination of different therapies provided amazing results for my overall health.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Amina Benali',
      role: 'Beauty Treatment Patient',
      rating: 5,
      content: 'The beauty treatments exceeded my expectations. The staff is professional and the results are natural and long-lasting. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              {renderStars(5)}
            </div>
            <div className="text-2xl font-bold text-gray-900">4.9</div>
            <div className="text-gray-600">(500+ reviews)</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <FaQuoteLeft className="w-8 h-8 text-teal/30" />
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
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
              Join Our Happy Patients
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the same exceptional care and results
            </p>
            <button
              onClick={() => window.open('https://wa.me/2126XXXXXXX', '_blank')}
              className="bg-white text-teal px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Book Your Appointment</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 