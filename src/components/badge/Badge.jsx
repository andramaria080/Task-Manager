import "./Badge.css";
import React from "react";

function Badge(props) {
  const getBadgeStyle = () => {
    switch (props.status) {
      case "ToDo":
        return "grey";
      case "In progress":
        return "blue";
      case "Complete":
        return "green";
      case "Panding":
        return "orange";
      default:
        return "grey";
    }
  };
  return (
    <div className={`badge ${getBadgeStyle()}`}>
      <p>{props.status}</p>
    </div>
  );
}
export default Badge;
