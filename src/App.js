import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'HR Meeting',
        day: '17 Sept 2021',
        reminder: true,
    },
    {
        id: 2,
        text: 'Dev Meeting',
        day: '18 Sept 2021',
        reminder: true,
    },
    {
        id: 3,
        text: 'Vaccine First Dose',
        day: '19 Sept 2021',
        reminder: true,
    },
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="App">
      <Header title='Task Trackeroo' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks'}
    </div>
  );
}

export default App;
