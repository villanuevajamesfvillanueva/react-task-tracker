import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';

function App() {
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

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="App">
      <Header title='Task Trackeroo'/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks'}
    </div>
  );
}

export default App;
