// components/ServiceSupport.js
const ServiceSupport = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-[150px] text-red-300">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services & Support</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">IT Services</h2>
          <p className="mb-4">We offer comprehensive solutions for all your enterprise technology needs:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Custom Server Solutions</li>
            <li>Enterprise Networking Equipment</li>
            <li>High-Capacity Storage Systems</li>
            <li>IT Asset Recovery Services</li>
            <li>Certified Data Destruction</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Technical Support</h2>
          <p className="mb-4">Our expert team provides complete support for all products and installations:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Full product lifecycle support</li>
            <li>Installation assistance</li>
            <li>Third-party product integration</li>
            <li>Problem resolution guarantee</li>
            <li>Dedicated technical specialists</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Do you maintain inventory?</h3>
            <p className="text-red-200">Yes, we operate a fully stocked warehouse in California to ensure timely deliveries nationwide.</p>
          </div>
          <div>
            <h3 className="font-medium">What warranties do you offer?</h3>
            <p className="text-red-200">All products are guaranteed against DOA (Dead On Arrival) status. Many items also carry remaining manufacturer warranties.</p>
          </div>
          <div>
            <h3 className="font-medium">What are your shipping options?</h3>
            <p className="text-red-200">Orders placed by 1PM PST ship same day when products are in stock.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
        <p className="mb-4">Our standard terms govern all sales unless otherwise agreed in writing:</p>
        <div className="space-y-4 text-sm text-red-200">
          <p><strong>Pricing:</strong> All prices are in USD and subject to change with notice.</p>
          <p><strong>Shipping:</strong> Costs calculated at checkout. Delivery times are estimates only.</p>
          <p><strong>Payment:</strong> Net 30 terms with 2% monthly interest on late payments.</p>
          <p><strong>Returns:</strong> 30-day return policy with RMA required. 25% restocking fee may apply.</p>
          <p><strong>Warranty:</strong> 30-day replacement guarantee on defective products.</p>
          <p><strong>Support:</strong> We provide technical support for all products we sell.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSupport;