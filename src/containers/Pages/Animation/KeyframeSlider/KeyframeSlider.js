import React, { useState } from 'react';
import classes from './KeyframeSlider.module.css';
import Draggable from 'react-draggable';

const KeyframeSlider = (props) => {
    const { initialPositions, parentHeight, keyframePercentage, updateKeyframePercentage, updateKeyframeCSSValue, deleteKeyframe } = props;
    const [ disabled, setDisabled ] = useState(false);

    return (
        <Draggable
            disabled={disabled}
            axis="x"
            bounds="parent"
            position={{ x: initialPositions.initialX, y: 0 }}
            onDrag={(e, ui) => {
                updateKeyframePercentage(ui.x);
            }}
        >
            <div className={classes.keyframeSlider}>
                <p>{keyframePercentage}</p>
                <div className={classes.keyframeSliderCircle}></div>
                <div className={classes.keyframeSliderLine}>
                    <Draggable
                        axis="y"
                        bounds={{ top: 0, bottom: parentHeight }}
                        position={{ x: 0, y: initialPositions['initialY'] }}
                        onDrag={(e, ui) => {
                            updateKeyframeCSSValue(ui.y);
                        }}
                    >
                        <div
                            className={classes.keyframeSliderValue}
                            onMouseOver={() => setDisabled(true)}
                            onMouseLeave={() => setDisabled(false)}
                        ></div>
                    </Draggable>
                </div>
                <button onClick={deleteKeyframe} className={classes.deleteBtn}></button>
            </div>
        </Draggable>
    );
};

export default KeyframeSlider;
