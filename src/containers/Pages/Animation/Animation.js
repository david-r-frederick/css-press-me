import React, { Component } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import PlayBox from '../../../components/PlayBox/PlayBox';
import classes from './Animation.module.css';
import Keyframes from '@keyframes/core';
import AnimationControls from '../../../components/AnimationControls/AnimationControls';
import Tips from '../../../components/Tips/Tips';
// import GrowingHeart from './GrowingHeart/GrowingHeart';
// import ThreeDeeFlip from './ThreeDeeFlip/ThreeDeeFlip';

export class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playboxState: {},
            animationDuration: 1000,
            keyframesDefinition: {
                name: 'flexible',
                '0%': { opacity: 0 },
                '25%': { opacity: 0.3 },
                '50%': { opacity: 0.7 },
                '75%': { opacity: 0.3 },
                '100%': { opacity: 0 },
            },
        };
    }

    setKeyframe = (key, value) => {
        console.log(this.state.keyframesDefinition);
        this.setState((prevState) => {
            return {
                ...prevState,
                keyframesDefinition: {
                    ...prevState.keyframesDefinition,
                    [key]: {
                        ...prevState.keyframesDefinition[key],
                        ...value,
                    },
                },
            };
        });
    };

    render() {
        Keyframes.define([this.state.keyframesDefinition]);

        const { playboxState } = this.state;

        const allButtons = ['opacity', 'left', 'top', 'height', 'width', 'margin', 'padding', 'border-radius', 'margin-top'];

        return (
            <div className={classes.animationContainer}>
                <div>
                    <PageTitle title="Animation" />
                    <div className={classes.top}>
                        <AnimationControls
                            playboxState={playboxState}
                            click={this.setKeyframe}
                            data={[
                                ...Array(5)
                                    .fill()
                                    .map((e, ix) => {
                                        const percent = `${ix * 25}%`;
                                        return {
                                            subtitle: `Key Frame ${percent}`,
                                            cssProperty: percent,
                                            buttons: allButtons,
                                        };
                                    }),
                            ]}
                        />
                        <Tips rows={4} />
                    </div>
                    <label className={classes.animDurationLabel} htmlFor="animation-duration-input">
                        Animation Duration
                    </label>
                    <input
                        className={classes.valueInput}
                        type="number"
                        value={this.state.animationDuration}
                        id="animation-duration-input"
                        onChange={(ev) => {
                            this.setState({ animationDuration: +ev.target.value });
                        }}
                    />
                    <PlayBox>
                        <div
                            style={{ animation: `flexible ${this.state.animationDuration}ms infinite` }}
                            className={classes.block}
                        ></div>
                    </PlayBox>
                </div>
            </div>
        );
    }
}
