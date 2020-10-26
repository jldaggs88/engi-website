const express = require('express');
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('../config.js');
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.warn(error);
  } else {
    console.info('Server set to take messages');
  }
});

router.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message}`

  const mail = {
    from: name,
    to: creds.USER,
    subject: 'JessaDaggs.com ~ You have a new message!',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })

      transporter.sendMail({
        from: creds.USER,
        to: email,
        subject: "JessaDaggs.com ~ Your email was sent to Jessa!",
        text: `Hey ${name},\nVery cool of you to reach out! This is an auto-reply...\nI have received your email and you will get a response from me soon.\n\nSending Good Vibes You Way,\nJessa Daggs\ndaggs.jessa@gmail.com\n504.405.0614`
      }, function(error, info){
        if(error) {
            console.warn(error);
        } else{
            console.info('Message sent: ' + info.response);
        }
      });
    }
  })
})

app.get('/', (req, res) => {
 res.sendFile(HTML_FILE);
});

app.use(cors());
app.use(express.static(DIST_DIR));
app.use(express.json())
// app.use('/', router);
app.listen(3002)
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});