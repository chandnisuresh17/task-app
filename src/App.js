import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import Button from './Button';
import Tasks from './Tasks';
import {useState} from 'react'
function App() {
  const [tasks,setTasks] = useState([
    {
      id:1,
      text:'Chandni'
    },
    {
      id:2,
      text:'sagar'
    },
    {
      id:3,
      text:'Dona'
    },
    {
      id:4,
      text:'Thomas'
    }
  ])
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return(
    <div className="App">
      <header className="App-header">
        <h1>My Profile</h1>
        <div>
        <form>
          <label>
            Name
          </label>
          <input type="text" placeholder='name'></input>
        </form>
      </div>
      <div><Button color= 'blue' text= 'Submit'></Button></div>
      <Tasks tasks = {tasks} onClick = {onDelete} />
    <Footer abd = 'Chandni'></Footer>



      </header>
      
    </div>
    
  );
}


export default App;

