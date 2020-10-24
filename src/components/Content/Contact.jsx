import React from 'react';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import FacebookIcon from '@material-ui/icons/Facebook';

import jessa2 from '../../Brand/jessa2.jpg';

const Contact = () => {

  const handleChange = (event) => {
    console.log(event);
  }
  return <div>
    <Paper elevation={3} square>
      <Grid spacing={2}>
        <Grid item xs={6}>
          <Grid item xs={6}>
            <Typography>Get In Touch!</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>I'm Social!</Typography>
            <ButtonGroup>
              <IconButton href="https://www.linkedin.com/in/jessa-daggs/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/jldaggs88">
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com/jessaness/">
                <InstagramIcon />
              </IconButton>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img src={jessa2} alt="" />
        </Grid>
        <Divider variant="middle"/>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <form noValidate autoComplete="off">
              <div>
                <TextField
                  id="filled-multiline-flexible"
                  label="Name"
                  rowsMax={4}
                  // value={value}
                  // onChange={handleChange}
                  variant="filled"
                />
                <TextField
                  id="filled-textarea"
                  label="Email"
                  placeholder="Placeholder"
                  variant="filled"
                />
                <TextField
                  id="filled-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  variant="filled"
                />
              </div>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </div>;
};

export default Contact;