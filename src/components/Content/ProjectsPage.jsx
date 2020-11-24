import React, { useState } from 'react';
import ProjectsView from './ProjectsView.jsx';
import { tileData } from '../../tileData.js';

const projects = tileData;

const Projects = () => {

  return <div>
    <ProjectsView 
      projects={projects} />
  </div>;
};

export default Projects;
