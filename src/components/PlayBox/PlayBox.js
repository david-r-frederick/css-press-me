import React from 'react';
import classes from './PlayBox.module.css';

class PlayBox extends React.Component {
    constructor(props) {
        super(props);
        this.boxRef = React.createRef();
    }

    render() {
        return (
            <div className={classes.heightForce}>
                <div ref={this.boxRef} className={classes.playboxContainer}>
                    <button
                        onClick={() => {
                            const { style } = this.boxRef.current;
                            style.transition = 'width 500ms, height 500ms';
                            style.height = '40rem';
                            style.width = '100%';
                            setTimeout(() => (style.transition = 'width 0ms, height 0ms'), 500);
                        }}
                        className={classes.resetBtn}
                    >
                        Reset Box
                    </button>
                    <div style={{ ...this.props.customStyle }} className={classes.playbox}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayBox;
