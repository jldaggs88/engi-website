import React from 'react';
import Typography from '@material-ui/core/Typography';

const CaseStudy = ({ currentStudy, projects }) => {

  return <div>
    <div className="case-study">
      {projects.map((project)=>{
        if(currentStudy === project.name){
          return <div>
            
          </div>
        }
      })}
    </div>
  </div>;
};

export default CaseStudy;