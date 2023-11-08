import { Loupe } from "@mui/icons-material";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="home-banner-container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-container">
              <div className="banner-heading">
                Productivity is at{" "}
                <span className="special-text">The Heart </span>
                Of Every Organization
              </div>
              <div className="mt-2 mb-2" />
              <div className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
                tempore! Ipsum quaerat hic sed. Odit quas cumque praesentium!
                Odio neque suscipit nihil consequuntur soluta nesciunt expedita
                sint totam, ipsam fugit.
              </div>
              <div className="mt-2 mb-2" />
              <button className="btn btn-success btn-lg">
                <Loupe /> &nbsp; Register
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="home-banner-img">
              <img
                src="./images/home banner.png"
                alt="Banner Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
