import { AsyncStorage } from 'react-native';

export const StoreAuthData = (authData) => {
    return Promise.all(
        [
            AsyncStorage.setItem('cl:auth:token', authData.token),
            AsyncStorage.setItem('cl:auth:expiresIn', authData.expiresIn)
        ]
    )
}

export const ClearAuthData = () => {
    return Promise.all(
        [
            AsyncStorage.removeItem('cl:auth:token'),
            AsyncStorage.removeItem('cl:auth:expiresIn')
        ]
    )
}


export const GetAuthData = () => {
    return Promise.all(
        [
            AsyncStorage.getItem('cl:auth:token'), 
            AsyncStorage.getItem('cl:auth:expiresIn')
        ]) 
}