// components/ServiceSupport.js
const ServiceSupport = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-[150px] text-red-300">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-200 to-red-400 bg-clip-text text-transparent">
        Our Services & Support
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-red-400 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-red-900 rounded-lg flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold">IT Services</h2>
          </div>
          <p className="mb-6 text-red-200">We offer comprehensive solutions for all your enterprise technology needs:</p>
          <ul className="space-y-3">
            {['Custom Server Solutions', 'Enterprise Networking Equipment', 'High-Capacity Storage Systems', 'IT Asset Recovery Services', 'Certified Data Destruction'].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-red-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-red-400 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-red-900 rounded-lg flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold">Technical Support</h2>
          </div>
          <p className="mb-6 text-red-200">Our expert team provides complete support for all products and installations:</p>
          <ul className="space-y-3">
            {['Full product lifecycle support', 'Installation assistance', 'Third-party product integration', 'Problem resolution guarantee', 'Dedicated technical specialists'].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-red-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              question: "Do you maintain inventory?",
              answer: "Yes, we operate a fully stocked warehouse in California to ensure timely deliveries nationwide."
            },
            {
              question: "What warranties do you offer?",
              answer: "All products are guaranteed against DOA (Dead On Arrival) status. Many items also carry remaining manufacturer warranties."
            },
            {
              question: "What are your shipping options?",
              answer: "Orders placed by 1PM PST ship same day when products are in stock."
            }
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
              <h3 className="font-medium text-lg mb-2 text-red-300">{faq.question}</h3>
              <p className="text-red-200 pl-4">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Terms & Conditions
        </h2>
        <p className="mb-6 text-red-200">Our standard terms govern all sales unless otherwise agreed in writing:</p>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          {[
            { title: "Pricing:", text: "All prices are in USD and subject to change with notice." },
            { title: "Shipping:", text: "Costs calculated at checkout. Delivery times are estimates only." },
            { title: "Payment:", text: "Net 30 terms with 2% monthly interest on late payments." },
            { title: "Returns:", text: "30-day return policy with RMA required. 25% restocking fee may apply." },
            { title: "Warranty:", text: "30-day replacement guarantee on defective products." },
            { title: "Support:", text: "We provide technical support for all products we sell." }
          ].map((term, index) => (
            <div key={index} className="flex">
              <div className="bg-red-900/50 rounded-lg p-3 mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-red-300">{term.title}</p>
                <p className="text-red-200">{term.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSupport;