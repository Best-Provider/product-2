import React from 'react';
import { FaCog, FaPaintBrush, FaLaptopCode, FaPlus, FaChartLine, FaGift } from 'react-icons/fa';

const InnovationSteps = () => {
  return (
    <div className="w-full py-16 px-4 bg-none relative overflow-hidden">
      {/* Faded Building/Structure Background */}
      <div className="absolute left-0 top-0 h-full w-1/4 opacity-10 pointer-events-none">
        <img 
          src="/images/building-sketch.png" 
          alt="" 
          className="h-full object-cover object-left"
        />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bring <span className="text-teal-600">Innovation</span> to Your Company
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Let's start the journey towards success and enhance revenue for your business.
            Take your company to the next level.
          </p>
        </div>
        
        {/* Innovation Steps - Two Rows of Three */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Row 1 */}
          {/* Step 1 */}
          <div className="flex items-start space-x-4 p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-[#B06AB3] group">
            <div className="flex-shrink-0 p-1">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-800 rounded-md group-hover:border-white">
                <FaCog className="w-6 h-6 text-gray-800 group-hover:text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white">Define Goals</h3>
              <p className="text-gray-600 group-hover:text-white">
                Set clear innovation objectives for business growth.
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex items-start space-x-4 p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-[#B06AB3] group">
            <div className="flex-shrink-0 p-1">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-800 rounded-md group-hover:border-white">
                <FaPaintBrush className="w-6 h-6 text-gray-800 group-hover:text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white">Cultivate Creativity</h3>
              <p className="text-gray-600 group-hover:text-white">
                Foster a culture that encourages fresh ideas.
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex items-start space-x-4 p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-[#B06AB3] group">
            <div className="flex-shrink-0 p-1">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-800 rounded-md group-hover:border-white">
                <FaLaptopCode className="w-6 h-6 text-gray-800 group-hover:text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white">Invest in R&D</h3>
              <p className="text-gray-600 group-hover:text-white">
                Allocate resources for new solutions and improvements.
              </p>
            </div>
          </div>
          
          {/* Row 2 */}
          {/* Step 4 */}
          <div className="flex items-start space-x-4 p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-[#B06AB3] group">
            <div className="flex-shrink-0 p-1">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-800 rounded-md group-hover:border-white">
                <FaPlus className="w-6 h-6 text-gray-800 group-hover:text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white">Implement Agile Methods</h3>
              <p className="text-gray-600 group-hover:text-white">
                Adopt flexible processes to adapt quickly.
              </p>
            </div>
          </div>
          
          {/* Step 5 */}
          <div className="flex items-start space-x-4 p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-[#B06AB3] group">
            <div className="flex-shrink-0 p-1">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-800 rounded-md group-hover:border-white">
                <FaChartLine className="w-6 h-6 text-gray-800 group-hover:text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white">Embrace Technology & Partnerships</h3>
              <p className="text-gray-600 group-hover:text-white">
                Leverage tech and collaborations for innovation.
              </p>
            </div>
          </div>
          
          {/* Step 6 */}
          <div className="flex items-start space-x-4 p-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-[#B06AB3] group">
            <div className="flex-shrink-0 p-1">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-800 rounded-md group-hover:border-white">
                <FaGift className="w-6 h-6 text-gray-800 group-hover:text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white">Measure & Adapt</h3>
              <p className="text-gray-600 group-hover:text-white">
                Track progress and refine strategies for success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationSteps;