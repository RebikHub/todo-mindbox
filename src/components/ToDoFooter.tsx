import React from 'react';
import Button from './Button';
import styles from '../styles/ToDoFooter.module.css';

type Props = {
  item: number
};

export default function ToDoFooter({item = 0}: Props) {
  return (
    <div className={styles.footer}>
      <span className={styles.items}>{item} items left</span>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
      <Button>Clear completed</Button>
    </div>
  )
}
