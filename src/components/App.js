import React, { Component } from 'react';
import { withStore } from 'utils/store';
import LoginForm from 'components/LoginForm';

const App = withStore(({ store }) => 
	<div>
		<h1>gChat</h1>
		<p>Session:{}</p>
		<LoginForm />
	</div>
)

export default App;
