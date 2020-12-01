import React, { Component } from 'react';
import classes from './FlexBox.module.css';
import Controls from '../../../components/Controls/Controls';
import PlayBox from '../../../components/PlayBox/PlayBox';

export class FlexBox extends Component {
    state = {
      'display': 'flex',
      'flex-direction': 'row',
      'justify-content': 'flex-start',
      'align-items': 'flex-start',
    };

    setPlayboxCSSProp = (key, value) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                [key]: value,
            };
        });
    };

    render() {
        return (
            <div className={classes.flexBoxContainer}>
                <div>
                    <h2 className={classes.controlTitle}>FlexBox</h2>
                    <Controls
                        playboxState={this.state}
                        click={this.setPlayboxCSSProp}
                        data={[
                            {
                                subtitle: 'Flex-Direction Properties',
                                cssProperty: 'flex-direction',
                                buttons: ['row', 'row-reverse', 'column', 'column-reverse'],
                            },
                            {
                                subtitle: 'Align-Items Properties',
                                cssProperty: 'align-items',
                                buttons: ['flex-start', 'center', 'flex-end', 'stretch'],
                            },
                            {
                                subtitle: 'Justify-Content Properties',
                                cssProperty: 'justify-content',
                                buttons: [
                                    'flex-start',
                                    'center',
                                    'flex-end',
                                    'space-between',
                                    'space-around',
                                    'space-evenly',
                                ],
                            },
                        ]}
                    />
                </div>
                <PlayBox customStyle={this.state}>
                    {Array(4)
                        .fill()
                        .map((el, i) => (
                            <div key={i.toString()} className={classes.block}>
                                {i + 1}
                            </div>
                        ))}
                </PlayBox>
            </div>
        );
    }
}
