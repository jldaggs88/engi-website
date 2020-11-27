import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';


import xfolio from '../../icons/xfolio.png';

const ProjectsView = ({ projects }) => {

  const [view, setView] = useState(null);

  return (
    <div>
      {view === null ? 
        <div className="project-container">
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
              { project.case !== null ? 
               <Tooltip title="View Design on XFolio">
                <IconButton  href="https://uxfol.io/project/0414f7a6/Tell-The-Story-of-Your-Design">
                  <img src={xfolio} height={25} width={25}/>
                </IconButton> 
               </Tooltip>
              : null }
               <Tooltip title="View Development on Github">
                <IconButton href={project.github}>
                  <GitHubIcon />
                </IconButton>
               </Tooltip>
            </div>
          </div>
        ))}
      </div> : view
      }
    </div>
  );
}

export default ProjectsView;