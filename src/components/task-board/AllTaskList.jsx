/* eslint-disable react/prop-types */
import TaskTableBody from "./TaskTableBody";
import TaskTableHeader from "./TaskTableHeader";

export default function AllTaskList({ tasks }) {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <TaskTableHeader />
        <TaskTableBody tasks={tasks} />
      </table>
    </div>
  );
}
