import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
                navigate("/login");
                setIsMenuOpen(false);
              }}
            >
              Login
            </button>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              onClick={() => {
                navigate("/signup");
                setIsMenuOpen(false);
              }}
            >
              Sign Up
            </button>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              onClick={() => {
                navigate("/about");
                setIsMenuOpen(false);
              }}
            >
              About
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
