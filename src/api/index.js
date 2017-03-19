import axios from 'axios';
import config from '../config';

export function createLogin({ formValues }) {
    return axios.post(`${config.urlBase}/registration`, formValues)
        .then(response => console.log(response));
}

export function logIn({ formValues }) {
    return axios.post(`${config.urlBase}/login`, formValues)
        .then(response => console.log(response));
}
