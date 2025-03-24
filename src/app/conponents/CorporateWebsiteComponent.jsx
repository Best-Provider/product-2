"use client"
import React from 'react';

const CorporateWebsiteComponent = () => {
  return (
    <div className="w-full flex flex-col space-y-12 bg-transparent mt-40">
      {/* Who we are section */}
      <section className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img 
            src="/what1.jpg" 
            alt="Corporate meeting with team members in conference room" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 text-center bg-none justify-center mt-[100px]">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="h-5 w-5 rounded-full bg-white"></div>
            <p className="text-purple-200 font-medium">Corporate Exercise</p>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-purple-200">Who We Are?</h2>
          
          <div className="space-y-4">
            <p className="text-purple-200">
            Founded in 2016, Spareware Pro is a premier ICT solutions provider, serving both government and private sector organizations across the USA. We cater to businesses of all sizes, delivering cutting-edge technology tailored to their unique needs.
            </p>
            
            <p className="text-purple-200">
            At Spareware Pro, we’re revolutionizing IT procurement with a sustainable, full-cycle approach—ensuring efficiency while minimizing environmental impact. Our end-to-end solutions empower clients to focus on their core operations, while we handle their technology roadmap with expertise and innovation. -
            </p>
            
            <button className="mt-6 bg-white text-white bg-gradient-to-r from-purple-500 to-purple-900 px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* gradient-to-r from-blue-700 to-[#B06AB3] */}
      
      {/* Easy Payment System section */}
      <section className="w-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 p-6 text-center bg-none">
          <div className="flex items-center justify-center space-x-2 mb-2 mt-[200px]">
            <div className="h-5 w-5 rounded-full bg-white"></div>
            <p className="text-purple-200 font-medium">What We Offer</p>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-purple-200">Hassle-Free Payment Solutions</h2>
          
          <p className="text-purple-200">
          At Spareware Pro, our foundation is built on integrity, innovation, and customer-first values. We are committed to delivering top-tier service and support, ensuring the best outcomes for our clients, team, and partners—while contributing positively to a sustainable future.
          </p>
          
          <button className="mt-6 text-white   bg-gradient-to-r from-purple-500 to-purple-900 px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Read More
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src="/what2.jpg" 
            alt="Two developers working on computers" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      

    </div>
  );
};

export default CorporateWebsiteComponent;