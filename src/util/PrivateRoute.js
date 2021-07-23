import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserRequire from './UserRequire';
import AuthService from '../services/AuthService';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = AuthService.getCurrentUser();


    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route exact {...rest} render={props => (

            user ? user.roles.includes("ROLE_USER") ?
                <Component {...props} /> : <UserRequire />
                : <Redirect to="/customer" />
        )} />
    );
};




export default PrivateRoute;