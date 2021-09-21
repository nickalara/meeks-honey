import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Pinyon Script',
    color: 'black',
  },

  appbarTitle: {
    flexGrow: '1',
    fontSize: '2.5rem',
    color: 'black',
  },

  iconColor: {
    color: 'white',
  },

  title: {
    textAlign: 'center',
    fontSize: '3rem',
  },

  subtitle: {
    fontSize: '2.6rem',
    margin: '5px'
  }
}));

export default function Header() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id='header'>
      <AppBar
        style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar
          style={{ width: '80%', margin: '0 auto' }}>
          <h1 className={classes.appbarTitle}>
            Meeks' Honey</h1>
          <IconButton>
            <MenuRoundedIcon
              className={classes.iconColor}
              style={{ fontSize: '2rem' }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.title}>
          <h1>
            Meeks' Honey
          </h1>
          <h2 className={classes.subtitle}>
            Pure California Honey.<br />
            Family Owned and Operated.</h2>
          <Scroll to="about" smooth={true}>
            <ExpandMoreRoundedIcon
              className={classes.iconColor}
              style={{ fontSize: '4rem' }}
            />
          </Scroll>
        </div>
      </Collapse>
    </div >
  );
}