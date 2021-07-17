import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../services/AuthService';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route exact {...rest} render={props => (
            
            AuthService.getCurrentUser()!==undefined ?
                <Component {...props} />
            : <Redirect to="/customer" />
        )} />
    );
};

export default PrivateRoute;