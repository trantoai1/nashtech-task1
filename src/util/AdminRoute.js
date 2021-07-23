import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../services/AuthService';
import Permit from './Permit';
const AdminRoute = ({component: Component, ...rest}) => {
    const user = AuthService.getCurrentUser();
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route exact {...rest} render={props => (
            
            user&&user.roles.includes("ROLE_ADMIN") ?
            <Component {...props} />:
            <Permit/>
        )} />
    );
};

export default AdminRoute;