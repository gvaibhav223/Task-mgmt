import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  const form_validation = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <>
      <div className="login-form-box">
        <div className="auth-title">
          <h4>Login</h4>
        </div>
        <div className="form-area">
          <Formik
            initialValues={{
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
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <div className="">
                        Dont have account?
                        <Link to="/register"> Register </Link>
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

export default Login;
