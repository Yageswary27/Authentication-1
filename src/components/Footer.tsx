import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-10 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      
      {/* About Us */}
      <div>
        <h3 className="text-xl font-semibold mb-4">About Us</h3>
        <p className="text-gray-300">
          IT Training Academy is dedicated to delivering top-notch IT courses to help students and professionals grow in their careers. Join us to build your future in tech!
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="/courses" className="hover:text-yellow-400 transition">Courses</a></li>
          <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          <li><a href="/register" className="hover:text-yellow-400 transition">Register</a></li>
        </ul>
      </div>

      {/* Contact Info + Social Media */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-300">Email: info@itacademy.com</p>
        <p className="text-gray-300">Phone: +977-9800000000</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-white hover:text-blue-500"><FaFacebookF /></a>
          <a href="#" className="text-white hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="text-white hover:text-pink-500"><FaInstagram /></a>
        </div>
      </div>
    </div>

    <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
      © 2025 IT Training Academy. All rights reserved.
    </div>
  </footer>
);

export default Footer;
