import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm';

const LandingPage = () => (
    <div>
        <h1>GChat</h1>
        <p>Welcome to GChat</p>
        <Link to="/login" >Login</Link>
		<RegisterForm style={{maxWidth: '300px', margin: '0 auto'}} />
    </div>
)

export default LandingPage;