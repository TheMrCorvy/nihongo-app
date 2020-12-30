import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from 'components/routes';

export default function RoutesComponent() {
    return (
        <Switch>
            {routes.map((route) => (
                <Route exact path={route.path} component={route.component} key={route.nameKey} />
            ))}
            <Redirect from="/nihongo-app" to="/" />
        </Switch>
    );
}
