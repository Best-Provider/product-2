"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const SeventhGeniusFooter = () => {
  return (
    <footer className="w-full relative overflow-hidden">
      {/* Glowing shadow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent blur-xl -z-10 opacity-30"></div>
      
      <div className="flex flex-col md:flex-row justify-between px-8 py-8 gap-8">
        {/* Logo and Company Description - Animated */}
        <motion.div 
          className="max-w-sm"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <div className="flex items-center">
              <div className="mr-2 w-[20px] h-[20px]">
                <img src="/logo.png" alt="logo" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-yellow-500">Spareware</span> 
                <span className="text-yellow-500">Pro</span>
              </span>
            </div>
          </div>
          <motion.p 
            className="text-red-300 text-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Spareware Pro is a top-tier ICT solutions provider, delivering cutting-edge technology to both government agencies and private sector businesses across the USA, regardless of their size.
          </motion.p>
        </motion.div>
        
        {/* Useful Links - Enhanced hover effects */}
        <div>
          <h3 className="text-red-300 font-semibold mb-4 text-lg">Useful Links</h3>
          <ul className="space-y-2">
            {[
              { href: "#", text: "Home" },
              { href: "/RequestForQuote", text: "Contact Us" },
              { href: "/About", text: "About Us" }
            ].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <a 
                  href={link.href} 
                  className="flex items-center text-red-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                >
                  <Check size={18} className="text-red-300 mr-2 group-hover:text-yellow-400 transition-colors duration-300" />
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* Subscribe Section - Enhanced hover effects */}
        <div>
          <h3 className="text-red-300 font-semibold mb-4 text-lg">Subscribe Now</h3>
          <ul className="space-y-2">
            {[
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                text: "888-214-7771" 
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                text: "sales@SparewarePro.com" 
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                text: "22nd Floor, Athenee Tower, 63 Wireless Road, Lumpini, Pathumwan, Bangkok 10330, Thailand" 
              }
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="inline-block text-red-300 mr-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {item.icon}
                </span>
                <span className="text-red-300 group-hover:text-yellow-400 transition-colors duration-300">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SeventhGeniusFooter;