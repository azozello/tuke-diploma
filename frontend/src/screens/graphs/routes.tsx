import React, { lazy } from 'react';
import LoggedInRoute from '../../app/routes/LoggedInRoute';

const graph = lazy(() => import('./ui/Graph'));

export const graphRoutes = <LoggedInRoute exact path="/graph" component={graph} />;
