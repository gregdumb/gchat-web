import React, { Component } from 'react';
import { withStore } from 'utils/store';
import LoginForm from 'components/LoginForm';
import Form from 'components/Form'
import { register, login } from 'utils/actions';
import { registerForm, loginForm } from 'utils/forms';

const App = withStore(({ store }) => 
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
)

export default App;
