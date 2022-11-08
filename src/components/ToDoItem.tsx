import React from 'react';
import { IItem } from '../interfaces/interfaces';
import styles from '../styles/ToDoItem.module.css';

type Props = {
  item: IItem
};

export default function ToDoItem({item}: Props) {
  return (
    <>
      <span className={item.done ? styles.checkDone : styles.check}/>
      <p className={item.done ? styles.textDone : styles.text}>{item.text}</p>
    </>
  )
}
