import { DataGrid, type GridColDef, type GridRowSelectionModel } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import type { Task } from "../App";
import { useState } from "react";

export interface TaskTableProps {
  tasks: Task[]
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50, type: "number" },
  { field: "title", headerName: "Title", width: 130, type: "string" },
  {
    field: "description",
    headerName: "Description",
    width: 130,
    type: "string",
  },
  {
    field: "dueDate", headerName: "Due Date", width: 130, type: "string", renderCell: (params) => {
      return new Date(params.row.dueDate).toDateString();
    }
  },
  { field: "priority", headerName: "Priority", width: 130, type: "string" },
  { field: "isCompleted", headerName: "Completed", width: 130, type: "boolean" },
];


const paginationModel = { page: 0, pageSize: 5 };


export function TaskTable(props: TaskTableProps) {
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>({ type: 'include', ids: new Set() });

  const tasks = props.tasks;
  if (!tasks) return;

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={tasks}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
      />
      <div>value: {rowSelectionModel.ids}</div>
    </Paper>
  );
}
