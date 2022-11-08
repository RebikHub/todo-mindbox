import React from 'react';
import styles from '../styles/ToDoInput.module.css';

export default function ToDoInput() {
  return (
    <div className={styles.appInput}>
      <span className={styles.drop}/>
      <input className={styles.input} type="text" placeholder='Whats needs to be done?' />
    </div>
  )
}
