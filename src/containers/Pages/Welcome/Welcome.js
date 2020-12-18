import React from 'react';
import classes from './Welcome.module.css';
import { Redirect } from 'react-router-dom';

class Welcome extends React.Component {
    state = {
        redirect: false,
        phase: 1,
    };

    componentDidMount() {
        this.timer = setTimeout(() => this.setState({ redirect: true }), 7000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/playbox/flexbox" />;
        }
        setTimeout(() => {
            if (this.state.phase === 2) {
              return;
            }
            this.setState({
                phase: 2,
            });
        }, 3000);
        return (
            <div className={classes.welcomeContainer}>
                {this.state.phase === 1 ? (
                    <h1 className={classes.first}>Welcome to CSS Press Me, a playground for all things CSS.</h1>
                ) : (
                    <h1 className={classes.second}>I hope you have fun.</h1>
                )}
            </div>
        );
    }
}

export default Welcome;
