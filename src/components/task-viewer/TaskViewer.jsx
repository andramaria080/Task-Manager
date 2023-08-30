import "./TaskViewer.css";
import TaskCard from "../TaskCard/TaskCard";
import React, { useState } from "react";
import ControlPanel from "../control-panel/ControlPanel";
import EmptyListMessage from "../empty-list-message/EmptyListMessage";

function TaskViewer(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="task-viewer-container">
      <ControlPanel
        // Send the ControlPanel's props to have them with the obj ContolPanel from ControlPanel.jsx, to work with them here.
        taskList={props.taskList}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onNewTaskAdd={props.onNewTaskAdd}
      />
      <div className=" task-viewer-body">
        {props.taskList.length > 0 ? (
          <div className=" task-list">
            {props.taskList.map((item) => {
              return (
                <TaskCard
                  key={item.id}
                  id={item.id}
                  status={item.status}
                  name={item.name}
                  dueDate={item.dueDate}
                />
              );
            })}
          </div>
        ) : (
          <EmptyListMessage onCreateTaskClick={setIsOpen} />
        )}
      </div>
    </div>
  );
}

export default TaskViewer;
