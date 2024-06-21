import { useState } from 'react';
import './Todoform.scss';

const TodoForm = ({ addTodo }: { addTodo: (text: string) => void }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert("Can't add an empty to-do.");
      return;
    }
    addTodo(text);
    setText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
