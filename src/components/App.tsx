import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { showAll } from '../store/sliceSort';
import { writeStorageToStore } from '../store/sliceTasks';
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
    
    if (storage) {
      dispatch(writeStorageToStore(JSON.parse(storage)));
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(showAll(list));
    localStorage.removeItem('listItems');
    localStorage.setItem('listItems', JSON.stringify(list));
  }, [dispatch, list]);

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
