import styles from './Tasks.module.css';
import listIcon from '../assets/ListIcon.svg';
import { Task } from './Task.tsx';

export function Tasks() {
  const hasTasks = false; // substituir por uma chamada à API para verificar se existem tarefas
  let taskList;

  if (hasTasks) {
    taskList = 
    <div className={styles.taskList}>
      <img src={listIcon} alt="Um ícone de uma prancheta com uma listagem" />
      <div>
        <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>;
  } else {
    taskList = 
    <div className={styles.taskList}>
      <Task text={'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'}/>
      <Task text={'Beijar meu amorzin ♥'}/>
      <Task text={'Cheirar meu amorzin ♥'}/>
      <Task text={'Macetar meu amorzin ♥'}/>
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