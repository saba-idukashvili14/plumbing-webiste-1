'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from './components/Header'
import ContactDialog from './components/ContactDialog'
import { siteConfig } from './config/siteConfig'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          
          {/* Plumber Image */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[800px] hidden lg:block"
          >
            <img
              src="https://geopg.ge/img/plumber.png"
              alt="Professional Plumber"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Content */}
          <div className="relative container mx-auto px-4 pt-32 pb-20 lg:min-h-screen flex items-center">
            <motion.div 
              className="max-w-2xl mx-auto lg:mx-0"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {/* Badge */}
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-purple-800/30 border border-purple-700/50 rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-purple-200 text-sm">24/7 Emergency Service Available</span>
              </motion.div>

              {/* Main Content */}
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
              >
                {siteConfig.hero.title}
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              >
                {siteConfig.company.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row w-full sm:w-auto gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg
                             hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
                  >
                    Contact Us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg
                             hover:bg-gray-700 transition-all duration-300 border border-gray-700"
                  >
                    Explore Services
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>

              {/* Features */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12"
              >
                {[
                  { icon: "⚡", text: "Fast Response" },
                  { icon: "🛠", text: "Expert Team" },
                  { icon: "💯", text: "Quality Service" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto max-w-md lg:max-w-none"
              >
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://scontent.ftbs5-4.fna.fbcdn.net/v/t39.30808-6/469465765_1633454727379759_2336989936073198384_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qo3QN3D19dYQ7kNvgEgjSXm&_nc_zt=23&_nc_ht=scontent.ftbs5-4.fna&_nc_gid=ATBBHTSvG9A65W2A3kZ75Nk&oh=00_AYCSTHi6dQk-NJc3Lu-dlYaRJiPbFs1AnRiYM55BcE9H_A&oe=676A1D4C"
                    alt="Professional Plumber"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats */}
                <div className="absolute -bottom-10 left-4 right-4 lg:left-10 lg:right-10 bg-purple-600 rounded-xl p-4 lg:p-6 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { number: "10+", label: "Years Experience" },
                      { number: "500+", label: "Projects Done" },
                      { number: "24/7", label: "Support" }
                    ].map((stat, index) => (
                      <div key={index} className="text-white">
                        <div className="text-2xl font-bold">{stat.number}</div>
                        <div className="text-sm text-purple-200">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div className="lg:pl-10 pt-16 lg:pt-0">
                <div className="inline-flex items-center gap-2 bg-purple-800/30 border border-purple-700/50 rounded-full px-4 py-2 mb-6">
                  <span className="text-purple-400">About Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Your Trusted Partner for Professional Plumbing Solutions
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  With over a decade of experience, we've built our reputation on reliability, expertise, and customer satisfaction. Our team of certified plumbers is committed to providing top-notch plumbing services for both residential and commercial properties.
                </p>
                
                {/* Features */}
                <div className="space-y-4">
                  {[
                    {
                      title: "Expert Team",
                      description: "Certified and experienced plumbing professionals"
                    },
                    {
                      title: "Quality Guaranteed",
                      description: "We stand behind our work with solid guarantees"
                    },
                    {
                      title: "24/7 Availability",
                      description: "Round-the-clock emergency plumbing services"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start space-x-4 bg-gray-700/50 p-4 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Professional Services
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Cleaning Works",
                  description: "Professional cleaning services for all your plumbing needs",
                  icon: "🧹",
                  items: ["Cleaning of sewerage", "Cleaning the toilet", "Water pumping"]
                },
                {
                  title: "Diagnostics",
                  description: "Advanced diagnostic tools and expertise",
                  icon: "🔍",
                  items: ["Water leak diagnostics", "Diagnostics of water pipes", "Telediagnostics of sewer pipes"]
                },
                {
                  title: "Change/Update",
                  description: "Complete replacement and upgrade services",
                  icon: "🔧",
                  items: ["Changing the toilet", "Replacing the toilet mechanism", "Replacing the siphon"]
                }
              ].map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10
                            transition-all duration-300 border border-gray-700/50"
                >
                  <div className="p-6 border-b border-gray-700/50">
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center space-x-3 text-gray-300">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <ContactDialog 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  )
}
