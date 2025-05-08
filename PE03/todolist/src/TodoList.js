export default function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo
            todo={todo}
          />
          <button onClick={() => {
            onDelete(todo.id);
          }}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function Todo({ todo }) {
  return (
    <label>
      {todo.text}
    </label>
  );
}