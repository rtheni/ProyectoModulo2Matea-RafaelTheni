import React from 'react';
import './App.css';

import Login from './components/Login';
import PList from './components/Playlist'
import Error from './components/LoginError'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/loginerror">
            <Error />
          </Route>
          <Route exact path="/playlist">
            <PList />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Redirect exact from="" to="/login" />
          <Redirect exact from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
