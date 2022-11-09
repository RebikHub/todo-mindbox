import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { statusDrop } from '../store/sliceDrop';
import styles from '../styles/DropList.module.css';

export default function DropList() {
  const { drop } = useAppSelector((state) => state.sliceDrop)
  const dispatch = useAppDispatch();

  return (
    <span className={`${styles.span} ${drop ? styles.dropped : styles.drop}`} onClick={() => dispatch(statusDrop(!drop))}/>
  );
};
