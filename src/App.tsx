import { Button, Checkbox } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import "./todo.css";
import { useState } from "react";
import { InputForm } from "./components/InputForm";
import { TaskFilter } from "./components/TaskFilter";

interface Task {
  title: string;
  isCompleted?: boolean;
}
function App() {
  const [tasks, setTask] = useState<Task[]>([
    {
      title: "jp is awesome",
    },
  ]);

  const [filter, setFilter] = useState("All");
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

      {filteredTasks.map((item) => {
        return (
          <div className="task">
            <Checkbox
              checked={item.isCompleted}
              onChange={(e) => {
                setTask(
                  tasks.map((t) => {
                    if (t === item) {
                      t.isCompleted = e.target.checked;
                    }
                    return t;
                  }),
                );
              }}
            >
              {item.title}
            </Checkbox>
            <Button
              type="default"
              shape="circle"
              icon={<DeleteTwoTone />}
              onClick={() => {
                setTask(tasks.filter((t) => t !== item));
              }}
            />
          </div>
        );
      })}
      <div className="stats">
        Total: {tasks.length} | In Progress:{" "}
        {tasks.filter((t) => !t.isCompleted).length} | Completed:{" "}
        {tasks.filter((t) => t.isCompleted).length}
      </div>
    </div>
  );
}

export default App;
