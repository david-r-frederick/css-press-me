import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import classes from './Transition.module.css';
import PlayBox from '../../../components/PlayBox/PlayBox';
import { generateControl } from '../../../ctrlFactory';

export class Transition extends Component {
    constructor(props) {
        super(props);
        this.transitionTransformBtnRef = React.createRef();
        this.transitionHeightBtnRef = React.createRef();
        this.transitionWidthBtnRef = React.createRef();
        this.transitionTopBtnRef = React.createRef();
        this.transitionLeftBtnRef = React.createRef();
        this.transitionPropertyRefs = [
            this.transitionTransformBtnRef,
            this.transitionHeightBtnRef,
            this.transitionWidthBtnRef,
            this.transitionTopBtnRef,
            this.transitionLeftBtnRef,
        ];

        this.transitionDuration250BtnRef = React.createRef();
        this.transitionDuration500BtnRef = React.createRef();
        this.transitionDuration1000BtnRef = React.createRef();
        this.transitionDuration3000BtnRef = React.createRef();
        this.transitionDurationRefs = [
            this.transitionDuration250BtnRef,
            this.transitionDuration500BtnRef,
            this.transitionDuration1000BtnRef,
            this.transitionDuration3000BtnRef,
        ];

        this.transitionTimingEaseInBtnRef = React.createRef();
        this.transitionTimingEaseOutBtnRef = React.createRef();
        this.transitionTimingEaseBtnRef = React.createRef();
        this.transitionTimingLinearBtnRef = React.createRef();

        this.transitionTimingRefs = [
            this.transitionTimingEaseInBtnRef,
            this.transitionTimingEaseOutBtnRef,
            this.transitionTimingEaseBtnRef,
            this.transitionTimingLinearBtnRef,
        ];

        this.playBlockRef = React.createRef();

        this.state = {
            transitionPropStartVal: '',
            transitionPropEndVal: '',
            propToTransition: '',
            transitionDuration: 250,
            transitionTimingFunc: 'linear',
            propToTransform: '',
            transformValue: '',
            unit: 'px',
        };
    }

    handleActiveButtons = (unique, ref) => {
        let setToScan;
        switch (unique) {
            case 'property':
                setToScan = this.transitionPropertyRefs;
                break;
            case 'duration':
                setToScan = this.transitionDurationRefs;
                break;
            case 'timingfunc':
                setToScan = this.transitionTimingRefs;
                break;
            default:
                console.log('This should not be reached.');
                return;
        }
        setToScan.forEach((reference) => {
            reference.current.style['background-color'] = reference === ref ? 'black' : 'purple';
        });
    };

    setSelectedPropToTransition = (name) => {
        this.setState({
            propToTransition: name,
            transitionPropStartVal: '',
            transitionPropEndVal: '',
        });
    };

    setTransitionDuration = (n) => {
        this.setState({
            transitionDuration: n,
        });
    };

    setTransitionTimingFunc = (f) => {
        this.setState({
            transitionTimingFunc: f,
        });
    };

    render() {
        let custom = [
            {
                label: 'Start',
                type: 'number',
                tag: 'input',
                value: this.state.transitionPropStartVal,
                change: (val) => {
                    this.setState({ transitionPropStartVal: val });
                    const blockStyle = this.playBlockRef.current.style;
                    const startValue = val.toString() + 'px';
                    blockStyle[this.state.propToTransition] = startValue;
                },
            },
            {
                label: 'End',
                type: 'number',
                tag: 'input',
                value: this.state.transitionPropEndVal,
                change: (val) => {
                    this.setState({ transitionPropEndVal: val });
                },
            },
            {
                label: '',
                type: 'text',
                tag: 'select',
                options: ['%', 'px', 'em', 'rem', 'vh', 'vw'],
                value: this.state.transitionPropEndVal,
                optChange: (val) => {
                  this.setState({
                      unit: val,
                  });
              },
            },
        ];
        if (this.state.propToTransition === 'transform') {
            custom = [
                {
                    label: 'Value',
                    options: ['Translate', 'Scale', 'Rotate', 'Skew', 'Matrix'],
                    tag: 'select',
                    optValue: this.state.propToTransform,
                    valValue: this.state.transformValue,
                    optChange: (opt) => {
                        this.setState({
                            propToTransform: opt,
                        });
                    },
                    valChange: (val) => {
                        this.setState({
                            transformValue: val,
                        });
                    },
                },
            ];
        }
        return (
            <div className={classes.TransitionContainer}>
                <h1 className={classes.controlTitle}>TRANSITION</h1>
                <Controls
                    data={[
                        {
                            subtitle: 'Property to Transition',
                            custom,
                            buttons: [
                                generateControl('Transform', this.transitionTransformBtnRef, () => {
                                    this.handleActiveButtons('property', this.transitionTransformBtnRef);
                                    this.setSelectedPropToTransition('transform');
                                }),
                                generateControl('Height', this.transitionHeightBtnRef, () => {
                                    this.handleActiveButtons('property', this.transitionHeightBtnRef);
                                    this.setSelectedPropToTransition('height');
                                }),
                                generateControl('Width', this.transitionWidthBtnRef, () => {
                                    this.handleActiveButtons('property', this.transitionWidthBtnRef);
                                    this.setSelectedPropToTransition('width');
                                }),
                                generateControl('Top', this.transitionTopBtnRef, () => {
                                    this.handleActiveButtons('property', this.transitionTopBtnRef);
                                    this.setSelectedPropToTransition('top');
                                }),
                                generateControl('Left', this.transitionLeftBtnRef, () => {
                                    this.handleActiveButtons('property', this.transitionLeftBtnRef);
                                    this.setSelectedPropToTransition('left');
                                }),
                            ],
                        },
                        {
                            subtitle: 'Transition Duration',
                            buttons: [
                                generateControl('250ms', this.transitionDuration250BtnRef, () => {
                                    this.handleActiveButtons('duration', this.transitionDuration250BtnRef);
                                    this.setTransitionDuration(250);
                                }),
                                generateControl('500ms', this.transitionDuration500BtnRef, () => {
                                    this.handleActiveButtons('duration', this.transitionDuration500BtnRef);
                                    this.setTransitionDuration(500);
                                }),
                                generateControl('1000ms', this.transitionDuration1000BtnRef, () => {
                                    this.handleActiveButtons('duration', this.transitionDuration1000BtnRef);
                                    this.setTransitionDuration(1000);
                                }),
                                generateControl('3000ms', this.transitionDuration3000BtnRef, () => {
                                    this.handleActiveButtons('duration', this.transitionDuration3000BtnRef);
                                    this.setTransitionDuration(3000);
                                }),
                            ],
                        },
                        {
                            subtitle: 'Transition Timing Function',
                            buttons: [
                                generateControl('Ease-In', this.transitionTimingEaseInBtnRef, () => {
                                    this.handleActiveButtons('timingfunc', this.transitionTimingEaseInBtnRef);
                                    this.setTransitionTimingFunc('ease-in');
                                }),
                                generateControl('Ease-Out', this.transitionTimingEaseOutBtnRef, () => {
                                    this.handleActiveButtons('timingfunc', this.transitionTimingEaseOutBtnRef);
                                    this.setTransitionTimingFunc('ease-out');
                                }),
                                generateControl('Ease', this.transitionTimingEaseBtnRef, () => {
                                    this.handleActiveButtons('timingfunc', this.transitionTimingEaseBtnRef);
                                    this.setTransitionTimingFunc('ease');
                                }),
                                generateControl('Linear', this.transitionTimingLinearBtnRef, () => {
                                    this.handleActiveButtons('timingfunc', this.transitionTimingLinearBtnRef);
                                    this.setTransitionTimingFunc('linear');
                                }),
                            ],
                        },
                    ]}
                />
                <button
                    className={classes.startBtn}
                    onClick={(e) => {
                        const playBlockStyle = this.playBlockRef.current.style;
                        playBlockStyle.transition = `${this.state.propToTransition} ${this.state.transitionDuration}ms ${this.state.transitionTimingFunc}`;
                        console.log(playBlockStyle.transition);
                        if (this.state.propToTransition === 'transform') {
                          playBlockStyle[this.state.propToTransition] = `${this.state.propToTransform}(${this.state.transformValue})`;
                        } else {
                          playBlockStyle[this.state.propToTransition] = this.state.transitionPropEndVal.toString() + 'px';
                        }
                    }}
                >
                    Start transition
                </button>
                <PlayBox onMouseEnter={() => {}} onMouseLeave={() => console.log('MOUSE LEAVING')}>
                    <div ref={this.playBlockRef} className={classes.block}>
                        Change Me
                    </div>
                </PlayBox>
            </div>
        );
    }
}
