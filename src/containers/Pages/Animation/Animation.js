import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import classes from './Animation.module.css';
import GrowingHeart from './GrowingHeart/GrowingHeart';
import ThreeDeeFlip from './ThreeDeeFlip/ThreeDeeFlip';

export class Animation extends Component {
    render() {
        return (
            <div className={classes.AnimationContainer}>
                <div>
                    <h2 className={classes.controlTitle}>ANIMATION</h2>
                    <Controls data={[]} />
                    <GrowingHeart />
                    <ThreeDeeFlip />
                </div>
            </div>
        );
    }
}
