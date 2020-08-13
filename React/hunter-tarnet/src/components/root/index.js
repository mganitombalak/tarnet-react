import React, { Suspense } from 'react';
import Header from '../header';
import { Route } from 'react-router-dom';
import Dashboard from '../../pages/dashboard';
import Category from '../../pages/category';
import Unit from '../../pages/unit';
import LoadingIndicator from '../loading-indicator';
import { LanguageProvider } from '../../context/language-context';
const Root = () => <div className="ui container">
    <LanguageProvider>
        <Header />
        <Suspense fallback={<LoadingIndicator />}>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/category" component={Category}></Route>
            <Route path="/unit" component={Unit}></Route>
        </Suspense>
    </LanguageProvider>
</div>
export default Root;