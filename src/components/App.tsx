import React from 'react';
import styles from '../styles/App.module.css';
import '../styles/styles.css';

export default function App() {
  return (
    <div className={styles.App}>
      <h3 className={styles.title}>todos</h3>
      <div className='todos-container'>

        <div className='todos-input'>
          <span className='drop-list'/>
          <input className='input' type="text" placeholder='Whats needs to be done?' />
        </div>

        <div className='list'>
          <ul className='todo-list'>
            <li className='todo-item'>
              <span className='check-item'/>
              <p className='text-item'></p>
            </li>
          </ul>
        </div>

        <div className='todos-footer'>
          <span className='todos-items'>0 items left</span>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
          <button>Clear completed</button>
        </div>
      </div>
    </div>
  );
}
