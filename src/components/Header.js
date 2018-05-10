import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

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
	<AppBar position="static" color="default" >
		<Toolbar>
			<Typography variant="title">GChat</Typography>
			<Link to="/login">Log In</Link>
		</Toolbar>
	</AppBar>
)

export default Header;