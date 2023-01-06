
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
            />
        </div>


    )


}


function CheckBlockMenu(props) {
    const state = props.state;

    if (state) {
        return (
            <div id={props.title} className={css.prof_menu}>
                <h3 id={props.title} className={css.text_profil}>Profile</h3>
                <h3 id={props.title} className={css.logOut}>Log Out</h3>
            </div>
        )
    }
    return (
        null
    )
}



export default List;
