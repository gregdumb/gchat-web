import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStore } from 'utils/store';
import Page from 'components/Page';
import LoginForm from 'components/LoginForm';

const LoginPage = ({ store }) => (
    <Page>
        <LoginForm style={{maxWidth: '300px', margin: '0 auto'}} />
		{store.get('session_user') !== null ? <Redirect to='/chat' /> : null }
    </Page>
)

export default withStore(LoginPage);