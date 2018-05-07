import React from 'react';
import Form from './Form';
import { loginForm } from 'utils/forms';
import { withStore } from 'utils/store';
import { login } from 'utils/actions';

const LoginForm = ({ style, store }) => (
    <div style={style} >
        <Form fields={loginForm} onSubmit={v => login(v)} />
		{store.get('session_loginError') ? <p>Error logging in</p> : null }
    </div>
)

export default withStore(LoginForm);