'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes } from 'react-icons/fa'

interface ContactDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] overflow-y-auto"
          >
            <div className="min-h-full flex items-center justify-center p-4">
              <div className="bg-gray-900 rounded-2xl w-full max-w-lg border border-gray-800 shadow-xl">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                    <button
                      onClick={onClose}
                      className="text-gray-400 hover:text-white transition-colors p-2"
                    >
                      <FaTimes className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Contact Methods */}
                  <div className="space-y-4">
                    {/* Phone */}
                    <motion.a
                      href="tel:+995555363136"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      <div className="bg-purple-600 p-3 rounded-lg">
                        <FaPhone className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-400 text-sm">Phone Number</p>
                        <p className="text-white font-semibold truncate">+995 555 363 136</p>
                      </div>
                    </motion.a>

                    {/* Email */}
                    <motion.a
                      href="mailto:info@geopg.ge"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      <div className="bg-purple-600 p-3 rounded-lg">
                        <FaEnvelope className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-400 text-sm">Email Address</p>
                        <p className="text-white font-semibold truncate">info@geopg.ge</p>
                      </div>
                    </motion.a>

                    {/* Location */}
                    <motion.a
                      href="https://maps.google.com"
                      target="_blank"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      <div className="bg-purple-600 p-3 rounded-lg">
                        <FaMapMarkerAlt className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-400 text-sm">Location</p>
                        <p className="text-white font-semibold truncate">Tbilisi, Georgia</p>
                      </div>
                    </motion.a>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 text-center text-gray-400">
                    <p>Available 24/7 for emergency services</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 