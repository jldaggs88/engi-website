import React from 'react';
import Typography from '@material-ui/core/Typography';

import AboutContent from './AboutContent.jsx';

const About = () => {

  return <div>
    <Typography align="center" variant="h3" component="h2">About Me</Typography>
    <div style={{ width: '100%' }}>
      <AboutContent />
      <div>Skills & Experience</div>
      <div>dsf.ljsfkn;sdlfnsd</div>
      {/* <div>Giving Back</div> */}
    </div>
  </div>;
};

export default About;