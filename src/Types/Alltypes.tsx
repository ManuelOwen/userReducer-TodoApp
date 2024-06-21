import { Todo } from './Todo'; // Assuming Todo type is defined in a separate file called 'Todo.ts'

export interface TodoListProps {
    todos: Todo[];
    toggleComplete: (id: number) => void;
    removeTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
}
  