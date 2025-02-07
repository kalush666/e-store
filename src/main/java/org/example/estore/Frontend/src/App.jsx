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
        <div className="max-w-md mx-auto mt-10 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route
                path="/login"
                element={
                  <LoginForm onSwitchToSignup={() => setActiveForm("signup")} />
                }
              />
              <Route
                path="/signup"
                element={
                  <SignupForm onSwitchToLogin={() => setActiveForm("login")} />
                }
              />
              <Route path="/storefront" element={<StoreFront />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
