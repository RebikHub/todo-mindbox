import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addTask } from '../store/sliceTasks';
import styles from '../styles/App.module.css';
import DropList from './DropList';
import ToDoFooter from './ToDoFooter';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

export default function App() {
  const list = useAppSelector((state) => state.sliceTasks.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storage = localStorage.getItem('listItems') || '';
    console.log(JSON.parse(storage));
    
    if (storage) {
      dispatch(addTask(JSON.parse(storage)));
    };
  }, []);

  useEffect(() => {
    localStorage.removeItem('listItems');
    localStorage.setItem('listItems', JSON.stringify(list));
  }, [list]);

  return (
    <div className={styles.App}>
      <h3 className={styles.title}>todos</h3>
      <div className={styles.container}>
        <ToDoInput>
          <DropList/>
        </ToDoInput>
        <ToDoList/>
        <ToDoFooter/>
      </div>
    </div>
  );
}
