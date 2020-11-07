import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Paper,
  Button,
} from '@material-ui/core';

import { tileData } from '../../tileData.js';

const Project = ({ item, index }) => {

  return (
    <Paper key={index} style={{ backgroundImage: `url(${item.img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '400px' }} className="Project"
      elevation={10}
    >
    </Paper>
  );
}

const CarouselView = () => {
  const [state, setState] = useState({
      autoPlay: true,
      timer: 500,
      animation: "fade",
      indicators: true,
      timeout: 500,
  })

  return (
    <div style={{ marginTop: "50px" }}>
      <Carousel
        className="ProjectCarousel"
        autoPlay={state.autoPlay}
        timer={state.timer}
        animation={state.animation}
        indicators={state.indicators}
        timeout={state.timeout}
      >
        {
          tileData.map((item, index) => <Project item={item} key={index}/>)
        }
      </Carousel>
    </div>
  )
}

export default CarouselView;