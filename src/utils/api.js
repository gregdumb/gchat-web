import axios from 'axios';

const apiURL = '/api/';

const api = {};

api.sendRegistration = ({firstName, lastName, email, password}) => {
    axios.post(
        `${apiURL}register`,
        {
            firstName,
            lastName,
            email,
            password
        }
    )
}