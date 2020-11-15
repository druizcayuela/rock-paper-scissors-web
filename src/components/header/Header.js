import React from 'react';
import title from '../../assets/title.png'
import heart from '../../assets/heart.png'


export default function Header() {

	return (
		<div>
			<img src={title} alt="Title" style={{width: '200px', marginLeft: '-4px'}}/>
			<br />
			<h2 style={{display: 'contents'}}>Developed by Daniel with</h2><img src={heart} alt="Heart" style={{width: '60px', position: 'absolute', marginTop: '-15px'}}/>
		</div>
	);
}