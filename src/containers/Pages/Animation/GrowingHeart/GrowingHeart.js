import React from 'react';
import classes from './GrowingHeart.module.css';

const GrowingHeart = () => {
    return (
        <div className={classes.heartGrowContainer}>
            <span className={classes.shadeOnePillar}></span>
            <span className={classes.shadeTwoPillar}></span>
            <span className={classes.shadeThreePillar}></span>
            <span className={classes.shadeFourPillar}></span>
            <span className={classes.shadeFivePillar}></span>
            <span className={classes.shadeSixPillar}></span>
            <span className={classes.shadeSevenPillar}></span>
            <span className={classes.shadeEightPillar}></span>
            <span className={classes.shadeNinePillar}></span>
        </div>
    );
};

export default GrowingHeart;
