import "./TaskViewer.css";
import TaskCard from "../TaskCard/TaskCard";

function TaskViewer(props) {
  return (
    <div className="task-viewer-container">
      <div className="control-panel-container">
        <div>
          <h3 className="view-title">Tasks</h3>
          <p className="subtitle">Your tasks in your space.</p>
        </div>
        <button onClick={props.onCreateClick} className="button-primary">
          Create Task
        </button>
      </div>

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
