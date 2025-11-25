import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50, type: "number" },
  { field: "title", headerName: "Title", width: 130, type: "string" },
  {
    field: "description",
    headerName: "Description",
    width: 130,
    type: "string",
  },
  { field: "dueDate", headerName: "Due Date", width: 130, type: "date" },
  { field: "priority", headerName: "Priority", width: 130, type: "string" },
  { field: "completed", headerName: "Completed", width: 130, type: "boolean" },
];

const rows = [
  {
    id: 1,
    title: "Execrise1",
    description: "10 mins pushups",
    dueDate: new Date("2025-12-01"),
    priority: "High",
    completed: true,
  },
  {
    id: 2,
    title: "Reading",
    description: "read a bool",
    dueDate: new Date("2025-12-01"),
    priority: "Low",
    completed: false,
  },
  {
    id: 3,
    title: "Execrise2",
    description: "15 mins running",
    dueDate: new Date("2025-12-01"),
    priority: "Medium",
    completed: false,
  },
  {
    id: 4,
    title: "Meet Friends",
    description: "Local cafe",
    dueDate: new Date("2025-12-01"),
    priority: "High",
    completed: false,
  },
  {
    id: 5,
    title: "Drink Water",
    description: "drink 4 cups of water",
    dueDate: new Date("2025-12-01"),
    priority: "High",
    completed: false,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export function TaskTable() {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
