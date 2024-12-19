'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaBars } from 'react-icons/fa'
import ContactDialog from './ContactDialog'
import MobileMenu from './MobileMenu'
import { siteConfig } from '../config/siteConfig'

export default function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src={siteConfig.company.logo}
                  alt={`${siteConfig.company.name} Logo`}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-white">{siteConfig.company.name}</span>
                  <span className="text-xs text-purple-400">{siteConfig.company.tagline}</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {siteConfig.navigation.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </button>
                  </motion.div>
                )
              })}
            </nav>

            {/* Desktop Contact */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Emergency Contact */}
              <motion.a
                href="tel:+995555363136"
                className="hidden md:flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhoneAlt className="w-4 h-4 animate-pulse" />
                <span>24/7 Emergency</span>
              </motion.a>
              
              {/* Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 
                           transition-colors shadow-lg shadow-purple-500/20"
                >
                  Contact Us
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white p-2"
            >
              <FaBars className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={scrollToSection}
        onContactClick={() => setIsContactOpen(true)}
      />

      <ContactDialog 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  )
} 