import React from 'react';
import classes from './PlayBox.module.css';

const PlayBox = (props) => {
    return (
        <div style={{ ...props.customStyle } || null} className={classes.playBoxContainer}>
            {props.children}
        </div>
    );
};

export default PlayBox;
