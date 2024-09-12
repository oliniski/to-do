import styles from './Tasks.module.css';
import listIcon from '../assets/ListIcon.svg';
import { ButtonHTMLAttributes, ChangeEvent, FormEvent, useState } from 'react';
import { Plus, Trash } from '@phosphor-icons/react';
import { v4 } from 'uuid';
export interface TasksProps {
  taskList: TaskType[];
}
export interface TaskType {
  id: string;
  text: string;
  done?: boolean;
}

export function Tasks() {
  const [taskList, setTaskList] = useState<TaskType[]>([
    { 
      id: v4(),
      text: 'Estudar React',
      done: true,
    },
    { 
      id: v4(),
      text: 'Ler um livro',
    },
    { 
      id: v4(),
      text: 'Tomar banho',
      done: true,
    },
  ]);

  const [ newTaskText, setNewTaskText ] = useState('')

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    setTaskList([...taskList, { 
      id: v4(), 
      text: newTaskText,
      done: false,
    }]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleToggleTaskDone(event: ChangeEvent<HTMLInputElement>) {
    const updatedTaskList = taskList.map(task => {
      if (task.id === event.target.dataset.taskId) {
        return {...task, done:!task.done };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  }

  function handleDeleteTask(id: string) {
    const updatedTaskList = taskList.filter(task => task.id!== id);
    setTaskList(updatedTaskList);
  }

  const hasTasks = taskList.length > 0; 
  const tasksCount = taskList.length;
  const tasksFinished = taskList.filter(task => task.done === true).length;

  return (
    <>
    <div className={styles.createTask}>
      <form onSubmit={handleCreateTask}>
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa" 
          onChange={handleNewTaskChange}
          value={newTaskText}
        />
        <button type="submit">
          Criar
          <Plus className={styles.createIcon}/>
        </button>
      </form>
    </div>

    <div className={styles.wrapper}>
      <div className={styles.status}>
        <p className={styles.createdTasks}>
          Tarefas criadas <span>{ tasksCount }</span>
        </p>
        <p className={styles.finishedTasks}>
          Concluídas <span> { tasksFinished }</span>
        </p>
      </div>

    {!hasTasks ? 
      <div className={styles.emptyList}>
        <img src={listIcon} alt="Um ícone de uma prancheta com uma listagem" />
        <div>
          <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    : 
      <div className={styles.taskList}>
        {taskList.map(task => {
          return (
            <div className={styles.task} key={task.id}>
              <input type="checkbox" 
                defaultChecked={task.done} 
                onChange={handleToggleTaskDone}
              />
              <p className={task.done ? styles.lineThrough : undefined}> {task.text} </p>
              <p 
                className={styles.delete}
                onClick={() => handleDeleteTask(task.id)}
              >
                <Trash />
              </p>
            </div>
          )
        })}
      </div>
    }
    </div>
    </>
  )
}