import React, { Component } from 'react';
import classes from './PlayBox.module.css';

class PlayBox extends Component {
    render() {
        return (
            <div
                style={{ display: this.props.flex ? 'flex' : 'block' }}
                ref={this.props.reference}
                class={classes.playBoxContainer}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
            >
                {this.props.children}
            </div>
        );
    }
}

export default PlayBox;
