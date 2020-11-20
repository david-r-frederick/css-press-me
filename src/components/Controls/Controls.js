import React from 'react';
import classes from './Controls.module.css';

const Controls = (props) => {
    return (
        <div className={classes.rowHolder}>
            <div className={classes.subtitles}>
                {props.data.map((rowObject) => {
                    return <h3 className={classes.propertyTitle}>{rowObject.subtitle}</h3>;
                })}
            </div>
            <div className={classes.buttonsContainer}>
                {props.data.map((rowObject) => {
                    return (
                        <div className={classes.buttonHolder}>
                            {rowObject.buttons.map((btnObject) => {
                                return (
                                    <button
                                        ref={btnObject.ref}
                                        onClick={btnObject.onClick}
                                        className={classes.propertyControl}
                                    >
                                        {btnObject.title}
                                    </button>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Controls;
