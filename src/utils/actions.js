import { store } from 'utils/store';
import api from 'utils/api';

export const register = (registrationData) => {
	
	store.update({
		session_fetching: true,
		session_registerError: false,
	})
	
	api.sendRegistration(registrationData)
	.then(res => {
		store.update({
			session_key: res.data.session.sessionKey,
			session_user: res.data.user,
		})
	})
	.catch(err => {
		console.log("Error registering", err);
		store.update({session_registerError: true});
	})
	.finally(() => {
		store.set('session_fetching')(false);
	})
	
}

export const login = (loginData) => {
	
	store.update({
		session_fetching: true,
		session_loginError: false,
	})
	
	api.sendLogin(loginData)
	.then(res => {
		store.update({
			session_key: res.data.session.sessionKey,
			session_user: res.data.user,
		})
	})
	.catch(err => {
		console.log("Error logging in", err.response);
		store.update({session_loginError: true});
	})
	.finally(() => {
		store.set('session_fetching')(false);
	})
}