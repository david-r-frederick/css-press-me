import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Tips.module.css';

class Tips extends Component {
    render() {
        return (
            <div
                style={{
                    maxHeight: this.props.rows * 52,
                }}
                className={`${classes.tipsContainer} ${this.props.showTips ? classes.show : classes.hide}`}
            >
                {Object.entries(this.props.activeSelection).map((entryArr) => {
                    return (
                        <div className={classes.tip}>
                            <h4 className={classes.selectionHeader}>{entryArr[0]}</h4>&nbsp;
                            {typeof entryArr[1] !== 'string' ? (
                                <ul>
                                    {entryArr[1].map((item) => {
                                        return <li>{item}</li>;
                                    })}
                                </ul>
                            ) : (
                                <p style={entryArr[1].includes(' ') ? null : { wordBreak: 'break-all' }}>
                                    {entryArr[1]}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = ({ activeSelection, showTips }) => {
    return {
        activeSelection,
        showTips,
    };
};

export default connect(mapStateToProps)(Tips);
