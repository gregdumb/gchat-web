import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'components/Page';
import RegisterForm from 'components/RegisterForm';

const LandingPage = () => (
    <Page>
        <p>Welcome to GChat</p>
        <Link to="/login" >Login</Link>
		<RegisterForm style={{maxWidth: '300px', margin: '0 auto'}} />
    </Page>
)

export default LandingPage;