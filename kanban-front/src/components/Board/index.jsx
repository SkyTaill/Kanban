import { LIST_TYPES, LIST_COPY } from '../../config';
import React from 'react';
import List from '../List';
import "./index.css"

const Board = props => {
    const { tasks, setTask } = props

    return (
        <div>
            {Object.values(LIST_TYPES).map(type => {
                const listTasks = tasks.filter(task => task.status === type)
                return (
                    <List key={type} type={type} title={LIST_COPY[type]} tasks={listTasks} setTask={setTask} />
                )
            })}
        </div>
    )
}

export default Board;
