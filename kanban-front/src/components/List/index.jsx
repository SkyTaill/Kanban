
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
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
        if (target.id !== "block-menu") {
            if (target.id !== title) {
                setState(false);
            }
        }
    }
    const click = () => {
        if (state) {
            setState(false);
        } else {
            setState(true);
        }
    }

    const { title, tasks, listTasksAdding, setTask, editTask, type, addNewTask } = props
    //title название блока
    //tasks список задачь внутри блока
    //listTasksAdding список задачь которые мы можем добавить в блок
    //создание новой модели с задачами
    //editTask метод добавления новых задачь 
    //type задачи

    return (
        <div>
            <div className={css.taskBlock}>
                <div>
                    <h2 className={css.title}>{title}</h2>
                    <div className={css.scrollBlock}>
                        {tasks.map(task => {
                            return (
                                <Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
                                    <div key={task.id} className={css.task}>{task.title}</div>
                                </Link>
                            )
                        })
                        }
                    </div>

                </div>
                <ButtonAddCard
                    click={click}
                    title={title}
                    state={state}


                />

            </div>
            <CheckBlockMenu
                state={state}
                title={title}
                setTask={setTask}
                tasks={tasks}
                editTask={editTask}
                type={type}
                // tasks={tasks}
                addNewTask={addNewTask}
                listTasksAdding={listTasksAdding}

            />
        </div>


    )


}


function ButtonAddCard(props) {
    const click = props.click;
    const title = props.title;
    const state = props.state;

    if (!state) {
        return (
            <button className={css.blockButton} id={title} onClick={click}>+Add card</button>
        )
    } else {
        return (
            <div className={css.svg_down}></div>
        )
    }

}


function CheckBlockMenu(props) {
    const state = props.state;
    const title = props.title;
    const type = props.type;
    const editTask = props.editTask;
    const listTasksAdding = props.listTasksAdding;
    const addNewTask = props.addNewTask;
    if (state) {
        if (props.title !== "Backlog") {

            return (
                <div id={title} className={css.block_menu}>
                    <div className={css.scrollBlock_menu}>
                        {listTasksAdding.map(task => {
                            //добавляем элемент в новый блок
                            const AddTask = () => {
                                const newTask = task;
                                newTask.status = type
                                editTask(newTask)
                            }

                            return (
                                <button key={task.id} className={css.task_menu} onClick={AddTask}>{task.title}</button>
                            )
                        })
                        }
                    </div>
                </div>

            )
        } else {
            const addNewTaskButton = (props) => {
                const title = document.getElementsByName("title");
                const description = document.getElementsByName("description");
                addNewTask(title[0].value, description[0].value)


            }
            return (<div id='block-menu' className={css.block_menu}>
                <div id='block-menu' className={css.input_block}>
                    <input type="text" name="title" id='block-menu' className={css.input} />
                    <input type="text" name="description" id='block-menu' className={css.input} />
                    <button className={css.button} onClick={addNewTaskButton}>Submit</button>
                </div>

            </div>)
        }

    }
    return (
        null
    )
}





export default List;
