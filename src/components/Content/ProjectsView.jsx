import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

import uxfolio from '../../icons/uxfolio.png';

const ProjectsView = ({ projects }) => {

  return (
    <div>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project">
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
                  return <Chip variant="outlined" disabled size="small"  disabled key={`role=${index}`} label={role} />
                })}
              </div>
              { project.uxfolio !== null ? 
               <Button 
                href={project.uxfolio}
                startIcon={ <img src={uxfolio} height={25} width={25} /> }
              >
                View Design
              </Button>
              : null }
              <Button 
                href={project.github}
                startIcon={ <GitHubIcon /> }
              >
                View Development
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsView;