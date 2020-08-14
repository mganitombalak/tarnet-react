import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root';
import { BrowserRouter } from 'react-router-dom';//HashRouter,MemoryRouter
import ErrorCatcher from './components/error-boundry';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import myReducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagaSetup from './sagas';

const myMiddleware = createSagaMiddleware();

//CREATE A STORE
const myStore = createStore(myReducers, applyMiddleware(myMiddleware));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
myMiddleware.run(sagaSetup);

ReactDOM.render(
    <ErrorCatcher>
        <BrowserRouter>
        <Provider store={myStore}>
            <Root></Root>
        </Provider>
        </BrowserRouter>
    </ErrorCatcher>, document.querySelector('#root'));