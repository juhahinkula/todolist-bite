import type { Todo } from "../types";

type TodoTableProps = {
  todos: Todo[];
  handleDelete: (row: number) => void;
}

function TodoTable(props: TodoTableProps) {
  return(
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
            props.todos.map((todo: Todo, index) => 
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.priority}</td>
                <td>{todo.duedate}</td>
                <td><button onClick={() => props.handleDelete(index)}>Delete</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
  );
}

export default TodoTable;