"use client";
import React, { useState } from 'react';
import supabase from '../../supabaseClient';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    located: '',
    relatedto: '', // Updated column name (no underscore)
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
    } catch (error) {
      console.error('Error inserting data:', error.message);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="bg-none p-8 rounded-3xl max-w-lg mx-auto text-gray-200 border border-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">
            Your Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="located" className="block mb-2">
            Located
          </label>
          <input
            type="text"
            id="located"
            name="located"
            placeholder="Your Location"
            value={formData.located}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="relatedto" className="block mb-2">
            Please Select One
          </label>
          <select
            id="relatedto"
            name="relatedto" // Updated column name (no underscore)
            value={formData.relatedto}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white text-black appearance-none"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Offer Your Project">Offer Your Project</option>
            <option value="Support Needed For Configuration">Support Needed For Configuration</option>
            <option value="Sales Team">Sales Team</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2">
            Provide Your Insight
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-400 resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-black font-medium py-3 px-4 rounded-full flex items-center justify-center"
        >
          Send Message
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;