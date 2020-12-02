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
        transitionDuration: '250ms',
        height: '30%',
        width: '20%',
        left: '40%',
        top: '35%',
        transitionTimingFunction: 'linear',
        transitionProperty: 'height',
        start: '50',
        end: '200',
        current: '50',
    };

    renderStyles = () => {
        const { current, transitionProperty, transformOption } = this.state;
        if (transitionProperty === 'transform') {
            return {
                ...this.state,
                transform: `${transformOption}(${current}${unitLegend[transformOption]})`,
            };
        } else {
            return {
                ...this.state,
                [transitionProperty]: current + 'px',
            };
        }
    };

    setBlockProp = (key, value) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                [key]: value,
                current: prevState.start,
            };
        });
    };

    renderTransformOptions = () => {
        return this.state.transitionProperty === 'transform'
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
                    playboxState={this.state}
                    click={this.setBlockProp}
                    data={[
                        {
                            subtitle: 'Property to Transition',
                            cssProperty: 'transitionProperty',
                            buttons: ['height', 'width', 'top', 'left', 'transform'],
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
                            buttons: ['linear', 'ease-in', 'ease-out', 'ease'],
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
                        disabled={this.state.transitionProperty ? false : true}
                        className={classes.startBtn}
                        onClick={(e) => {
                            const previousDuration = this.state.transitionDuration;
                            this.setState(
                                (prevState) => {
                                    return {
                                        ...prevState,
                                        transitionDuration: '0ms',
                                        current: prevState.start,
                                    };
                                },
                                () => {
                                    this.setState((prevState) => {
                                        return {
                                            ...prevState,
                                            transitionDuration: previousDuration,
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
