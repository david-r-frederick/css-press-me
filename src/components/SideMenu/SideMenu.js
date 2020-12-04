import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SideMenu.module.css';

const SideMenu = ({ items }) => {
    return (
        <div className={classes.SideMenuContainer}>
            <ul className={classes.SideMenu}>
                {items.map((item) => {
                    return (
                        <li className={classes.SideMenuItem}>
                            <Link className={classes.SideMenuItemLink} to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideMenu;
