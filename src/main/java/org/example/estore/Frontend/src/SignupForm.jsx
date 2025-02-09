import React, { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import "./App.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const { name, email, password, confirmPassword } = formData;
    if (confirmPassword !== password) {
      alert("Passwords do not match");
      return;
    }

    try {
      const hashedPassword = CryptoJS.SHA256(password).toString();
      const response = await axios.post("http://localhost:8080/api/v1/signup", {
        name,
        email,
        password: hashedPassword,
      });

      if (response.status === 200) {
        alert("Signup successful");
        navigate("/storefront");
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Signup</h2>
        <input
          type="text"
          name="name"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="confirmPassword"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Confirm your password"
          required
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Signup
        </button>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            type="button"
            className="text-blue-500 hover:text-blue-600"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
