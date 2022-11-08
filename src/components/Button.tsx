import React from 'react';
import styles from '../styles/Button.module.css';

type Props = {
  children: string
};

export default function Button({children}: Props) {
  return (
    <button className={styles.button}>{children}</button>
  )
}
