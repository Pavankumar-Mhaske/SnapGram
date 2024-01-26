import React from "react";
import { Routes, Route } from "react-router-dom";

import "./globals.css";
import { Home } from "./_root/pages";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes */}
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-in" element={<SignupForm />} />
        {/* Private routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
