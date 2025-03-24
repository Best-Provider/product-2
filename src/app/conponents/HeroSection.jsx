// HeroSection.jsx
import React from 'react';
import Link from 'next/link';
import Loader from './Loader';
import 'animate.css';

const HeroSection = () => {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-6 py-4 md:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-xl animate__animated animate__bounceInLeft">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-6 bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
              Fuelling Innovation,
              <br />
              Elevating Success
              <br />
              with Comprehensive
              <br />
              IT Solutions
            </h1>
            
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 text-purple-300 bg-clip-text ">
              Delivering Top-Notch Services and Becoming the Lifeblood of IT
              Companies Across All Continents.
            </p>
            
            <Link href="/RequestForQuote">
              <button className="bg-gradient-to-r from-purple-500 to-purple-900 hover:from-purple-600 hover:to-purple-950 text-white px-6 md:px-8 py-2 md:py-3 rounded-full transition duration-300">
                Contact Us for more Information
              </button>
            </Link>
          </div>
          
          {/* Right side - space for your 3D element images */}
          <div className="hidden md:block relative h-64 md:h-96">
            <Loader/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;