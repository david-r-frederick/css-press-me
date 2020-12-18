import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './SideMenu.module.css';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.resizer = () => {
          if (window.innerWidth < 1143) {
            this.setState({ showSideMenu: false });
            }
        };
        this.state = {
            showSideMenu: false,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizer);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizer);
    }

    render() {
        return (
            <div>
                <div
                    onClick={() => {
                        this.setState((prevState) => {
                            return {
                                showSideMenu: !prevState.showSideMenu,
                            };
                        });
                    }}
                    className={classes.toggler}
                >
                    <div className={classes.hamburger}></div>
                </div>
                <ul className={`${classes.SideMenu} ${this.state.showSideMenu ? classes.right : null}`}>
                    {this.props.items.map((item) => {
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
    }
}

export default SideMenu;
