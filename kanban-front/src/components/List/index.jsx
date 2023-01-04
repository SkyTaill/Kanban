
import React from 'react';
import css from "./index.module.css"

const List = props => {
    const { title, tasks } = props
    return (
        <div className={css.taskBlock}>
            <div>
                <h2 className={css.title}>{title}</h2>
                <div className={css.scrollBlock}>
                    {tasks.map(task => {
                        return (
                            <div key={task.id} className={css.task}>{task.title}</div>
                        )
                    })
                    }
                </div>

            </div>
            <button className={css.blockButton}>+Add card</button>
        </div>
    )


}

export default List;
