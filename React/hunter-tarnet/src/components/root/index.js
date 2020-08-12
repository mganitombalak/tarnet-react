import React from 'react';
import Header from '../header';
import {Route}  from 'react-router-dom';
import Dashboard from '../../pages/dashboard';
import Category from '../../pages/category';
import Unit from '../../pages/unit';

const Root = () => <div className="ui container">
                        <Header/>
                        <Route path="/" exact component={Dashboard}></Route>
                        <Route path="/category" component={Category}></Route>
                        <Route path="/unit" component={Unit}></Route>
                    </div>
export default Root;