
import React from 'react';
import css from "./index.module.css"

import { useResolvedPath } from 'react-router-dom'
const TaskDetail = props => {
    const { tasks } = props
    const resolved = useResolvedPath(props)
    const id = resolved.pathname.split("/")[2]
    const task = tasks.filter(task => task.id === id)


    return (
        <div className={css.bord}>
            <h1>{task[0].title}</h1>
            <p>{task[0].description}</p>
        </div>

    )
}

export default TaskDetail;
