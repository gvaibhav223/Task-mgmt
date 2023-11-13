import { Box, Drawer, IconButton, Modal } from "@mui/material";
import { Field, Form, Formik } from "formik";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { project_type } from "../../../Config/ArrayConfig";
import * as Yup from "yup";
import axios from "axios";
import { Config } from "../../../Config/APIConfig";
import { toast } from "react-toastify";
import { Delete, Edit, Remove, Visibility } from "@mui/icons-material";
import { project_type_obj } from "../../../Config/ObjectConfig";

const Profile = () => {
  return (
    <>
      <div className="profile-section">
        <div className="row">
          <div className="col-lg-6 my-2">
            <div className="img-box">
              <div className="profile-img">
                <img
                  src="./images/profile.jpg"
                  alt="profile"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 my-2">
            <div className="detail-box">
              <div className="row">
                <div className="col-6">Name:</div>
                <div className="col-6">
                  <b>Vaibhav</b>
                </div>
              </div>
              <div className="row">
                <div className="col-6">Email:</div>
                <div className="col-6">
                  <b>Vaibhav@gmail.com</b>
                </div>
              </div>
              <div className="row">
                <div className="col-6">Phone Number:</div>
                <div className="col-6">
                  <b>9898989898</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
