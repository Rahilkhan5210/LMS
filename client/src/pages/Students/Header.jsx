import { Button } from '@/components/ui/button'
import { Facebook, HelpCircle, Instagram, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>
      {/* Top Bar with Contact and Social Media */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 text-sm mb-2 sm:mb-0">
            <a href="tel:+1234567890" className="flex items-center hover:text-blue-300 transform hover:scale-105 transition-all duration-200">
              <Phone className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">+1 (234) 567-890</span>
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a href="mailto:info@learnlofts.com" className="flex items-center hover:text-blue-300 transform hover:scale-105 transition-all duration-200">
              <Mail className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">info@learnlofts.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transform hover:scale-110 transition-all duration-200">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transform hover:scale-110 transition-all duration-200">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transform hover:scale-110 transition-all duration-200">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
            <span className="hidden sm:inline text-gray-400">|</span>
            <Button
              variant="ghost"
              onClick={() => navigate("/student/faq")}
              className="text-white bg-blue-600/20 hover:bg-blue-600/30 flex items-center transform hover:scale-105 transition-all duration-200 rounded-full px-3 sm:px-4 py-1"
            >
              <HelpCircle className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">FAQ</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
