import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Button } from 'material-ui';

const styles = {
	root: {
		
	},
	title: {
		flex: 1
	}
}

const Header = ({ classes, authenticated }) => (
	<AppBar position="static" color="primary" >
		<Toolbar>
			<Typography variant="title" color="inherit" className={classes.title} >GChat</Typography>
			<Link to={authenticated ? "/logout" : "/login"} style={{textDecoration: 'none', color: 'unset'}} >
				<Button color="inherit" >
					{authenticated ? "Sign out" : "Sign in"}
				</Button>
			</Link>
		</Toolbar>
	</AppBar>
)

export default withStyles(styles)(Header);