import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import classes from './Transition.module.css';
import PlayBox from '../../../components/PlayBox/PlayBox';
import PageTitle from '../../../components/PageTitle/PageTitle';

const unitLegend = {
    rotate: 'deg',
    skewX: 'deg',
    skewY: 'deg',
    translateX: '%',
    translateY: '%',
    rotateX: 'deg',
    rotateY: 'deg',
    scale: '',
    scaleX: '',
    scaleY: '',
    opacity: '%',
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
        opacity: '1',
        start: '1',
        end: '200',
        current: '50',
    };

    renderStyles = () => {
        const { current, transitionProperty, transformOption } = this.state;
        switch (transitionProperty) {
            case 'transform':
                return { ...this.state, transform: `${transformOption}(${current}${unitLegend[transformOption]})` };
            case 'opacity':
                return { ...this.state, opacity: current + '%' };
            default:
                return { ...this.state, [transitionProperty]: current + 'px' };
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
                  buttons: [
                      'rotate',
                      'skewX',
                      'skewY',
                      'scale',
                      'scaleX',
                      'scaleY',
                      'translateX',
                      'translateY',
                      'rotateX',
                      'rotateY',
                  ],
              }
            : null;
    };

    render() {
        return (
            <div className={classes.TransitionContainer}>
                <PageTitle title="Transition" />
                <Controls
                    playboxState={this.state}
                    click={this.setBlockProp}
                    data={[
                        {
                            subtitle: 'Property to Transition',
                            cssProperty: 'transitionProperty',
                            buttons: ['height', 'width', 'top', 'left', 'opacity', 'transform'],
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
                        className={classes.startBtn}
                        onClick={() => {
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
                                    ...prevState,
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
