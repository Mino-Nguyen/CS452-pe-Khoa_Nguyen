import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Enter Task Description"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button onClick={() => {
        setText('');
        onAddTodo(text);
      }}>Add Task</button>
    </>
  )
}