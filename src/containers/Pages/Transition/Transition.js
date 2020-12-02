import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import classes from './Transition.module.css';
import PlayBox from '../../../components/PlayBox/PlayBox';

const unitLegend = {
    rotate: 'deg',
    skew: 'deg',
    translateX: '%',
    translateY: '%',
    scale: '',
};

export class Transition extends Component {
    state = {
        blockStyle: {
            transitionDuration: '250ms',
            height: '150px',
            width: '150px',
            left: '50%',
            top: '50%',
            transformOption: '',
        },
        start: '1',
        end: '70',
        current: '',
    };

    renderStyles = () => {
        const { current, blockStyle } = this.state;
        if (blockStyle.transitionProperty === 'transform') {
            return {
                ...blockStyle,
                transform: `${blockStyle.transformOption}(${current}${unitLegend[blockStyle.transformOption]})`,
            };
        } else {
            return {
                ...blockStyle,
                [blockStyle.transitionProperty]: current + 'px',
            };
        }
    };

    setBlockProp = (key, value) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                blockStyle: {
                    ...prevState.blockStyle,
                    [key]: value,
                },
                current: prevState.start,
            };
        });
    };

    renderTransformOptions = () => {
        return this.state.blockStyle.transitionProperty === 'transform'
            ? {
                  subtitle: 'Transform Value',
                  cssProperty: 'transformOption',
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
                            value={this.state.start}
                            onChange={(ev) => {
                                this.setState({
                                    start: ev.target.value,
                                    current: ev.target.value,
                                });
                            }}
                        />
                        <label htmlFor="transition-start-value">Starting Value</label>
                    </div>
                    <div className={classes.startInput}>
                        <input
                            id="transition-end-value"
                            type="number"
                            value={this.state.end}
                            onChange={(ev) => this.setState({ end: ev.target.value })}
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
                                    return {
                                        ...prevState,
                                        blockStyle: {
                                            ...prevState.blockStyle,
                                            transitionDuration: '0ms',
                                        },
                                        current: prevState.start,
                                    };
                                },
                                () => {
                                    this.setState((prevState) => {
                                        return {
                                            ...prevState,
                                            blockStyle: {
                                                ...prevState.blockStyle,
                                                transitionDuration: previousDuration,
                                            },
                                            current: prevState.end,
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
                                return {
                                    current: prevState.start,
                                };
                            });
                        }}
                    >
                        Reset
                    </button>
                </div>
                <PlayBox>
                    <div style={this.renderStyles()} className={classes.block}>
                        Change Me
                    </div>
                </PlayBox>
            </div>
        );
    }
}
