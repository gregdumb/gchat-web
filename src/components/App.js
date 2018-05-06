import React, { Component } from 'react';
import { withStore } from 'utils/store';
import LoginForm from 'components/LoginForm';
import Form from 'components/Form'

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
	//defaultValue: 'breezy',
	validation: s => s.length > 3,
},{
	name: 'checkTest',
	label: 'Check test',
	type: 'checkbox',
	defaultValue: true,
},{
	name: 'selectTest',
	label: 'Select test',
	type: 'select',
	options: [{value: 'pick-me', display: 'Pick me'}, {value: 'or-me', display: 'Or me'}],
	defaultValue: 'or-me',
},{
	name: 'dateTest',
	label: 'Date test',
	type: 'date',
	required: true,
} ]

const App = withStore(({ store }) => 
	<div>
		<h1>gChat</h1>
		{store.get('sessionKey') === '' ?
			<div>
				<Form fields={form} onSubmit={(v) => console.log("Submitted", v)} />
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
