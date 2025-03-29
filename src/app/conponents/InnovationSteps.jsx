"use client"
import React from 'react';
import { FaCog, FaPaintBrush, FaLaptopCode, FaPlus, FaChartLine, FaGift } from 'react-icons/fa';
import 'animate.css';
import { motion, useInView } from 'framer-motion';

const InnovationSteps = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Data for innovation steps
  const innovationSteps = [
    {
      icon: <FaCog className="w-6 h-6" />,
      title: "Define Goals",
      description: "Set clear innovation objectives for business growth."
    },
    {
      icon: <FaPaintBrush className="w-6 h-6" />,
      title: "Cultivate Creativity",
      description: "Foster a culture that encourages fresh ideas."
    },
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
      title: "Invest in R&D",
      description: "Allocate resources for new solutions and improvements."
    },
    {
      icon: <FaPlus className="w-6 h-6" />,
      title: "Implement Agile Methods",
      description: "Adopt flexible processes to adapt quickly."
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Embrace Technology & Partnerships",
      description: "Leverage tech and collaborations for innovation."
    },
    {
      icon: <FaGift className="w-6 h-6" />,
      title: "Measure & Adapt",
      description: "Track progress and refine strategies for success."
    }
  ];

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full py-16 px-4 bg-none relative overflow-hidden"
    >
      {/* Faded Building/Structure Background */}
      <div className="absolute left-0 top-0 h-full w-1/4 opacity-10 pointer-events-none">
        <img 
          src="/images/building-sketch.png" 
          alt="" 
          className="h-full object-cover object-left"
        />
      </div>
      
      {/* Main Content */}
      <div className="container text-red-300 mx-auto relative z-10">
        {/* Heading Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bring <span className="text-red-300">Innovation</span> to Your Company
          </h2>
          <p className="text-red-300 max-w-3xl mx-auto">
            Let's start the journey towards success and enhance revenue for your business.
            Take your company to the next level.
          </p>
        </motion.div>
        
        {/* Innovation Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {innovationSteps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group h-full"
            >
              <motion.div
                variants={cardVariants}
                className="flex items-start space-x-4 p-6 rounded-lg transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-gradient-to-r hover:from-red-700/80 hover:to-red-900/80 border border-red-900/20 hover:border-red-300/30 bg-gradient-to-b from-red-900/10 to-transparent h-full"
              >
                <div className="flex-shrink-0 p-1 transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-red-900/30 rounded-md group-hover:border-red-300 transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1 transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  <h3 className="text-xl font-bold mb-2 text-red-300 group-hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                    {step.title}
                  </h3>
                  <p className="text-red-300/90 group-hover:text-white/90 transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InnovationSteps;