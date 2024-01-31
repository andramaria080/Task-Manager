import React, { useEffect, useState } from "react";
import "./CreateTaskForms.css";
import clsx from "clsx";

const CreateTaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setTaskDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [formValidation, setFormValidation] = useState({
    taskName: "",
    dueDate: "",
    taskDetails: "",
    isValid: true,
  });

  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };
  const handleDataChange = (event) => {
    setTaskDate(event.target.value);
  };
  const handleDetailsChange = (event) => {
    setTaskDetails(event.target.value);
  };

  const resetForms = () => {
    setTaskName("");
    setTaskDate("");
    setTaskDetails("");
  };

  useEffect(() => {
    let taskNameError = "";
    let dueDateError = "";
    let taskDetailsError = "";
    let isValidError = "";

    if (taskName.length === 0) {
      taskNameError = "This field is required";
      isValidError = false;
    }
    if (dueDate.length === 0) {
      dueDateError = "This field is required";
      isValidError = false;
    }
    if (taskDetails.length === 0) {
      taskDetailsError = "This field need more then 3 characters";
      isValidError = false;
    }
    setFormValidation({
      taskName: taskNameError,
      dueDate: dueDateError,
      taskDetails: taskDetailsError,
      isValid: isValidError,
    });
  }, [taskName, dueDate, taskDetails]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      name: taskName,
      dueDate: dueDate,
      details: taskDetails,
      status: "Todo",
    };
    props.onNewAddTask(newTask);
    resetForms();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="label-vd">Task Name</label>
          <input
            value={taskName}
            onChange={handleNameChange}
            className={clsx(`input-primary`, {
              ["error"]: formValidation.taskName,
            })}
            type="text"
          />
          <p className="error-message">{formValidation.taskName}</p>
        </div>
        <div className="form-row">
          <label className="label-vd">Due Data</label>
          <input
            value={dueDate}
            onChange={handleDataChange}
            className={clsx("input-primary", {
              ["error"]: formValidation.dueDate,
            })}
            type="date"
          />
          <p className="error-message">{formValidation.dueDate}</p>
        </div>
        <div className="form-row">
          <label className="label-vd">Details</label>
          <textarea
            value={taskDetails}
            onChange={handleDetailsChange}
            className={clsx("input-primary", {
              ["error"]: formValidation.taskDetails,
            })}
            cols="38"
            rows="10"
          ></textarea>
          <p className="error-message">{formValidation.taskDetails}</p>
        </div>
        <button
          disabled={!formValidation.isValid}
          className="button-primary"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
