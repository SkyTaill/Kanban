
import React from 'react';
import css from "./index.module.css"
import Board from '../Board';
const Main = props => {
    //const { tasks, setTask } = props
    return (
        <main className={css.main} >
            <Board {...props} />
        </main>
    )
}

export default Main;
