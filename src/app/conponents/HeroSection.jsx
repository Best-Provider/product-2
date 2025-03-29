"use client";
import React from 'react';
import Link from 'next/link';
import 'animate.css';
import TiltedCard from '../../../ReactBits/tiltedCard';

const HeroSection = () => {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-4 md:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-xl animate__animated animate__bounceInLeft">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-6 bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent">
              Fuelling Innovation,
              <br />
              Elevating Success
              <br />
              with Comprehensive
              <br />
              IT Solutions
            </h1>
            
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 text-red-300 bg-clip-text">
              Delivering Top-Notch Services and Becoming the Lifeblood of IT
              Companies Across All Continents.
            </p>
            
            <Link href="/RequestForQuote">
              <button className="bg-gradient-to-r from-red-500 to-red-900 hover:from-red-600 hover:to-red-950 text-white px-6 md:px-8 py-2 md:py-3 rounded-full transition duration-300 hover:scale-105 shadow-lg hover:shadow-red-900/50">
                Contact Us For More Information
              </button>
            </Link>
          </div>
          
          {/* Image Section with Tilt Effect and Glow */}
          <div className="hidden md:block relative h-64 md:h-96">
            <div className="relative w-full h-full">
              {/* Glowing shadow effect */}
              <div className="absolute inset-0 rounded-full bg-red-900/20 blur-xl animate-pulse"></div>
              
              {/* Tilted Card with custom styling */}
              <div className="relative z-10 w-full h-full">
                <TiltedCard
                  imageSrc="/products/top.webp"
                  altText="IT Solutions"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                  customClasses="rounded-full border-4 border-red-900/20 shadow-2xl shadow-red-900/30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;