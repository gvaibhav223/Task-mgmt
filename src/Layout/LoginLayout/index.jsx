import React from "react";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <>
      <div className="auth-container">
        <div className="h-100 align-center">
          <div className="auth-form-box">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
