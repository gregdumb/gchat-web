import React, { Component } from 'react';
import { withStore } from 'utils/store';
import LoginForm from 'components/LoginForm';
import Form from 'components/Form'
import { register } from 'utils/actions';

const form = [{
	name: 'firstName',
	label: 'First name',
	type: 'text',
	//defaultValue: 'greg',
	required: true,
},{
	name: 'lastName',
	label: 'Last name',
	type: 'text',
	required: false,
	validation: s => s.length > 3,
},{
	name: 'email',
	label: 'Email',
	type: 'email',
	required: true,
}, {
	name: 'password',
	label: 'Password',
	type: 'password',
	required: true,
	validation: s => s.length >= 4,
} ]

const App = withStore(({ store }) => 
	<div>
		<h1>gChat</h1>
		{store.get('sessionKey') === '' ?
			<div>
				<Form fields={form} onSubmit={(v) => register(v)} />
			</div>
		:
			<div>
				<p>Session key: {store.get('sessionKey')}</p>
				{console.log("session key", store.get('sessionKey'))}
			</div>
		}
	</div>
)

export default App;
