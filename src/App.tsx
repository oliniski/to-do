import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import './global.css'
import { TaskType } from './components/Tasks.tsx';

const tasks: TaskType[] = [
  { 
    id: 1,
    text: 'Estudar React' },
  { 
    id: 2,
    text: 'Ler um livro' },
  { 
    id: 3,
    text: 'Tomar banho' },
  { 
    id: 4,
    text: 'Fazer exercícios' },
]

function App() {
  return (
    <>
      <Header />
      <CreateTask />
      <Tasks tasks={tasks}/>
    </>
  )
}

export default App
