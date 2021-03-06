import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';

let EMAIL_ID, SERVICE_ID, TO_NAME, TEMPLATE_ID;

// TODO: Validate email

const Messenger = () => {
  EMAIL_ID = process.env.EMAIL_ID;
  SERVICE_ID = process.env.SERVICE_ID;
  TO_NAME = process.env.TO_NAME;
  TEMPLATE_ID = process.env.TEMPLATE_ID;

  init(EMAIL_ID);

  const [state, setState] = useState({
    name: '',
    email: '',
    // subject: '',
    message: '',
  });
  const [alert, setAlert] = useState(null);

  const resetForm = () => {
    setState({name: '', email: '', message: ''})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = state;
    let templateParams = {
        from_name: name,
        message: message,
        to_name: TO_NAME
    }
    if(name.length !== 0 && email.length !== 0 && message.length !== 0){
      emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
      ).then(function(response) {
        setAlert(<Alert variant="outlined" severity="success">
          Message Sent.
        </Alert>);
     }, function(error) {
        setAlert(<Alert variant="outlined" severity="error">
          Sorry, your message wasn't sent.
        </Alert>);
     });
      resetForm()
    } else {
      setAlert(<Alert variant="outlined" severity="error">
        Please complete each field. 
      </Alert>)
    }
  }

  return <div>
      <div className="messenger">
        <Box display="flex" flexDirection="row" p={2} m={1} justifyContent="center">
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <TextField  label="Name" fullWidth margin="normal" value={state.name} onChange={ (event)=>{setState({...state, name: event.target.value})} }/>
            </div>
            <div className="form-group">
              <TextField  label="Email" fullWidth margin="normal" value={state.email} onChange={(event)=>{setState({...state, email: event.target.value})}} />
            </div>
            <div className="form-group">
              <TextField label="Message" multiline rows={5} fullWidth margin="normal" value={state.message} onChange={(event)=>{setState({...state, message: event.target.value})} }/>
            </div>
            <div className="form-group">
              <Button variant="contained" type="submit" >Send</Button>
              {alert !== null ? alert : null}
            </div>
          </form>
        </Box>
      </div>
  </div>;
};

export default Messenger;