import React from 'react';
import classes from './Contact.module.css';

const Contact = (props) => {
    return (
        <div className={`${classes.contactContainer} page`}>
          <h2>Here's where you can find me...</h2>
            <ul className={classes.contactItemsContainer}>
                <li className={classes.contactItem}>
                    <a href="https://david-r-frederick.github.io/portfolio/">My Portfolio</a>
                </li>
                <li className={classes.contactItem}>
                    <a href="https://github.com/david-r-frederick">My GitHub</a>
                </li>
                <li className={classes.contactItem}>
                    Email: dfrederick79@gmail.com
                </li>
            </ul>
        </div>
    );
};

export default Contact;
