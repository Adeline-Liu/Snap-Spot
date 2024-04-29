import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

import "./App.css";

const App = () => {
  return (
    <Router>
      {/* Router wraps the entire application, enabling routing across the app 
      based on links clicked or paths navigated to by the user */}
      <MainNavigation />
      <main>
        <Switch>
          {/* Switch looks through all its child Route components and render the first one matches the current URL  */}
          <Route path="/" exact={true}>
            {/* this Route will only be rendered if the path is exactly '/' */}
            <Users />
          </Route>
          <Router path="/:userID/places" exact>
            <UserPlaces />
          </Router>
          <Route path="/places/new" exact={true}>
            <NewPlace />
          </Route>
          <Redirect to="/" />
          {/* if the path is not '/', redirect component will redirect the page to '/' */}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
