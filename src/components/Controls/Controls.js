import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Controls.module.css';

class Controls extends Component {
  render () {
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
                              style={{ width: `calc(${longestSubtitleLength}rem / 2 + 12px)` }}
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
                                  const animateClass = this.props.animate ? classes.animatePropertyControl : "";
                                  return (
                                      <div style={{ position: 'relative' }}>
                                          <button
                                              className={`${classes.propertyControl} ${colorClass} ${animateClass}`}
                                              onClick={() => {
                                                  click(rowObj.cssProperty, cssValue);
                                                  onSelection(cssValue);
                                              }}
                                              style={{ animationDelay: `${index * 50 + 100}ms` }}
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
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelection: (selection) => dispatch({ type: selection }),
    };
};

export default connect(null, mapDispatchToProps)(Controls);
