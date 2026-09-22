import { useState } from "react";
import type { Todo, Priority } from "../types";
import TodoTable from "./TodoTable";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { v4 as uuidv4 } from 'uuid';
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

function TodoList() {
  const [todo, setTodo] = useState<Todo>({
    id: "",
    description: "",
    priority: "low",
    duedate: "",
  })
  const [todos, setTodos] = useState<Todo[]>([]);

  const columns: GridColDef[] = [
    { field: "description", width: 400, headerName: "Description" },
    { field: "priority", headerName: "Priority" },
    { field: "duedate", headerName: "Due date"  },
    {
      field: "id",
      headerName: " ",
      renderCell: (params: GridRenderCellParams) =>
        <Button onClick={() => handleDelete(params.row.id)} color="error" size="small">
          Delete
        </Button>
    }
  ]

  const handleAdd = () => {
    if (!todo.description) {
      alert("Description is requred!");
      return;
    }

    setTodos([{ ...todo, id: uuidv4() }, ...todos]);
    setTodo({
      id: "",
      description: "",
      priority: "low",
      duedate: ""
    })
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure?")) {
      setTodos(todos.filter((todo) => todo.id !== id ));
    }
  }

  return(
    <>
      <Stack 
        direction="row" 
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2
        }}
      >
        <TextField
          label="Description"
          value={todo.description}
          onChange={e => 
            setTodo({ ...todo, description: e.target.value })}
        />
        <TextField
          select
          slotProps={{
            select: {
              native: true
            }
          }}
          value={todo.priority}
          onChange={e => 
            setTodo({ ...todo, priority: e.target.value as Priority })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </TextField>
        <TextField
          type="date"
          value={todo.duedate}
          onChange={e => 
            setTodo({ ...todo, duedate: e.target.value })}
        />
        <Button variant="contained" onClick={handleAdd}>Add</Button>
      </Stack>
      <div style={{ width: '90%', height: 500, margin: 'auto' }}>
        <DataGrid rowSelection={false} columns={columns} rows={todos} />
      </div>
    </>
  );
}

export default TodoList;