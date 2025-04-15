import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Add this import

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // <-- useNavigate hook

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset password for:', email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-400"
            />

            <div className="flex gap-3">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Send Reset Link
              </button>

              {/* ✅ Cancel Button */}
              <button
                type="button"
                onClick={() => navigate(-1)} // <-- Go back
                className="w-full bg-gray-300 text-gray-800 py-2 rounded-xl hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center text-gray-700 space-y-4">
            <p>
              If an account exists with <strong>{email}</strong>, a password reset link has been sent to your email.
            </p>
            <p>Please check your inbox and follow the instructions to reset your password.</p>
            <button
              onClick={() => navigate('/login')} // You can also go directly to login
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
