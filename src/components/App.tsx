import React, { useEffect, useState } from 'react';
import { Tasks } from '../interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { statusDrop } from '../store/sliceDrop';
import { clearCompletedTasks, writeStorageToStore } from '../store/sliceTasks';
import styles from '../styles/App.module.css';
import DropList from './DropList';
import ToDoFooter from './ToDoFooter';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

export default function App() {
  const list = useAppSelector((state) => state.sliceTasks.items);
  const dispatch = useAppDispatch();
  const [sortList, setSortList] = useState<Tasks>(list);

  useEffect(() => {
    const storage = localStorage.getItem('listItems') || '';
    
    if (storage) {
      dispatch(writeStorageToStore(JSON.parse(storage)));
    };
  }, [dispatch]);

  useEffect(() => {
    setSortList(list);
    localStorage.removeItem('listItems');
    localStorage.setItem('listItems', JSON.stringify(list));
  }, [dispatch, list]);

  function handleClickButton(text: string) {
    dispatch(statusDrop(true));
    switch (text) {
      case 'All':
        setSortList(list);
        break;
      case 'Active':
        setSortList([...list.filter((e) => !e.done)])
        break;
      case 'Completed':
        setSortList([...list.filter((e) => e.done)]);
        break;
      case 'Clear completed':
        dispatch(clearCompletedTasks());
        break;
    };
  };

  return (
    <div className={styles.App}>
      <h3 className={styles.title}>todos</h3>
      <div className={styles.container}>
        <ToDoInput>
          <DropList/>
        </ToDoInput>
        <ToDoList todoList={sortList}/>
        <ToDoFooter handleClickButton={handleClickButton}/>
      </div>
    </div>
  );
};
