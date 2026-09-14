import { useState } from "react";

type Priority = "low" | "medium" | "high";

type Todo = {
  description: string;
  priority: Priority;
  duedate: string;
}

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
      <div id="inputs">
        <input 
          placeholder="Enter todo description..."
          value={todo.description}
          onChange={e => 
            setTodo({ ...todo, description: e.target.value })}
        />
        <select 
          value={todo.priority}
          onChange={e => 
            setTodo({ ...todo, priority: e.target.value as Priority })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input 
          placeholder="Enter todo duedate..."
          type="date"
          value={todo.duedate}
          onChange={e => 
            setTodo({ ...todo, duedate: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Priority</th>
            <th>Due date</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo: Todo, index) => 
              <tr>
                <td>{todo.description}</td>
                <td>{todo.priority}</td>
                <td>{todo.duedate}</td>
                <td><button onClick={() => handleDelete(index)}>Delete</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
}

export default TodoList;