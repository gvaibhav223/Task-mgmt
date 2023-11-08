import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const LandingLayout = () => {
  return (
    <div>
      <Header />
      <div className="height-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LandingLayout;
