import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import jessa1 from '../../Brand/jessa1.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 345,
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
  const theme = useTheme();

  return <div>
    <div style={{ width: '100%' }}>
      <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography align="center" variant="h5" >Jessa Daggs</Typography>
          <Typography align="center" variant="h5" >Designer/Engineer</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            She believed she could so she did.
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={jessa1}
      />
    </Card>

    </div>
  </div>;
};

export default Home;