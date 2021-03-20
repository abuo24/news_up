import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/bootstrap.min.css'
import './css/typography.css';
import "react-slick";
import './css/responsive.css';
import './css/magnific-popup.css'
import './css/meanmenu.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import promiseMiddleware from "redux-promise";
import rootReducer from "./redux/reducers";
import $ from 'jquery';
import Popper from 'popper.js';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStoreWithMiddleware(rootReducer)}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider></React.StrictMode>,
    document.getElementById('root')
);
