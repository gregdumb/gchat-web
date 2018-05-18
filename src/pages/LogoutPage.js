import React from 'react';
import Page from 'components/Page';
import { logout } from 'utils/actions';

class LogoutPage extends React.Component {
	
	componentDidMount() {
		console.log('Logging out');
		logout();
	}
	
	render() {
		return(
			<Page>
				<h2>You are now logged out</h2>
			</Page>
		)
	}
}

export default LogoutPage;