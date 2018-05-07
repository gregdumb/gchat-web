import React from 'react';
import { withStore } from 'utils/store';
import LoginForm from 'components/LoginForm';

const LoginPage = ({ store }) => (
    <div>
        <LoginForm style={{maxWidth: '300px', margin: '0 auto'}} />
    </div>
)

export default withStore(LoginPage);