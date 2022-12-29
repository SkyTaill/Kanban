
import React from 'react';
import css from "./index.module.css"

class Header extends React.Component {



    render() {

        return (

            <header className={css.header}>
                <div className={css.header_content}>
                    <h1 className={css.text}>Awesome Kanban Board</h1>
                    <div className={css.header_profil}>

                        <div className={css.svg}></div>
                        <div className={css.svg2}></div>
                    </div>

                </div>
            </header>
        );
    }
}

export default Header;
