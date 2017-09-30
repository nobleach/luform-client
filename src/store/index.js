import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import { mutations } from './mutations';

Vue.use(Vuex);

const state = {
    registration: {
        submitting: false,
        errorText: '',
        buttonText: 'Register',
        formValues: {}
    },
    login: {
        submitting: false
    },
    sponsors: {
        buttonText: 'Submit',
        loading: false,
        loaded: false,
        errorText: '',
        names: []
    },
    sponsorReview: {
        buttonText: 'Submit',
        loading: false,
        loaded: false,
        errorText: ''
    },
    pilgrimRegistration: {
        buttonText: 'Register',
        loading: false,
        loaded: false,
        errorText: ''
    }
};

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});

export default store;
