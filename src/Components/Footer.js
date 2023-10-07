import React from 'react';
import  { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'; 
const Footer = () => {
  return (
    
  
    <div className="footer-container">
      <Typography variant="body2" align="center" className="footer-text">
        &copy; {new Date().getFullYear()} Doraemon Land. All Rights Reserved.
        <div className="social-icons">
          <InstagramIcon className="icon" />
          <GitHubIcon className="icon" />
          <LinkedInIcon className="icon" />
          <TwitterIcon className="icon" />
          <YouTubeIcon className="icon"/>
        </div>
      </Typography>
      </div>
    
   
    

  );
};

export default Footer;
