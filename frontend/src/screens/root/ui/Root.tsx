import React, { useContext } from 'react';
import './Root.scss';
import { UserContext } from '../../../app/contexts/UserContext';

const Root: React.FC = () => {
    const userContext = useContext(UserContext);

    return (
        <div className="root">
            <h1 className="text-light">Hello !</h1>
            <button className="base-button" onClick={() => userContext.logOut()}>
                Log out
            </button>
        </div>
    );
};

export default Root;
