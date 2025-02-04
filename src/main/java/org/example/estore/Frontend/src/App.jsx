import React, { useState } from "react";
import NavigationBar from "./NavigationBar"; // Ensure this path and name are correct
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./App.css"; // Ensure this path is correct

const App = () => {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar onAuthChange={setActiveForm} />{" "}
      {/* Ensure this is rendered correctly */}
      <div className="max-w-md mx-auto mt-10 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeForm === "login" ? (
            <LoginForm onSwitchToSignup={() => setActiveForm("signup")} />
          ) : (
            <SignupForm onSwitchToLogin={() => setActiveForm("login")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
