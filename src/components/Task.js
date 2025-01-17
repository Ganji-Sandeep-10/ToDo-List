import React from "react";
function Task({ tasks, onToggleComplete, onDelete }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <button onClick={() => onToggleComplete(task.id)}>
              {task.completed ? "Undo" : "Done"}
            </button>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name}
            </span>

            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
