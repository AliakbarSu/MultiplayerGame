const initialState = {
    lastLoggedIn: '',
    token: '',
    tokenExpiresIn: ''
}

const AuthReducer = (state = initialState, action ) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default AuthReducer;