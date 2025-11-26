import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import type { Todo } from "../App";

const columns: GridColDef[] = [
  // { field: "id", headerName: "ID", width: 50, type: "number" },
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

export interface TaskTableProps {
  todos: Todo[]
}
export function TaskTable(props: TaskTableProps) {
  const items = JSON.parse(localStorage.getItem("items") || "[]");
  console.log("getItem", items);
  if (!items) return;

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={() => {
          return Math.random();
        }}
        rows={props.todos}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
