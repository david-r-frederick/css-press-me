import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import PageTitle from '../../../components/PageTitle/PageTitle';
import classes from './Animation.module.css';
import GrowingHeart from './GrowingHeart/GrowingHeart';
import ThreeDeeFlip from './ThreeDeeFlip/ThreeDeeFlip';

export class Animation extends Component {
    render() {
        return (
            <div className={classes.AnimationContainer}>
                <div>
                    <PageTitle title="Animation" />
                    <Controls data={[]} />
                    <GrowingHeart />
                    <ThreeDeeFlip />
                </div>
            </div>
        );
    }
}
