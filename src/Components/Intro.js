import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Welcome from '../images/Welcome.gif';
import './Intro.css'; 

const Intro = () => {

  return (
    <div className="intro-container" >
      <Container>
        <img src={Welcome} alt="" />
        <Typography variant="h4" className="intro-title">   Welcome to Doraemon Land !
        </Typography>
        <Typography variant="body1" className="intro-description">  Discover the amazing world of Doraemon and his friends.
        </Typography>
        <Button variant="contained" color="primary" className="button"> Get Started
        </Button>
      </Container>
    </div>
  );
};

export default Intro;
