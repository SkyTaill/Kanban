
import './App.css';
import { useState } from 'react';
import data from './mock.json'
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [tasks, setTask] = useState(data)
  return (
    <div className='wrapper'>
      <Header />
      <Main tasks={tasks} setTask={setTask} />
      <Footer />
    </div>

  );
}

export default App;
