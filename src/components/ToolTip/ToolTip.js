import React from 'react';
import classes from './ToolTip.module.css';

const ToolTip = (props) => {
    return (
        <React.Fragment>
            <div className={classes.toolTipContainer}>I am a tooltip.</div>
            <div className={classes.triangle}></div>
        </React.Fragment>
    );
};

export default ToolTip;
