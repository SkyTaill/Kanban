
import React from 'react';
import css from "./index.module.css"

class Header extends React.Component {



    render() {

        return (

            <header className={css.header}>
                <div className={css.header_content}>
                    <h1 className={css.text}>Awesome Kanban Board</h1>
                    <div className={css.profil}>
                        <div className={css.header_profil}>

                            <div className={css.svg}></div>
                            <div className={css.svg2}></div>
                        </div>
                        <div className={css.prof_menu}>
                            <h3 className={css.text_profil}>Profile</h3>
                            <h3 className={css.logOut}>Log Out</h3>
                        </div>
                    </div>


                </div>
            </header>
        );
    }
}

export default Header;
