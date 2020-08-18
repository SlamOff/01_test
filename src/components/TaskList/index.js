import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import './styles.css';

const TasksList = () => {
  const state = useSelector((state) => state.todoList);

  return (
    <>
      <h3 className="Title">List of tasks:</h3>
      <div className="TaskContainer">
        {state.map((elem) => {
          return <Task text={elem.item} key={elem.id} id={elem.id} />
        })}
      </div>
    </>
  );
}

export default TasksList;
