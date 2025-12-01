import * as React from "react";
import { Button, FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from "dayjs";
import { useState } from "react";
import type { Task } from "../App";
import Checkbox from '@mui/material/Checkbox';
import { SelectTextFields } from "../components/SelectTextFields";
import { v4 as uuidv4 } from 'uuid';

export interface InputFormProps {
  addTask: (newTask: Task) => void
}

export function InputForm(props: InputFormProps) {
  const [task, setTask] = useState<Task>({
    id: uuidv4(),
    title: "",
    description: "",
    dueDate: new Date(),
    priority: "High",
    isCompleted: false
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newTask = { ...task, id: uuidv4() };
    setTask({ ...task, id: uuidv4() });
    props.addTask(newTask);
  };

  return (
    <form>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Title"
          value={task.title}
          style={{ padding: "10px" }}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <TextField
          id="outlined-helperText"
          label="Description"
          value={task.description}
          style={{ padding: "10px" }}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <div style={{ padding: "10px" }}>
          <DatePicker
            label="Due Date"
            value={dayjs(task.dueDate)}
            onChange={(value) => setTask({ ...task, dueDate: dayjs(value).toDate() })}
          />
        </div>
        <SelectTextFields
          priority={task.priority}
          label="Select the task priority"
          selectPriority={(value) => {
            console.log("value", value);
            setTask({ ...task, priority: value });
          }} />
        <FormControlLabel control={<Checkbox
          checked={task.isCompleted}
          onChange={(e) => setTask({ ...task, isCompleted: e.target.checked })}
          slotProps={{
            input: { 'aria-label': 'controlled' },
          }}
        />} label="Completed" />

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
