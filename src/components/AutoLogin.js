import React, { Component } from 'react';
import { continueSession } from 'utils/actions';

class AutoLogin extends Component {
	
	componentDidMount() {
		continueSession();
	}
	
	render() {
		return(
			<p style={{display: 'none'}}></p>
		)
	}
}

export default AutoLogin;