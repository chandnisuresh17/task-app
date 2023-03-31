import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import Button from './Button';
import Tasks from './Tasks';
import {useState} from 'react'
import AddTask from './AddTask';
function App() {
  const [tasks,setTasks] = useState([
    {
      id:1,
      text:'Chandni',
      reminder:true
    },
    {
      id:2,
      text:'sagar',
      reminder:true
    },
    {
      id:3,
      text:'Dona',
      reminder:true
    },
    {
      id:4,
      text:'Thomas',
      reminder:false
    }
  ])
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const onReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id? {...task, reminder:!task.reminder}: task))
  }
  const onAdd = (task) =>{
    const id = Math.floor(Math.random()*1000 + 4)
    const newOne = {...task, id}
    setTasks([...tasks, newOne])
    console.log(task)

  } 

  return(
    <div className="App">
      <header className="App-header">
        <h1>My Profile</h1>
        
      <div><Button color= 'blue' text= 'Submit'></Button></div>
      <AddTask onAdd={onAdd}></AddTask>
      <Tasks tasks = {tasks} onClick = {onDelete} onReminder= {onReminder} />

    <Footer abd = 'Chandni'></Footer>



      </header>
      
    </div>
    
  );
}


export default App;

