import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AddFriend from './AddFriend';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // const Component = props.component
    return (
        <>
            <Route
                {...rest}
                render={() => {
                    if (localStorage.getItem('token')) {
                        // if token is in localstorage, render the given component
                        return <Component />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
            <AddFriend />
        </>
    );
};

export default PrivateRoute;

