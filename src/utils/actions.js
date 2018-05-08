import Cookies from 'js-cookie';
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

export const continueSession = () => {
	const sessionKey = Cookies.get('sessionKey');

	if(!sessionKey) {
		console.log("Autologin: no session key cookie found");
		return;
	}

	console.log("Autologin: attempting with key", sessionKey);

	api.sendSession(sessionKey)
	.then(res => {
		console.log("Autologin: got user data for", res.data.user.firstName);
		store.update({
			session_key: res.data.session.sessionKey,
			session_user: res.data.user,
		})
	})
	.catch(err => {
		console.log("Autologin: error");
		if(err.response.status === 400) {
			// Cookie must not be valid, delete it
			Cookies.remove('sessionKey');
			console.log("Autologin: deleting invalid cookie");
		}
	})
}