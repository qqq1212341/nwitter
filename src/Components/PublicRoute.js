import { authService } from 'fbase';
import React, {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
//   const [isLoggedIn, setisLoggedIn] = useState(authService.currentUser);
    console.log(authService.currentUser)
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => (
            authService.currentUser && restricted ?
            <Redirect to="/" />
        : <Component {...props} />
    )} />
  );
};

export default PublicRoute;
