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

  return (
    <div className="App">
      <Header title='Task Trackeroo'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
