import { Plus } from '@phosphor-icons/react';

import style from './CreateTask.module.css';
export function CreateTask() {
  return (
    <div className={style.createTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <Plus className={style.createIcon}/>
      </button>
    </div>
  )
}