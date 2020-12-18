import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import classes from './Transition.module.css';
import PlayBox from '../../../components/PlayBox/PlayBox';
import PageTitle from '../../../components/PageTitle/PageTitle';
import Tips from '../../../components/Tips/Tips';
import PrimaryButton from '../../../components/Common/PrimaryButton/PrimaryButton';
import ResetButton from '../../../components/Common/ResetButton/ResetButton';

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
        start: '100',
        end: '200',
        current: '100',
        unit: 'px',
    };

    renderStyles = () => {
        const { current, transitionProperty, transformOption } = this.state;
        switch (transitionProperty) {
            case 'transform':
                return { ...this.state, transform: `${transformOption}(${current}${this.state.unit})` };
            case 'opacity':
                return { ...this.state, opacity: current + this.state.unit };
            default:
                return { ...this.state, [transitionProperty]: current + this.state.unit };
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
                      'rotateX',
                      'rotateY',
                      'skew',
                      'skewX',
                      'skewY',
                      'scale',
                      'scaleX',
                      'scaleY',
                      'translateX',
                      'translateY',
                  ],
              }
            : null;
    };

    render() {
        return (
            <div className={classes.transitionContainer}>
                <PageTitle title="Transition" />
                <div className={classes.top}>
                    <div className={classes.controlsContainer}>
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
                            <div className={classes.unitSelectContainer}>
                                <select
                                    className={classes.unitSelect}
                                    onChange={(e) => {
                                        if (e.target.value === 'none') {
                                            this.setState({ unit: '' });
                                            return;
                                        }
                                        this.setState({ unit: e.target.value });
                                    }}
                                >
                                    {['px', 'rem', '%', 'vh', 'vw', 'deg', 'ch', 'none'].map((u) => {
                                        return <option>{u}</option>;
                                    })}
                                </select>
                            </div>
                            <div className={classes.startInputContainer}>
                                <input
                                    className={classes.valueInput}
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
                            <div className={classes.stopInputContainer}>
                                <input
                                    className={classes.valueInput}
                                    id="transition-end-value"
                                    type="number"
                                    value={this.state.end}
                                    onChange={(ev) => this.setState({ end: ev.target.value })}
                                />
                                <label htmlFor="transition-end-value">Ending Value</label>
                            </div>
                            <PrimaryButton
                                title="Start Transition"
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
                            />
                            <ResetButton
                                title="Reset"
                                onClick={() => {
                                    this.setState((prevState) => {
                                        return {
                                            ...prevState,
                                            current: prevState.start,
                                        };
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <Tips rows={4} />
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
