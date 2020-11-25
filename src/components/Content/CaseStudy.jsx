import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    float: 'left',
    padding: '5%'
  },
   titles: {
    height: '50%',
    padding: '3%'
  }
}));

const CaseStudy = ({ currentStudy, projects }) => {

  const classes = useStyles();

  return <div className="case-container">
    {projects.map((project, index)=>{
      if(currentStudy === project.name){
        return <div className="case">
          <div className="case-card" key={`case-study-${index}`}>
            <CardMedia className={classes.root}
              image={project.imgs[0]}
              component="img"
              alt={`landing-${project.name}`}
            />
            <div className={classes.titles}>
              <Typography variant="h4" gutterBottom>
                {project.case.caseTitle[0]}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {project.case.caseTitle[1]}
              </Typography>
            </div>
          </div>
          <div className="case-cats">

            <Typography variant="h5" fontWeight="fontWeightBold" gutterBottom>
              The Project
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {project.case.problemSummary}
            </Typography>

            <Table>
              <TableHead>
                <TableRow>
                <TableCell align="center">Role</TableCell>
                <TableCell align="center">Team</TableCell>
                <TableCell align="center">Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell align="center">{project.roles.join(" ")}</TableCell>
                <TableCell align="center">{project.case.team}</TableCell>
                <TableCell align="center">{project.case.duration} Month(s)</TableCell>
              </TableBody>
            </Table>
            <Typography variant="h5" fontWeight="fontWeightBold" gutterBottom>
              Discovery
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {project.case.discovery}
            </Typography>

            <Typography variant="h5" fontWeight="fontWeightBold" gutterBottom>
              Prototype
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              The Problem: {project.case.problems[0]}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              The Solution: {project.case.solutions[0]}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              The Problem: {project.case.problems[1]}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              The Solution: {project.case.solutions[1]}
            </Typography>
            <CardMedia
              image={project.imgs[1]}
              component="iframe"
              alt={`demo-${project.name}`}
              styles={{ transform: "scale(0.5)", width: "494", height: "1010", frameborder: "0" }}
            />

            <Typography variant="h5" fontWeight="fontWeightBold" gutterBottom>
              Look and Feel
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {project.case.uI}
            </Typography>

            <Typography variant="h5" fontWeight="fontWeightBold" gutterBottom>
              Learnings
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {project.case.takeAways[0]}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {project.case.takeAways[1]}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {project.case.takeAways[2]}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {project.case.takeAways[3]}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {project.case.takeAways[4]}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {project.case.takeAways[5]}
            </Typography>
          </div>
        </div>
      }
    })}
  </div>;
};

export default CaseStudy;