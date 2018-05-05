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

export default api;