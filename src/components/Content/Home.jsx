import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import SocialButtons from './SocialButtons.jsx';
import Messenger from './Messenger.jsx';
import Projects from './ProjectsPage.jsx';
import jessa1 from '../../Brand/jessa1.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',

  },
  root2: {
    minWidth: 275,
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
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <img src={jessa1} className="home-pic"/>
        </CardContent>
        <CardContent className={classes.content}>
          <Typography align="center" variant="h5" >Designer + Developer</Typography>
          <SocialButtons />
        </CardContent>
      </div>
    </Card>
    <Divider />
    <Card variant="outlined">
      <CardContent>
        <Typography align="center" variant="h5">
          Projects
        </Typography>
        <Projects />
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Divider />
    <Card variant="outlined">
      <CardContent>
        <Typography align="center" variant="h5">
          Let's Work Together!
        </Typography>
        <Messenger />
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  </div>;
};

export default Home;