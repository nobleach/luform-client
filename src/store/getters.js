export const getRegistrationSubmitting = state => {
    return state.registrationSubmitting;
};

export const getRegisterButtonText = state => {
    return state.registration.buttonText;
};

export const getRegistrationErrorText = state => {
    return state.registration.errorText;
};

export const getSponsors = state => {
    return state.sponsors.names;
};

export const getPilgrimSubmitButtonText = state => {
    return state.sponsors.buttonText;
};

export const getIsPilgrimFormSubmitting = state => {
    return state.sponsors.loading;
};

export const getPilgrimFormErrorText = state => {
    return state.sponsors.errorText;
};
