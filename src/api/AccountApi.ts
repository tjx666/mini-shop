import axios from 'axios';
import configuration from '../constants/config';

export const login = (email: String, password: String) => {
    return axios.post(`${configuration.domain}/users/login`, {
        email,
        password,
    });
};

export const register = (
    email: String,
    name: String,
    password: String,
    phone: String
) => {
    return axios.post(`${configuration.domain}/users/register`, {
        email,
        name,
        password,
        phone,
    });
};
