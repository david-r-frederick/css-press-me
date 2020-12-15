import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputButton from '../Common/InputButton/InputButton';
import classes from './AnimationControls.module.css';

class AnimationControls extends Component {
    state = {
        selectedButton: '',
    };

    render() {
        const { data, click, onSelection } = this.props;
        const longestSubtitleLength = Math.max(
            ...data.map((obj) => {
                return obj !== null ? obj.subtitle.length : 0;
            })
        );
        return (
            <div className={classes.rowsContainer}>
                {data.map((rowObj, rowIndex) => {
                    if (!rowObj) {
                        return null;
                    }
                    return (
                        <div className={classes.row}>
                            <h3
                                style={{ width: `calc(${longestSubtitleLength}rem / 2 + 12px)` }}
                                className={classes.propertyTitle}
                            >
                                {rowObj.subtitle}
                            </h3>
                            <div className={classes.propertyControlsContainer}>
                                {rowObj.buttons.map((cssKey, columnIndex) => {
                                    return (
                                        <div style={{ position: 'relative', marginBottom: '0.8rem' }}>
                                            <InputButton
                                                cssKey={cssKey}
                                                index={columnIndex}
                                                onSelect={() =>
                                                    this.setState({ selectedButton: `${columnIndex}:${rowIndex}` })
                                                }
                                                selected={this.state.selectedButton === `${columnIndex}:${rowIndex}`}
                                                onSubmit={(value) => {
                                                    click(rowObj.cssProperty, { [cssKey]: parseFloat(value) });
                                                    onSelection(cssKey);
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelection: (selection) => dispatch({ type: selection }),
    };
};

export default connect(null, mapDispatchToProps)(AnimationControls);
