import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '50%',
	padding: '48px 40px 36px',
	margin: '5% auto',
	height: 'auto',
	minHeight: '500px'
  },
}));

export default function Presentation() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} variant="outlined" >
			Rock · Papper · Scissors
	  </Paper>
    </div>
  );
}