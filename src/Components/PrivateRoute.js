import { authService } from 'fbase';
import React, {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
  // const [isLoggedIn, setisLoggedIn] = useState(authService.currentUser);
  console.log(authService.currentUser)
  return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
        authService.currentUser ?
            <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;