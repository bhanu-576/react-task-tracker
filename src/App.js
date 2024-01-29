import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = ()=> {
  const [ showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState(
    [ 
  {
    id: 1,
    text: 'meeting with the friends',
    day: "feb 1st at 1:00 pm",
    reminder : true,
},
{
    id: 2,
    text: "meeting with the girl friend",
    day: "feb 1st at 5:00 pm",
    reminder : true,
},
{
    id: 3,
    text: "call to home",
    day: "feb 1st at 9:00 pm",
    reminder : false,
}
])
//Add tak
const addTask = (task)=>{
  const id = Math.floor(Math.random() * 10000)+1
  const newTask = {id, ...task }
  setTasks([...tasks,newTask])
}

//Delete Task
const deleteTask = (id)=> {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
   setTasks(
   tasks.map((task) => 
   task.id === id ? { ...task , reminder:
    !task.reminder } : task 
    )
  )
}
  return (
    <div className='container'>
      <Header  onAdd = {()=> setShowAddTask
      (!showAddTask)}
        showAdd = {showAddTask}
      />
      { 
        showAddTask && <AddTask onAdd = {addTask} />}
      {
      tasks.length>0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      :'No Tasks to show'
      }</div>
  )
}

export default App;
