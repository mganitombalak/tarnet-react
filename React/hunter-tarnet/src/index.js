import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Root></Root></BrowserRouter>, document.querySelector('#root'));