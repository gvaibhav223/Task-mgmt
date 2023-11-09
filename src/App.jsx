import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingLayout from "./Layout/LandingLayout";
import LandingPage from "./View/Landing";
import AuthPage from "./Layout/LoginLayout";
import Login from "./View/Auth/Login";
import Register from "./View/Auth/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Landing Page */}
          <Route element={<LandingLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route element={<AuthPage />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
