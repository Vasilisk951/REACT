import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTES from './routesNames';
import HomePageContainer from '../pages/HomePage/containers/HomePageContainer';
import CounterLayout from '../pages/Counter/containers/CounterContainer';
import CountersManagerContainer from '../pages/CountersManager/containers/CountersManagerContainer';
import FormPageContainer from '../pages/FormPage/containers/FormPageContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
            <Route exact path={ROUTES.COUNTER_PAGE} component={CounterLayout} />
            <Route exact path={ROUTES.COUNTERS_MANAGER} component={CountersManagerContainer} />
            <Route exact path={ROUTES.TODO_LIST} component={FormPageContainer} />
        </Switch>
    )
}

export default Routes;