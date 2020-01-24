export const setGlobalError = (state, payload) => {
    state.globalError = payload.value
}

export const logout = (state) => {
    state.globalError = ''
    state.auth.web_user.authenticated = false;
    state.auth.web_user.user = null;    
}

