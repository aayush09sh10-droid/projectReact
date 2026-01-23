import { useState } from 'react'
import { TaskForm } from './assets/task/TaskForm';
import { DisplayTask } from './assets/task/displayTask';



function App() {
  
  const [taskList, setTaskList] = useState([]);


  const addTaskList=(task)=>{
    setTaskList([...taskList, task]);
    
  }

  return (
    <>
    <TaskForm addTaskList={addTaskList}/> 
    <DisplayTask taskList={taskList}/> 
    </>
  )
}

export default App
