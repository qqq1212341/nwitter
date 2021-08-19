import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Home from 'Routes/Home';
import Register from 'Routes/Register';
import LogIn from 'Routes/LogIn';
import Profile from 'Routes/Profile';
import NotFound from 'Routes/NotFound';


function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={false} component={Home} path="/" exact />
        <PublicRoute restricted={true} component={Register} path="/register" exact />
        <PublicRoute restricted={true} component={LogIn} path="/login" exact />
        <PrivateRoute component={Profile} path="/mypage" exact /> 
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
