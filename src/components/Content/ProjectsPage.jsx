import React from 'react';
import Typography from '@material-ui/core/Typography';

import ProjectsContent from './ProjectsContent.jsx';

const Projects = () => {
  return <div>
    <Typography align="center" variant="h3" component="h2">My Lastest Work</Typography>
    <ProjectsContent />
  </div>;
};

export default Projects;