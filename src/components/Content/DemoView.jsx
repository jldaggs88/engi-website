import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import Typography from '@material-ui/core/Typography';

const DemoView = ({ demo, projects }) => {

return <div className="demo-container">
  {projects.map((project, index)=>{

    if(demo === project.name) {
      return <div key={index} className="outer">
        <Carousel className="demo-carousel">
          {
            project.pngs.map((png, index) => <img src={png} key={index} className="png" />)
          }
        </Carousel>
        <p className="description-title" >
          <Typography component="p" className="project-description">{project.description[0]}</Typography>
          <img className="project-tech" src={project.tech}/><br/>
            Features: {project.description[1]}
        </p>
      </div>
    }

  })}
</div>
}

export default DemoView;