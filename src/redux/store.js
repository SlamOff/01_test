import { applyMiddleware, createStore } from 'redux';
import { todoReducer } from './reducers';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const saveDataToStorage = state => {
  try {
    localStorage.setItem('todoList', JSON.stringify(state));
  }
  catch(err) {
    console.log(err);
  }
}

const getDataFromStorage = () => {
  try {
    const data = localStorage.getItem('todoList');
    if (data == null) return undefined;
    return JSON.parse(data);
  }
  catch (err) {
    console.log(err);
    return undefined;
  }
}

const persistedState = getDataFromStorage();
const store = createStore(todoReducer, persistedState, bindMiddleware([]));

store.subscribe(() => {
  return saveDataToStorage(store.getState());
});

export default store;