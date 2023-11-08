import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingLayout from "./Layout/LandingLayout";
import LandingPage from "./View/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<AllPages />} /> */}

          {/* Landing Page */}
          <Route element={<LandingLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
