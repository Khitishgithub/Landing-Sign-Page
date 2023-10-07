import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
 import Doremon from '../images/Doreamon.gif'
import './Header.css';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">Doraemon Land</Typography>
          <img src={Doremon} alt="" className="Logo LogoAnimation" />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          {['Home', 'Episodes', 'Characters', 'Gallery'].map(
            (text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
