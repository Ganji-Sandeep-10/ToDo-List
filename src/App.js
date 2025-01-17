import "./styles.css";
import Heading from "./components/Heading";
import Task from "./components/Task";
import { useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy groceries", completed: false },
    { id: 2, name: "Study React", completed: false },
    { id: 3, name: "Workout", completed: false },
  ]);
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Heading />
      <Task
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
      />
    </div>
  );
}
