import { Button, Checkbox } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { type Task } from "../App";
import type { FC } from "react";

interface TasksProp {
  tasks: Task[];
  onCheck: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export const Tasks: FC<TasksProp> = ({ tasks, onCheck, onDelete }) => {
  return tasks.map((task) => {
    return (
      <div className="task">
        <Checkbox
          checked={task.isCompleted}
          onChange={() => {
            onCheck(task);
          }}
        >
          {task.title}
        </Checkbox>
        <Button
          type="default"
          shape="circle"
          icon={<DeleteTwoTone />}
          onClick={() => {
            onDelete(task);
          }}
        />
      </div>
    );
  });
};
