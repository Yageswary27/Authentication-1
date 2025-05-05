import React from 'react';

const Register: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 flex items-center justify-center px-4 py-12">
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Register for a Course</h2>
      <p className="text-gray-600 text-center mb-8">Fill out the form below to register for the course you're interested in.</p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Interested Course</label>
          <input
            type="text"
            placeholder="Enter the course you're interested in"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Register;
