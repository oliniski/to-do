import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';

export function Task({ text }: string) {
  return (
    <div className={styles.task}>
      <input type="checkbox"/>
      <p>
        {text}
      </p>
      <p className={styles.delete}>
        <Trash />
      </p>
    </div>
  )
}