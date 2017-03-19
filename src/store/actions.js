import {
    createLogin
} from '../api';
import {
    REGISTRATION_FAILURE,
    REGISTRATION_SUBMIT,
    REGISTRATION_SUCCESS
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
