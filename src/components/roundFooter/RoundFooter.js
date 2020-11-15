import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function RoundFooter() {

	return (
		<div style={{marginTop: '40px'}}>
			<div style={{float: 'left'}}>
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
			<Button variant="contained" size="large" color="primary" style={{fontWeight: 'bold', marginRight: 20}} >
				Play
			</Button>
			<Button variant="contained" size="large" color="secondary" style={{fontWeight: 'bold'}} >
				Reset
			</Button>
			</div>
			
			
		</div> 
	);
}