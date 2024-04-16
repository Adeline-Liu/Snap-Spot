import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

import './App.css';

const App = () => {
  return <Router>
    <Switch>
    {/* Switch looks through all its child Route components and render the first one matches the current URL  */}
    <Route path = "/" exact = {true}>
      {/* this Route will only be rendered if the path is exactly '/' */}
      <Users/>
    </Route>
    <Route path = "/places/new" exact = {true}>
      <NewPlace/>
    </Route>
    <Redirect to = "/"/>
    {/* if the path is not '/', redirect component will redirect the page to '/' */}
    </Switch>
  </Router>;
};

export default App;
