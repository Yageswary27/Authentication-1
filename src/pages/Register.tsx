import React from 'react';

const Register: React.FC = () => (
  <div className="p-6 max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4">Register for a Course</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
      <input type="text" placeholder="Interested Course" className="w-full p-2 border rounded" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  </div>
);

export default Register;
