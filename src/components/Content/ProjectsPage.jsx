import React from 'react';
import Typography from '@material-ui/core/Typography';

import ProjectsView from './ProjectsView.jsx';

const Projects = () => {
  return <div>
    <Typography align="center" variant="h3" component="h2">Projects</Typography>
    <ProjectsView />
  </div>;
};

export default Projects;