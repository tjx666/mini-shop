import axios from 'axios';
import Configuration from '../constants/config';

export const login = (email: String, password: String) => {
    return axios.post(`${Configuration.domain}/login`, {
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
    return axios.post(`${Configuration.domain}/register`, {
        email,
        name,
        password,
        phone,
    });
};
