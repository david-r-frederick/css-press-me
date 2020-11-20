import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

class NavBar extends Component {
    render() {
        return (
            <div className={classes.navbarContainer}>
                <Link className={classes.title} to="/home">CSS Press Me</Link>
            </div>
        );
    }
}

export default NavBar;
