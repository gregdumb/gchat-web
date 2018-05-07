import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    <div>
        <h1>GChat</h1>
        <p>Welcome to GChat</p>
        <Link to="/login" >Login</Link>
    </div>
)

export default LandingPage;