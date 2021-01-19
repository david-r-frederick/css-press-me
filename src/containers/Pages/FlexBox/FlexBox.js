import React, { Component } from 'react';
import classes from './FlexBox.module.css';
import Controls from '../../../components/Controls/Controls';
import PlayBox from '../../../components/PlayBox/PlayBox';
import PageTitle from '../../../components/PageTitle/PageTitle';
import Tips from '../../../components/Tips/Tips';

export class FlexBox extends Component {
    state = {
        playBoxStyle: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            alignContent: 'initial',
        },
        blockOneStyle: {
            alignSelf: 'inherit',
            justifySelf: 'inherit',
            flexShrink: '1',
        },
        blockStyle: {
            width: '4rem',
            height: '4rem',
        }
    };

    setCSSProp = (element, key, value) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                [element]: {
                    ...prevState[element],
                    [key]: value,
                },
            };
        });
    };

    render() {
        return (
            <div className={classes.flexBoxContainer}>
                <PageTitle title="FlexBox" />
                <div className={classes.top}>
                    <div className={classes.playboxControlsContainer}>
                        <h3 className={classes.firstSubheading}>PlayBox Controls</h3>
                        <Controls
                            playboxState={this.state.playBoxStyle}
                            click={(key, value) => this.setCSSProp('playBoxStyle', key, value)}
                            useSelect={this.props.windowWidth <= 740}
                            animate={true}
                            data={[
                                {
                                    subtitle: 'Flex-Direction Properties',
                                    cssProperty: 'flexDirection',
                                    buttons: ['row', 'row-reverse', 'column', 'column-reverse'],
                                },
                                {
                                    subtitle: 'Align-Items Properties',
                                    cssProperty: 'alignItems',
                                    buttons: ['flex-start', 'center', 'flex-end', 'stretch'],
                                },
                                {
                                    subtitle: 'Justify-Content Properties',
                                    cssProperty: 'justifyContent',
                                    buttons: [
                                        'flex-start',
                                        'center',
                                        'flex-end',
                                        'space-between',
                                        'space-around',
                                        'space-evenly',
                                    ],
                                },
                                {
                                    subtitle: 'Flex-Wrap Properties',
                                    cssProperty: 'flexWrap',
                                    buttons: ['nowrap', 'wrap', 'wrap-reverse'],
                                },
                                {
                                    subtitle: 'Align-Content Properties',
                                    cssProperty: 'alignContent',
                                    buttons: [
                                        'initial',
                                        'flex-start',
                                        'center',
                                        'flex-end',
                                        'stretch',
                                        'space-between',
                                        'space-around',
                                    ],
                                },
                            ]}
                        />
                    </div>
                    <Tips rows={5} />
                </div>
                <div className={classes.blockControlsContainer}>
                    <div style={{ flex: 3 }}>
                        <h3>All Blocks Controls</h3>
                        <Controls
                            playboxState={this.state.blockStyle}
                            click={(key, value) => this.setCSSProp('blockStyle', key, value)}
                            animate={true}
                            useSelect={this.props.windowWidth <= 800}
                            data={[
                                {
                                    subtitle: 'Width',
                                    cssProperty: 'width',
                                    buttons: ['4rem', '16rem', '24rem', '30rem'],
                                },
                                {
                                    subtitle: 'Height',
                                    cssProperty: 'height',
                                    buttons: ['4rem', '16rem', '24rem', '30rem'],
                                },
                            ]}
                        />
                    </div>
                    <div style={{ flex: 5 }}>
                        <h3>Block One Controls</h3>
                        <Controls
                            playboxState={this.state.blockOneStyle}
                            click={(key, value) => this.setCSSProp('blockOneStyle', key, value)}
                            animate={true}
                            useSelect={this.props.windowWidth <= 800}
                            data={[
                                {
                                    subtitle: 'Align-Self',
                                    cssProperty: 'alignSelf',
                                    buttons: ['flex-start', 'center', 'flex-end', 'stretch', 'inherit'],
                                },
                                {
                                    subtitle: 'Flex Shrink',
                                    cssProperty: 'flexShrink',
                                    buttons: ['0', '1', '2', '3', '4', '5'],
                                },
                                {
                                    subtitle: 'Flex Grow',
                                    cssProperty: 'flexGrow',
                                    buttons: ['0', '1', '2', '3', '4', '5'],
                                },
                                {
                                    subtitle: 'Flex Basis',
                                    cssProperty: 'flexBasis',
                                    buttons: ['0', '1rem', '2rem', '3rem', '4rem', '5rem'],
                                },
                            ]}
                        />
                    </div>
                </div>
                <PlayBox customStyle={this.state.playBoxStyle}>
                    <div style={{ ...this.state.blockOneStyle, ...this.state.blockStyle }} className={classes.block}>
                        1
                    </div>
                    {Array(4)
                        .fill()
                        .map((el, i) => {
                            return (
                                <div style={this.state.blockStyle} className={classes.block}>
                                    {i + 2}
                                </div>
                            );
                        })}
                </PlayBox>
            </div>
        );
    }
}
