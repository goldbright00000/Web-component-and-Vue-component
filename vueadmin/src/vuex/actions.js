export const setGlobalError = ( context, payload ) => {
    context.commit("setGlobalError", payload)
}

export const logout = ( context ) => {
    context.commit('logout')
}


