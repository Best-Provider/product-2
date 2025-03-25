import React from "react";
import Navbar from "../conponents/Navbar";
import Aurora from "../../../ReactBits/Particles/Aurora";
import SeventhGeniusFooter from "../conponents/SeventhGeniusFooter";
import QuoteForm from "../conponents/QuoteForm";

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen relative">
        {/* Aurora/Particles Component (in the background) */}
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        
        {/* Navbar on top of particles */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Map Image and Contact Text */}
        <div className="relative z-15 text-center mt-5">
          {/* Map Image */}
          <img 
            src="/map.png" // Replace with your map image path
            alt="Map"
            className="w-full max-w-4xl h-auto mx-auto"
          />
          
          {/* Contact Text */}
          <div className="relative mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-red-300 bg-none bg-opacity-30 px-6 py-3 rounded-lg shadow-lg">
            Contact Us
          </div>
        </div>

        {/* QuoteForm positioned below map */}
        <div className="relative z-20 w-full max-w-lg mx-auto my-10 px-5">
          <QuoteForm />
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-30">
        <SeventhGeniusFooter/>
      </div>
    </>
  );
};

export default page;