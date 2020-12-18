import React from 'react';
import classes from './ResetButton.module.css';

const ResetButton = ({ onClick, title }) => {
    return (
        <button onClick={onClick} className={classes.resetButton}>
            {title}
        </button>
    );
};

export default ResetButton;
