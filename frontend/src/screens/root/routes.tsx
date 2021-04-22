import React, { lazy } from 'react';
import LoggedInRoute from '../../app/routes/LoggedInRoute';

const root = lazy(() => import('./ui/Root'));

export const rootRoutes = <LoggedInRoute exact path="/" component={root} />;
