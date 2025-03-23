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
          
          <h2 className="text-4xl font-bold mb-6 text-purple-200">Who we are?</h2>
          
          <div className="space-y-4">
            <p className="text-purple-200">
              Established in 2016, Seventh Genius is a leading provider of ICT Solutions to USA Government Sector and Private Sector organizations of all sizes.
            </p>
            
            <p className="text-purple-200">
              Seventh Genius is lasting true impact on the way IT is sold, providing a full circular procurement cycle to new and existing customers, for the good of the environment and future generations. By taking ownership of its customers' technology journey, Seventh Genius enables organizations to concentrate on what they do best -
            </p>
            
            <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-full hover:bg-gray-100 transition">
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
            <p className="text-purple-200 font-medium">We Provide</p>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-purple-200">Easy Payment System</h2>
          
          <p className="text-purple-200">
            Everything we do at Seventh Genius is underpinned by our core values, which ensure we provide the highest quality service and support, and always do what's best for our customers, employees and partners, as well as the rest of the global community.
          </p>
          
          <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-full hover:bg-gray-100 transition">
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
      
      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CorporateWebsiteComponent;