import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

// import './styles/styles.scss';

const Footer = () => {
  return <div>
    <AppBar position="static" color="primary">
      <Container>
        {/* <List>
          <ListItem>
            <ListItemIcon>
              <MailOutlineIcon />
            </ListItemIcon>
            <a href="mailto:daggs.jessa@gmail.com">daggs.jessa@gmail.com</a>
          </ListItem>
        </List> */}
        <Toolbar>
          <Typography color="inherit">
            Copyright © 2020 Jessa Daggs. All Rights Reserved 
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  </div>;
};

export default Footer;