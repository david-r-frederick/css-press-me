import './App.css';
import NavBar from './containers/NavBar/NavBar';
import SideMenu from './components/SideMenu/SideMenu';
import { FlexBox, Display, Opacity, Animation, Transition } from './containers/Pages';
import { Link, Route } from 'react-router-dom';
import { Fragment } from 'react';

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <Link to="/main">TO MAIN</Link>
        </div>
    );
};

const MainFlow = ({ match }) => {
    return (
        <Fragment>
            <SideMenu />
            <div className="base">
                <div className="y-spacer"></div>
                <div className="bodyContainer">
                    <Route component={FlexBox} path={match.url + "/flexbox"} />
                    <Route component={Display} path={match.url + "/display"} />
                    <Route component={Opacity} path={match.url + "/opacity"} />
                    <Route component={Animation} path={match.url + "/animation"} />
                    <Route component={Transition} path={match.url + "/transition"} />
                </div>
            </div>
        </Fragment>
    );
};

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="x-spacer"></div>
            <Route path="/home" component={Home} />
            <Route path="/main" component={MainFlow} />
        </div>
    );
}

export default App;
