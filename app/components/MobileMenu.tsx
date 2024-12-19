'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaPhone } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (sectionId: string) => void
  onContactClick: () => void
}

export default function MobileMenu({ isOpen, onClose, onNavigate, onContactClick }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-[300px] bg-gray-900 z-50 shadow-xl"
          >
            <div className="p-5">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-gray-400 hover:text-white"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              <div className="mt-12 flex flex-col gap-6">
                {siteConfig.navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        onNavigate(item.href)
                        onClose()
                      }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-lg">{item.name}</span>
                    </motion.button>
                  )
                })}

                <div className="h-px bg-gray-800 my-4" />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    onContactClick()
                    onClose()
                  }}
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20"
                >
                  <FaPhone className="w-4 h-4" />
                  <span>Contact Us</span>
                </motion.button>

                <motion.a
                  href="tel:+995555363136"
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors border border-gray-700"
                >
                  <FaPhone className="w-4 h-4" />
                  <span>24/7 Emergency Call</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 