import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

class NavBar extends Component {
    render() {
        return (
            <div className={classes.navbarContainer}>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <h1 className={classes.title}>CSS Press Me</h1>
                </Link>
                <div className={classes.navOptionsContainer}>
                    <Link className={classes.navOption} to="/playbox/flexbox">
                        <p className={classes.navOptionText}>PlayBox</p>
                    </Link>
                    <Link className={classes.navOption} to="/about">
                        <p className={classes.navOptionText}>About</p>
                    </Link>
                    <Link className={classes.navOption} to="/contact">
                        <p className={classes.navOptionText}>Contact</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavBar;
