import { Button, Input, Checkbox } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import "./todo.css";
import { useState } from "react";

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

  const [input, setInput] = useState("");
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
    <>
      <div className="main">
        <h1>Task Master</h1>
        <form
          className="task-creator"
          onSubmit={(e) => {
            e.preventDefault();
            setTask([...tasks, { title: input, isCompleted: false }]);
            setInput("");
          }}
        >
          <Input
            placeholder="Task to be added"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button type="primary" htmlType="submit" disabled={!input}>
            Add
          </Button>
        </form>
        <div className="task-filter">
          <Button
            type={filter === "All" ? "primary" : "default"}
            onClick={() => {
              setFilter("All");
            }}
          >
            All
          </Button>
          <Button
            type={filter === "In Progress" ? "primary" : "default"}
            onClick={() => {
              setFilter("In Progress");
            }}
          >
            In Progress
          </Button>
          <Button
            type={filter === "Completed" ? "primary" : "default"}
            onClick={() => {
              setFilter("Completed");
            }}
          >
            Completed
          </Button>
        </div>
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
    </>
  );
}

export default App;
