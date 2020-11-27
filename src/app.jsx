import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Landing from './components/Landing/index.jsx';
import Header from './components/Header/index.jsx';
import { Home, Projects, Contact } from './components/Content/index.jsx';
import Footer from './components/Footer/index.jsx';

const App = () => {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => setTimeout(()=>{setFlag(true); setCount(1);}, 3000), []);

  return (
    <div className="app-container">
      {flag === false & count === 0 ? <Landing /> :
      <div>
        <Router>
          <Header />
            <div>
              <BottomNavigation
                showLabels
              >
                <BottomNavigationAction component={Link} to="/" label="Home" />
                <BottomNavigationAction component={Link} to="/about" label="About" />
                <BottomNavigationAction component={Link} to="/projects" label="Projects" />
                <BottomNavigationAction component={Link} to="/contact" label="Contact" />
              </BottomNavigation>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          <Footer />
        </Router>
      </div>}
    </div>
  )
};

export default App;