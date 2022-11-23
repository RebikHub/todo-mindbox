import React, { useEffect, useState } from 'react';
import Button from './Button';
import styles from '../styles/ToDoFooter.module.css';
import { useAppSelector } from '../store/hooks';

type Props = {
  handleClickButton: (text: string) => void
};

export default function ToDoFooter({handleClickButton}: Props) {
  const tasks = useAppSelector((state) => state.sliceTasks.items);
  const [item, setItem] = useState<number>(0);

  useEffect(() => {
    setItem(tasks.filter((e) => !e.done).length);
  }, [tasks]);

  return (
    <div className={styles.footer}>
      <span className={styles.items}>{item} items left</span>
      <Button text={'All'} handleClickButton={handleClickButton}/>
      <Button text={'Active'} handleClickButton={handleClickButton}/>
      <Button text={'Completed'} handleClickButton={handleClickButton}/>
      <Button text={'Clear completed'} handleClickButton={handleClickButton}/>
    </div>
  );
};
