import React from "react";
import Home from "./Home";
import PageHead from "../../Component/PageHead";
import Services from "./Services";

const LandingPage = () => {
  return (
    <PageHead title="Task Mgmt">
      <div className="container">
        <Home />
        <Services />
      </div>
    </PageHead>
  );
};

export default LandingPage;
