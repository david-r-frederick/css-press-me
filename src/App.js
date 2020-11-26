import './App.css';
import NavBar from './containers/NavBar/NavBar';
import SideMenu from './components/SideMenu/SideMenu';
import { FlexBox, Visibility, Animation, Transition } from './containers/Pages';
import { Link, Route } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <Link to="/main">TO MAIN</Link>
        </div>
    );
};

const Playground = ({ match }) => {
    return (
        <div className="playground">
            <SideMenu />
            <div className="x-spacer"></div>
            <div className="base">
                <div className="bodyContainer">
                    <Route component={FlexBox} path={match.url + "/flexbox"} />
                    <Route component={Visibility} path={match.url + "/visibility"} />
                    <Route component={Animation} path={match.url + "/animation"} />
                    <Route component={Transition} path={match.url + "/transition"} />
                </div>
            </div>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <NavBar />
            <Route path="/home" component={Home} />
            <Route path="/main" component={Playground} />
        </div>
    );
}

export default App;
