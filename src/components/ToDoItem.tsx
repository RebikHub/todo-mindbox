import React from 'react';
import { IItem } from '../interfaces/interfaces';
import { useAppDispatch } from '../store/hooks';
import { editTask } from '../store/sliceTasks';
import styles from '../styles/ToDoItem.module.css';

type Props = {
  item: IItem
};

export default function ToDoItem({item}: Props) {
  const dispatch = useAppDispatch();

  function checkTask() {
    dispatch(editTask({
      ...item,
      done: !item.done,
    }));
  };

  return (
    <>
      <span className={item.done ? styles.checkDone : styles.check} onClick={checkTask}/>
      <p className={item.done ? styles.textDone : styles.text}>{item.text}</p>
    </>
  );
};
