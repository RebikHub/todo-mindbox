import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { statusDrop } from '../store/sliceDrop';
import styles from '../styles/DropList.module.css';

export default function DropList() {
  const [drop, setDrop] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(statusDrop(drop));
  }, [dispatch, drop]);

  return (
    <span className={`${styles.span} ${drop ? styles.dropped : styles.drop}`} onClick={() => setDrop(!drop)}/>
  )
}
