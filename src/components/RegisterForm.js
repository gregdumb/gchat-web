import React from 'react';
import Form from './Form';
import { registerForm } from 'utils/forms';
import { withStore } from 'utils/store';
import { register } from 'utils/actions';

const RegisterForm = ({ style, store }) => (
    <div style={style} >
        <h3>Sign up!</h3>
        <Form fields={registerForm} onSubmit={v => register(v)} />
        {store.get('session_registerError') ? <p>Error registering</p> : null }
    </div>
)

export default withStore(RegisterForm);