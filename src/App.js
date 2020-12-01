import './App.css';
import NavBar from './containers/NavBar/NavBar';
import SideMenu from './components/SideMenu/SideMenu';
import { FlexBox, Visibility, Animation, Transition } from './containers/Pages';
import { Route } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
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
                    <Route component={FlexBox} path="/playbox/flexbox" />
                    <Route component={Visibility} path="/playbox/visibility" />
                    <Route component={Animation} path="/playbox/animation" />
                    <Route component={Transition} path="/playbox/transition" />
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
            <Route path="/playbox" component={Playground} />
        </div>
    );
}

export default App;
