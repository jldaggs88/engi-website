import React from 'react';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import dev from '../../icons/dev.png';

const SocialButtons = () => {

  return <div style={{justifyContent: 'center'}}>
    <Box p={1} m={1} bgcolor="grey.300">
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
  </div>
}

export default SocialButtons; 