/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { FaStar } from "react-icons/fa";

export default function TaskTableBody({ tasks, onEdit, onDelete, onFav }) {
  return (
    <tbody>
      {tasks.map((task) => (
        <tr
          className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
          key={task.id}
        >
          <td>
            <button onClick={() => onFav(task.id)}>
              {task.isFavorite ? (
                <FaStar color="yellow" />
              ) : (
                <FaStar color="gray" />
              )}
            </button>
          </td>
          <td>{task.title}</td>
          <td>
            <div>{task.description}</div>
          </td>
          <td>
            <ul className="flex justify-center gap-1.5 flex-wrap">
              {task.tags.map((tag, tagIndex) => (
                <li key={tagIndex}>
                  <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#FE1A1AB5] px-2.5 text-sm capitalize text-[#F4F5F6]">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </td>
          <td className="text-center">{task.priority}</td>
          <td>
            <div className="flex items-center justify-center space-x-3">
              <button
                className="text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
              <button
                className="text-blue-500"
                //Sending task data by onEdit function for edit task button
                onClick={() => onEdit(task)}
              >
                Edit
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
