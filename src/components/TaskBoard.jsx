import AllTaskList from "./task-board/AllTaskList";
import SearchTask from "./task-board/SearchTask";
import TaskActions from "./task-board/TaskActions";

export default function TaskBoard() {
  return (
    <section className="mb-20">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <AllTaskList />
        </div>
      </div>
    </section>
  );
}
