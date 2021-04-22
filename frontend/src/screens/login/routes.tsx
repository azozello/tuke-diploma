import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const login = lazy(() => import('./ui/Login'));

export const loginRoutes = <Route exact path="/login" component={login} />;
