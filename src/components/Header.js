import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


const useStyles = makeStyles((theme) => ({
  appbarTitle: {
    flexGrow: '1'
  }
}));

// Resume at 7:04
export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar
          className={classes.appbarWrapper}
          style={{ width: '80%', margin: '0 auto' }}>
          <h1 className={classes.appbarTitle}>Meeks' Honey</h1>
          <IconButton>
            <MenuIcon
              className={classes.icon}
              style={{ color: 'white', fontSize: '2rem' }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}