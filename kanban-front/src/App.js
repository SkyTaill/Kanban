import uniqid from 'uniqid'
import './App.css';
import { useState } from 'react';
import data from './mock.json'
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const [tasks, setTask] = useState(data)

  const editTask = (editInputTask) => {

    var newArray2 = tasks.filter(function (f) { return f.id !== editInputTask.id })

    setTask([...newArray2, editInputTask])
  }

  const addNewTask = (title, description) => {
    const task = {
      id: uniqid(),
      title,
      description,
      created: new Date().toISOString(),
      status: 'backlog',
    }
    setTask([...tasks, task]);
  }


  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Main tasks={tasks} setTask={setTask} editTask={editTask} addNewTask={addNewTask} />
        <Footer tasks={tasks} />
      </BrowserRouter>
    </div>

  );
}

export default App;
