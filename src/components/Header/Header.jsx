import React from 'react';
import ReactDOM from 'react-dom';

import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';

import jd from '../../Brand/jd.png';


const Header = () => {
  return <div>
    <Container>
      <Toolbar>
        <Avatar alt="jd.logo" src={jd} />
      </Toolbar>
    </Container>
  </div>;
};

export default Header;