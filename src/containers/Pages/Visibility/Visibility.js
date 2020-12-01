import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import PlayBox from '../../../components/PlayBox/PlayBox';
import classes from './Visibility.module.css';

export class Visibility extends Component {
    state = {};

    render() {
        return (
            <div className={classes.opacityContainer}>
                <div>
                    <h1 className={classes.controlTitle}>VISIBILITY</h1>
                    <Controls
                        playboxState={this.state}
                        click={(key, value) => {
                            this.setState({
                                [key]: value,
                            });
                        }}
                        data={[
                            {
                                subtitle: 'Opacity',
                                cssProperty: 'opacity',
                                buttons: ['1', '.75', '.5', '.25', '0'],
                            },
                            {
                                subtitle: 'Height',
                                cssProperty: 'height',
                                buttons: ['100%', '75%', '50%', '25%', '0'],
                            },
                            {
                                subtitle: 'Width',
                                cssProperty: 'width',
                                buttons: ['100%', '75%', '50%', '25%', '0'],
                            },
                            {
                                subtitle: 'Margin-Top',
                                cssProperty: 'marginTop',
                                buttons: ['100%', '75%', '50%', '25%', '0', '8px'],
                            },
                            {
                                subtitle: 'Display',
                                cssProperty: 'display',
                                buttons: ['block', 'inline', 'inline-block', 'none', 'table'],
                            },
                            {
                                subtitle: 'Visibility',
                                cssProperty: 'visibility',
                                buttons: ['visible', 'hidden', 'collapse'],
                            },
                        ]}
                    />
                </div>
                <PlayBox flex={false} customStyle={{}}>
                    <div style={this.state} className={classes.block}></div>
                    <div className={classes.compareBlock}>Compare</div>
                </PlayBox>
            </div>
        );
    }
}
