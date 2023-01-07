import { LIST_TYPES, LIST_COPY } from '../../config';
import React from 'react';
import List from '../List';
import css from "./index.module.css"

const Board = props => {
    const { tasks, setTask } = props

    return (
        <div className={css.block}>

            {Object.values(LIST_TYPES).map(type => {
                const listTasks = tasks.filter(task => task.status === type)
                return (
                    <div key={type} >
                        <CheakAndAddCard
                            type={type}
                            listTasks={listTasks}
                            setTask={setTask}
                            tasks={tasks}
                        />
                    </div>
                )
            })}


        </div>
    )
}

function CheakAndAddCard(props) {
    const type = props.type;
    const listTasks = props.listTasks;
    const setTask = props.setTask;
    const tasks = props.tasks;
    var listTasksAdding
    if (type === "ready") {
        listTasksAdding = tasks.filter(task => task.status === "backlog")
    }
    if (type === "inProgress") {
        listTasksAdding = tasks.filter(task => task.status === "ready")
    }
    if (type === "finished") {
        listTasksAdding = tasks.filter(task => task.status === "inProgress")
    }


    return (
        <List key={type} type={type} title={LIST_COPY[type]} tasks={listTasks} setTask={setTask} listTasksAdding={listTasksAdding} />
    )
}

export default Board;
