import * as React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { DatePicker } from '@mui/x-date-pickers';
import { DatePickerValue } from "../components/DatePickerValue"
import dayjs, { Dayjs } from "dayjs";
import type { Todo } from "../App";


export interface InputFormProps {
  addTodo: (todo: Todo) => void
}

export function InputForm(props: InputFormProps) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [dueDate, setDueDate] = React.useState<Dayjs | null>(null);
  const [priority, setPriority] = React.useState("");
  const [isCompleted, setIsCompleted] = React.useState(false);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Add your form submission logic here
    //localStorage.clear();
    // const id = Math.random().toString(16).slice(2);
    const items = JSON.parse(localStorage.getItem("items") ?? '[]');
    // if (!Array.isArray(items)) {
    //   items = [];
    // }
    items.push({ title, description, dueDate, priority, isCompleted });
    console.log("setItem", items);
    localStorage.setItem("items", JSON.stringify(items));
    props.addTodo({ name: title })
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
            value={dueDate}
            onChange={(value) => setDueDate(dayjs(value))}
          />
        </div>
        <DatePickerValue />
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
