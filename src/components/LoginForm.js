import React from 'react';
import { register } from 'utils/actions';

const formContainer = {
	width: 'fit-content',
	border: '1px solid black',
	padding: '1em',
	margin: '1em auto',
}

const form = {
	display: 'flex',
	flexDirection: 'column',
}

const labelText = {
	width: '100px',
	margin: '10px 0',
	display: 'inline-block',
}

const LoginForm = () => (
    <div>
        <div style={formContainer} >
            <h2>Register</h2>
            <form style={form} >
                <label>
                    <p style={labelText} >First name</p>
                    <input type="text" name="firstName" />
                </label>
                <label>
                    <p style={labelText} >Last name</p>
                    <input type="text" name="lastName" />
                </label>
                <label>
                    <p style={labelText} >Email</p>
                    <input type="email" name="email" />
                </label>
                <label>
                    <p style={labelText} >Password</p>
                    <input type="password" name="password" />
                </label>
				<button onClick={(e) => { e.preventDefault(); register({}); }} >Register</button>
            </form>
        </div>
        <div style={formContainer} >
            <h2>Log in</h2>
            <form style={form} >
                <label>
                    <p style={labelText} >Email</p>
                    <input type="email" name="email" />
                </label>
                <label>
                    <p style={labelText} >Password</p>
                    <input type="password" name="password" />
                </label>
            </form>
        </div>
    </div>
)

export default LoginForm;