import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Controls.module.css';

class Controls extends Component {
    state = {
        animate: true,
    };

    componentDidMount() {
        if (this.state.animate) {
            if (window.sessionStorage.getItem('firstLoadComplete')) {
                this.setState({
                    animate: false,
                });
            } else {
                window.sessionStorage.setItem('firstLoadComplete', '1');
            }
        }
    }

    render() {
        const { data, playboxState, click, onSelection, animate } = this.props;
        let longestSubtitleLength = Math.max(
            ...data.map((obj) => {
                return obj !== null ? obj.subtitle.length : 0;
            })
        );

        return (
            <div className={classes.rowsContainer}>
                {data.map((rowObj) => {
                    if (!rowObj) {
                        return null;
                    }
                    const { subtitle, buttons, cssProperty } = rowObj;
                    return (
                        <div key={cssProperty} className={classes.row}>
                            <h3
                                style={{ flex: `0 0 calc(${longestSubtitleLength / 2}rem + 1rem)` }}
                                className={classes.propertyTitle}
                            >
                                {subtitle}
                            </h3>
                            {this.props.useSelect ? <select className={classes.propertyControl} onChange={(event) => {
                              const cssVal = event.target.value;
                              click(cssProperty, cssVal);
                            }}>
                              {buttons.map((cssValue, index) => {
                                return <option>{cssValue}</option>
                              })}
                            </select> : <div className={classes.propertyControlsContainer}>
                                {buttons.map((cssValue, index) => {
                                    let colorClass = classes.nonSelectedBtnColor;
                                    if (playboxState[cssProperty] === cssValue) {
                                        colorClass = classes.selectedBtnColor;
                                    }
                                    let animateClass = '';
                                    if (animate && this.state.animate) {
                                        animateClass = classes.animatePropertyControl;
                                    }
                                    return (
                                        <div style={{ position: 'relative' }}>
                                            <button
                                                className={`${classes.propertyControl} ${colorClass} ${animateClass}`}
                                                onClick={() => {
                                                    click(cssProperty, cssValue);
                                                    const onSelectionValue = cssValue.match(/[0-9]/)
                                                        ? cssProperty
                                                        : cssValue;
                                                    onSelection(onSelectionValue);
                                                }}
                                                style={animateClass ? { animationDelay: `${index * 50}ms` } : null}
                                            >
                                                {cssValue}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>}
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

export default connect(null, mapDispatchToProps)(Controls);
