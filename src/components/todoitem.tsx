import React, { useState } from 'react';
import './todoitem.scss';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText !== todo.text) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`todo-item ${todo.completed ?           'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => removeTodo(todo.id)}>DELETE</button>
    </div>
  );
};

export default TodoItem;
