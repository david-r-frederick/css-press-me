import React from 'react';
import classes from './PrimaryButton.module.css';

const PrimaryButton = ({ onClick, title }) => {
    return (
        <button onClick={onClick} className={classes.primaryButton}>
            {title}
        </button>
    );
};

export default PrimaryButton;
