import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";

function App() {
  const data = [
    {
      id: "T-1",
      status: "Todo",
      name: "Create a Design System for Enum Workspace",
      dueDate: new Date(2022, 3, 21),
    },
    {
      id: "T-2",
      status: "In progress",
      name: "Create a Design System for Enum Workspace",
      dueDate: new Date(2022, 4, 11),
    },
    {
      id: "T-3",
      status: "Complete",
      name: "Create a Design System for Enum Workspace",
      dueDate: new Date(2022, 5, 22),
    },
    {
      id: "T-4",
      status: "Complete",
      name: "Create a Design System for Enum Workspace",
      dueDate: new Date(2022, 5, 24),
    },
    {
      id: "T-5",
      status: "In progress",
      name: "Create a Design System for Enum Workspace",
      dueDate: new Date(2022, 5, 24),
    },
    {
      id: "T-6",
      status: "Todo",
      name: "Create a Design System for Enum Workspace",
      dueDate: new Date(2022, 5, 24),
    },
    {
      id: "T-7",
      status: "Todo",
      name: "Create a Design System for Enum Workspace",
      dueDate: new Date(2022, 5, 24),
    },
  ];

  return (
    <div className="app">
      <TaskViewer taskList={data} />
    </div>
  );
}

export default App;
