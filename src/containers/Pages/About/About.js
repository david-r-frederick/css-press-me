import React from 'react';
import classes from './About.module.css';

const About = () => {
    return (
        <div className={`${classes.aboutContainer} page`}>
            <section style={{ backgroundColor: '#fff' }} className={classes.aboutSection}>
                <h2 className={classes.aboutSectionHeading}>What is this website for?</h2>
                <p className={classes.aboutSectionText}>
                    This website was created to help those who are learning CSS quickly test and observe different CSS
                    properties and values without having to actually write code. In essence, it's to help you try out a
                    bunch of different properties without having to type each possible value out just to see what will
                    happen.
                </p>
            </section>
            <section style={{ backgroundColor: '#eee' }} className={classes.aboutSection}>
                <h2 className={classes.aboutSectionHeading}>Where did the name come from?</h2>
                <p className={classes.aboutSectionText}>
                    I came up with the name after thinking about an example of something we try- which was toys at the
                    toy store. A lot of toys have a sticker on them somewhere that says "Press Me" or "Try Me" to
                    indicate that when you touch or press it, some sounds or vibration will occur. This website is meant
                    to be that demo experience, but with CSS.
                </p>
            </section>
            <section style={{ backgroundColor: '#fff' }} className={classes.aboutSection}>
                <h2 className={classes.aboutSectionHeading}>Can I contribute?</h2>
                <p className={classes.aboutSectionText}>
                    Absolutely! Feel free to fork or submit a pull request via&nbsp;
                    <a href="https://github.com/david-r-frederick/css-press-me">GitHub</a>.
                </p>
            </section>
        </div>
    );
};

export default About;
