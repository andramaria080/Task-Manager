import React from "react";
import "./EmptyListMessage.css";
import taskListIcon from "../../assest/icons/tasks-icon.png";

function EmptyListMessage(props) {
  return (
    <div className="empty-list-container">
      <div className="empty-list-message">
        <img className="tasks-logo" src={taskListIcon} alt="icon" />
        <h3 className="view-title">No Tasks Yet</h3>
        <p className="subtitle">Get productive. Create a Task Now.</p>
        <button
          // Because we want to set the setIsOpen true when we press the click on button.
          // We need a function true to set setIsOpen true and to create a loop, a function witch call another function.
          onClick={() => props.onCreateTaskClick(true)}
          className="button-primary btn-xl"
        >
          Create Task
        </button>
      </div>
    </div>
  );
}

export default EmptyListMessage;
