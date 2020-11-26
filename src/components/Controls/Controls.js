import React from 'react';
import classes from './Controls.module.css';

const Controls = (props) => {
    return (
        <div className={classes.rowHolder}>
            <div className={classes.subtitles}>
                {props.data.map((rowObject) => {
                    return (
                        <React.Fragment>
                            <h3 className={classes.propertyTitle}>{rowObject.subtitle}</h3>
                            {rowObject.custom ? <div className={classes.subtitlesSpacer}></div> : null}
                        </React.Fragment>
                    );
                })}
            </div>
            <div className={classes.buttonsContainer}>
                {props.data.map((rowObject) => {
                    return (
                        <React.Fragment>
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
                            {rowObject.custom ? (
                                <div className={classes.customContainer}>
                                    {rowObject.custom.map((custObj) => {
                                        switch (custObj.tag) {
                                            case 'input':
                                                return (
                                                    <React.Fragment>
                                                        <label>{custObj.label}</label>
                                                        <input
                                                            type={custObj.type}
                                                            value={custObj.value}
                                                            onChange={(text) => {
                                                                custObj.change(text.target.value);
                                                            }}
                                                        />
                                                    </React.Fragment>
                                                );
                                            case 'select':
                                                return (
                                                    <React.Fragment>
                                                        <select
                                                            className={classes.transformSelector}
                                                            onChange={(ev) => custObj.optChange(ev.target.value)}
                                                            value={custObj.optValue}
                                                        >
                                                            {custObj.options.map((opt) => {
                                                                return <option>{opt}</option>;
                                                            })}
                                                        </select>
                                                        <label>{custObj.label}</label>
                                                        <input
                                                            value={custObj.valValue}
                                                            onChange={(event) => {
                                                                custObj.valChange(event.target.value);
                                                            }}
                                                        />
                                                    </React.Fragment>
                                                );
                                            default:
                                                throw new Error('Tag of custom object invalid.');
                                        }
                                    })}
                                </div>
                            ) : null}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Controls;
