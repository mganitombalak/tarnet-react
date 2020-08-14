import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root';
import { BrowserRouter } from 'react-router-dom';//HashRouter,MemoryRouter
import ErrorCatcher from './components/error-boundry';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import categoryReducer from './reducers/category'
import unitReducer from './reducers/unit'
import createSagaMiddleware from 'redux-saga';
import sagaSetup from './sagas';

// CREATE  MIDDLEWARE
const myMiddleware = createSagaMiddleware();

//CREATE A STORE
// categories ve unit COMBINEDREDUCER NAME Lutfen 
// CategoryList Component MapStateToProps fonksiyonuna bakiniz!!!!!
const myStore = createStore(
    combineReducers({categories:categoryReducer,units:unitReducer }),
    applyMiddleware(myMiddleware));
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

myMiddleware.run(sagaSetup);

ReactDOM.render(
    <ErrorCatcher>
        <BrowserRouter>
            <Provider store={myStore}>
                <Root></Root>
            </Provider>
        </BrowserRouter>
    </ErrorCatcher>, document.querySelector('#root'));