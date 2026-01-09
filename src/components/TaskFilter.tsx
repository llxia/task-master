import { Button } from "antd";
import type { FC } from "react";

export type Filter = "All" | "In Progress" | "Completed";

export interface TaskFilterProp {
  filter: Filter;
  onFilter: (filter: Filter) => void;
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
