import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ROUTES from './routesNames';
import HomePageContainer from '../pages/HomePage/containers/HomePageContainer';
import CounterLayout from '../pages/Counter/containers/CounterContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
            <Route exact path={ROUTES.COUNTER} component={CounterLayout} />
        </Switch>
    )
}

export default Routes;