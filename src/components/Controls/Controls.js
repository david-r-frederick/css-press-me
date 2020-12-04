import React from 'react';
import classes from './Controls.module.css';

const Controls = ({ data, playboxState, click }) => {
    return (
        <div className={classes.rowHolder}>
            <div className={classes.subtitles}>
                {data.map((rowObject) => {
                    return rowObject ? <h3 className={classes.propertyTitle}>{rowObject.subtitle}</h3> : null;
                })}
            </div>
            <div className={classes.buttonsContainer}>
                {data.map((rowObject) => {
                    if (rowObject) {
                        return (
                            <div className={classes.buttonHolder}>
                                {rowObject.buttons.map((cssValue) => {
                                    let backgroundColor = 'purple';
                                    if (playboxState[rowObject.cssProperty] === cssValue) {
                                        backgroundColor = 'black';
                                    }
                                    return (
                                        <button
                                            onClick={() => click(rowObject.cssProperty, cssValue)}
                                            className={classes.propertyControl}
                                            style={{ backgroundColor }}
                                        >
                                            {cssValue}
                                        </button>
                                    );
                                })}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Controls;
