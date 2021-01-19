import React from 'react';
import classes from './KeyframeData.module.css';

const KeyframeData = ({ keyframesArr }) => {
    return (
        <div className={classes.keyframeDataContainer}>
            {[...keyframesArr]
                .sort((x, y) => +x[0].replace('%', '') - +y[0].replace('%', ''))
                .map((keyframeArr) => {
                    return (
                        <div key={keyframeArr[0]} className={classes.keyframeListContainer}>
                            <h4>Keyframe {keyframeArr[0]}</h4>
                            <ul className={classes.keyframeList}>
                                {Object.entries(keyframeArr[1]).map(([cssKey, cssValue]) => {
                                    return (
                                        <li key={cssKey}>
                                            {cssKey}: {cssValue}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
        </div>
    );
};

export default KeyframeData;
