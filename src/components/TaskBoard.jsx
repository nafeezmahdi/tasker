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
  // storing editTask data in this state
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // Add Task Button Function
  function handleAddTask() {
    setShowModal(true);
  }

  //Function for adding a new task
  function handleAddAndEditTask(newTask, addOrEdit) {
    // receiving newTask data from AddTaskModal component
    if (addOrEdit) {
      // if its add task button
      setTasks([...tasks, newTask]);
    } else {
      //if its edit task button
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            // if edit task and tasks id match
            return newTask;
          }
          return task;
        })
      );
    }
    setShowModal(false);
  }

  //Function for edit task button
  function handleEditTask(editTaskData) {
    //receiving edit Task data
    setTaskToUpdate(editTaskData);
    setShowModal(true);
  }

  // Function for modal close by close button
  function handleCloseModal() {
    setShowModal(false);
    // cleaning modal before closing modal
    setTaskToUpdate(null);
  }

  //Function for delete task
  function handleDeleteTask(taskId) {
    //Receiving deleting task id
    //Filtering all tasks that does not match id in a new array
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  }

  //Function for deleting all the task
  function handleDeleteAllTask() {
    // Making tasks array empty
    tasks.length = 0;
    setTasks([...tasks]);
  }

  return (
    <section className="mb-20">
      {showModal && (
        <AddEditTaskModal
          onSave={handleAddAndEditTask}
          onCloseClick={handleCloseModal}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddTask={handleAddTask}
            onDeleteAllClick={handleDeleteAllTask}
          />
          <AllTaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </div>
    </section>
  );
}
