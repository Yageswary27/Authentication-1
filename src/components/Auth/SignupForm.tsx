import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
  };

  // ✅ Google response handler
  const handleGoogleSignup = (response: any) => {
    console.log('Google Credential Token:', response.credential);
    alert('Signup successful using Google!\nToken: ' + response.credential.slice(0, 50) + '...');
    // Normally, token is sent to backend for verification & user creation
  };

  // ✅ Render Google Button
  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID', // <-- Replace with your real client ID
        callback: handleGoogleSignup,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-signup-button'),
        { theme: 'outline', size: 'large', width: '100%' }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-400"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or</div>

        {/* ✅ Google Sign-up Button Container */}
        <div id="google-signup-button" className="w-full flex justify-center"></div>
      </div>
    </div>
  );
};

export default Signup;
