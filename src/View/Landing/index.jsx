import React from "react";
import Home from "./Home";
import PageHead from "../../Component/PageHead";

const LandingPage = () => {
  return (
    <PageHead title="Task Mgmt">
      <div className="container">
        <Home />
      </div>
    </PageHead>
  );
};

export default LandingPage;
