
import React from 'react';
import css from "./index.module.css"
import Board from '../Board';
import { Routes, Route } from 'react-router-dom';
import TaskDetail from '../Task-Detail'
const Main = props => {
    //const { tasks, setTask } = props

    return (
        <main className={css.main} >
            <Routes>
                <Route path="/" element={<Board {...props} />} />
                <Route path="/tasks/:taskId" element={<TaskDetail {...props} />} />
            </Routes>




        </main>
    )
}

export default Main;
