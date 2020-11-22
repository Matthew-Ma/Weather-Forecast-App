import axios from 'axios';
import { HOST } from '../config/config';

export const httpBase = () => {
    const api = axios.create({
        baseURL: `${HOST}`,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        responseType: 'json',
    });

    api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    return api;
};
