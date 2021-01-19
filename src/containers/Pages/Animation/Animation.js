import React, { Component } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import PlayBox from '../../../components/PlayBox/PlayBox';
import classes from './Animation.module.css';
import Keyframes from '@keyframes/core';
import Tips from '../../../components/Tips/Tips';
import Draggable from 'react-draggable';
import { SizeMe } from 'react-sizeme';
import ResetButton from '../../../components/Common/ResetButton/ResetButton';
import PrimaryButton from '../../../components/Common/PrimaryButton/PrimaryButton';
import KeyframeData from './KeyframeData/KeyframeData';
import KeyframeSlider from './KeyframeSlider/KeyframeSlider';

export class Animation extends Component {
    constructor(props) {
        super(props);
        this.starterCSS = {
            opacity: '1',
            left: '0px',
            top: '0px',
            margin: '0px',
            padding: '0px',
            'font-size': '12px',
            'border-radius': '0px',
        };
        this.initialKeyframes = {
            '0%': { ...this.starterCSS },
            '25%': { ...this.starterCSS },
            '50%': { ...this.starterCSS },
            '75%': { ...this.starterCSS },
            '100%': { ...this.starterCSS },
        };
        this.state = {
            animationDuration: 3000,
            cssKey: 'top',
            sliderHeight: 400,
            keyframes: {
                ...this.initialKeyframes,
            },
        };
    }

    createKeyframe = (keyframesArr) => {
        if (keyframesArr.length < 10) {
            let newKeyframe;
            do {
                newKeyframe = `${Math.round(Math.random() * 100)}%`;
            } while (this.state.keyframes[newKeyframe]);
            const keyframesCopy = { ...this.state.keyframes, [newKeyframe]: { ...this.starterCSS } };
            this.setState((prevState) => {
                return {
                    ...prevState,
                    keyframes: Object.keys(keyframesCopy)
                        .map((el) => +el.replace('%', ''))
                        .sort((a, b) => a - b)
                        .reduce((cur, acc) => {
                            return {
                                ...cur,
                                [`${acc}%`]: keyframesCopy[`${acc}%`],
                            };
                        }, {}),
                };
            });
        }
    };

    deleteKeyframe = (keyframes, percent) => {
        const newObject = { ...keyframes };
        delete newObject[percent];
        this.setState({ keyframes: newObject });
    };

    render() {
        const { keyframes, cssKey, sliderHeight, animationDuration } = this.state;
        const keyframesArr = Object.entries(keyframes);
        const cssKeys = Object.keys(this.starterCSS);

        Keyframes.define({
            name: 'flexible',
            ...keyframes,
        });

        return (
            <div className={classes.animationContainer}>
                <div>
                    <PageTitle title="Animation" />
                    <div className={classes.top}>
                        <SizeMe monitorHeight>
                            {({ size }) => {
                                const { width, height } = size;
                                if (sliderHeight !== height) {
                                    this.setState({ sliderHeight: height });
                                }
                                return (
                                    <div className={classes.keyframesControlsContainer}>
                                        {keyframesArr.map((kframeArr) => {
                                            const [keyframePercentage, keyframeCSS] = kframeArr;
                                            const keyframeAsANumber = +keyframePercentage.replace('%', '');
                                            const initialX = (keyframeAsANumber * width) / 100;
                                            const currentCSSKeyValue = keyframeCSS[cssKey];
                                            let initialY;
                                            if (currentCSSKeyValue.includes('px')) {
                                                initialY = +currentCSSKeyValue.replace('px', '');
                                            } else {
                                                initialY = +currentCSSKeyValue * 400;
                                            }
                                            return (
                                                <KeyframeSlider
                                                    initialPositions={{ initialX, initialY }}
                                                    parentHeight={height}
                                                    keyframePercentage={keyframePercentage}
                                                    updateKeyframePercentage={(xPosition) => {
                                                        const newKeyframePerc = `${Math.round(
                                                            (xPosition / width) * 100
                                                        )}%`;
                                                        const keyframeExists = keyframesArr
                                                            .map((arr) => arr[0])
                                                            .includes(newKeyframePerc);
                                                        if (!keyframeExists) {
                                                            this.setState((prevState) => {
                                                                let newObject = {};
                                                                Object.keys(prevState.keyframes).forEach((keyframe) => {
                                                                    if (keyframe === keyframePercentage) {
                                                                        let newPair = {
                                                                            [newKeyframePerc]:
                                                                                prevState.keyframes[keyframePercentage],
                                                                        };
                                                                        newObject = { ...newObject, ...newPair };
                                                                    } else {
                                                                        newObject = {
                                                                            ...newObject,
                                                                            [keyframe]: prevState.keyframes[keyframe],
                                                                        };
                                                                    }
                                                                });
                                                                return {
                                                                    ...prevState,
                                                                    keyframes: newObject,
                                                                };
                                                            });
                                                        }
                                                    }}
                                                    updateKeyframeCSSValue={(yPosition) => {
                                                        this.setState((prevState) => {
                                                            const { cssKey, keyframes } = prevState;
                                                            let value = yPosition;
                                                            let unit = 'px';
                                                            if (cssKey === 'opacity') {
                                                                value = yPosition / height;
                                                                unit = '';
                                                            }
                                                            return {
                                                                ...prevState,
                                                                keyframes: {
                                                                    ...keyframes,
                                                                    [keyframePercentage]: {
                                                                        ...keyframes[keyframePercentage],
                                                                        [cssKey]: `${value.toFixed(2)}${unit}`,
                                                                    },
                                                                },
                                                            };
                                                        });
                                                    }}
                                                    deleteKeyframe={() => {
                                                        this.deleteKeyframe(keyframes, keyframePercentage);
                                                    }}
                                                />
                                            );
                                        })}
                                        <select
                                            className={classes.cssKeySelector}
                                            value={cssKey}
                                            onChange={(ev) => this.setState({ cssKey: ev.target.value })}
                                        >
                                            {cssKeys.map((cssKey) => {
                                                return <option key={cssKey}>{cssKey}</option>;
                                            })}
                                        </select>
                                    </div>
                                );
                            }}
                        </SizeMe>
                        <div className={classes.masterValueSlider}>
                            <h3 className={classes.masterValueSliderLabel}>MASTER</h3>
                            <div className={classes.keyframeSliderLine}></div>
                            <Draggable
                                bounds={{ top: 0, bottom: sliderHeight }}
                                axis="y"
                                onDrag={(e, ui) => {
                                    this.setState((prevState) => {
                                        const newObject = {};
                                        let value = ui.y;
                                        let unit = 'px';
                                        if (cssKey === 'opacity') {
                                            value = ui.y / sliderHeight;
                                            unit = '';
                                        }
                                        for (const keyframe in prevState.keyframes) {
                                            newObject[keyframe] = prevState.keyframes[keyframe];
                                            newObject[keyframe][prevState.cssKey] = `${value}${unit}`;
                                        }
                                        return {
                                            ...prevState,
                                            keyframes: newObject,
                                        };
                                    });
                                }}
                            >
                                <div className={classes.masterValueSliderValue}></div>
                            </Draggable>
                        </div>
                        <Tips rows={10} />
                    </div>
                    <KeyframeData keyframesArr={keyframesArr} />
                    <div className={classes.additionalControlsContainer}>
                        <label className={classes.animDurationLabel} htmlFor="animation-duration-input">
                            Animation Duration
                        </label>
                        <input
                            className={classes.animationDurationInput}
                            type="number"
                            value={animationDuration}
                            id="animation-duration-input"
                            onChange={(ev) => {
                                this.setState({ animationDuration: +ev.target.value });
                            }}
                        />
                        <PrimaryButton
                            onClick={() => this.createKeyframe(keyframesArr)}
                            className={classes.addKeyframeBtn}
                            title="Add Keyframe"
                        />
                        <ResetButton
                            title="Reset Keyframes"
                            onClick={() => {
                                this.setState({
                                    keyframes: { ...this.initialKeyframes },
                                });
                            }}
                        />
                    </div>
                    <PlayBox>
                        <div
                            style={{ animation: `flexible ${animationDuration}ms infinite` }}
                            className={classes.block}
                        >
                            BOX
                        </div>
                    </PlayBox>
                </div>
            </div>
        );
    }
}
