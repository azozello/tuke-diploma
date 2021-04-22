import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import { rootRoutes } from '../screens/root/routes';
import { graphRoutes } from '../screens/graphs/routes';
import { loginRoutes } from '../screens/login/routes';
import { UserContextProvider } from './contexts/UserContext';

export const App: React.FC = () => (
    <Router>
        <UserContextProvider>
            <Suspense fallback={<p />}>
                <div className="background-gradient">
                    <Switch>{loginRoutes}</Switch>
                    <Switch>{rootRoutes}</Switch>
                    <Switch>{graphRoutes}</Switch>
                </div>
            </Suspense>
        </UserContextProvider>
    </Router>
);

export default App;
