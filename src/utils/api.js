import axios from 'axios';

const apiURL = '/api';

const api = {};

api.sendRegistration = ({firstName, lastName, email, password}) => {
    return axios.post(
        `${apiURL}/account/register`,
        {
            firstName,
            lastName,
            email,
            password
        }
    )
}

api.sendLogin = ({email, password}) => {
	return axios.post(
		`${apiURL}/account/login`,
		{
			email,
			password,
		}
	)
}

api.sendSession = (sessionKey) => {
    return axios.get(`${apiURL}/account/continue`);
}

api.sendLogout = () => {
	return axios.get(`${apiURL}/account/logout`);
}

export default api;