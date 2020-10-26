import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import AboutContent from './AboutContent.jsx';
import ProjectContent from './ProjectsContent.jsx';
import SocialButtons from './SocialButtons.jsx';
import Messenger from './Messenger.jsx';
import jessa1 from '../../Brand/jessa1.png';
import './Home.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  root2: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  }
}));

const Home = () => {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return <div>
    <div style={{ width: '100%' }}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <img src={jessa1} className="home-pic"/>
          </CardContent>
          <CardContent className={classes.content}>
            <Typography align="center" variant="h3" >Jessa Daggs</Typography>
            <Typography align="center" variant="h5" >UI Designer + Full Stack Engineer</Typography>
            <SocialButtons />
          </CardContent>
        </div>
      </Card>
      <Divider />
      <Card className={classes.root2} variant="outlined">
        <CardContent>
          <Typography variant="h" component="h2" align="center">
            {bull}About Me{bull}
          </Typography>
          <AboutContent />
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      <Divider />
      <Card className={classes.root2} variant="outlined">
        <CardContent>
          <Typography variant="h" component="h2" align="center">
            {bull}Projects{bull}
          </Typography>
          <ProjectContent />
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      <Divider />
      <Card className={classes.root2} variant="outlined">
        <CardContent>
          <Typography variant="h" component="h2" align="center">
              {bull}Let's Work Together!{bull}
          </Typography>
          <Messenger />
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>
  </div>;
};

export default Home;