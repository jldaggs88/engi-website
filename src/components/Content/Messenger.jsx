import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
// import { EMAIL_ID, SERVICE_ID, TO_NAME, TEMPLATE_ID } from '../../../env/production.js';
const EMAIL_ID = process.env.EMAIL_ID;
const SERVICE_ID = process.env.SERVICE_ID;
const TO_NAME = process.env.TO_NAME;
const TEMPLATE_ID = process.env.TEMPLATE_ID;

init(EMAIL_ID);

const Messenger = () => {

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
    const { name, email, message } = state
    let templateParams = {
        from_name: name,
        message: message,
        to_name: TO_NAME
    }
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
    ).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      setAlert(<Alert variant="outlined" severity="success">
        Message Sent.
      </Alert>);
   }, function(error) {
      console.log('FAILED...', error);
      setAlert(<Alert variant="outlined" severity="error">
        Sorry, your message wasn't sent.
      </Alert>);
   });
    resetForm()
  }

  return <div>
    {console.log(EMAIL_ID, SERVICE_ID, TO_NAME, TEMPLATE_ID)}
      <div style={{ width: '100%', padding: '7px' }}>
        <Box display="flex" flexDirection="row" p={2} m={1} bgcolor="background.paper" justifyContent="center">
          <Box p={1} bgcolor="grey.300">
            <form id="contact-form" onSubmit={handleSubmit} autocomplete="off" method="POST">
              <div className="form-group">
                <TextField id="standard-basic" label="Name" value={state.name} onChange={ ()=>{setState({...state, name: event.target.value})} }/>
              </div>
              <div className="form-group">
                <TextField id="standard-basic" label="Email" aria-describedby="emailHelp" value={state.email} onChange={()=>{setState({...state, email: event.target.value})}} />
              </div>
              <div className="form-group">
                <TextField id="filled-multiline-static" label="Message" multiline rows={5} value={state.message} onChange={()=>{setState({...state, message: event.target.value})} }/>
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