import React from 'react';
import './App.css';

import Login from './components/Login';
import PList from './components/Playlist'
import Error from './components/LoginError'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/loginerror">
            <Error />
          </Route>
          <Route path="/playlist">
            <PList />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
