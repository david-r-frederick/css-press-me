import React from 'react';
import classes from './GrowingHeart.module.css';

const GrowingHeart = () => {
    return (
        <div class={classes.heartGrowContainer}>
            <span class={classes.colorPillarRed}></span>
            <span class={classes.colorPillarOrangeRed}></span>
            <span class={classes.colorPillarOrange}></span>
            <span class={classes.colorPillarMacaroni}></span>
            <span class={classes.colorPillarYellow}></span>
            <span class={classes.colorPillarGreen}></span>
            <span class={classes.colorPillarBlue}></span>
            <span class={classes.colorPillarIndigo}></span>
            <span class={classes.colorPillarViolet}></span>
        </div>
    );
};

export default GrowingHeart;
