import { useReducer, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { todoReducer } from './reducer';
import {header} from "../images/bg-desktop-light.jpg"
import './Todoapp.scss';

const initialTodos = [
  { id: 1, text: 'Complete online JavaScript course', completed: true },
  { id: 2, text: 'Jog around the park 3x', completed: false },
  { id: 3, text: '10 minutes meditation', completed: false },
  { id: 4, text: 'Read for 1 hour', completed: false },
  { id: 5, text: 'Pick up groceries', completed: false },
  { id: 6, text: 'Complete Todo App on Frontend Mentor', completed: false }
];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const addTodo = (text: string) => {
    if (!text) {
      alert("Can't add an empty to-do.");
      return;
    }
    dispatch({ type: 'ADD_TODO', payload: text });
    alert('To-do added successfully!');
  };
  
  const toggleComplete = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };
  
  const removeTodo = (id: number) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };
  
  const editTodo = (id: number, text: string) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, text } });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
      <div 
      img src={header} alt ="header"
      className={`todo-app ${darkMode ? 'dark-mode' : ''}`}>
        <div className='head'>
      <h1 className='title'>TODO</h1>


      <button    onClick={() => setDarkMode(!darkMode)} className="toggle-mode">

        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>


      </div>




      <TodoForm addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} removeTodo={removeTodo} editTodo={editTodo} />
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoApp;
