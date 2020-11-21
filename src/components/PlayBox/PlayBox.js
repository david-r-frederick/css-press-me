import React, { Component } from 'react';
import classes from './PlayBox.module.css';

class PlayBox extends Component {
    render() {
        return (
            <div style={{ display: this.props.flex ? "flex" : "relative" }}  ref={this.props.reference} class={classes.playBoxContainer}>
                {this.props.children}
            </div>
        );
    }
}

export default PlayBox;
