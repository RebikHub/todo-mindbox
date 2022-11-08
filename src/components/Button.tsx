import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { showAll, sortActive, sortCompleted } from '../store/sliceSort';
import { clearCompletedTasks } from '../store/sliceTasks';
import styles from '../styles/Button.module.css';

type Props = {
  text: string
};

export default function Button({text}: Props) {
  const dispatch = useAppDispatch();
  const itemsList = useAppSelector((state) => state.sliceTasks.items);

  function handleClickButton() {
    
    switch (text) {
      case 'All':
        dispatch(showAll(itemsList));
        break;
      case 'Active':
        dispatch(sortActive(itemsList));
        break;
      case 'Completed':
        dispatch(sortCompleted(itemsList));
        break;
      case 'Clear completed':
        dispatch(clearCompletedTasks());
        break;
    }
    
  }

  return (
    <button className={styles.button} type='button' onClick={handleClickButton}>
      {text}
    </button>
  );
};
