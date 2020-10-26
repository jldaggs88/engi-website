const express = require('express');
const path = require('path');
var router = express.Router();
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
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: name,
    to: creds.USER,
    subject: 'New Message from JessaDaggs.com',
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
    }
  })
})

app.get('/', (req, res) => {
 res.sendFile(HTML_FILE);
});

app.use(cors());
app.use(express.static(DIST_DIR));
app.use(express.json())
app.use('/', router);
app.listen(3002)
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});