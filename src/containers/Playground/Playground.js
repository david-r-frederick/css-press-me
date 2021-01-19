import SideMenu from '../../components/SideMenu/SideMenu';
import { Route, Switch } from 'react-router-dom';
import { FlexBox, Visibility, Animation, Transition } from '../Pages';
import { connect } from 'react-redux';
import classes from './Playground.module.css';
import { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './playgroundAnimation.css';

class Playground extends Component {
    constructor(props) {
        super(props);
        this.resizer = () => {
            this.setState({ windowWidth: window.innerWidth });
        };
        this.state = {
            windowWidth: window.innerWidth,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizer);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizer);
    }

    render() {
        const { showTips, onToggleTips, location } = this.props;
        return this.state.windowWidth < 575 ? (
            <h3 style={{ margin: '1rem 2rem' }}>
                The site is meant to be used on a device no smaller than 575px wide. Please use a different device. We
                apologize for the inconvenience.
            </h3>
        ) : (
            <div>
                <SideMenu
                    items={[
                        { title: 'Flexbox', path: '/playbox/flexbox' },
                        { title: 'Visibility', path: '/playbox/visibility' },
                        { title: 'Transition', path: '/playbox/transition' },
                        { title: 'Animation', path: '/playbox/animation' },
                    ]}
                />
                <div className={classes.bodyContainer}>
                    <span className={classes.showTipsText}>Show Tips?</span>
                    <label className={classes.showTipsSwitch}>
                        <input checked={showTips} type="checkbox" onChange={onToggleTips} />
                        <span className={`${classes.slider} ${classes.round}`}></span>
                    </label>
                    <TransitionGroup>
                        <CSSTransition key={location.key} timeout={{ enter: 0, exit: 0 }} classNames="fade">
                            <Switch location={location}>
                                <Route path="/playbox/flexbox">
                                    {(props) => <FlexBox {...props} windowWidth={this.state.windowWidth} />}
                                </Route>
                                <Route path="/playbox/visibility">
                                    {(props) => <Visibility {...props} windowWidth={this.state.windowWidth} />}
                                </Route>
                                <Route path="/playbox/transition">
                                  {(props) => <Transition {...props} windowWidth={this.state.windowWidth} />}
                                </Route>
                                <Route component={Animation} path="/playbox/animation" />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showTips: state.showTips,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTips: () => dispatch({ type: 'toggleTips' }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
