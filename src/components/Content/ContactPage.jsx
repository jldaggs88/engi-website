import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import SocialButtons from './SocialButtons.jsx';
import Messenger from './Messenger.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyItems: 'center',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Contact = () => {

  const classes = useStyles();
  return <div>
    <Paper className={classes.root} elevation={3} square>
      <Typography align="center" variant="h3" component="h2">Contact</Typography>
      <div style={{ width: '100%' }}>
        <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper" justifyContent="center">
          <Box p={1} m={1} bgcolor="grey.300">
            <Typography align="center" variant="h4" component="h4">I'm Social!</Typography>
            <SocialButtons />
          </Box>
        </Box>
      </div>
      <Typography align="center" variant="h5" component="h4">Connect With Me</Typography>
      <Messenger />
    </Paper>
  </div>;
};

export default Contact;