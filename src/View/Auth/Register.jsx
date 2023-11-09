import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Register = () => {
  const [showPassword, setShowPassword] = useState(true);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  const form_validation = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <>
      <div className="register-form-box">
        <div className="auth-title">
          <h4>Register</h4>
        </div>
        <div className="form-area">
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
            }}
            validationSchema={form_validation}
            // onSubmit={(values) => {
            //   console.log(values);
            // }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <label>Username</label>
                      <Field
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter username"
                      />
                      {touched.username && errors.username && (
                        <div className="text-danger error-msg">
                          {errors.username}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <label>Email address</label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                      {touched.email && errors.email && (
                        <div className="text-danger error-msg">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label>Password</label>
                    <div className="input-group">
                      <Field
                        type={showPassword ? "password" : "text"}
                        name="password"
                        className="form-control"
                        placeholder="Password"
                      />
                      <div className="input-group-append">
                        <span
                          className="input-group-text"
                          onClick={() => {
                            handleClick();
                          }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </span>
                      </div>
                    </div>
                    {touched.password && errors.password && (
                      <div className="text-danger error-msg">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <div className="">
                        Already have account?
                        <Link to="/login"> Login </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
