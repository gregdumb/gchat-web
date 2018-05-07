import React from 'react';
import { withStore } from 'utils/store';
import Form from 'components/Form';
import { loginForm } from 'utils/forms';
import { login } from 'utils/actions';

const LoginPage = ({ store }) => (
    <div>
        <Form fields={loginForm} onSubmit={v => login(v)} />
		{store.get('session_loginError') ? <p>Error logging in</p> : null }
    </div>
)

export default withStore(LoginPage);