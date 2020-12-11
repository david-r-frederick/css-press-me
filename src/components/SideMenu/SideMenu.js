import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SideMenu.module.css';

const SideMenu = ({ items }) => {
    return (
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
    );
};

export default SideMenu;
