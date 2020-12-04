import React, { Component } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import classes from './Home.module.css';

export class Home extends Component {
    render() {
        return (
            <div className={classes.HomeContainer}>
                <PageTitle title="Home" />
            </div>
        );
    }
}
