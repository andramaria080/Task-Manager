import "./TaskCard.css";
import Badge from "../badge/Badge";
import DueDate from "../due-date/DueDate";
import { useState } from "react";

function TaskCard(props) {
  // const [taskId, setTaskId] = useState(props.id);
  // const handleClick = () => {
  //   setTaskId("Clicked");
  //   console.log(taskId);
  // };

  return (
    <div className="card-wrraper">
      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <Badge status={props.status} />
      </div>
      <div className="card-content">
        <p>{props.name}</p>
      </div>
      <div className="card-footer">
        <DueDate date={props.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;
