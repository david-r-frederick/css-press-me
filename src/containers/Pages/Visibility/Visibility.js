import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import PageTitle from '../../../components/PageTitle/PageTitle';
import PlayBox from '../../../components/PlayBox/PlayBox';
import Tips from '../../../components/Tips/Tips';
import classes from './Visibility.module.css';

export class Visibility extends Component {
    state = {
      opacity: '1',
      height: '6rem',
      width: '4rem',
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
                        <div style={{ flex: '7' }}>
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
                                        buttons: ['6rem', '100%', '75%', '50%', '25%', '0'],
                                    },
                                    {
                                        subtitle: 'Width',
                                        cssProperty: 'width',
                                        buttons: ['4rem', '100%', '75%', '50%', '25%', '0'],
                                    },
                                    {
                                        subtitle: 'Margin',
                                        cssProperty: 'margin',
                                        buttons: ['8px', '100px', '75px', '50px', '25px', '0'],
                                    },
                                    {
                                        subtitle: 'Margin-Top',
                                        cssProperty: 'marginTop',
                                        buttons: ['8px', '100%', '75%', '50%', '25%', '0'],
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
                    <div style={this.state} className={classes.block}></div>
                    <div className={classes.compareBlock}>Compare</div>
                </PlayBox>
            </div>
        );
    }
}
