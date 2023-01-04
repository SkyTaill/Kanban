
import React, { useState } from 'react';
import css from "./index.module.css"


const Header = () => {



    const [state, setState] = useState(false);




    const click = () => {
        if (state) {
            setState(false);
        } else {
            setState(true);
        }
    }


    return (

        <header className={css.header}>
            <div className={css.header_content}>
                <h1 className={css.text}>Awesome Kanban Board</h1>
                <div className={css.profil}>
                    <div className={css.header_profil}>
                        <div className={css.svg}></div>
                        <button className={state ? css.svg_down : css.svg_up} onClick={click}></button>
                    </div>


                    <CheckProfMenu
                        state={state}
                    />

                </div>


            </div>
        </header>
    );

}


function CheckProfMenu(props) {
    const state = props.state;

    if (state) {
        return (
            <div id='profil-menu' className={css.prof_menu}>
                <h3 id='profil-menu' className={css.text_profil}>Profile</h3>
                <h3 id='profil-menu' className={css.logOut}>Log Out</h3>
            </div>
        )
    }
    return (
        null
    )
}

// window.addEventListener('click', e => {
//     const target = e.target
//     if (target.id === "prof-menu") {
//         console.log(target.id)
//         console.log("asdasdasd")
//     } else {
//         console.log(target.id)
//         console.log("123123")


//     }
// })

export default Header;
