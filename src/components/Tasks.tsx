import styles from './Tasks.module.css';
import listIcon from '../assets/ListIcon.svg';

export function Tasks() {
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
      <div className={styles.taskList}>
        <img src={listIcon} alt="Um ícone de uma prancheta com uma listagem" />
        <div>

        <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
}