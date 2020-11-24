import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import CaseStudy from './CaseStudy.jsx';

const ProjectsView = ({ projects }) => {

  const [view, setView] = useState(null);

  const renderView = () => {
    switch(event.target.innerText) {
      case  "VIEW CASE STUDY":
        return setView(<CaseStudy projects={projects} currentStudy={event.target.parentElement.getAttribute("aria-label")} />);
      default:
        return <div className="project-container">
        {projects.map((project, index) => (
          <div key={`project-${index}`}>
            <img
              alt={project.title}
              src={project.img}
              className="project-image"
            />
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {project.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {project.description[0]}
              </Typography>
              <div className="roles">
                {project.roles.map((role, index)=>{
                  return <Chip variant="outlined" size="small"  disabled key={`role=${index}`} label={role} />
                })}
              </div>
              { project.case !== null ? <Button aria-label={project.name} size="small" color="primary" onClick={renderView}>
                View Case Study
              </Button> : null }
              <Button size="small" color="primary" href={project.github}>View on Github</Button>
            </div>
          </div>
        ))}
      </div>;
    }
  }

  return (
    <div>
      {view === null ?
        renderView() : view
      }
    </div>
  );
}

export default ProjectsView;