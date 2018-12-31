const initState = {
    authError: null
}

const authreducer = (state = initState, action) => {
    switch (action.type){
        case 'LOGIN_ERROR':
            console.log('login-error')
            return {
                ...state,
                authError: 'Lgin failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login failed')
            return {
                authError: null
            }
        case 'SIGN_OUT_SUCCED':
            console.log('Logout')
            return state;
        default:
            return state;
    }    
}

export default authreducer;


