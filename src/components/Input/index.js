import React from 'react';
import {  useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addTodoItem } from '../../redux/actions';
import './styles.css';

const Input = () => {
  const dispatch = useDispatch();

  return (
    <div className="Wrapper">
      <h3>Type some text to add new task</h3>
      <form onSubmit={(e) => {
          e.preventDefault();
          let input = e.currentTarget.elements.task;
          if (input.value.length) {
            dispatch(addTodoItem(input.value, uuid()));
            input.value = '';
          }
        }}>
        <input type="text" className="Input" name="task" placeholder="Type some text" />
        <button className="Button">
          Add task
        </button>
      </form>
    </div>
  );
}

export default Input;
