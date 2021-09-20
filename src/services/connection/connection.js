import io from 'socket.io-client';
import { AddChallengeRequest } from '../store/actions/game';
export let socket = null;






export const locationChanged = (lat, long) => {
    return new Promise((resolve, reject) => {
        socket.emit('locationChanged', {lat, long}, res => {
            resolve(res)
        });
    })
    
}

export const connect = (userId) => {
    socket = io('http://localhost:3000', {
        path: '/challenge',
        query: {
            userId: userId
        }
    });

    socket.on('connect', () => {
        console.log('Connected')
    })
    
    socket.on('disconnect', () => {
        console.log('Disconnected')
    })
}




