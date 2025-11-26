import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { InputForm } from "./features/InputForm";
import { TaskTable } from "./features/TaskTable";
import { useState } from "react";

export interface Todo {
  name: string;
  jp: true
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  // window.addEventListener("storage", () => {
  //   // When local storage changes, dump the list to
  //   // the console.
  //   const items = JSON.parse(localStorage.getItem("items") ?? '[]');
  //   setTodos(items)
  // });
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
        <InputForm addTodo={(todo) => {
          setTodos([...todos, todo])
        }} />
        <TaskTable todos={todos} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
