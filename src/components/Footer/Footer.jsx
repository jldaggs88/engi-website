import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  marginAutoContainer: {
    backgroundColor: '#F9A896',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const Footer = () => {
  const classes = useStyles();

  return <div>
    <AppBar position="static">
      <Toolbar className={classes.marginAutoContainer}>
        <Typography color="inherit">
          Copyright © 2020 Jessa Daggs. All Rights Reserved. 
        </Typography>
      </Toolbar>
    </AppBar>
  </div>;
};

export default Footer;