import axios from 'axios';
import config from '../config';

export function createLogin(formValues) {
    return axios.post(`${config.urlBase}/registration`, formValues);
}

export function logIn(formValues) {
    return axios.post(`${config.urlBase}/login`, formValues);
}

export function getSponsors() {
    return axios.get(`${config.urlBase}/pilgrims/create`);
}

export function getPilgrimsForSponsorId(sponsorId) {
    return axios.get(`${config.urlBase}/sponsors/${sponsorId}`);
}
