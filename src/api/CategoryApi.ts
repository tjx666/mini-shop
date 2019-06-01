import axios from 'axios';
import configuration from '../constants/config';

export const createCategory = (name: string, parent: number) => {
    return axios.put(`${configuration.domain}/categories`, {
        name,
        parent,
    });
};
