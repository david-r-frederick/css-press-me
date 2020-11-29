import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import classes from './Transition.module.css';
import PlayBox from '../../../components/PlayBox/PlayBox';

export class Transition extends Component {
    state = {
        blockStyle: {
            transitionDuration: '250ms',
            height: '400px',
            width: '150px',
            top: '0',
            left: '0',
        },
        transitionPropStartVal: '',
        transitionPropEndVal: '',
        unit: 'px',
    };

    render() {
        // let custom = [
        //     {
        //         label: 'Start',
        //         type: 'number',
        //         tag: 'input',
        //         value: this.state.transitionPropStartVal,
        //         change: (val) => {
        //             this.setState({ transitionPropStartVal: val });
        //             const blockStyle = this.playBlockRef.current.style;
        //             const startValue = val.toString() + 'px';
        //             blockStyle[this.state.propToTransition] = startValue;
        //         },
        //     },
        //     {
        //         label: 'End',
        //         type: 'number',
        //         tag: 'input',
        //         value: this.state.transitionPropEndVal,
        //         change: (val) => {
        //             this.setState({ transitionPropEndVal: val });
        //         },
        //     },
        //     {
        //         label: 'Unit',
        //         type: 'text',
        //         tag: 'select',
        //         options: ['%', 'px', 'em', 'rem', 'vh', 'vw'],
        //         value: this.state.transitionPropEndVal,
        //         optChange: (val) => {
        //             this.setState({
        //                 unit: val,
        //             });
        //         },
        //     },
        // ];
        // if (this.state.propToTransition === 'transform') {
        //     custom = [
        //         {
        //             label: 'Value',
        //             options: ['Translate', 'Scale', 'Rotate', 'Skew', 'Matrix'],
        //             tag: 'select',
        //             optValue: this.state.propToTransform,
        //             valValue: this.state.transformValue,
        //             optChange: (opt) => {
        //                 this.setState({
        //                     propToTransform: opt,
        //                 });
        //             },
        //             valChange: (val) => {
        //                 this.setState({
        //                     transformValue: val,
        //                 });
        //             },
        //         },
        //     ];
        // }
        return (
            <div className={classes.TransitionContainer}>
                <h1 className={classes.controlTitle}>TRANSITION</h1>
                <Controls
                    playboxState={this.state.blockStyle}
                    click={(key, value) => {
                        this.setState((prevState) => {
                            return {
                                ...prevState,
                                blockStyle: {
                                    ...prevState.blockStyle,
                                    [key]: value,
                                },
                            };
                        });
                    }}
                    data={[
                        {
                            subtitle: 'Property to Transition',
                            cssProperty: 'transitionProperty',
                            buttons: ['transform', 'height', 'width', 'top', 'left'],
                        },
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
                <input
                    type="number"
                    value={this.state.transitionPropStartVal}
                    onChange={(ev) => {
                        this.setState((prevState) => {
                            return {
                                ...prevState,
                                blockStyle: {
                                    ...prevState.blockStyle,
                                    [prevState.blockStyle['transitionProperty']]: ev.target.value + 'px',
                                },
                                transitionPropStartVal: ev.target.value,
                            };
                        });
                    }}
                />
                <input
                    type="number"
                    onChange={(ev) => this.setState({ transitionPropEndVal: ev.target.value })}
                    value={this.state.transitionPropEndVal}
                />
                <button
                    disabled={this.state.blockStyle['transitionProperty'] ? false : true}
                    className={classes.startBtn}
                    onClick={(e) => {
                        const previousDuration = this.state.blockStyle.transitionDuration;
                        this.setState((prevState) => {
                            console.log("Transition duration before reset: " + prevState.blockStyle.transitionDuration);
                            return {
                                ...prevState,
                                blockStyle: {
                                    ...prevState.blockStyle,
                                    transitionDuration: '0ms',
                                    [prevState.blockStyle['transitionProperty']]: prevState.transitionPropStartVal + 'px',
                                },
                            };
                        }, () => {
                          this.setState(prevState => {
                            console.log("Transition duration after reset: " + prevState.blockStyle.transitionDuration);
                            console.log("Transition duration final, pulled from previousDuration variable above: " + previousDuration);
                            return {
                              ...prevState,
                              blockStyle: {
                                ...prevState.blockStyle,
                                transitionDuration: previousDuration,
                                [prevState.blockStyle['transitionProperty']]: prevState.transitionPropEndVal + 'px'
                              }
                            }
                          })
                        });
                    }}
                >
                    Start transition
                </button>
                <button
                    onClick={(e) => {
                        this.setState((prevState) => {
                          let startValue = '100px';
                          if (prevState.transitionPropStartVal) {
                            startValue = prevState.transitionPropStartVal + 'px';
                          }
                            return {
                                ...prevState,
                                blockStyle: {
                                    ...prevState.blockStyle,
                                    [prevState.blockStyle['transitionProperty']]: startValue,
                                },
                            };
                        });
                    }}
                >
                    Reset
                </button>
                <PlayBox>
                    <div style={this.state.blockStyle} className={classes.block}>
                        Change Me
                    </div>
                </PlayBox>
            </div>
        );
    }
}
