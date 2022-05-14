import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Players from './pages/Players'
import Register from './pages/Register'
import Attendance from './pages/Attendance'
import Visits from './pages/Visit'


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
        <Route path="/attendance">
          <Attendance />
        </Route>
        <Route path="/visits">
          <Visits />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
