import {
    REGISTRATION_FAILURE,
    REGISTRATION_SUBMIT,
    REGISTRATION_SUCCESS
} from './mutation-types';

export const mutations = {
    /* eslint-disable */
    [REGISTRATION_SUBMIT](state, payload) {
        state.registration.submitting = true;
        state.registration.buttonText = 'Submitting';
        state.registration.errorText = '';
    },

    [REGISTRATION_SUCCESS](state, payload) {
        state.registration.submitting = false;
        state.registration.buttonText = 'Register';
        state.registration.errorText = '';
    },

    [REGISTRATION_FAILURE](state, error) {
        state.registration.errorText = error;
        state.registration.submitting = false;
        state.registration.buttonText = 'Register';
    }
    /* eslint-enable */
};
