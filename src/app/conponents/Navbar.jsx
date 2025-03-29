"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import 'animate.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return pathname === path || (path !== '/' && pathname.startsWith(path));
  };

  return (
    <nav className="fixed w-full top-0 left-0 text-white z-50 animate__animated animate__bounceInDown backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo - unchanged */}
        <div className="flex items-center">
          <Link href="/">
            <div className="cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo.png" 
                alt="Bee Punching Logo" 
                width={70} 
                height={70} 
                priority
                className="drop-shadow-lg"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - only added active states */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`text-yellow-200 hover:text-yellow-300 transition-all duration-300 font-medium text-lg transform hover:scale-105 ${
              isActive('/') ? 'border-b-2 border-yellow-300' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            href="/ServiceSupportPage" 
            className={`text-yellow-200 hover:text-yellow-300 transition-all duration-300 font-medium text-lg transform hover:scale-105 ${
              isActive('/ServiceSupportPage') ? 'border-b-2 border-yellow-300' : ''
            }`}
          >
            Service & Support
          </Link>
          <Link 
            href="/RequestForQuote" 
            className={`text-yellow-200 hover:text-yellow-300 transition-all duration-300 font-medium text-lg transform hover:scale-105 ${
              isActive('/RequestForQuote') ? 'border-b-2 border-yellow-300' : ''
            }`}
          >
            Contact Us
          </Link>
          <Link 
            href="/About" 
            className={`text-yellow-200 hover:text-yellow-300 transition-all duration-300 font-medium text-lg transform hover:scale-105 ${
              isActive('/About') ? 'border-b-2 border-yellow-300' : ''
            }`}
          >
            About Us
          </Link>
        </div>

        {/* Contact Button - unchanged */}
        <div className="hidden md:block">
          <Link href="/RequestForQuote">
            <button className="border border-yellow-200 hover:bg-red-600 text-yellow-200 font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/20">
              Request For Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button - unchanged */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-yellow-200 focus:outline-none transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - only added active text color */}
      <div className={`md:hidden bg-gray-900 bg-opacity-95 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}>
        <div className="px-4 space-y-3">
          <Link 
            href="/" 
            className={`block text-yellow-200 py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-lg ${
              isActive('/') ? '!text-yellow-300' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/ServiceSupportPage" 
            className={`block text-yellow-200 py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-lg ${
              isActive('/ServiceSupportPage') ? '!text-yellow-300' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Service & Support
          </Link>
          <Link 
            href="/About" 
            className={`block text-yellow-200 py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-lg ${
              isActive('/About') ? '!text-yellow-300' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/RequestForQuote" 
            className={`block text-yellow-200 py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-lg ${
              isActive('/RequestForQuote') ? '!text-yellow-300' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          <div className="pt-2">
            <Link href="/RequestForQuote" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full border border-yellow-200 hover:bg-red-600 hover:border-red-600 text-yellow-200 font-bold py-3 px-6 rounded-md transition-all duration-300">
                Request For Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;