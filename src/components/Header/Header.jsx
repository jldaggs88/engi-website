import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import jessad from '../../Brand/jessad.png';

const useStyles = makeStyles(theme => ({
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: 'flex',
    backgroundColor: 'gold',
  },
  marginAutoItem: {
    margin: 'auto'
  },
  alignItemsAndJustifyContent: {
    width: '100%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Header = () => {
  const classes = useStyles();

  return <div>
    <Toolbar className={classes.alignItemsAndJustifyContent} >
      <img src={jessad} className="namebanner"/>
    </Toolbar>
  </div>;
};

export default Header;