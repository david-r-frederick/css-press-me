import './App.css';
import NavBar from './containers/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Welcome from './containers/Pages/Welcome/Welcome';
import Playground from './containers/Playground/Playground';
import About from './containers/Pages/About/About';
import Contact from './containers/Pages/Contact/Contact';
import { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route
                    render={(props) => {
                        return props.location.pathname === '/' ? null : <NavBar />;
                    }}
                />
                <Switch>
                    <Route path="/playbox" component={Playground} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/" exact component={Welcome} />
                </Switch>
            </div>
        );
    }
}

export default App;
