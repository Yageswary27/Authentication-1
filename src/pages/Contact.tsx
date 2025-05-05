import React from 'react';

const Contact: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4 py-12">
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Contact Us</h2>
      <p className="text-gray-600 text-center mb-8">We’d love to hear from you. Please fill out the form below.</p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
          <textarea
            placeholder="Write your message here"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Contact;
