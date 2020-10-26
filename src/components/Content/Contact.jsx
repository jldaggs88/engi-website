import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import GitHubIcon from '@material-ui/icons/GitHub';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

// import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import jessa2 from '../../Brand/jessa2.jpg';
import './Contact.scss';
import dev from '../../icons/dev.png';

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
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [alert, setAlert] = useState(null);

  const onNameChange = (event) => {
    setState({...state, name: event.target.value})
  };

  const onEmailChange = (event) => {
    setState({...state, email: event.target.value})
  };

  const onMessageChange = (event) => {
    setState({...state, message: event.target.value})
  };

  const resetForm = () => {
    setState({name: '', email: '', message: ''})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data: state
    }).then((response)=>{
      if (response.data.status === 'success') {
        console.info("Message Sent."); 
        setAlert(<Alert variant="outlined" severity="success">
          Message Sent.
        </Alert>);
        resetForm();
      } else if(response.data.status === 'fail') {
        console.warn("Message failed to send.");
        setAlert(<Alert variant="outlined" severity="error">
          Sorry, your message wasn't sent.
        </Alert>);
      }
    }).catch((err) => {
      console.error(err, "failed message post")
    })
  }

  return <div>
    <Paper className={classes.root} elevation={3} square>
      <Typography align="center" variant="h3" component="h2">Contact</Typography>
      <div style={{ width: '100%' }}>
        <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper" justifyContent="center">
          <Box p={1} m={1} bgcolor="grey.300">
            <Typography align="center" variant="h4" component="h4">I'm Social!</Typography>
            <ButtonGroup size="medium">
              <IconButton href="https://www.linkedin.com/in/jessa-daggs/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/jldaggs88">
                <GitHubIcon />
              </IconButton>
              <IconButton  href="https://dev.to/jessadaggs">
                <img src={dev} height={25} width={25}/>
              </IconButton>
              <IconButton href="https://www.instagram.com/jessaness/">
                <InstagramIcon />
              </IconButton>
            </ButtonGroup>
          </Box>
          {/* <Box p={1} m={1} bgcolor="grey.300">
            <Grid item>
              <img src={jessa2} alt="" className="contact-pic"/>
            </Grid>
          </Box> */}
        </Box>
      </div>

      <Divider variant="middle"/>

      <div style={{ width: '100%', padding: '7px' }}>
        <Typography align="center" variant="h5" component="h4">Let's Connect</Typography>
        <Box display="flex" flexDirection="row" p={2} m={1} bgcolor="background.paper" justifyContent="center">
          <Box p={1} bgcolor="grey.300">
            <form id="contact-form" onSubmit={handleSubmit} autocomplete="off" method="POST">
              <div className="form-group">
                <TextField id="standard-basic" label="Name" value={state.name} onChange={onNameChange} />
              </div>
              <div className="form-group">
                <TextField id="standard-basic" label="Email" aria-describedby="emailHelp" value={state.email} onChange={onEmailChange} />
              </div>
              <div className="form-group">
                <TextField id="filled-multiline-static" label="Message" multiline rows={5} value={state.message} onChange={onMessageChange} />
              </div>
              <div className="form-group">
                <Button variant="contained" type="submit" >Send</Button>
                {alert !== null ? alert : null}
              </div>
            </form>
          </Box>
        </Box>
      </div>
    </Paper>
  </div>;
};

export default Contact;