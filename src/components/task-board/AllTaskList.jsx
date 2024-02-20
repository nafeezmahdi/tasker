import TaskTableBody from "../TaskTableBody";
import TaskTableHeader from "./TaskTableHeader";

export default function AllTaskList() {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <TaskTableHeader />
        <TaskTableBody />
      </table>
    </div>
  );
}
