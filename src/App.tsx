import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import './global.css'

function App() {

  return (
    <>
      <Header />
      <CreateTask />
      <Tasks />
    </>
  )
}

export default App
