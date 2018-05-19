import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStore } from 'utils/store';
import Header from './Header';

const Page = ({ children, store, withHeader=true, requireAuthenticated=false }) => (
	<div>
		{requireAuthenticated && store.get('session_user') === null ? <Redirect to='/login' /> : null }
		{
			withHeader &&
			<Header showLogout={requireAuthenticated} authenticated={store.get('session_user') !== null} />
		}
		{children}
	</div>
)

export default withStore(Page);