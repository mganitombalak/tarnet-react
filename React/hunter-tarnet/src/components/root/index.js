import React, { Suspense } from 'react';
import Header from '../header';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../pages/dashboard';
import Category from '../../pages/category';
import Unit from '../../pages/unit';
import LoadingIndicator from '../loading-indicator';
import { LanguageProvider } from '../../context/language-context';
import Hook from '../../pages/hooks';
const Root = () => <div className="ui container">
    <LanguageProvider>
        <Header />
        <Suspense fallback={<LoadingIndicator />}>
            <Switch>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/category" component={Category}></Route>
                <Route path="/unit" component={Unit}></Route>
                <Route path="/hooks" component={Hook}></Route>
                {/* <Route path="/hooks/:hookid" component={Unit}></Route> */}
            </Switch>
        </Suspense>
    </LanguageProvider>
</div>
export default Root;