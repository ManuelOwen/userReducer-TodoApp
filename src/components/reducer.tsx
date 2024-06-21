export const todoReducer = (state: any[], action: any) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, { id: Date.now(), text: action.payload, completed: false }];
      case 'TOGGLE_TODO':
        return state.map((todo: any) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        );
      case 'REMOVE_TODO':
        return state.filter((todo: any) => todo.id !== action.payload);
      case 'EDIT_TODO':
        return state.map((todo: any) =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        );
      case 'CLEAR_COMPLETED':
        return state.filter((todo: any) => !todo.completed);
      default:
        return state;
    }
  };
  