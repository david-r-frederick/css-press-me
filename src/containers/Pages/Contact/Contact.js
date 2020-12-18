import React from 'react';
import classes from './Contact.module.css';

const Contact = () => {
    const items = [
        { title: 'Portfolio', link: 'https://david-r-frederick.github.io/portfolio/' },
        { title: 'Github', link: 'https://github.com/david-r-frederick' },
        { title: 'LinkedIn', link: 'https://www.linkedin.com/in/david-frederick-413b30ab/' },
        { title: 'Codewars', link: 'https://www.codewars.com/users/d-frederick' },
    ];

    return (
        <div className={`${classes.contactContainer} page`}>
            <h2>Here's where you can find me...</h2>
            <ul className={classes.contactItemsContainer}>
                {items.map(({ title, link }, index) => {
                    return (
                        <li
                            style={{ backgroundColor: index % 2 !== 0 ? 'white' : '#eee' }}
                            className={classes.contactItem}
                        >
                            <a rel="noreferrer" target="_blank" href={link}>
                                {title}
                            </a>
                        </li>
                    );
                })}
                <li style={{ backgroundColor: items.length % 2 !== 0 ? 'white' : '#eee' }} className={classes.contactItem}>
                  Email: dfrederick79@gmail.com
                </li>
            </ul>
        </div>
    );
};

export default Contact;
