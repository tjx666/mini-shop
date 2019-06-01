import { Category } from './../models/Category';
import axios from 'axios';
import configuration from '../constants/config';

export const createCategory = (name: string, parent: number) => {
    return axios.put(`${configuration.domain}/categories`, {
        name,
        parent,
    });
};

export const getCategoryTrees = () => {
    return axios.get(`${configuration.domain}/categories/trees`);
};
