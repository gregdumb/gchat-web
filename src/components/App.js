import React, { Component } from 'react';
import { withStore } from 'utils/store';
import LoginForm from 'components/LoginForm';
import Form from 'components/Form'

const form = [{
	name: 'firstName',
	label: 'First name',
	type: 'text',
	defaultValue: 'abcdefg',
}]

const App = withStore(({ store }) => 
	<div>
		<h1>gChat</h1>
		{store.get('sessionKey') === '' ?
			<div>
				<Form fields={form} />
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
