import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";

const LoginForm = ({ onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

      <div className="space-y-2">
        <label className="block text-gray-700">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-gray-700">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Login
      </button>

      <p className="text-center text-gray-600">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="text-blue-500 hover:text-blue-600"
        >
          Sign up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
