import React, { useState } from "react";
import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";
import CreateTaskForm from "./components/forms/CreateTaskForm";
import Modal from "./components/modal/Modal";

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
  const [taskList, setTaskList] = useState(data);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onNewTaskAdd = (newTask) => {
    setTaskList((prevState) => [
      ...prevState,
      {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
        id: "T-" + prevState.length + 1,
      },
    ]);
    closeModal(); //Close the modal after you Create the New Task.
  };

  return (
    <div className="app">
      <TaskViewer onCreateClick={openModal} taskList={taskList} />
      <div className="slide-bar-right"></div>
      <Modal onClose={closeModal} isOpen={isOpen}>
        {/* Next are the "props.children" from Modal.jsx */}
        <div className="card-x1">
          <h3 id="create-task">Create Task</h3>
          <CreateTaskForm onNewAddTask={onNewTaskAdd} />
        </div>
      </Modal>
    </div>
  );
}

export default App;
