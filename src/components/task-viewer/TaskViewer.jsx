import "./TaskViewer.css";
import TaskCard from "../TaskCard/TaskCard";
import React from "react";
import ControlPanel from "../control-panel/ControlPanel";

function TaskViewer(props) {
  return (
    <div className="task-viewer-container">
      <ControlPanel onNewTaskAdd={props.onNewTaskAdd} />
      <div className=" task-viewer-body">
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
      </div>
    </div>
  );
}

export default TaskViewer;
