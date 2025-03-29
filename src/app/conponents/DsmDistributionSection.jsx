"use client";
import React from "react";
import Link from "next/link";
import { motion, useInView } from 'framer-motion';
import TiltedCard from '../../../ReactBits/tiltedCard';

const DsmDistributionSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      ref={ref}
      className="w-full bg-none py-16 mt-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        {/* Left content section */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-red-400 mb-6">
            Who We Are?
            <span className="text-red-400">.</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="w-24 h-1 bg-red-400 mb-8"></motion.div>

          <motion.p variants={itemVariants} className="text-red-400 text-lg mb-10 max-w-lg">
            At Spareware Pro, we specialize in sourcing and delivering
            top-quality IT solutions for resellers. With our price match
            guarantee, flexible financial options, and seamless logistics, we
            focus on closing deals efficiently while building lasting
            partnerships. Our goal? To make your procurement process simple,
            competitive, and hassle-free.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/RequestForQuote">
              <button className="bg-transparent hover:bg-white hover:text-black text-red-400 border-2 border-red-400 py-3 px-8 rounded-full font-medium transition duration-300 relative">
                CONTACT US
                <div className="absolute inset-0 border-2 border-red-400 rounded-full -ml-1 -mt-1"></div>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right image section - Mobile version (simple bordered image) */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 order-1 md:order-2 md:hidden">
          <div className="relative">
            <div className="bg-red-400 w-full h-full absolute top-2 left-2 rounded-xl"></div>
            <div className="relative rounded-xl overflow-hidden border-2 border-red-400">
              <img
                src="/about.jpg"
                alt="Spareware Pro Team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right image section - Desktop version (tilted effect) */}
        <div className="hidden md:block md:w-1/2 relative h-64 md:h-96 order-1 md:order-2">
          <div className="relative w-full h-full">
            {/* Glowing shadow effect */}
            <div className="absolute inset-0 rounded-xl bg-red-900/20 blur-xl"></div>
            
            {/* Tilted Card */}
            <div className="relative z-10 w-full h-full">
              <TiltedCard
                imageSrc="/about.jpg"
                altText="Spareware Pro Team"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.03}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                customClasses="rounded-xl border-2 border-red-400/30 shadow-lg shadow-red-900/20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DsmDistributionSection;