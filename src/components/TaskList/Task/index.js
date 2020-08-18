import React, { useState } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { removeTodoItem } from '../../../redux/actions';
import './styles.css';

const Task = props => {
  const dispatch = useDispatch();
  const [ isDone, setIsDone ] = useState(false);

  return (
    <>
      <div className="Col">
        <div className="Task">
          <div className={cx("TaskText", {"Active": isDone})}>
            <p>{props.text}</p>
          </div>
          <div className="TaskButtons">
            <button className="TaskButton DeleteButton" onClick={() => {
              dispatch(removeTodoItem(props.id));
            }}>Delete Task</button>
            <button className="TaskButton SuccessButton" onClick={() => {
              isDone ? setIsDone(false) : setIsDone(true);
            }}>{isDone ? 'Task not Done' : 'Task Done'}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;