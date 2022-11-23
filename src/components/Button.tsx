import React from 'react';
import styles from '../styles/Button.module.css';

type Props = {
  text: string,
  handleClickButton: (text: string) => void
};

export default function Button({text, handleClickButton}: Props) {

  return (
    <button className={styles.button} type='button' onClick={() => handleClickButton(text)}>
      {text}
    </button>
  );
};
