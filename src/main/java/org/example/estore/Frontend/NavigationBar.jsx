import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavigationBar = ({ onAuthChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">YourApp</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md"
              onClick={() => onAuthChange("login")}
            >
              Login
            </button>
            <button
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md"
              onClick={() => onAuthChange("signup")}
            >
              Sign Up
            </button>
            <button className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md">
              About
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              onClick={() => {
                onAuthChange("login");
                setIsMenuOpen(false);
              }}
            >
              Login
            </button>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              onClick={() => {
                onAuthChange("signup");
                setIsMenuOpen(false);
              }}
            >
              Sign Up
            </button>
            <button className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100">
              About
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
