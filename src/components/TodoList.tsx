import { useState } from "react";
import type { Todo, Priority } from "../types";
import TodoTable from "./TodoTable";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function TodoList() {
  const [todo, setTodo] = useState<Todo>({
    description: "",
    priority: "low",
    duedate: "",
  })
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    if (!todo.description) {
      alert("Description is requred!");
      return;
    }

    setTodos([todo, ...todos]);
    setTodo({
      description: "",
      priority: "low",
      duedate: ""
    })
  }

  const handleDelete = (row: number) => {
    if (window.confirm("Are you sure?")) {
      setTodos(todos.filter((_, index) => index !== row ));
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
      <TodoTable todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default TodoList;