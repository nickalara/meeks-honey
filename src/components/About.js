import React from "react";
import { makeStyles } from "@mui/styles";
import MediaCard from "./MediaCard";
import places from "../static/places";
import useWindowPosition from "../hook/useWindowPosition";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
}));

export default function About() {
  const classes = useStyles();
  const checked = useWindowPosition('header');

  return (
    <div className={classes.root} id="about">
      <MediaCard place={places[0]} checked={checked} />
      <MediaCard place={places[1]} checked={checked} />
      <Scroll to="whereToFind" smooth={true}>
        <ExpandMoreRoundedIcon
          className={classes.iconColor}
          style={{ fontSize: '4rem' }}
        />
      </Scroll>
    </div>
  );
}