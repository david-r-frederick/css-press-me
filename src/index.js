import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import activeSelectionReducer from './reducers/activeSelectionReducer';
import tipsReducer from './reducers/tipsReducer';
import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const rootReducer = combineReducers({
    activeSelection: activeSelectionReducer,
    showTips: tipsReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Route component={App} />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
