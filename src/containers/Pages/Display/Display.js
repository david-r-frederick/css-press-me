import React, { Component } from 'react';
import classes from './Display.module.css';

export class Display extends Component {
    render() {
        return <div className={classes.DisplayContainer}>
          <h1>DISPLAY</h1>
        </div>;
    }
}
