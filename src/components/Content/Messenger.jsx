import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';

const Messenger = () => {

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
      <div style={{ width: '100%', padding: '7px' }}>
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
  </div>;
};

export default Messenger;