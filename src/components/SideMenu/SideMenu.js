import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SideMenu.module.css';

const SideMenu = (props) => {
    return (
        <div className={classes.SideMenuContainer}>
            <ul className={classes.SideMenu}>
                <li className={classes.SideMenuItem}>
                    <Link className={classes.SideMenuItemLink} to="/main/flexbox">
                        FlexBox
                    </Link>
                </li>
                <li className={classes.SideMenuItem}>
                    <Link className={classes.SideMenuItemLink} to="/main/display">
                        Display
                    </Link>
                </li>
                <li className={classes.SideMenuItem}>
                    <Link className={classes.SideMenuItemLink} to="/main/opacity">
                        Opacity
                    </Link>
                </li>
                <li className={classes.SideMenuItem}>
                    <Link className={classes.SideMenuItemLink} to="/main/animation">
                        Animation
                    </Link>
                </li>
                <li className={classes.SideMenuItem}>
                    <Link className={classes.SideMenuItemLink} to="/main/transition">
                        Transition
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;
