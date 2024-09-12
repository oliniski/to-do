import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';

interface TaskProps {
  text: string;
}

export function Task(props: TaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox"/>
      <p>
        {props.text}
      </p>
      <p className={styles.delete}>
        <Trash />
      </p>
    </div>
  )
}