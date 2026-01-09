import "./todo.css";
import { useState } from "react";
import { InputForm } from "./components/InputForm";
import { TaskFilter, type Filter } from "./components/TaskFilter";
import { Tasks } from "./components/Tasks";

export interface Task {
  title: string;
  isCompleted?: boolean;
}
function App() {
  const [tasks, setTask] = useState<Task[]>([
    {
      title: "jp is awesome",
    },
  ]);

  const [filter, setFilter] = useState<Filter>("All");
  const filteredTasks = tasks.filter((t) => {
    if (filter === "In Progress") {
      return !t.isCompleted;
    } else if (filter === "Completed") {
      return t.isCompleted;
    } else {
      return true;
    }
  });

  return (
    <div className="main">
      <h1>Task Master</h1>
      <InputForm
        onAdd={(input) => {
          setTask([...tasks, { title: input, isCompleted: false }]);
        }}
      />
      <TaskFilter
        filter={filter}
        onFilter={(f) => {
          setFilter(f);
        }}
      />

      <Tasks
        tasks={filteredTasks}
        onCheck={(item) => {
          setTask(
            tasks.map((t) => {
              if (t === item) {
                t.isCompleted = !t.isCompleted;
              }
              return t;
            }),
          );
        }}
        onDelete={(task) => {
          setTask(tasks.filter((t) => t !== task));
        }}
      />
      <div className="stats">
        Total: {tasks.length} | In Progress:{" "}
        {tasks.filter((t) => !t.isCompleted).length} | Completed:{" "}
        {tasks.filter((t) => t.isCompleted).length}
      </div>
    </div>
  );
}

export default App;
