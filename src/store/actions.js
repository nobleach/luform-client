import {
    createLogin,
    createPilgrimRegistration,
    getSponsors
} from '../api';
import {
    PILGRIM_REGISTRATION_SUBMIT,
    PILGRIM_REGISTRATION_SUCCESS,
    PILGRIM_REGISTRATION_FAILURE,
    REGISTRATION_FAILURE,
    REGISTRATION_SUBMIT,
    REGISTRATION_SUCCESS,
    SPONSORS_LOAD,
    SPONSORS_LOAD_FAIL,
    SPONSORS_LOAD_SUCCESS
} from './mutation-types';

// destructure `commit` out of store
export const sendRegistration = ({ commit }, payload) => {
    commit(REGISTRATION_SUBMIT);
    createLogin(payload)
        .then(response => {
            if (response.data.success) {
                commit(REGISTRATION_SUCCESS, response);
            } else {
                const error = response.data.error;
                commit(REGISTRATION_FAILURE, error);
            }
        })
        .catch(error => {
            commit(REGISTRATION_FAILURE, error);
        });
};

export const sendPilgrimRegistration = ({ commit }, payload) => {
    commit(PILGRIM_REGISTRATION_SUBMIT);
    createPilgrimRegistration(payload)
        .then(response => {
            if (response.data.success) {
                commit(PILGRIM_REGISTRATION_SUCCESS, response);
            } else {
                const error = response.data.error;
                commit(PILGRIM_REGISTRATION_FAILURE, error.text);
            }
        })
        .catch(() => {
            commit(PILGRIM_REGISTRATION_FAILURE, 'Error, please ensure form is filled out correctly.');
        });
};

export const getSponsorsList = ({ commit }) => {
    commit(SPONSORS_LOAD);
    getSponsors()
        .then(response => {
            if (response.data) {
                commit(SPONSORS_LOAD_SUCCESS, response);
            } else {
                const error = response.data.error;
                commit(SPONSORS_LOAD_FAIL, error);
            }
        })
        .catch(error => {
            commit(SPONSORS_LOAD_FAIL, error);
        });
};
