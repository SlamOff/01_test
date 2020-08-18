const initialState = {
  todoList: localStorage.todoList || []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todoList: state.todoList.concat(action.payload.todoList),
        id: state.id
      };
    }
    case 'REMOVE_TODO': {
      return {
        todoList: state.todoList.filter((state) => state.id !== action.payload.todoList.id)
      };
    }
    default: return state;
  }
};