import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/logo.png'
import Header from '../header/Header';
import SweetAlert  from 'react-bootstrap-sweetalert';
import { resetError } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '50%',
	padding: '48px 40px 36px',
	margin: '5% auto',
	height: '611px',
  },
  grid: {
	  flexGrow: 1,
  }
}));

export default function Presentation(props) {
  const classes = useStyles();
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

	return (
		<div>
			<Paper className={classes.root} variant="outlined" >
				<Grid container spacing={3}>
					<Grid item xs={8}>
						<Header />
						{props.children}
					</Grid>
					<Grid item xs={4}>
						<img src={logo} alt="Logo" />
					</Grid>
				</Grid>
			</Paper>

			<SweetAlert 
				error 
				title="D'oh!" 
				show={error}
				onConfirm={() => {
					dispatch(resetError());
				}}>
				Something was wrong :(
			</SweetAlert>
		</div>
	);
}