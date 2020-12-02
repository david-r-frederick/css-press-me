import React from 'react';
import classes from './Welcome.module.css';
import { Redirect } from 'react-router-dom';

class Welcome extends React.Component {
    state = {
        redirect: false,
    };

    componentDidMount() {
        this.timer = setTimeout(() => this.setState({ redirect: true }), 1500);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return this.state.redirect ? (
            <Redirect to="/playbox" />
        ) : (
            <div className={classes.WelcomeContainer}>
                <h1 className={classes.title}>WELCOME</h1>
            </div>
        );
    }
}

export default Welcome;
