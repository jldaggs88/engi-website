import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Landing from './components/Landing/index.jsx';
import Header from './components/Header/index.jsx';
import { Home, About, Projects, Contact } from './components/Content/index.jsx';
import Footer from './components/Footer/index.jsx';

const App = () => {
  const [moreClicked, setMoreClicked] = useState(false);

  return (
    <div className="app-container">

      {(!moreClicked) ? <div>
        <Landing /> <button onClick={()=>{setMoreClicked(true)}}>Learn More</button>
        </div> :
        <div>
          <Header />
          <Router>
                <div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/projects">Projects</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
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
              </Router>
            <Footer />
        </div>
      }
    </div>
  )
};

export default App;