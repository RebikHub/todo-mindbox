import React from 'react';
import { useAppSelector } from '../store/hooks';
import styles from '../styles/ToDoList.module.css';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
  const tasks = useAppSelector((state) => state.sliceTasks.items);
  const drop = useAppSelector((state) => state.sliceDrop.drop);


  return (
    <ul className={drop ? '' : styles.hidden}>
      {tasks.map((e, i) => (
        <li className={styles.item} key={i}>
          <ToDoItem item={e}/>
        </li>
      ))}
    </ul>
  )
}
