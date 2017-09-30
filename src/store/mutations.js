import {
    PILGRIM_REGISTRATION_SUBMIT,
    PILGRIM_REGISTRATION_SUCCESS,
    PILGRIM_REGISTRATION_FAILURE,
    REGISTRATION_FAILURE,
    REGISTRATION_SUBMIT,
    REGISTRATION_SUCCESS,
    SPONSOR_REVIEW_FAIL,
    SPONSOR_REVIEW_SUBMIT,
    SPONSOR_REVIEW_SUCCESS,
    SPONSORS_LOAD,
    SPONSORS_LOAD_FAIL,
    SPONSORS_LOAD_SUCCESS
} from './mutation-types';

export const mutations = {
    /* eslint-disable */
    [PILGRIM_REGISTRATION_SUBMIT](state, payload) {
        state.pilgrimRegistration.submitting = true;
        state.pilgrimRegistration.buttonText = 'Submitting';
        state.pilgrimRegistration.errorText = '';
    },

    [PILGRIM_REGISTRATION_SUCCESS](state, payload) {
        state.pilgrimRegistration.submitting = false;
        state.pilgrimRegistration.buttonText = 'Submitted';
        state.pilgrimRegistration.errorText = '';
    },

    [PILGRIM_REGISTRATION_FAILURE](state, error) {
        state.pilgrimRegistration.errorText = error;
        state.pilgrimRegistration.submitting = false;
        state.pilgrimRegistration.buttonText = 'Register';
    },

    [SPONSOR_REVIEW_SUBMIT](state, error) {
        state.sponsorReview.errorText = '';
        state.sponsorReview.submitting = true;
        state.sponsorReview.buttonText = 'Submitting';
    },

    [SPONSOR_REVIEW_SUCCESS](state, error) {
        state.sponsorReview.errorText = '';
        state.sponsorReview.submitting = false;
        state.sponsorReview.buttonText = 'Submitted';
    },

    [SPONSOR_REVIEW_FAIL](state, error) {
        state.sponsorReview.errorText = error;
        state.sponsorReview.submitting = false;
        state.sponsorReview.buttonText = 'Submit';
    },

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

    [SPONSORS_LOAD](state, payload) {
        state.sponsors.loading = true;
        state.sponsors.loaded = false,
        state.sponsors.names = [];
        state.sponsors.errorText = '';
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
        state.sponsors.errorText = '';
    }
    /* eslint-enable */
};
