import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './SideMenu.module.css';

class SideMenu extends Component {
    state = {
        showSideMenu: false,
    };

    render() {
        return (
            <div>
                <div
                    className={classes.toggler}
                    onClick={() => {
                        this.setState((prevState) => {
                            return {
                                showSideMenu: !prevState.showSideMenu,
                            };
                        });
                    }}
                >
                    <div className={classes.hamburger}></div>
                </div>
                <ul className={`${classes.SideMenu} ${this.state.showSideMenu ? classes.right : null}`}>
                    {this.props.items.map((item) => {
                        return (
                            <li className={classes.SideMenuItem}>
                                <Link onClick={() => this.setState({ showSideMenu: false })} className={classes.SideMenuItemLink} to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default SideMenu;
