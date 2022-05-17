import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Players from './pages/Players'
import Education from './pages/Education'
import Counseling from './pages/Counseling'
import Lifeskills from './pages/Lifeskills'
import Register from './pages/Register'
import Sessions from './pages/Sessions'
import Visits from './pages/Visits'
import Admin from './pages/Admin'
import Settings from './pages/Settings'

import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/sessions">
            <Sessions />
          </Route>
          <Route path="/counseling">
            <Counseling />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/visits">
            <Visits />
          </Route>
          <Route path="/lifeskills">
            <Lifeskills />
          </Route>
          <Route path="/players">
            <Players />
          </Route>

          {/* Utilities */}
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>

          {/* AppBar */}
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
