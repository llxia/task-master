import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import type { Task } from "../App";

export interface TaskTableProps {
  tasks: Task[]
}

const columns: GridColDef[] = [
  { field: "title", headerName: "Title", width: 130, type: "string" },
  {
    field: "description",
    headerName: "Description",
    width: 130,
    type: "string",
  },
  { field: "dueDate", headerName: "Due Date", width: 130, type: "string" },
  { field: "priority", headerName: "Priority", width: 130, type: "string" },
  { field: "isCompleted", headerName: "Completed", width: 130, type: "boolean" },
];


const paginationModel = { page: 0, pageSize: 5 };


export function TaskTable(props: TaskTableProps) {
  const tasks = props.tasks;
  if (!tasks) return;

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={() => {
          return Math.random();
        }}
        rows={tasks}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
