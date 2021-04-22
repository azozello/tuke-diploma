import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Route } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const LoggedInRoute: React.FC<any> = ({ component: Component, ...otherProps }) => {
    const history = useHistory();

    const { isLoggedIn } = useContext(UserContext);

    return (
        <Route
            {...otherProps}
            render={props =>
                isLoggedIn() ? <Component {...props.history.location.state} {...otherProps} /> : history.push('/login')
            }
        />
    );
};

export default LoggedInRoute;
