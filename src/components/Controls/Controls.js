import React from 'react';
import classes from './Controls.module.css';
// const camelize = (s) => s.replace(/-./g, (x) => x.toUpperCase()[1]);

const Controls = (props) => {
    return (
        <div className={classes.rowHolder}>
            <div className={classes.subtitles}>
                {props.data.map((rowObject) => {
                    if (rowObject) {
                        return (
                            <React.Fragment>
                                <h3 className={classes.propertyTitle}>{rowObject.subtitle}</h3>
                                {rowObject.custom ? <div className={classes.subtitlesSpacer}></div> : null}
                            </React.Fragment>
                        );
                    }
                    return null;
                })}
            </div>
            <div className={classes.buttonsContainer}>
                {props.data.map((rowObject) => {
                    if (rowObject) {
                        return (
                            <React.Fragment>
                                <div className={classes.buttonHolder}>
                                    {rowObject.buttons.map((cssValue) => {
                                        return (
                                            <button
                                                onClick={() => {
                                                    props.click(rowObject.cssProperty, cssValue);
                                                }}
                                                className={classes.propertyControl}
                                                style={{
                                                    backgroundColor:
                                                        props.playboxState[rowObject.cssProperty] === cssValue
                                                            ? 'black'
                                                            : 'purple',
                                                }}
                                            >
                                                {cssValue}
                                            </button>
                                        );
                                    })}
                                </div>
                            </React.Fragment>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Controls;
