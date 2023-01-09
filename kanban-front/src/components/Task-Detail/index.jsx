
import React from 'react';
import css from "./index.module.css"
import Board from '../Board';
import { useResolvedPath } from 'react-router-dom'
const TaskDetail = props => {
    const { tasks, setTasks } = props
    const resolved = useResolvedPath(props)
    const id = resolved.pathname.split("/")[2]
    const task = tasks.filter(task => task.id === id)
    console.log(task)
    console.log(task.id)

    return (
        <div className={css.bord}>
            <h1>{task[0].title}</h1>
            <p>{task[0].description}</p>
        </div>

    )
}

export default TaskDetail;
