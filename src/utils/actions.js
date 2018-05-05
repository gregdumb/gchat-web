import { store } from 'utils/store';
import api from 'utils/api';

export const register = (registrationData) => {
	
	console.log("Registering with", registrationData);
	
	api.sendRegistration(registrationData)
	.then(res => {
		console.log("Result", res);
		store.set('sessionKey')(res.data.session.sessionKey);
	})
	.catch(err => {
		console.log("Error registering", err);
	})
	
}

