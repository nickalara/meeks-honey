import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Collapse } from '@mui/material';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    minWidth: 350,
    width: 'auto',
    margin: '20px',
  }
});

export default function MediaCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse
      in={checked}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Card
        sx={{ background: 'rgba(0,0,0,0.68)', color: "white" }}
        className={classes.root}
      >
        <CardMedia
          component="img"
          image={place.imageUrl}
          alt={place.imageAlt}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            style={{ fontFamily: "Pinyon Script", fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
          >
            {place.title}
          </Typography>
          <Typography variant="body2" color="white">
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}