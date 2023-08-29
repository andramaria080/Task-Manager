import "./DueDate.css";
function DueDate(props) {
  return (
    <div className="due-date">
      <p>Due Date</p>
      <p>{props.date.toLocaleDateString()}</p>
    </div>
  );
}
export default DueDate;
