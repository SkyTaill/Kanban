
import React from 'react';
import css from "./index.module.css"

class Footer extends React.Component {



    render() {
        const tasks = this.props.tasks;
        var backlogCoutn = 0;
        var finishedCount = 0;
        tasks.forEach(element => {
            if (element.status === "backlog") {
                backlogCoutn++
            }
            if (element.status === "finished") {
                finishedCount++
            }
        });
        console.log(backlogCoutn)
        return (
            <footer className={css.footer}>
                <div className={css.container}>
                    <div className={css.statistic}>
                        <p className={css.statistic_value}>Active tasks:{backlogCoutn} </p>
                        <p className={css.statistic_value}>Finished tasks: {finishedCount}</p>
                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;
