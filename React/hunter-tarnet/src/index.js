import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root';
import {BrowserRouter} from 'react-router-dom';//HashRouter,MemoryRouter
import ErrorCatcher from './components/error-boundry';
ReactDOM.render(<ErrorCatcher><BrowserRouter><Root></Root></BrowserRouter></ErrorCatcher>, document.querySelector('#root'));