import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import classes from './Transition.module.css';
import PlayBox from '../../../components/PlayBox/PlayBox';

const unitLegend = {
    rotate: 'deg',
    skew: 'deg',
    scale: '',
    translateX: '%',
    translateY: '%',
};

export class Transition extends Component {
    state = {
        blockStyle: {
            transitionDuration: '250ms',
            height: '150px',
            width: '150px',
            left: '50%',
            top: '50%',
        },
        transitionPropStartVal: '1',
        transitionPropEndVal: '70',
        transformOption: '',
        showTransformOptions: false,
        unit: 'px',
    };

    setBlockProp = (key, value) => {
        if (value === 'transform') {
            this.setState({ showTransformOptions: true });
        } else if (['height', 'width', 'top', 'left'].includes(value)) {
            this.setState({
                showTransformOptions: false,
                transformOption: '',
                unit: 'px',
            });
        }
        if (key === 'transform') {
            this.setState({
                transformOption: value,
                unit: unitLegend[value],
            });
            return;
        }
        this.setState((prevState) => {
            return {
                ...prevState,
                blockStyle: {
                    ...prevState.blockStyle,
                    [key]: value,
                },
            };
        });
    };

    renderTransformOptions = () => {
        return this.state.showTransformOptions
            ? {
                  subtitle: 'Transform Value',
                  cssProperty: 'transform',
                  buttons: ['rotate', 'skew', 'scale', 'translateX', 'translateY'],
              }
            : null;
    };

    render() {
        return (
            <div className={classes.TransitionContainer}>
                <h1 className={classes.controlTitle}>TRANSITION</h1>
                <Controls
                    playboxState={this.state.blockStyle}
                    click={this.setBlockProp}
                    data={[
                        {
                            subtitle: 'Property to Transition',
                            cssProperty: 'transitionProperty',
                            buttons: ['transform', 'height', 'width', 'top', 'left'],
                        },
                        this.renderTransformOptions(),
                        {
                            subtitle: 'Transition Duration',
                            cssProperty: 'transitionDuration',
                            buttons: ['250ms', '500ms', '1000ms', '3000ms'],
                        },
                        {
                            subtitle: 'Transition Timing Function',
                            cssProperty: 'transitionTimingFunction',
                            buttons: ['ease-in', 'ease-out', 'ease', 'linear'],
                        },
                    ]}
                />
                <div className={classes.startStopContainer}>
                    <div className={classes.startInput}>
                        <input
                            id="transition-start-value"
                            type="number"
                            value={this.state.transitionPropStartVal}
                            onChange={(ev) => {
                                this.setState((prevState) => {
                                    let cssProperty = prevState.blockStyle['transitionProperty'];
                                    let value = ev.target.value + 'px';
                                    if (prevState.transformOption) {
                                        cssProperty = 'transform';
                                        value = `${prevState.transformOption}(${ev.target.value}${prevState.unit})`;
                                    }
                                    return {
                                        ...prevState,
                                        blockStyle: {
                                            ...prevState.blockStyle,
                                            [cssProperty]: value,
                                        },
                                        transitionPropStartVal: ev.target.value,
                                    };
                                });
                            }}
                        />
                        <label htmlFor="transition-start-value">Starting Value</label>
                    </div>
                    <div className={classes.startInput}>
                        <input
                            id="transition-end-value"
                            type="number"
                            onChange={(ev) => {
                                this.setState({ transitionPropEndVal: ev.target.value });
                            }}
                            value={this.state.transitionPropEndVal}
                        />
                        <label htmlFor="transition-end-value">Ending Value</label>
                    </div>
                    <button
                        disabled={this.state.blockStyle['transitionProperty'] ? false : true}
                        className={classes.startBtn}
                        onClick={(e) => {
                            const previousDuration = this.state.blockStyle.transitionDuration;
                            this.setState(
                                (prevState) => {
                                    let cssProperty = prevState.blockStyle['transitionProperty'];
                                    let value = prevState.transitionPropStartVal + 'px';
                                    if (prevState.transformOption) {
                                        cssProperty = 'transform';
                                        value = `${prevState.transformOption}(${prevState.transitionPropStartVal}${prevState.unit})`;
                                    }
                                    return {
                                        ...prevState,
                                        blockStyle: {
                                            ...prevState.blockStyle,
                                            transitionDuration: '0ms',
                                            [cssProperty]: value,
                                        },
                                    };
                                },
                                () => {
                                    this.setState((prevState) => {
                                        let cssProperty = prevState.blockStyle['transitionProperty'];
                                        let value = prevState.transitionPropEndVal + 'px';
                                        if (prevState.transformOption) {
                                            cssProperty = 'transform';
                                            value = `${prevState.transformOption}(${prevState.transitionPropEndVal}${prevState.unit})`;
                                        }
                                        return {
                                            ...prevState,
                                            blockStyle: {
                                                ...prevState.blockStyle,
                                                transitionDuration: previousDuration,
                                                [cssProperty]: value,
                                            },
                                        };
                                    });
                                }
                            );
                        }}
                    >
                        Start transition
                    </button>
                    <button
                        className={classes.resetBtn}
                        onClick={() => {
                            this.setState((prevState) => {
                                let cssProperty = prevState.blockStyle['transitionProperty'];
                                let value = `${prevState.transitionPropStartVal}px`;
                                if (prevState.transformOption) {
                                    cssProperty = 'transform';
                                    value = `${prevState.transformOption}(${prevState.transitionPropStartVal}${prevState.unit})`;
                                }
                                return {
                                    ...prevState,
                                    blockStyle: {
                                        ...prevState.blockStyle,
                                        [cssProperty]: value,
                                    },
                                };
                            });
                        }}
                    >
                        Reset
                    </button>
                </div>
                <PlayBox>
                    <div style={this.state.blockStyle} className={classes.block}>
                        Change Me
                    </div>
                </PlayBox>
            </div>
        );
    }
}
