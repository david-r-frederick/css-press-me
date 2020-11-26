import React from 'react';
import classes from './ThreeDeeFlip.module.css';

const ThreeDeeFlip = () => {
    return (
        <div className={classes.card}>
            <div className={classes.card__content}>
                <div className={classes.card__front}>
                    <h3 className={classes.card__title}>Batman</h3>
                    <p className={classes.card__subtitle}>I am the night</p>
                </div>
                <div className={classes.card__back}>
                    <p className={classes.card__body}>
                        Medium sized description for whatever is on the other side of the card.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThreeDeeFlip;
