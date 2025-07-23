import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
const [tasks, setTasks] = useState([
  { id: 1, title: "Task 1", done: true },
  { id: 2, title: "Task 2", done: true },
  { id: 3, title: "Task 3", done: false },
  { id: 4, title: "Task 4", done: false },
  { id: 5, title: "Task 5", done: true },
  { id: 6, title: "Task 6", done: false },
  { id: 7, title: "Task 7", done: false },
]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), title: task, done: false }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List 📝</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder=" Your Tasks ..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

<ul className="task-list">
  {tasks.map((t) => (
    <li
      key={t.id}
      className={t.done ? "done" : ""}
      onClick={() => toggleDone(t.id)}
    >
      <span>{t.title}</span>
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          deleteTask(t.id);
        }}
      >
        🗑️
      </button>
    </li>
  ))}
</ul>

    </div>
  );
}

export default App;
