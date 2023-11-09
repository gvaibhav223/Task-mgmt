import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="error-page m-3">
        <img src="./images/404-img.png" className="img-fluid" alt="error" />
        <div className="mt-3" align="center">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
