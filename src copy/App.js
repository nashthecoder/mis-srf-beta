import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Players from './pages/Players'
import Register from './pages/Register'
import Attendance from './pages/Attendance'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Players />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/register">
          <Attendance />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
