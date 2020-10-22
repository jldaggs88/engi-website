import React, { useState } from 'react';

import Landing from './components/Landing/index.jsx';
import Header from './components/Header/index.jsx';
import Content from './components/Content/index.jsx';
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
          <Content />
          <Footer />
        </div>
      }
    </div>
  )
};

export default App;