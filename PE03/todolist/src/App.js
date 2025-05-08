import { useReducer } from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';

export default function TodoApp() {
  const [todos, dispatch] = useReducer(
    todosReducer,
    initialTodos
  );

  function handleAddTodo(text) {
    const trimmedText = text.trim();

    if (trimmedText === '') {
      alert('Todo item cannot be empty.');
      return;
    }

    dispatch({
      type: 'added',
      id: nextId++,
      text: trimmedText,
    });
  }

  function handleDelete(id) {
    dispatch({
      type: 'deleted',
      id: id,
    });
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TodoList
        onDelete = {handleDelete}
        todos={todos}
      />
    </>
  );
}

function todosReducer(todos, action) {
  switch (action.type) {
    case 'added': {
      return [...todos, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'deleted': {
      return todos.filter(todo => todo.id !== action.id);
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 0;
const initialTodos = [];