/* eslint-disable react/prop-types */
import TaskTableBody from "./TaskTableBody";
import TaskTableHeader from "./TaskTableHeader";

export default function AllTaskList({ tasks, onEdit, onDelete }) {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <TaskTableHeader />
        <TaskTableBody tasks={tasks} onEdit={onEdit} onDelete={onDelete} />
      </table>
    </div>
  );
}
