import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = ({ navs }) => {
    return (
        <div className={classes.navbarContainer}>
            <Link style={{ textDecoration: 'none' }} to="/">
                <h1 className={classes.title}>CSS Press Me</h1>
            </Link>
            <div className={classes.navOptionsContainer}>
                {navs.map(({ title, path }) => {
                    return (
                        <Link key={title} className={classes.navOption} to={path}>
                            <p className={classes.navOptionText}>{title}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default NavBar;
