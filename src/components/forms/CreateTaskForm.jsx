import React, { useState } from "react";
import "./CreateTaskForms.css";

const CreateTaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setTaskDate] = useState();
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

  const resetForms = () => {
    setTaskName("");
    setTaskDate("");
    setTaskDetails("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      name: taskName,
      dueDate: dueDate,
      details: taskDetails,
      status: "To do",
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
            className="input-primary"
            type="text"
          ></input>
        </div>
        <div className="form-row">
          <label className="label-vd">Due Data</label>
          <input
            value={dueDate}
            onChange={handleDataChange}
            className="input-primary"
            type="date"
          ></input>
        </div>
        <div className="form-row">
          <label className="label-vd">Details</label>
          <textarea
            value={taskDetails}
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
