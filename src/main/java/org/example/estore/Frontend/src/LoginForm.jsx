import React, { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import "./App.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const hashedPassword = CryptoJS.SHA256(password).toString();
      const response = await axios.post("http://localhost:8080/api/v1/login", {
        email,
        password: hashedPassword,
      });

      if (response.status === 200) {
        const userId = response.data.id;
        localStorage.setItem("userId", userId);
        alert("Login successful");
        navigate("/storefront");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid credentials");
      } else {
        console.error("Login failed:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
      <div className="space-y-2">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        Login
      </button>
      <p className="text-center text-gray-600 mt-4">
        Don't have an account?{" "}
        <button
          type="button"
          className="text-blue-500 hover:text-blue-600"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
