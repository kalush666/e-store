import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import StoreFront from "./StoreFront";
import "./App.css";

const App = () => {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <NavigationBar onAuthChange={setActiveForm} />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <div className="max-w-md mx-auto mt-10 px-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <LoginForm onSwitchToSignup={() => setActiveForm("signup")} />
                </div>
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div className="max-w-md mx-auto mt-10 px-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <SignupForm onSwitchToLogin={() => setActiveForm("login")} />
                </div>
              </div>
            }
          />
          <Route path="/storefront" element={<StoreFront />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
