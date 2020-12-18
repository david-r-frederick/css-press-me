import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Controls.module.css';

class Controls extends Component {
    state = {
        animate: true,
    };

    componentDidMount() {
        if (window.sessionStorage.getItem('firstLoadComplete') === null) {
            this.setState({
                animate: true,
            });
            window.sessionStorage.setItem('firstLoadComplete', '1');
        } else {
            this.setState({
                animate: false,
            });
        }
    }

    render() {
        const { data, playboxState, click, onSelection } = this.props;
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
                    return (
                        <div className={classes.row}>
                            <h3
                                style={{ flex: `0 0 calc(${longestSubtitleLength / 2}rem + 1rem)` }}
                                className={classes.propertyTitle}
                            >
                                {rowObj.subtitle}
                            </h3>
                            <div className={classes.propertyControlsContainer}>
                                {rowObj.buttons.map((cssValue, index) => {
                                    let colorClass = classes.nonSelectedBtnColor;
                                    if (playboxState[rowObj.cssProperty] === cssValue) {
                                        colorClass = classes.selectedBtnColor;
                                    }
                                    const animateClass = this.props.animate ? classes.animatePropertyControl : '';
                                    return (
                                        <div style={{ position: 'relative' }}>
                                            <button
                                                className={`${classes.propertyControl} ${colorClass} ${animateClass}`}
                                                onClick={() => {
                                                    click(rowObj.cssProperty, cssValue);
                                                    if (cssValue.match(/[0-9]/)) {
                                                        onSelection(rowObj.cssProperty);
                                                    } else {
                                                        onSelection(cssValue);
                                                    }
                                                }}
                                                style={
                                                    this.state.animate
                                                        ? { animationDelay: `${index * 50}ms` }
                                                        : { animation: 'none', opacity: '1', transform: 'scale(1)' }
                                                }
                                            >
                                                {cssValue}
                                            </button>
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

export default connect(null, mapDispatchToProps)(Controls);
