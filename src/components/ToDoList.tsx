import React from 'react';
import styles from '../styles/ToDoList.module.css';
import ToDoItem from './ToDoItem';


const tasks = [
  {
    text: 'Do it task',
    done: false
  },
  {
    text: 'Task is Done!',
    done: true
  }
]


export default function ToDoList() {
  return (
    <ul>
      {tasks.map((e) => (
        <li className={styles.item}>
          <ToDoItem item={e}/>
        </li>
      ))}
    </ul>
  )
}
