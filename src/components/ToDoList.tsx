import React from 'react';
import { Tasks } from '../interfaces/interfaces';
import { useAppSelector } from '../store/hooks';
import styles from '../styles/ToDoList.module.css';
import ToDoItem from './ToDoItem';

type Props = {
  todoList: Tasks
};

export default function ToDoList({todoList}: Props) {
  const drop = useAppSelector((state) => state.sliceDrop.drop);

  return (
    <ul className={drop ? '' : styles.hidden}>
      {todoList.map((e) => (
        <li className={styles.item} key={e.id}>
          <ToDoItem item={e}/>
        </li>
      ))}
    </ul>
  );
};
