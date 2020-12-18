import SideMenu from '../../components/SideMenu/SideMenu';
import { Route, Switch } from 'react-router-dom';
import { FlexBox, Visibility, Animation, Transition } from '../Pages';
import { connect } from 'react-redux';
import classes from './Playground.module.css';
import { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './playgroundAnimation.css';

class Playground extends Component {
    render() {
        const { showTips, onToggleTips, location } = this.props;
        return (
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
                                <Route component={FlexBox} path="/playbox/flexbox" />
                                <Route component={Visibility} path="/playbox/visibility" />
                                <Route component={Animation} path="/playbox/animation" />
                                <Route component={Transition} path="/playbox/transition" />
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
