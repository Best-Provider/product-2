"use client"
// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'animate.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0  text-white z-50 animate__animated animate__bounceInDown">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="cursor-pointer">
              <Image 
                src="/logo.png" 
                alt="Bee Punching Logo" 
                width={70} 
                height={70} 
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-yellow-400 hover:text-yellow-300">Home</Link>
          <Link href="/ServiceSupportPage" className="text-yellow-400 hover:text-yellow-300">Service & Support</Link>

          <Link href="/RequestForQuote" className="text-yellow-300 hover:text-yellow-300">Contact Us</Link>
          <Link href="/About" className="text-yellow-300 hover:text-yellow-300">About Us</Link>
          {/* <Link href="/Contact" className="text-white hover:text-yellow-300">Contact Us</Link> */}

        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="/RequestForQuote">
            <button className="bg-red-500 hover:bg-red-600 text-yellow-300 font-bold py-2 px-6 rounded">
              Request For Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4 px-4 z-50">
          <Link href="/" className="block text-yellow-400 py-2">Home</Link>
          <Link href="/ServiceSupportPage" className="block text-yellow-400 py-2">Service & Support</Link>

          <Link href="/About" className="block text-yellow-400 py-2">About Us</Link>
          <Link href="/RequestForQuote" className="block text-yellow-400 py-2">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;