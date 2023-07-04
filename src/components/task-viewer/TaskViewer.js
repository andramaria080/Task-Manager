import "./TaskViewer.css";
import TaskCard from "../TaskCard/TaskCard";

function TaskViewer(props) {
  return (
    <div className="task-viewer-container">
      <h1>Task Manager</h1>
      <div className=" task-viewer-body">
        <div className=" task-list">
          <TaskCard
            id={props.taskList[0].id}
            status={props.taskList[0].status}
            name={props.taskList[0].name}
            dueDate={props.taskList[0].dueDate}
          />
          <TaskCard
            id={props.taskList[1].id}
            status={props.taskList[1].status}
            name={props.taskList[1].name}
            dueDate={props.taskList[1].dueDate}
          />
          <TaskCard
            id={props.taskList[2].id}
            status={props.taskList[2].status}
            name={props.taskList[2].name}
            dueDate={props.taskList[2].dueDate}
          />
          <TaskCard
            id={props.taskList[3].id}
            status={props.taskList[3].status}
            name={props.taskList[3].name}
            dueDate={props.taskList[3].dueDate}
          />
          <TaskCard
            id={props.taskList[4].id}
            status={props.taskList[4].status}
            name={props.taskList[4].name}
            dueDate={props.taskList[4].dueDate}
          />
          <TaskCard
            id={props.taskList[5].id}
            status={props.taskList[5].status}
            name={props.taskList[5].name}
            dueDate={props.taskList[5].dueDate}
          />
          <TaskCard
            id={props.taskList[6].id}
            status={props.taskList[6].status}
            name={props.taskList[6].name}
            dueDate={props.taskList[6].dueDate}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskViewer;
