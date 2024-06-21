import React from 'react';
import TodoItem from './todoitem';
import './TodoList.scss';
import  Todo  from '../Types/Alltypes';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, removeTodo, editTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} editTodo={editTodo} />
      ))}
    </div>
  );
};

export default TodoList;
