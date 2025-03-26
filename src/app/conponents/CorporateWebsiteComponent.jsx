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
            <p className="text-red-200 font-medium">Corporate Exercise</p>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-red-200">Who We Are?</h2>
          
          <div className="space-y-4">
            <p className="text-red-200">
              Founded in 2016, Spareware Pro is a pioneering force in Information and Communication Technology (ICT) solutions. Our mission transcends traditional IT services—we are strategic technology partners dedicated to propelling organizations in both government and private sectors towards digital excellence.
            </p>
            
            <p className="text-red-200">
              We stand at the intersection of technological innovation and environmental responsibility. Our unique full-cycle IT procurement approach doesn't just solve immediate technological challenges; it creates sustainable, forward-thinking solutions that align with your organization's long-term strategic goals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Easy Payment System section */}
      <section className="w-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 p-6 text-center bg-none">
          <div className="flex items-center justify-center space-x-2 mb-2 mt-[200px]">
            <div className="h-5 w-5 rounded-full bg-white"></div>
            <p className="text-red-200 font-medium">What We Offer</p>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-red-200">Hassle-Free Payment Solutions</h2>
          
          <p className="text-red-200">
            At Spareware Pro, our foundation is built on integrity, innovation, and customer-first values. We are committed to delivering top-tier service and support, ensuring the best outcomes for our clients, team, and partners—while contributing positively to a sustainable future. From small startups to large government agencies, we craft bespoke technological solutions that streamline operational efficiency, reduce technological complexity, and unlock your organization's full potential.
          </p>
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