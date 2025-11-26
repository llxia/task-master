import * as React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from "dayjs";
import { useState } from "react";
import type { Task } from "../App";

export interface InputFormProps {
  addTask: (newTask: Task) => void
}

export function InputForm(props: InputFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [priority, setPriority] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.addTask({ title, description, dueDate, priority, isCompleted });

  };

  return (
    <form>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Title"
          value={title}
          style={{ padding: "10px" }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-helperText"
          label="Description"
          value={description}
          style={{ padding: "10px" }}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div style={{ padding: "10px" }}>
          <DatePicker
            label="Due Date"
            value={dayjs(dueDate)}
            onChange={(value) => setDueDate(dayjs(value).toDate())}
          />
        </div>
        <TextField
          id="outlined-helperText"
          label="Priority"
          value={priority}
          style={{ padding: "10px" }}
          onChange={(e) => setPriority(e.target.value)}
        />

        <TextField
          id="outlined-required"
          label="Completed"
          value={(isCompleted)}
          style={{ padding: "10px" }}
          onChange={(e) => setIsCompleted(e.target.value === "true")}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: "10px" }}
          onClick={handleClick}
        >
          Add
        </Button>
      </div>
    </form>
  );
}
