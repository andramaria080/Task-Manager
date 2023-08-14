import React, { useState } from "react";
import "./CreateTaskForms.css";

const CreateTaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDueDate, setTaskDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");

  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };
  const handleDataChange = (event) => {
    setTaskDate(event.target.value);
  };
  const handleDetailsChange = (event) => {
    setTaskDetails(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      taskName: taskName,
      taskDueDate: taskDueDate,
      taskDetails: taskDetails,
      status: "To Do",
    };
    console.log(newTask);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="label-vd">Task Name</label>
          <input
            onChange={handleNameChange}
            className="input-primary"
            type="text"
          ></input>
        </div>
        <div className="form-row">
          <label className="label-vd">Due Data</label>
          <input
            onChange={handleDataChange}
            className="input-primary"
            type="date"
          ></input>
        </div>
        <div className="form-row">
          <label className="label-vd">Details</label>
          <textarea
            onChange={handleDetailsChange}
            className="input-primary"
            cols="38"
            rows="10"
          ></textarea>
        </div>
        <button className="button-primary" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
