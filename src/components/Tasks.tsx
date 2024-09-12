import styles from './Tasks.module.css';
import listIcon from '../assets/ListIcon.svg';
import { Task } from './Task.tsx';

interface TasksProps {
  tasks: TaskType[];
}
export interface TaskType {
  id: number;
  text: string;
}

export function Tasks({ tasks }: TasksProps) {
  const hasTasks = false; 
  let taskList;

  if (hasTasks) {
    taskList = 
    <div className={styles.emptyList}>
      <img src={listIcon} alt="Um ícone de uma prancheta com uma listagem" />
      <div>
        <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>;
  } else {
    taskList = 
    <div className={styles.taskList}>
      {tasks.map(task => {
        return <Task text={task.text} key={task.id} />
      })}
    </div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.status}>
        <p className={styles.createdTasks}>
          Tarefas criadas <span>0</span>
        </p>
        <p className={styles.finishedTasks}>
          Concluídas <span>0</span>
        </p>
      </div>
      {taskList}
    </div>
  )
}