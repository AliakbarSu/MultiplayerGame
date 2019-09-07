import { StoreAuthData, GetAuthData } from "../../auth/auth";
import startApp from "../../../screens/MainTabs/startMainTabs";

export const STORE_AUTH_DATA = 'STORE_AUTH_DATA';
export const REMOVE_AUTH_DATA = 'REMOVE_AUTH_DATA';


export const SignIn = (authData) => {
    return dispatch => {
        console.log(authData)
        // make api call
        fetch('http://localhost:3000/login', {
            method: "POST",
            body: JSON.stringify(authData),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parsedData => {
            if(parsedData.access_token) {
                dispatch(authSetToken({token: parsedData.access_token, expiresIn: "3600"}))
                startApp()
            }
            
        })
    }
}



export const authSetToken = (authData) => {
    return dispatch => {
        StoreAuthData(authData)
        dispatch({type: STORE_AUTH_DATA, payload: authData})
    }
}

export const authGetToken = () => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token
            if(!token) {
                GetAuthData()
                .catch(err => reject())
                .then(tokenFromStorage => {
                    if(!tokenFromStorage.every(value => value !== null)) {
                        reject()
                        return;
                    }
                    const tokenFromST = {
                        token: tokenFromStorage[0], 
                        expiresIn: tokenFromStorage[1]
                    }
                    dispatch(authSetToken(tokenFromST))
                    resolve(tokenFromST)
                })
            }else {
                resolve(getState().auth)
            }
        })
    }
}

export const autoLogin = () => {
    return dispatch => {
        dispatch(authGetToken())
        .then(token => {
            startApp()
        })
        .catch(err => console.log('Login Failed!'))
    }
}

export const SignUp = authData => {
    return dispatch => {
        // make api call
        dispatch({type: STORE_AUTH_DATA, payload: {}})
    }
}