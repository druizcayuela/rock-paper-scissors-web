import React from 'react';
import title from '../../assets/title.png'
import heart from '../../assets/heart.png'
import './Header.css';


export default function Header() {

	return (
		<div>
			<img src={title} alt="Title" className="header-title"/>
			<br />
			<h2 className="display-content">Developed by Daniel with</h2><img src={heart} alt="Heart" className="heart" />
		</div>
	);
}