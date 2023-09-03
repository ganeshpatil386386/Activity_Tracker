import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import Header from './components/Header';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState(
    
    [
       {
           id: 1,
           text: "React",
           day: "Feb 14 2000",
           reminder: true,
   
       },
   
       {
           id: 2,
           text: "Next",
           day:"7 May 2001",
           reminder: true,
       },
   
       {
           id: 3,
           text:"Node",
           date: "10 Oct 2003",
           reminder: false,
       },
   ])
  
  
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  } 


   const deleteTask = (id) => {
      setTasks(tasks.filter((task)=> task.id !== id))
  }
  // Toggle 
  const toggleReminder = (id) => {
    setTasks(tasks.mapp((task) => task.id === id 
    ? {...task, reminder: !task.reminder }
    : task))
  }
 
  return (
    <div className='container'>
      
        
       <Header title="Work Tracker"/>
       <AddTask onAdd={addTask} />
        {tasks.length > 0 ? 
        ( 
        <Tasks  tasks ={tasks} 
        onDelete={deleteTask}
        onToggle = {toggleReminder}
         />
         ) : 'No Task to Show'}
    </div>
  )
}

export default App
