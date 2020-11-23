import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

const ProjectsView = ({ handleToggle, projects }) => {

  return (
    <div>
      {projects.map((project) => (
        <div>
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
          </div>
          <div>
            <p>
              Share
            </p>
            <p>
              Learn More
            </p>
            {/* {if case study exist show it if not return null} */}
            <Button size="small" color="primary">
              View Case Study
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsView;