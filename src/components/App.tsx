import React from 'react';
import styles from '../styles/App.module.css';
import ToDoFooter from './ToDoFooter';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

export default function App() {
  return (
    <div className={styles.App}>
      <h3 className={styles.title}>todos</h3>
      <div className={styles.container}>
        <ToDoInput/>
        <ToDoList/>
        <ToDoFooter item={0}/>
      </div>
    </div>
  );
}
