import { useState } from "react";
import AllTaskList from "./task-board/AllTaskList";
import SearchTask from "./task-board/SearchTask";
import TaskActions from "./task-board/TaskActions";
import AddEditTaskModal from "./task-board/add-edit-task/AddEditTaskModal";

export default function TaskBoard() {
  //creating tasks list data
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "React JS",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["Web", "Python", "API"],
    priority: "High",
    isFavorite: false,
  };
  // storing tasks data
  const [tasks, setTasks] = useState([defaultTask]);
  //creating state for showing addEditTaskModal
  const [showModal, setShowModal] = useState(false);

  // Add Task Button Function
  function handleAddTask() {
    setShowModal(true);
  }

  function handleAddTasks(newTask) {
    // receiving newTask data from AddEditTaskModal component
    setTasks([...tasks, newTask]);
    setShowModal(false);
  }

  return (
    <section className="mb-20">
      {showModal && <AddEditTaskModal onSave={handleAddTasks} />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddTask={handleAddTask} />
          <AllTaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
