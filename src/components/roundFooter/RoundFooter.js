import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { playGame, reset } from "../../actions";
import SweetAlert  from 'react-bootstrap-sweetalert';

export default function RoundFooter() {

	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);

	return (
		<div style={{marginTop: 40}}>
			<div style={{float: 'left', marginTop: 10}}>
				<Link 
					to="/total"  
					style={{
						marginTop: '10px',
						color: '#3FCBE5',
						fontWeight: 'bold'
						}}>
					View Total
				</Link>
			</div>
			<div style={{float: 'right'}}>
				<Button onClick={() => dispatch(playGame())} variant="contained" size="large" color="primary" style={{fontWeight: 'bold', marginRight: 20}} >
					Play
				</Button>
				<Button onClick={() => setShow(true)} variant="contained" size="large" color="secondary" style={{fontWeight: 'bold'}} >
					Reset
				</Button>
			</div>
			
			<SweetAlert
				warning
				showCancel
				show={show}
				confirmBtnText="Yes, reset!"
				confirmBtnCssClass="red btn-flat white-text"
				cancelBtnCssClass="text-danger"
				title="Are you sure?"
				onConfirm={() => {
					setShow(false);
					setShowConfirm(true);
				}}
				onCancel={() => setShow(false)}>
				You'll lost all data!
			</SweetAlert>
			<SweetAlert 
				success 
				title="Reseted!" 
				show={showConfirm}
				onConfirm={() => {
					dispatch(reset());
					setShowConfirm(false);
				}}>
				You have successfully reseted!
			</SweetAlert>
		</div> 
	);
}