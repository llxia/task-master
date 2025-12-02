import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { InputForm } from "./features/InputForm";
import { TaskTable } from "./features/TaskTable";
import { useState, useEffect } from "react";
import { EdiableTable } from "./features/EdiableTable";

export interface Task {
  id: string;
  title: string,
  description: string,
  dueDate: Date,
  priority: string,
  isCompleted: boolean,
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });


  const [selectedTask, setSelectedTask] = useState<Task>();



  useEffect(() => {
    window.addEventListener("storage", () => {
      const saved = JSON.parse(window.localStorage.getItem("tasks") ?? "[]");
      console.log("useEffect", saved);
      setTasks(saved);
    });
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>L&J Task Master</h1>
      <div className="card">
        <InputForm addTask={(newTask) => {
          const found = tasks.find((t) => {
            return t.id === newTask.id;
          })
          if (found) {
            Object.assign(found, newTask)
            setTasks([...tasks]);
            localStorage.setItem("tasks", JSON.stringify(tasks));
          } else {
            const newTasks = [...tasks, newTask];
            setTasks(newTasks);
            localStorage.setItem("tasks", JSON.stringify(newTasks));
          }
        }} selectedTask={selectedTask}
        />
        <EdiableTable tasks={tasks} setSelectedTaskId={(sid) => (
          setSelectedTask((tasks.find((t) => {
            return t.id === sid;
          })))
        )} />
        <TaskTable tasks={tasks} setSelectedTaskId={(sid) => (
          setSelectedTask((tasks.find((t) => {
            return t.id === sid;
          })))
        )} />

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
