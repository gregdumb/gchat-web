import { store } from 'utils/store';
import api from 'utils/api';

export const register = (registrationData) => {
	
	console.log("Registering with", registrationData);
	store.set('session_fetching')(true);
	
	api.sendRegistration(registrationData)
	.then(res => {
		console.log("Result", res);
		store.set('session_key')(res.data.session.sessionKey);
		store.set('session_user')(res.data.user);
	})
	.catch(err => {
		console.log("Error registering", err);
	})
	.finally(() => {
		store.set('session_fetching')(false);
	})
	
}

export const login = (loginData) => {
	
	store.set('session_fetching')(true);
	
	api.sendLogin(loginData)
	.then(res => {
		store.set('session_key')(res.data.session.sessionKey);
		store.set('session_user')(res.data.user);
	})
	.catch(err => {
		console.log("Error logging in", err.response);
	})
	.finally(() => {
		store.set('session_fetching')(false);
	})
}