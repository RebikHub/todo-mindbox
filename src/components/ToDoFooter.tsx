import React, { useEffect, useState } from 'react';
import Button from './Button';
import styles from '../styles/ToDoFooter.module.css';
import { useAppSelector } from '../store/hooks';

export default function ToDoFooter() {
  const tasks = useAppSelector((state) => state.sliceTasks.items);
  const [item, setItem] = useState<number>(0);

  useEffect(() => {
    setItem(tasks.filter((e) => !e.done).length);
  }, [tasks]);

  return (
    <div className={styles.footer}>
      <span className={styles.items}>{item} items left</span>
      <Button text={'All'}/>
      <Button text={'Active'}/>
      <Button text={'Completed'}/>
      <Button text={'Clear completed'}/>
    </div>
  );
};
