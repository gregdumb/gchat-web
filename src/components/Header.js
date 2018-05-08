import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	boxSizing: 'border-box',
	width: '100%',
	height: '80px',
	padding: '10px',
	backgroundColor: 'lightblue',
}

const Header = ({ showLogout }) => (
	<div style={headerStyle} >
		<Link to="/" >
			<h1>GChat</h1>
		</Link>
		{showLogout ? (
			<Link to="/logout">Log out</Link>
		) : (
			<Link to="/login">Log in</Link>
		)}
	</div>
)

export default Header;