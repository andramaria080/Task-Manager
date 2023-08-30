import "./ControlPanel.css";
import React, { useState } from "react";
import Modal from "../modal/Modal";
import CreateTaskForm from "../forms/CreateTaskForm";

function ControlPanel(props) {
  const { isOpen, setIsOpen, onNewTaskAdd, taskList } = props;

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // Send the newTask as props on handleNewTaskAdd to know what we create and to close the Modal after that.
  const handleNewTaskAdd = (newTask) => {
    onNewTaskAdd(newTask);
    closeModal();
  };

  return (
    <div className="control-panel-container">
      <div>
        <h3 className="view-title">Tasks</h3>
        <p className="subtitle">Your tasks in your space.</p>
      </div>
      {/* Condition Rendering for button to react when the tasks are existing or
      not. If the condition is true it will applay the button (with &&.) */}
      {taskList.length > 0 && (
        <button onClick={openModal} className="button-primary">
          Create Task
        </button>
      )}
      <Modal onClose={closeModal} isOpen={isOpen}>
        {/* Next are the "props.children" from Modal.jsx */}
        <div className="card-x1">
          <h3 id="create-task">Create Task</h3>
          <CreateTaskForm onNewAddTask={handleNewTaskAdd} />
        </div>
      </Modal>
    </div>
  );
}
export default ControlPanel;
