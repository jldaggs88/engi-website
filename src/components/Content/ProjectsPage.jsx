import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import ProjectsView from './ProjectsView.jsx';
import DemoView from './DemoView.jsx';

const useStyles = makeStyles((theme) => ({

}));

const Projects = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [demo, setDemo] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
    const text = event.target.innerText.split(" ")[0];
    setDemo(text);
  };

  return <div>
    <Typography align="center" variant="h3" component="h2">Projects</Typography>
    <ProjectsView handleToggle={handleToggle} />
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-project-demo"
      aria-describedby="description"
    >
      {<DemoView demo={demo} />}
    </Modal>
  </div>;
};

export default Projects;
