import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
// import Home from './pages/Home'
import Players from './pages/Players'
import Education from './pages/Education'
import Counseling from './pages/Counseling'
import Lifeskills from './pages/Lifeskills'
import Register from './pages/Register'
import Sessions from './pages/Sessions'
// import Visits from './pages/Visits'
import Admin from './pages/Admin'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
            <Route exact path="#">
              <Dashboard />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/sessions">
              <Sessions />
            </Route>
            <Route path="#">
              <Counseling />
            </Route>
            <Route path="#">
              <Education />
            </Route>
            {/* <Route path="#">
              <Visits />
            </Route> */}
            <Route path="#">
              <Lifeskills />
            </Route>
            <Route path="/players">
              <Players />
            </Route>

            {/* Utilities */}
            <Route path="#">
              <Settings />
            </Route>
            <Route path="#">
              <Admin />
            </Route>
            {/* AppBar */}
          </Switch>
        </Layout>
      </Router>
  
    </div>
    
  );
}

export default App;
