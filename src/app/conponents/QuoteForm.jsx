"use client";
import React, { useState } from 'react';
import supabase from '../../supabaseClient';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    located: '',
    relatedto: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('quotes')
        .insert([formData]);

      if (error) throw error;
      console.log('Data inserted successfully:', data);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        located: '',
        relatedto: '',
        message: ''
      });
    } catch (error) {
      console.error('Error inserting data:', error.message);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="relative overflow-hidden p-8 rounded-3xl max-w-lg mx-auto text-gray-200 border border-white/20 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm">
      {/* Tilted background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/10 rounded-full mix-blend-overlay filter blur-xl transform rotate-45"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-overlay filter blur-xl transform -rotate-12"></div>
      
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
        Get a Quote
      </h2>
      
      <form onSubmit={handleSubmit} className="relative z-10">
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-300">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (123) 456-7890"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="located" className="block mb-2 text-sm font-medium text-gray-300">
            Location
          </label>
          <input
            type="text"
            id="located"
            name="located"
            placeholder="City, Country"
            value={formData.located}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="relatedto" className="block mb-2 text-sm font-medium text-gray-300">
            Inquiry Type
          </label>
          <select
            id="relatedto"
            name="relatedto"
            value={formData.relatedto}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all appearance-none"
            required
          >
            <option value="" disabled className="text-gray-400">Select inquiry type</option>
            <option value="Product Inquiry" className="bg-gray-800">Product Inquiry</option>
            <option value="Offer Your Project" className="bg-gray-800">Offer Your Project</option>
            <option value="Support Needed For Configuration" className="bg-gray-800">Support Needed</option>
            <option value="Sales Team" className="bg-gray-800">Sales Team</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project or inquiry..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-red-500/20"
        >
          <span>Send Message</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;