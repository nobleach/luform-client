import {
    REGISTRATION_FAILURE,
    REGISTRATION_SUBMIT,
    REGISTRATION_SUCCESS,
    SPONSOR_LOAD,
    SPONSORS_LOAD_FAIL,
    SPONSORS_LOAD_SUCCESS
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
    },

    [SPONSOR_LOAD](state, payload) {
        state.sponsors.loading = true;
        state.sponsors.loaded = false,
        state.sponsors.names = [];
    },

    [SPONSORS_LOAD_FAIL](state, payload) {
        state.sponsors.loading = false,
        state.sponsors.loaded = false,
        state.sponsors.errorText = 'Could not load Sponsors'
    },

    [SPONSORS_LOAD_SUCCESS](state, payload) {
        state.sponsors.loading = false,
        state.sponsors.loaded = true,
        state.sponsors.names = payload.data;
        state.sponsors.errorText = ''
    }
    /* eslint-enable */
};
