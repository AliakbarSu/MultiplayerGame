export const STORE_AUTH_DATA = 'STORE_AUTH_DATA';
export const REMOVE_AUTH_DATA = 'REMOVE_AUTH_DATA';


export const SignIn = (authData) => {
    return dispatch => {
        // make api call
        dispatch({type: STORE_AUTH_DATA, payload: {}})
    }
}

export const SignUp = authData => {
    return dispatch => {
        // make api call
        dispatch({type: STORE_AUTH_DATA, payload: {}})
    }
}