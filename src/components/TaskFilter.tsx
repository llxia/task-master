import { Button } from "antd";
import type { FC } from "react";

interface TaskFilterProp {
  filter: string;
  onFilter: (filter: string) => void;
}

export const TaskFilter: FC<TaskFilterProp> = ({ filter, onFilter }) => {
  return (
    <div className="task-filter">
      <Button
        type={filter === "All" ? "primary" : "default"}
        onClick={() => {
          onFilter("All");
        }}
      >
        All
      </Button>
      <Button
        type={filter === "In Progress" ? "primary" : "default"}
        onClick={() => {
          onFilter("In Progress");
        }}
      >
        In Progress
      </Button>
      <Button
        type={filter === "Completed" ? "primary" : "default"}
        onClick={() => {
          onFilter("Completed");
        }}
      >
        Completed
      </Button>
    </div>
  );
};
