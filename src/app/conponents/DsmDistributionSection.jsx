import React from 'react';

const DsmDistributionSection = () => {
  return (
    <div className="w-full bg-none py-16 mt-20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        {/* Left content section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">
                Who We Are?
            <span className="text-purple-400">.</span>
          </h2>
          
          <div className="w-24 h-1 bg-purple-400 mb-8"></div>
          
          <p className="text-purple-400 text-lg mb-10 max-w-lg">
          At Spareware Pro, we specialize in sourcing and delivering top-quality IT solutions for resellers. With our price match guarantee, flexible financial options, and seamless logistics, we focus on closing deals efficiently while building lasting partnerships. Our goal? To make your procurement process simple, competitive, and hassle-free.
          </p>
          
          <button className="bg-transparent hover:bg-white hover:text-black text-purple-400 border-2 border-purple-400 py-3 px-8 rounded-full font-medium transition duration-300 relative">
            CONTACT US
            <div className="absolute inset-0 border-2 border-purple-400 rounded-full -ml-1 -mt-1"></div>
          </button>
        </div>
        
        {/* Right image section */}
        <div className="md:w-1/2">
          <div className="relative">
            <div className="bg-purple-400 w-full h-full absolute top-2 left-2 rounded-xl"></div>
            <div className="relative rounded-xl overflow-hidden border-2 border-purple-400">
              <img 
                src="/about.jpg" 
                alt="Digital technology visualization" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DsmDistributionSection;