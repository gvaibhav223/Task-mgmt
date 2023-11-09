import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingLayout from "./Layout/LandingLayout";
import LandingPage from "./View/Landing";
import AuthPage from "./Layout/LoginLayout";
import Login from "./View/Auth/Login";
import Register from "./View/Auth/Register";
import PageNotFound from "./View/Error/PageNotFound";
import DashboardLayout from "./Layout/DashboardLayout";
import Home from "./View/Dashboard/Home/Home";
import Project from "./View/Dashboard/Project";
import Task from "./View/Dashboard/Task";
import Profile from "./View/Dashboard/Profile";

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
          <Route element={<DashboardLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/task" element={<Task />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
