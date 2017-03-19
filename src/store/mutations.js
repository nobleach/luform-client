import {
    REGISTRATION_SUBMIT,
    REGISTRATION_SUCCESS
} from './mutation-types';

export const mutations = {
    /* eslint-disable */
    [REGISTRATION_SUBMIT](state, payload) {
        state.registration.submitting = true;
    },

    [REGISTRATION_SUCCESS](state, payload) {
        state.registration.submitting = false;
    }
    /* eslint-enable */
};
