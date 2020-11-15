import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/logo.png'
import Header from '../header/Header';
import Counter from '../counter/Counter';
import Round from '../round/Round';
import RoundFooter from '../roundFooter/RoundFooter';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '50%',
	padding: '48px 40px 36px',
	margin: '5% auto',
	height: 'auto',
	minHeight: '500px',
  },
  grid: {
	  flexGrow: 1,
  }
}));

export default function Presentation() {
  const classes = useStyles();

	return (
		<div>
			<Paper className={classes.root} variant="outlined" >
				<Grid container spacing={3}>
					<Grid item xs={8}>
						<Header />
						<Counter />
						<Round />
						<RoundFooter />
					</Grid>
					<Grid item xs={4}>
						<img src={logo} alt="Logo" />
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}