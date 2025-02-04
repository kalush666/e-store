import React, { useState } from "react";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const App = () => {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onAuthChange={setActiveForm} />

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
