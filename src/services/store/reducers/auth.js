import { STORE_AUTH_DATA } from "../actions/auth";

const initialState = {
    lastLoggedIn: null,
    token: '',
    expiresIn: ''
}

const AuthReducer = (state = initialState, action ) => {
    switch(action.type) {
        case STORE_AUTH_DATA:
            return {
                ...state,
                lastLoggedIn: new Date().getTime(),
                token: action.payload.token,
                expiresIn: action.payload.expiresIn
            }
        default: 
            return state;
    }
}

export default AuthReducer;