import React from 'react';
import { Check } from 'lucide-react';

const SeventhGeniusFooter = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col md:flex-row justify-between px-8 py-8 gap-8">
        {/* Logo and Company Description */}
        <div className="max-w-sm">
          <div className="mb-6">
            {/* Logo with gradient colors - kept original */}
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
          <p className="text-red-300 text-sm">
            Spareware Pro is a top-tier ICT solutions provider, delivering cutting-edge technology to both government agencies and private sector businesses across the USA, regardless of their size.
          </p>
        </div>
        
        {/* Useful Links */}
        <div>
          <h3 className="text-red-300 font-semibold mb-4 text-lg">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center text-red-300">
                <Check size={18} className="text-red-300 mr-2" /> Home
              </a>
            </li>
            <li>
              <a href="/RequestForQuote" className="flex items-center text-red-300">
                <Check size={18} className="text-red-300 mr-2" />Contact Us
              </a>
            </li>
            <li>
              <a href="/About" className="flex items-center text-red-300">
                <Check size={18} className="text-red-300 mr-2" /> About Us
              </a>
            </li>
          </ul>
        </div>
        
        {/* Subscribe Section */}
        <div>
          <h3 className="text-red-300 font-semibold mb-4 text-lg">Subscribe Now</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="inline-block text-red-300 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="text-red-300">888-214-7771</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block text-red-300 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-red-300">sales@SparewarePro.com</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block text-red-300 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="text-red-300">7460 warren pkwy STE 100, Frisco TX 75034 USA</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SeventhGeniusFooter;