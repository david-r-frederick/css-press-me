import React from 'react';
import { connect } from 'react-redux';
import classes from './Tips.module.css';

const Tips = ({ rows, showTips, activeSelection }) => {
    return (
        <div
            style={{
                maxHeight: rows * 52,
            }}
            className={`${classes.tipsContainer} ${showTips ? classes.show : classes.hide}`}
        >
            {Object.entries(activeSelection).map((entryArr) => {
                const [label, data] = entryArr;
                return (
                    <div className={classes.tip}>
                        <h4 className={classes.selectionHeader}>{label}</h4>&nbsp;
                        {typeof data === 'string' ? (
                            <p style={data.includes(' ') ? null : { wordBreak: 'break-all' }}>{data}</p>
                        ) : (
                            <ul>
                                {data.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = ({ activeSelection, showTips }) => {
    return {
        activeSelection,
        showTips,
    };
};

export default connect(mapStateToProps)(Tips);
