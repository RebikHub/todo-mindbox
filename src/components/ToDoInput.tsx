import { nanoid } from '@reduxjs/toolkit';
import React, { ChangeEvent, KeyboardEvent, ReactNode, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { statusDrop } from '../store/sliceDrop';
import { addTask } from '../store/sliceTasks';
import styles from '../styles/ToDoInput.module.css';

type Props = {
  children: ReactNode
};

export default function ToDoInput({children}: Props) {
  const [input , setInput] = useState<string>('');
  const dispatch = useAppDispatch();

  function enterInput(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && input.trim() !== '') {
      dispatch(addTask({
        text: input.trim(),
        done: false,
        id: nanoid()
      }));
      setInput('');
      dispatch(statusDrop(true));
    }; 
  };

  return (
    <div className={styles.appInput}>
      {children}
      <input className={styles.input}
        type="text"
        placeholder='Whats needs to be done?'
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        onKeyUp={enterInput} />
    </div>
  );
};
