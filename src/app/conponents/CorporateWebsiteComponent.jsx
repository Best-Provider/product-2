"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TiltedCard from '../../../ReactBits/tiltedCard';

const CorporateWebsiteComponent = () => {
  return (
    <div className="w-full flex flex-col space-y-12 bg-transparent mt-40 px-4 md:px-0">
      {/* Who we are section */}
      <section className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <TiltedCard
            imageSrc="/what1.jpg"
            altText="Corporate meeting with team members in conference room"
            containerHeight="500px"
            containerWidth="100%"
            imageHeight="500px"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1.03}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
            customClasses="rounded-lg shadow-xl"
          />
        </div>
        
        <motion.div 
          className="w-full md:w-1/2 p-6 text-center bg-none justify-center mt-8 md:mt-[100px]"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <motion.div 
              className="h-5 w-5 rounded-full bg-white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
            />
            <p className="text-red-200 font-medium">Corporate Exercise</p>
          </div>
          
          <motion.h2 
            className="text-4xl font-bold mb-6 text-red-200"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: false }}
          >
            Who We Are?
          </motion.h2>
          
          <div className="space-y-4">
            <motion.p 
              className="text-red-200"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: false }}
            >
              Founded in 2016, Spareware Pro is a pioneering force in Information and Communication Technology (ICT) solutions. Our mission transcends traditional IT services—we are strategic technology partners dedicated to propelling organizations in both government and private sectors towards digital excellence.
            </motion.p>
            
            <motion.p 
              className="text-red-200"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: false }}
            >
              We stand at the intersection of technological innovation and environmental responsibility. Our unique full-cycle IT procurement approach doesn't just solve immediate technological challenges; it creates sustainable, forward-thinking solutions that align with your organization's long-term strategic goals.
            </motion.p>
          </div>
        </motion.div>
      </section>
      
      {/* Easy Payment System section */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center">
        <motion.div 
          className="w-full md:w-1/2 p-6 text-center bg-none mt-8 md:mt-[200px]"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <motion.div 
              className="h-5 w-5 rounded-full bg-white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
            />
            <p className="text-red-200 font-medium">What We Offer</p>
          </div>
          
          <motion.h2 
            className="text-4xl font-bold mb-6 text-red-200"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: false }}
          >
            Hassle-Free Payment Solutions
          </motion.h2>
          
          <motion.p 
            className="text-red-200"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: false }}
          >
            At Spareware Pro, our foundation is built on integrity, innovation, and customer-first values. We are committed to delivering top-tier service and support, ensuring the best outcomes for our clients, team, and partners—while contributing positively to a sustainable future. From small startups to large government agencies, we craft bespoke technological solutions that streamline operational efficiency, reduce technological complexity, and unlock your organization's full potential.
          </motion.p>
        </motion.div>
        
        <div className="w-full md:w-1/2">
          <TiltedCard
            imageSrc="/what2.jpg"
            altText="Two developers working on computers"
            containerHeight="500px"
            containerWidth="100%"
            imageHeight="500px"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1.03}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
            customClasses="rounded-lg shadow-xl"
          />
        </div>
      </section>
    </div>
  );
};

export default CorporateWebsiteComponent;