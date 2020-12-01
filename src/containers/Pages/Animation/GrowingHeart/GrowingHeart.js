import React from 'react';
import classes from './GrowingHeart.module.css';

const GrowingHeart = () => {
    return (
        <div className={classes.heartGrowContainer}>
            <span className={classes.colorPillarRed}></span>
            <span className={classes.colorPillarOrangeRed}></span>
            <span className={classes.colorPillarOrange}></span>
            <span className={classes.colorPillarMacaroni}></span>
            <span className={classes.colorPillarYellow}></span>
            <span className={classes.colorPillarGreen}></span>
            <span className={classes.colorPillarBlue}></span>
            <span className={classes.colorPillarIndigo}></span>
            <span className={classes.colorPillarViolet}></span>
        </div>
    );
};

export default GrowingHeart;
