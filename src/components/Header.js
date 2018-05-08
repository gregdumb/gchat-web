import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	boxSizing: 'border-box',
	width: '100%',
	height: '80px',
	padding: '10px',
	backgroundColor: 'lightblue',
}

const Header = ({}) => (
	<div style={headerStyle} >
		<Link to="/" >
			<h1>GChat</h1>
		</Link>
	</div>
)

export default Header;