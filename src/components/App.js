import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withStore } from 'utils/store';
import AutoLogin from './AutoLogin';
import LandingPage from 'pages/LandingPage';
import LoginPage from 'pages/LoginPage';

const appStyle = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
}

const App = () => (
	<div style={appStyle} >
		<AutoLogin />
		<Route exact path="/" component={LandingPage} />
		<Route path="/login" component={LoginPage} />
	</div>
)

/*
<div>
		<h1>gChat</h1>
		{store.get('session_key') === '' ?
			<div>
				<Form fields={registerForm} onSubmit={(v) => register(v)} />
				{store.get('session_registerError') ? <p>Error registering</p> : null }
				<Form fields={loginForm} onSubmit={v => login(v)} />
				{store.get('session_loginError') ? <p>Error logging in</p> : null }
			</div>
		:
			<div>
				<p>Session key: {store.get('session_key')}</p>
				{console.log("session key", store.get('session_key'))}
			</div>
		}
	</div>
	*/

export default App;
