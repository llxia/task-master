import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//import { DatePickerValue } from "../components/DatePickerValue";

export function InputForm() {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue=""
        />
        <TextField
          id="outlined-helperText"
          label="Description"
          defaultValue=""
        />
        <TextField
          id="outlined-required"
          label="Due Date"
          defaultValue="YYYY-MM-DD"
        />
        <TextField
          required
          id="outlined-required"
          label="Priority"
          defaultValue=""
        />
        <TextField
          id="outlined-required"
          label="Completed"
          defaultValue="false"
        />
      </div>
    </Box>
  );
}
