import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

import App from '../src/app.jsx';
import jd from '../src/Brand/jd.png';
import './styles.scss';

const Index = () => {
  return (
    <div className="container">
      <Favicon url={jd}/>
      <App />
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById('root'));