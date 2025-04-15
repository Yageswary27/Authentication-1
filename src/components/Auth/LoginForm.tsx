import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

// Google को global टाइप declare गर्नुहोस्
declare global {
  interface Window {
    google: any;
  }
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  // ✅ Google Login को callback function
  const handleGoogleLogin = (response: any) => {
    console.log("Google Token:", response.credential);
    alert("Google Login Successful! Token:\n" + response.credential.slice(0, 50) + "...");
  };

  // ✅ Google Login Button Render गर्ने useEffect
  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID_HERE", // <-- यहाँ आफ्नो Client ID राख्नुहोस्
        callback: handleGoogleLogin,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-login-button"),
        { theme: "outline", size: "large", width: "100%" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-200 ring-1 ring-blue-100"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800">Welcome Back 👋</h2>
        <p className="text-sm text-center text-gray-500">Login to your account</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <span
            onClick={togglePassword}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-blue-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm flex-wrap gap-2">
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="accent-blue-600"
            />
            Remember me
          </label>
          <a href="/forgot-password" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
          <a href="/signup" className="text-blue-600 hover:underline">
            Create an account
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Login
        </button>

        <div className="flex items-center gap-2 text-gray-500">
          <hr className="flex-grow border-gray-300" />
          or
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* ✅ Google Login Button Container */}
        <div id="google-login-button" className="w-full flex justify-center" />
      </form>
    </div>
  );
};

export default LoginForm;
