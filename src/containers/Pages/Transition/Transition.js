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
        if (transitionProperty === 'transform') {
            return { ...this.state, transform: `${transformOption}(${current}${this.state.unit})` };
        }
        return { ...this.state, [transitionProperty]: current + this.state.unit };
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
                            useSelect={this.props.windowWidth <= 685}
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
                            <div className={classes.inputsContainer}>
                                <div className={classes.unitSelectContainer}>
                                    <select
                                        className={classes.unitSelect}
                                        onChange={({ target }) => {
                                            let unit = target.value === 'none' ? '' : target.value;
                                            this.setState({ unit });
                                        }}
                                    >
                                        {['px', 'rem', '%', 'vh', 'vw', 'deg', 'ch', 'none'].map((u) => {
                                            return <option key={u}>{u}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className={classes.startInputContainer}>
                                    <input
                                        className={classes.valueInput}
                                        id="transition-start-value"
                                        type="number"
                                        value={this.state.start}
                                        onChange={({ target }) => {
                                            this.setState({
                                                start: target.value,
                                                current: target.value,
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
                                        onChange={({ target }) => this.setState({ end: target.value })}
                                    />
                                    <label htmlFor="transition-end-value">Ending Value</label>
                                </div>
                            </div>
                            <div className={classes.buttonsContainer}>
                                <PrimaryButton
                                    title="Start Transition"
                                    onClick={() => {
                                        this.setState((prevState) => {
                                            return {
                                                ...prevState,
                                                current: prevState.end,
                                            };
                                        });
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
