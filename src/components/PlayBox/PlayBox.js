import React, { Component } from 'react';
import classes from './PlayBox.module.css';

class PlayBox extends Component {
    camelize = (s) => s.replace(/-./g, (x) => x.toUpperCase()[1]);

    render() {
        return (
            <div
                style={this.props.customStyle ? Object.entries(this.props.customStyle)
                    .map(([key, value]) => {
                        return [this.camelize(key), value];
                    })
                    .reduce((arrOne, [key, value]) => {
                        return { ...arrOne, [key]: value };
                    }, {}) : null}
                className={classes.playBoxContainer}
            >
                {this.props.children}
            </div>
        );
    }
}

export default PlayBox;
