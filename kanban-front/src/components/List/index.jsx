
import React, { useState, useEffect } from 'react';

import css from "./index.module.css"

const List = props => {

    const [state, setState] = useState(false);

    useEffect(() => {
        window.addEventListener('click', clicker)
        return () => {
            window.removeEventListener("click", clicker);
        };
    });

    const clicker = (props) => {
        const target = props.target

        if (target.id !== title) {
            setState(false);
        }
    }
    const click = () => {
        if (state) {
            setState(false);
        } else {
            setState(true);
        }
    }

    const { title, tasks } = props
    return (
        <div>
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
                <button className={css.blockButton} id={title} onClick={click}>+Add card</button>

            </div>
            <CheckBlockMenu
                state={state}
                title={title}
                tasks={tasks}
            />
        </div>


    )


}


function CheckBlockMenu(props) {
    const state = props.state;
    const title = props.title;
    const tasks = props.tasks;

    if (state) {
        if (props.title !== "Backlog") {

            return (
                <div id={title} className={css.block_menu}>
                    <div className={css.scrollBlock_menu}>
                        {tasks.map(task => {
                            return (
                                <div key={task.id} className={css.task}>{task.title}</div>
                            )
                        })
                        }
                    </div>
                </div>

            )
        }

    }
    return (
        null
    )
}



export default List;
