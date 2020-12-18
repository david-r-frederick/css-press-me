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

export class Animation extends Component {
    constructor(props) {
        super(props);
        this.starterCSS = { opacity: '1', left: '0px', top: '0px', margin: '0px', padding: '0px', 'font-size': '12px', 'border-radius': '0px' };
        this.initialKeyframes = {
            '0%': { ...this.starterCSS },
            '25%': { ...this.starterCSS },
            '50%': { ...this.starterCSS },
            '75%': { ...this.starterCSS },
            '100%': { ...this.starterCSS },
        };
        this.state = {
            slidersDisabled: false,
            animationDuration: 3000,
            cssKey: 'top',
            keyframes: {
                ...this.initialKeyframes,
            },
        };
    }

    render() {
        const { keyframes, slidersDisabled, cssKey } = this.state;
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
                                return (
                                    <div className={classes.keyframesControlsContainer}>
                                        {keyframesArr.map((kframeArr) => {
                                            const keyframeAsANumber = +kframeArr[0].replace('%', '');
                                            const initialX = (keyframeAsANumber * width) / 100;
                                            const currentCSSKeyValue = kframeArr[1][this.state.cssKey];
                                            let initialY;
                                            if (currentCSSKeyValue.includes('px')) {
                                                initialY = +currentCSSKeyValue.replace('px', '');
                                            } else {
                                                initialY = +currentCSSKeyValue * 400;
                                            }
                                            return (
                                                <Draggable
                                                    disabled={slidersDisabled}
                                                    axis="x"
                                                    bounds="parent"
                                                    position={{ x: initialX, y: 0 }}
                                                    onDrag={(e, ui) => {
                                                        const newKeyframePerc = `${Math.round((ui.x / width) * 100)}%`;
                                                        const keyframeExists = keyframesArr
                                                            .map((arr) => arr[0])
                                                            .includes(newKeyframePerc);
                                                        if (!keyframeExists) {
                                                            this.setState((prevState) => {
                                                                let newObject = {};
                                                                Object.keys(prevState.keyframes).forEach((keyframe) => {
                                                                    if (keyframe === kframeArr[0]) {
                                                                        let newPair = {
                                                                            [newKeyframePerc]:
                                                                                prevState.keyframes[kframeArr[0]],
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
                                                >
                                                    <div className={classes.keyframeSlider}>
                                                        <p>{kframeArr[0]}</p>
                                                        <div className={classes.keyframeSliderCircle}></div>
                                                        <div className={classes.keyframeSliderLine}>
                                                            <Draggable
                                                                position={{ x: 0, y: initialY }}
                                                                onDrag={(e, ui) => {
                                                                    this.setState((prevState) => {
                                                                        const { cssKey, keyframes } = prevState;
                                                                        let value = ui.y;
                                                                        let unit = 'px';
                                                                        if (cssKey === 'opacity') {
                                                                            value = ui.y / height;
                                                                            unit = '';
                                                                        }
                                                                        return {
                                                                            ...prevState,
                                                                            keyframes: {
                                                                                ...keyframes,
                                                                                [kframeArr[0]]: {
                                                                                    ...keyframes[kframeArr[0]],
                                                                                    [cssKey]: `${value.toFixed(
                                                                                        2
                                                                                    )}${unit}`,
                                                                                },
                                                                            },
                                                                        };
                                                                    });
                                                                }}
                                                                bounds={{ top: 0, bottom: height }}
                                                                axis="y"
                                                            >
                                                                <div
                                                                    style={{}}
                                                                    className={classes.keyframeSliderValue}
                                                                    onMouseOver={() =>
                                                                        this.setState({
                                                                            slidersDisabled: true,
                                                                        })
                                                                    }
                                                                    onMouseLeave={() =>
                                                                        this.setState({
                                                                            slidersDisabled: false,
                                                                        })
                                                                    }
                                                                ></div>
                                                            </Draggable>
                                                        </div>
                                                        <button
                                                            onClick={() => {
                                                                const newObject = { ...this.state.keyframes };
                                                                delete newObject[kframeArr[0]];
                                                                this.setState({ keyframes: newObject });
                                                            }}
                                                            className={classes.deleteBtn}
                                                        ></button>
                                                    </div>
                                                </Draggable>
                                            );
                                        })}
                                        <select
                                            className={classes.cssKeySelector}
                                            value={cssKey}
                                            onChange={(event) => {
                                                this.setState({ cssKey: event.target.value });
                                            }}
                                        >
                                            {cssKeys.map((cssKey) => {
                                                return <option>{cssKey}</option>;
                                            })}
                                        </select>
                                    </div>
                                );
                            }}
                        </SizeMe>
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
                            value={this.state.animationDuration}
                            id="animation-duration-input"
                            onChange={(ev) => {
                                this.setState({ animationDuration: +ev.target.value });
                            }}
                        />
                        <PrimaryButton
                            onClick={() => {
                                if (keyframesArr.length >= 10) {
                                    return;
                                }
                                const existingKeyframes = keyframesArr.map((arr) => arr[0]);
                                let newKeyframe;
                                do {
                                  newKeyframe = `${Math.round(Math.random() * 100)}%`;
                                } while (existingKeyframes.includes(newKeyframe));
                                keyframesArr.push([newKeyframe, { ...this.starterCSS }]);
                                keyframesArr.sort((x, y) => {
                                    return parseInt(x[0].replace('%', '')) - parseInt(y[0].replace('%', ''));
                                });
                                const keyframesObjectToAssign = {};
                                keyframesArr.forEach((subArr) => {
                                    keyframesObjectToAssign[subArr[0]] = subArr[1];
                                });
                                this.setState((prevState) => {
                                    return {
                                        ...prevState,
                                        keyframes: keyframesObjectToAssign,
                                    };
                                });
                            }}
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
                            style={{ animation: `flexible ${this.state.animationDuration}ms infinite` }}
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
