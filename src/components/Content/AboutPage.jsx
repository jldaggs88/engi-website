import React from 'react';
import Typography from '@material-ui/core/Typography';

import AboutContent from './AboutContent.jsx';

const About = () => {

  return <div>
    <Typography align="center" variant="h3" component="h2">About</Typography>
    <div className="about-page">
      <AboutContent />
    </div>
  </div>;
};

export default About;