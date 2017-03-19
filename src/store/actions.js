import {
    createLogin
} from '../api';
import {
    REGISTRATION_SUBMIT,
    REGISTRATION_SUCCESS
} from './mutation-types';

// destructure `commit` out of store
export const sendRegistration = ({ commit }, payload) => {
    commit(REGISTRATION_SUBMIT);
    createLogin(payload).then(() => {
        commit(REGISTRATION_SUCCESS, payload);
    });
};
