import { Box, Drawer, IconButton, Modal } from "@mui/material";
import { Field, Form, Formik } from "formik";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { project_type } from "../../../Config/ArrayConfig";
import * as Yup from "yup";
import axios from "axios";
import { Config } from "../../../Config/APIConfig";
import { toast } from "react-toastify";
import { Delete, Edit, Visibility } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
};

const Task = () => {
  const today_date = moment().format("YYYY-MM-DD");
  console.log("today_date", today_date);
  const [open, setOpen] = useState(false);
  const [typeBtn, setTypeBtn] = useState();
  const [drawerData, setDrawerData] = useState();
  const [loader, setLoader] = useState(false);
  const [modalData, setModalData] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTypeBtn("");
    setDrawerData();
  };

  const [taskData, setTaskData] = useState([]);
  const initialValues = {
    task_name: "",
    task_description: "",
    project_name: "",
    task_due_date: today_date,
  };
  const [projectData, setProjectData] = useState([]);
  const handleProject = async () => {
    try {
      const res = await axios.get(Config.project);
      if (res.status === 200 || res.data.status === "200") {
        setProjectData(res.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    handleProject();
  }, []);

  const handleTask = async () => {
    try {
      const res = await axios.get(Config.tasks);
      if (res.status === 200 || res.data.status === "200") {
        setTaskData(res.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    handleTask();
  }, []);

  const addtask = async (values) => {
    setLoader(true);
    try {
      const res = await axios.post(Config.tasks, values);
      if (res.status === 201 || res.data.status === "200") {
        toast.success("Project Added Successfully");
        setLoader(false);
        handleClose();
        handleTask();
      }
    } catch (error) {
      setLoader(false);
      toast.error(error.message);
    }
  };

  const edittask = async (values) => {
    setLoader(true);
    try {
      const res = await axios.put(`${Config.tasks}/${values?.id}`, values);
      if (res.status === 200 || res.data.status === "200") {
        toast.success("Project Updated Successfully");
        setLoader(false);
        handleClose();
        handleTask();
      }
    } catch (error) {
      setLoader(false);
      toast.error(error.message);
    }
  };

  const deleteTask = async (values) => {
    setLoader(true);
    try {
      const res = await axios.delete(`${Config.tasks}/${values?.id}`);
      if (res.status === 200 || res.data.status === "200") {
        toast.success("Project Deleted Successfully");
        setLoader(false);
        handleModalClose();
        handleTask();
      }
    } catch (error) {
      setLoader(false);
      handleModalClose();
      toast.error(error.message);
    }
  };

  const form_validation = Yup.object().shape({
    project_name: Yup.string().required("Required"),
    task_description: Yup.string().required("Required"),
    task_name: Yup.string().required("Required"),
    task_due_date: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="section-heading">
        <h2 className="section-title">Task Area</h2>
        <button
          className="btn btn-primary btn-setting"
          onClick={() => {
            handleOpen();
            setTypeBtn("Create New");
          }}
        >
          + Create Task
        </button>
      </div>
      <div className="hover-effect overflow-auto">
        <table
          style={{
            minWidth: "700px",
          }}
          className="table table-bordered table-responsive table-striped table-hover"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">Task Name</th>
              <th scope="col">Task Description</th>
              <th scope="col">Task Due Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {taskData &&
              taskData.length != 0 &&
              taskData.map((items, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{items?.project_name}</td>
                    <td>{items?.task_name}</td>
                    <td>{items?.task_description}</td>
                    <td>{items?.task_due_date}</td>
                    <td>
                      <span
                        className="table-icons"
                        onClick={() => {
                          setDrawerData(items);
                          handleOpen();
                          setTypeBtn("View");
                        }}
                      >
                        <Visibility />
                      </span>
                      &nbsp;
                      <span
                        onClick={() => {
                          setDrawerData(items);
                          handleOpen();
                          setTypeBtn("Edit");
                        }}
                        className="table-icons"
                      >
                        <Edit />
                      </span>
                      &nbsp;
                      <span
                        className="table-icons"
                        onClick={() => {
                          handleModalOpen();
                          setModalData(items);
                        }}
                      >
                        <Delete />
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* Drawer for adding and Edit and View */}
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box className="drawer-width">
          <div className="drawer">
            <div className="drawer-header">
              <h6>{typeBtn} Task </h6>
            </div>
            <div className="drawer-body">
              <Formik
                initialValues={
                  typeBtn === "Create New"
                    ? initialValues
                    : typeBtn === "View" || typeBtn === "Edit"
                    ? drawerData
                    : null
                }
                validationSchema={form_validation}
                onSubmit={(values) => {
                  if (typeBtn === "Create New") {
                    addtask(values);
                  } else if (typeBtn === "Edit") {
                    edittask(values);
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                        <div className="form-group">
                          <label>
                            Task Name Name{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Field
                            type="text"
                            name="task_name"
                            readOnly={typeBtn === "View" ? true : false}
                            className="form-control"
                            placeholder="Enter Task Name"
                          />
                        </div>
                        {touched.task_name && errors.task_name && (
                          <div className="text-danger error-msg">
                            {errors.task_name}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                        <label>
                          Task Description{" "}
                          <span className="text-danger">*</span>{" "}
                        </label>
                        <div className="input-group">
                          <Field
                            type="text"
                            name="task_description"
                            readOnly={typeBtn === "View" ? true : false}
                            className="form-control"
                            placeholder="Enter Task Description"
                          />
                        </div>
                        {touched.task_description &&
                          errors.task_description && (
                            <div className="text-danger error-msg">
                              {errors.task_description}
                            </div>
                          )}
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                        <label>
                          Project Name <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <Field
                            as="select"
                            name="project_name"
                            readOnly={typeBtn === "View" ? true : false}
                            className="form-control"
                          >
                            {projectData && projectData.length != 0 ? (
                              <>
                                <option value="">Choose Project</option>
                                {projectData.map((val, i) => {
                                  return (
                                    <option value={val?.project_name} key={i}>
                                      {val?.project_name}
                                    </option>
                                  );
                                })}
                              </>
                            ) : (
                              <option value="">Please Create Project</option>
                            )}
                            {/* {projectData && projectData.length != 0 ? (
                              projectData.map((val, i) => {
                                return (
                                  <option value={val?.key} key={i}>
                                    {val?.label}
                                  </option>
                                );
                              })
                            ) : (
                              <></>
                            )} */}
                          </Field>
                        </div>
                        {touched.project_name && errors.project_name && (
                          <div className="text-danger error-msg">
                            {errors.project_name}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                        <div className="form-group">
                          <label>
                            Task Due Date <span className="text-danger">*</span>
                          </label>
                          <Field
                            type="date"
                            name="task_due_date"
                            readOnly={typeBtn === "View" ? true : false}
                            className="form-control"
                            placeholder="Task Date"
                          />
                        </div>
                        {touched.task_due_date && errors.task_due_date && (
                          <div className="text-danger error-msg">
                            {errors.task_due_date}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                        <div className="form-group" align="right">
                          <button
                            onClick={handleClose}
                            className="btn btn-light btn-sm"
                          >
                            Close
                          </button>
                          &nbsp;&nbsp;
                          {typeBtn != "View" && (
                            <button
                              type="submit"
                              disabled={loader}
                              className="btn btn-primary btn-sm"
                            >
                              Submit
                            </button>
                          )}
                          &nbsp;
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            {/* <div className="drawer-footer" align="right">
              <button className="btn btn-primary btn-sm">Submit</button>&nbsp;
              <button className="btn btn-secondary btn-sm">Close</button>
            </div> */}
          </div>
        </Box>
      </Drawer>
      {/* Modal for Delete */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="popup">
            <div className="popup-header">Delete Task</div>
            <div className="popup-body">
              <div className="desc-box">
                Are you sure you want to delete this task ?
              </div>
              <div className="detail-box">
                Project Name: <b>{modalData?.project_name}</b>
                <br />
                Task Name: <b>{modalData?.task_name}</b>
                <br />
                Task Description: <b>{modalData?.task_description}</b>
              </div>
            </div>

            <div className="popup-footer">
              <button
                disabled={loader}
                className="btn btn-primary"
                onClick={() => {
                  deleteTask(modalData);
                }}
              >
                Submit
              </button>
              &nbsp;&nbsp;
              <button
                className="btn btn-light"
                onClick={() => {
                  handleModalClose();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Task;
