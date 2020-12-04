import './App.css';
import NavBar from './containers/NavBar/NavBar';
import SideMenu from './components/SideMenu/SideMenu';
import { FlexBox, Visibility, Animation, Transition, Home } from './containers/Pages';
import { Route } from 'react-router-dom';
import Welcome from './containers/Pages/Welcome/Welcome';

const Playground = () => {
    return (
        <div className="playground">
            <SideMenu
                items={[
                    { title: 'Flexbox', path: '/playbox/flexbox' },
                    { title: 'Visibility', path: '/playbox/visibility' },
                    { title: 'Animation', path: '/playbox/animation' },
                    { title: 'Transition', path: '/playbox/transition' },
                ]}
            />
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
            <div className="NavBarContainer">
                <NavBar />
            </div>
            <Route path="/welcome" component={Welcome} />
            <Route path="/playbox" component={Playground} />
            <Route path="/" exact component={Home} />
        </div>
    );
}

export default App;
