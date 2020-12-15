import React, { Component } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import PlayBox from '../../../components/PlayBox/PlayBox';
import classes from './Animation.module.css';
import Keyframes from '@keyframes/core';
import Tips from '../../../components/Tips/Tips';
import Draggable from 'react-draggable';
import { SizeMe } from 'react-sizeme';
// import GrowingHeart from './GrowingHeart/GrowingHeart';
// import ThreeDeeFlip from './ThreeDeeFlip/ThreeDeeFlip';

export class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playboxState: {},
            slidersDisabled: false,
            animationDuration: 3000,
            cssKey: 'opacity',
            mouseX: 0,
            mouseY: 0,
            sliderOneKeyframe: '0%',
            sliderOneCSS: { opacity: '0', left: '0', top: '0' },
            sliderTwoKeyframe: '25%',
            sliderTwoCSS: { opacity: '0.5', left: '0', top: '0' },
            sliderThreeKeyframe: '50%',
            sliderThreeCSS: { opacity: '1', left: '0', top: '0' },
            sliderFourKeyframe: '75%',
            sliderFourCSS: { opacity: '1', left: '0', top: '0' },
            sliderFiveKeyframe: '100%',
            sliderFiveCSS: { opacity: '1', left: '0', top: '0' },
        };
    }

    render() {
        const {
            sliderOneKeyframe,
            sliderTwoKeyframe,
            sliderThreeKeyframe,
            sliderFourKeyframe,
            sliderFiveKeyframe,
        } = this.state;

        const { sliderOneCSS, sliderTwoCSS, sliderThreeCSS, sliderFourCSS, sliderFiveCSS } = this.state;

        const keyframesDefinition = {
            name: 'flexible',
            [sliderOneKeyframe]: sliderOneCSS,
            [sliderTwoKeyframe]: sliderTwoCSS,
            [sliderThreeKeyframe]: sliderThreeCSS,
            [sliderFourKeyframe]: sliderFourCSS,
            [sliderFiveKeyframe]: sliderFiveCSS,
        };

        Keyframes.define(keyframesDefinition);

        return (
            <div className={classes.animationContainer}>
                <div>
                    <PageTitle title="Animation" />
                    <div className={classes.top}>
                        <SizeMe>
                            {({ size }) => {
                                return (
                                    <div className={classes.keyframesControlsContainer}>
                                        {Object.keys(keyframesDefinition)
                                            .filter((el) => el !== 'name')
                                            .map((per, index) => {
                                                let sliderPercentageSelection = '';
                                                let sliderCssSelection = '';
                                                switch (index) {
                                                    case 0:
                                                        sliderPercentageSelection = 'sliderOneKeyframe';
                                                        sliderCssSelection = 'sliderOneCSS';
                                                        break;
                                                    case 1:
                                                        sliderPercentageSelection = 'sliderTwoKeyframe';
                                                        sliderCssSelection = 'sliderTwoCSS';
                                                        break;
                                                    case 2:
                                                        sliderPercentageSelection = 'sliderThreeKeyframe';
                                                        sliderCssSelection = 'sliderThreeCSS';
                                                        break;
                                                    case 3:
                                                        sliderPercentageSelection = 'sliderFourKeyframe';
                                                        sliderCssSelection = 'sliderFourCSS';
                                                        break;
                                                    case 4:
                                                        sliderPercentageSelection = 'sliderFiveKeyframe';
                                                        sliderCssSelection = 'sliderFiveCSS';
                                                        break;
                                                    default:
                                                        console.log('SHOULD NOT BE REACHED');
                                                }

                                                const currentPercentages = Object.keys(keyframesDefinition).filter(
                                                    (el) => el !== 'name'
                                                );
                                                return (
                                                    <Draggable
                                                        disabled={this.state.slidersDisabled}
                                                        axis="x"
                                                        bounds="parent"
                                                        onDrag={(e, ui) => {
                                                            const newNobValue = `${Math.round(
                                                                ((ui.x +
                                                                    index *
                                                                        (size.width /
                                                                            (currentPercentages.length - 1))) /
                                                                    size.width) *
                                                                    100
                                                            )}%`;
                                                            if (!currentPercentages.includes(newNobValue)) {
                                                                this.setState({
                                                                    [sliderPercentageSelection]: newNobValue,
                                                                });
                                                            }
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                left: `calc(${index} * ${Math.round(
                                                                    100 / (currentPercentages.length - 1)
                                                                )}%)`,
                                                            }}
                                                            className={classes.keyframeSlider}
                                                        >
                                                            <p>{per}</p>
                                                            <div className={classes.keyframeSliderCircle}></div>
                                                            <div className={classes.keyframeSliderLine}>
                                                                <Draggable
                                                                    onDrag={(e, ui) => {
                                                                        this.setState((prevState) => {
                                                                            const { cssKey } = prevState;
                                                                            let value = ui.y / 400;
                                                                            let unit = '';
                                                                            if (cssKey === 'left' || cssKey === 'top') {
                                                                                value = ui.y;
                                                                                unit = 'px';
                                                                            }
                                                                            return {
                                                                                ...prevState,
                                                                                [sliderCssSelection]: {
                                                                                    ...prevState[sliderCssSelection],
                                                                                    [cssKey]: `${value.toFixed(
                                                                                        2
                                                                                    )}${unit}`,
                                                                                },
                                                                            };
                                                                        });
                                                                    }}
                                                                    bounds={{ top: 0, bottom: 400 }}
                                                                    axis="y"
                                                                >
                                                                    <button
                                                                        onMouseOver={() => {
                                                                            this.setState({
                                                                                slidersDisabled: true,
                                                                            });
                                                                        }}
                                                                        onMouseLeave={() => {
                                                                            this.setState({
                                                                                slidersDisabled: false,
                                                                            });
                                                                        }}
                                                                        className={classes.keyframeSliderValue}
                                                                    ></button>
                                                                </Draggable>
                                                            </div>
                                                        </div>
                                                    </Draggable>
                                                );
                                            })}
                                        <select
                                            onChange={(event) => {
                                                this.setState({ cssKey: event.target.value });
                                            }}
                                            className={classes.cssKeySelector}
                                        >
                                            {['opacity', 'left', 'top', 'margin', 'padding'].map((cssKey) => {
                                                return <option>{cssKey}</option>;
                                            })}
                                        </select>
                                    </div>
                                );
                            }}
                        </SizeMe>

                        <Tips rows={10} />
                    </div>
                    <div className={classes.keyframeListsContainer}>
                        {[
                            [this.state.sliderOneKeyframe, this.state.sliderOneCSS],
                            [this.state.sliderTwoKeyframe, this.state.sliderTwoCSS],
                            [this.state.sliderThreeKeyframe, this.state.sliderThreeCSS],
                            [this.state.sliderFourKeyframe, this.state.sliderFourCSS],
                            [this.state.sliderFiveKeyframe, this.state.sliderFiveCSS],
                        ].map((arr, index) => {
                            return (
                                <div style={{ margin: '0 2%' }}>
                                    <h4>Keyframe {arr[0]}</h4>
                                    <ul className={classes.keyframeList}>
                                        {Object.keys(arr[1]).map((k) => {
                                            return (
                                                <li>
                                                    {k}: {arr[1][k]}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
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

/* <AnimationControls
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
/> */

// setKeyframe = (key, value) => {
//     this.setState((prevState) => {
//         return {
//             ...prevState,
//             keyframesDefinition: {
//                 ...prevState.keyframesDefinition,
//                 [key]: {
//                     ...prevState.keyframesDefinition[key],
//                     ...value,
//                 },
//             },
//         };
//     });
// };
