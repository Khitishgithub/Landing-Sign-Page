import React from 'react';
import { Container, Typography, Grid, Card } from '@mui/material';
import Timemachine from '../images/Timemachine.png';
import Takecopter from '../images/Take-copter.png';
import Anywheredoor from '../images/Anywheredoor.png';
import pocket from '../images/4Dpocket.png';
import Timecloth from '../images/Timecloth.png';
import Memorybread from  '../images/Memorybread.jpg';
import Dressupcamera from '../images/DressupCamara.png';
import Phonebooth from '../images/Phonebooth.png';
import Detectorswitch from '../images/Detectorswitch.png'

import './Gadgets.css'; 

const Gadgets= () => {



  return (
    <div  className="animated-container">
      <Container className="features-container">
        <Typography variant="h3" className="heading">Doraemon's Gadgets </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
             
                <Typography variant="h6">Time Machine</Typography>
                <img src={Timemachine} alt="" className="feature-img" />
                {/* <Typography variant="body2">
                  Travel through time with Doraemon's Time Machine.
                </Typography> */}
              
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
             
                <Typography variant="h6">Bamboo-copter</Typography>
                <img src={Takecopter} alt="" className="feature-img" />
                {/* <Typography variant="body2">
                  Take it and fly anywhere you want.
                </Typography> */}
            
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
             
                <Typography variant="h6">Anywhere Door</Typography>
                <img src={Anywheredoor} alt="" className="feature-img" />
                {/* <Typography variant="body2">
                  Open this door and you can go anywhere you like!
                </Typography> */}
             
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
           
                <Typography variant="h6">4D Pocket</Typography>
                <img src={pocket} alt="" className="feature-img" />
                {/* <Typography variant="body2">
                  Light pocket contain as infinite 4 D space inside it .
                </Typography> */}
             
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
              
                <Typography variant="h6">Time Kercheif</Typography>
                <img src={Timecloth} alt="" className="feature-img" />
                {/* <Typography variant="body2">
                  Light pocket contain as infinite 4 D space inside it .
                </Typography> */}
              
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
              
                <Typography variant="h6">Memory Bread</Typography>
                <img src={Memorybread} alt="" className="feature-img" />
                {/* <Typography variant="body2">
                  Eat this and memorize any contents printed on it .
                </Typography> */}
           
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
              {/* <CardContent> */}
                <Typography variant="h6">Dressup Camera</Typography>
                <img src={Dressupcamera} alt="" className="feature-img" />
                {/* <Typography variant="body2">
                 Overide the person's attire with whatever image inserted inside it  .
                </Typography> */}
              {/* </CardContent> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
           
                <Typography variant="h6">Phone Booth</Typography>
                <img src={Phonebooth} alt="" className="feature-img" />
                {/* <Typography variant="body2">
                  Light pocket contain as infinite 4 D space inside it .
                </Typography> */}
              
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
             
                <Typography variant="h6">Detectorswitch</Typography>
                <img src={Detectorswitch} alt="" className="feature-img" />
                {/* <Typography variant="body2">
                  Light pocket contain as infinite 4 D space inside it .
                </Typography> */}
               
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Gadgets;
