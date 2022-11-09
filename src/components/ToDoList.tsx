import React from 'react';
import { useAppSelector } from '../store/hooks';
import styles from '../styles/ToDoList.module.css';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
  const sortList = useAppSelector((state) => state.sliceSort.items);
  const drop = useAppSelector((state) => state.sliceDrop.drop);

  return (
    <ul className={drop ? '' : styles.hidden}>
      {sortList.map((e, i) => (
        <li className={styles.item} key={i}>
          <ToDoItem item={e}/>
        </li>
      ))}
    </ul>
  );
};
