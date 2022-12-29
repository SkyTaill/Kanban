
import React from 'react';
import css from "./index.css"

const List = props => {
    const { title, type, tasks, setTask } = props
    return (<div>
        <h2>{title}</h2>

        {tasks.map(task => {
            return (
                <div key={task.id} className={css.task}>{task.title}</div>
            )
        })
        }
    </div>)


}

export default List;
