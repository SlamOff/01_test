export const addTodoItem = (item, id) => ({
  type: 'ADD_TODO',
  payload: {
    todoList: {
      item: item,
      id: id
    }
  }
});

export const removeTodoItem = (id) => ({
  type: 'REMOVE_TODO',
  payload: {
    todoList: {
      id: id
    }
  }
});