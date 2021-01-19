import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import PageTitle from '../../../components/PageTitle/PageTitle';
import PlayBox from '../../../components/PlayBox/PlayBox';
import Tips from '../../../components/Tips/Tips';
import classes from './Visibility.module.css';

export class Visibility extends Component {
    state = {
        opacity: '1',
        height: '4rem',
        width: '6rem',
        margin: '8px',
        marginTop: '8px',
        display: 'inline-block',
        visibility: 'visible',
    };

    render() {
        return (
            <div className={classes.visibilityContainer}>
                <div>
                    <PageTitle title="Visibility" />
                    <div className={classes.top}>
                        <div className={classes.controlsContainer}>
                            <Controls
                                playboxState={this.state}
                                click={(key, value) => {
                                    this.setState({
                                        [key]: value,
                                    });
                                }}
                                useSelect={this.props.windowWidth <= 900}
                                data={[
                                    {
                                        subtitle: 'Height',
                                        cssProperty: 'height',
                                        buttons: ['4rem', '0', '25%', '50%', '75%', '100%'],
                                    },
                                    {
                                        subtitle: 'Width',
                                        cssProperty: 'width',
                                        buttons: ['6rem', '0', '25%', '50%', '75%', '100%'],
                                    },
                                    {
                                        subtitle: 'Margin',
                                        cssProperty: 'margin',
                                        buttons: ['8px', '0', '25px', '50px', '75px', '100px'],
                                    },
                                    {
                                        subtitle: 'Margin-Top',
                                        cssProperty: 'marginTop',
                                        buttons: ['8px', '0', '25%', '50%', '75%', '100%'],
                                    },
                                ]}
                            />
                            <Controls
                                playboxState={this.state}
                                click={(key, value) => {
                                    this.setState({
                                        [key]: value,
                                    });
                                }}
                                useSelect={this.props.windowWidth <= 900}
                                data={[
                                    {
                                        subtitle: 'Opacity',
                                        cssProperty: 'opacity',
                                        buttons: ['1', '.75', '.5', '.25', '0'],
                                    },
                                    {
                                        subtitle: 'Display',
                                        cssProperty: 'display',
                                        buttons: ['block', 'inline', 'inline-block', 'table', 'none'],
                                    },
                                    {
                                        subtitle: 'Visibility',
                                        cssProperty: 'visibility',
                                        buttons: ['visible', 'hidden', 'collapse'],
                                    },
                                ]}
                            />
                        </div>
                        <Tips rows={7} />
                    </div>
                </div>
                <PlayBox>
                    <div style={this.state} className={classes.block}>Edit</div>
                    <div className={classes.compareBlock}>Compare</div>
                </PlayBox>
            </div>
        );
    }
}
