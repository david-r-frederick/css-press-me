import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SideMenu.module.css';

const SideMenu = (props) => {
    return (
        <div className={classes.SideMenuContainer}>
            <ul className={classes.SideMenu}>
                <li className={classes.SideMenuItem}>
                    <Link className={classes.SideMenuItemLink} to="/playbox/flexbox">
                        FlexBox
                    </Link>
                </li>
                <li className={classes.SideMenuItem}>
                    <Link className={classes.SideMenuItemLink} to="/playbox/visibility">
                        Visibility
                    </Link>
                </li>
                <li className={classes.SideMenuItem}>
                    <Link className={classes.SideMenuItemLink} to="/playbox/animation">
                        Animation
                    </Link>
                </li>
                <li className={classes.SideMenuItem}>
                    <Link className={classes.SideMenuItemLink} to="/playbox/transition">
                        Transition
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;
