import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root';
import { BrowserRouter } from 'react-router-dom';//HashRouter,MemoryRouter
import ErrorCatcher from './components/error-boundry';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import myReducers from './reducers'

//CREATE A STORE
const myStore = createStore(myReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <ErrorCatcher>
        <BrowserRouter>
        <Provider store={myStore}>
            <Root></Root>
        </Provider>
        </BrowserRouter>
    </ErrorCatcher>, document.querySelector('#root'));