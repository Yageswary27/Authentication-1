import React from 'react';

const Contact: React.FC = () => (
  <div className="p-6 max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
      <textarea placeholder="Message" className="w-full p-2 border rounded" rows={4}></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;
