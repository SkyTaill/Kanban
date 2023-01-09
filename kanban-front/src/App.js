
import './App.css';
import { useState } from 'react';
import data from './mock.json'
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [tasks, setTask] = useState(data)

  const editTask = (editInputTask) => {

    var newArray2 = tasks.filter(function (f) { return f.id !== editInputTask.id })

    setTask([...newArray2, editInputTask])
  }

  return (
    <div className='wrapper'>
      <Header />
      <Main tasks={tasks} setTask={setTask} editTask={editTask} />
      <Footer />
    </div>

  );
}

export default App;
