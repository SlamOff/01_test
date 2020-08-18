import React from 'react';
import Input from './components/Input';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import TaskList from './components/TaskList';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Input />
      <TaskList />
    </div>
  </Provider>
);

export default App;
