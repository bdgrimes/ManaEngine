import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, Toolbar, Tab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AppDrawer from './AppDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    drawerOpen: false
  });

  const toggleDrawer = (open) => {
    setState({
      ...state,
      drawerOpen: open
    })
  };

  return (
    <div className={classes.root}>
      <AppDrawer isOpen={state.drawerOpen} toggleDrawer={toggleDrawer} />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tools
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;